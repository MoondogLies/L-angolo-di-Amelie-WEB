// Funzioni e contenuti condivisi da tutte le pagine.
// Va caricato dopo eventi.js (usa INFO_ASSOCIAZIONE).

// ---------- Utilità ----------

// Rende sicuro un testo prima di inserirlo come HTML
function escapeHtml(valore){
  return String(valore ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Legge una data 'AAAA-MM-GG' come mezzanotte ora italiana (non UTC)
function dataLocale(iso){
  return new Date(iso+'T00:00:00');
}

function oggiMezzanotte(){
  const oggi=new Date();
  oggi.setHours(0,0,0,0);
  return oggi;
}

const MESI=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

function formattaData(iso,ora){
  const d=dataLocale(iso);
  return `${d.getDate()} ${MESI[d.getMonth()]} ${d.getFullYear()}`+(ora?` · ore ${ora}`:'');
}

function ordinaPerData(a,b){
  return dataLocale(a.data)-dataLocale(b.data);
}

// Aggiunge in fondo alla scheda di un evento la fila di loghi del campo 'altri loghi'
function aggiungiAltriLoghi(contenitore,evento){
  if(!contenitore || contenitore.querySelector('.card-altri-loghi')) return;
  const elenco=evento && evento['altri loghi'];
  const loghi=Array.isArray(elenco) ? elenco.filter(src=>typeof src==='string' && src.trim()).map(src=>src.trim()) : [];
  if(!loghi.length) return;
  const gruppo=document.createElement('div');
  gruppo.className='card-altri-loghi';
  gruppo.tabIndex=0;
  gruppo.setAttribute('role','group');
  gruppo.setAttribute('aria-label','Loghi di patrocinio e partner dell’evento');
  const fila=document.createElement('div');
  fila.className='card-altri-loghi-fila';
  loghi.forEach((src,indice)=>{
    const img=document.createElement('img');
    img.alt='Logo partner '+(indice+1);
    img.decoding='async';
    img.addEventListener('error',()=>{
      img.remove();
      if(!fila.children.length) gruppo.remove();
    },{once:true});
    img.src=src;
    fila.appendChild(img);
  });
  gruppo.appendChild(fila);
  contenitore.appendChild(gruppo);
}

// ---------- Footer e finestre informative ----------

function htmlFooter(){
  return `
  <nav class="footer-links" aria-label="Informazioni">
    <button type="button" onclick="apriScheda()">Chi siamo</button>
    <button type="button" onclick="apriContatti()">Contatti</button>
    <a class="facebook-btn" href="${escapeHtml(INFO_ASSOCIAZIONE.facebook)}" target="_blank" rel="noopener">Facebook</a>
    <button type="button" onclick="apriLegal('privacy')">Privacy Policy</button>
    <button type="button" onclick="apriLegal('cookie')">Cookie Policy</button>
  </nav>
  <div class="footer-info" id="contatti">
    <strong>L’Angolo di Amelie</strong> è un’associazione culturale dedicata a incontri, laboratori,
    musica, fotografia, natura e momenti di condivisione.<br>
    ${escapeHtml(INFO_ASSOCIAZIONE.indirizzo)}<br>
    Email: <a class="email-link" href="mailto:${escapeHtml(INFO_ASSOCIAZIONE.email)}">${escapeHtml(INFO_ASSOCIAZIONE.email)}</a>
  </div>
  <p class="footer-copy">© ${new Date().getFullYear()} L’Angolo di Amelie — Associazione culturale</p>`;
}

function htmlFinestre(){
  const indirizzo=escapeHtml(INFO_ASSOCIAZIONE.indirizzo);
  const email=escapeHtml(INFO_ASSOCIAZIONE.email);
  const facebook=escapeHtml(INFO_ASSOCIAZIONE.facebook);
  const linkEmail=`<a class="email-link" href="mailto:${email}">${email}</a>`;
  return `
<div class="legal-overlay" id="chiSiamoOverlay" role="dialog" aria-modal="true" aria-labelledby="titoloChiSiamo">
  <div class="legal-box">
    <button type="button" class="legal-close-btn" onclick="chiudiScheda()" aria-label="Chiudi">&times;</button>
    <h2 id="titoloChiSiamo">Chi siamo</h2>
    <p><strong>L’Angolo di Amelie</strong> è un’associazione culturale che promuove incontri,
      proiezioni, serate, laboratori e attività dedicate alla musica, alla fotografia, alla natura
      e alla condivisione.</p>
    <p>L’associazione nasce con l’obiettivo di creare uno spazio aperto alla partecipazione,
      alla scoperta e al confronto, rivolto a chi desidera vivere la cultura in modo attivo
      e condiviso.</p>
    <h3>Contatti</h3>
    <p>${indirizzo}</p>
    <p>Email: ${linkEmail}<br>
      <a class="facebook-btn" href="${facebook}" target="_blank" rel="noopener">Seguici su Facebook</a></p>
    <p><a class="statuto-btn" href="statuto.pdf" download="statuto.pdf" aria-label="Scarica lo statuto in PDF">Statuto</a></p>
    <button type="button" class="legal-close" onclick="chiudiScheda()">Chiudi</button>
  </div>
</div>

<div class="legal-overlay" id="contattiOverlay" role="dialog" aria-modal="true" aria-labelledby="titoloContatti">
  <div class="legal-box">
    <button type="button" class="legal-close-btn" onclick="chiudiContatti()" aria-label="Chiudi">&times;</button>
    <h2 id="titoloContatti">Contatti</h2>
    <p>${indirizzo}</p>
    <p>Email: ${linkEmail}</p>
    <p class="contatti-riga">
      <span class="seguici-su">Seguici su</span>
      <a class="facebook-btn" href="${facebook}" target="_blank" rel="noopener">Facebook</a>
    </p>
    <button type="button" class="legal-close" onclick="chiudiContatti()">Chiudi</button>
  </div>
</div>

<div class="legal-overlay" id="legalOverlay" role="dialog" aria-modal="true" aria-label="Informative">
  <div class="legal-box">
    <button type="button" class="legal-close-btn" onclick="chiudiLegal()" aria-label="Chiudi">&times;</button>
    <div id="privacyContent">
      <h2>Privacy Policy</h2>
      <p>La presente informativa descrive il trattamento dei dati personali effettuato tramite il sito
        <strong>L’Angolo di Amelie</strong>, ai sensi del Regolamento (UE) 2016/679 (“GDPR”).</p>
      <h3>1. Titolare del trattamento</h3>
      <p><strong>L’Angolo di Amelie</strong><br>${indirizzo}<br>Email: <a href="mailto:${email}">${email}</a></p>
      <h3>2. Dati trattati</h3>
      <p>Il sito non utilizza moduli di contatto, non consente iscrizioni online, non gestisce newsletter
        e non richiede la creazione di account. Pertanto, attraverso il sito non vengono raccolti
        dati personali quali nome, cognome, indirizzo email, numero di telefono o dati di pagamento.</p>
      <p>Il sito pubblica esclusivamente informazioni relative ad eventi, corsi e attività dell’associazione.
        I dati di contatto pubblicati nel piè di pagina sono riferiti all’associazione e hanno finalità
        di contatto istituzionale.</p>
      <h3>3. Statistiche di navigazione e cookie</h3>
      <p>Il sito utilizza un servizio esterno di analisi delle visite per conoscere il numero di accessi, le pagine consultate e la provenienza del traffico, con la finalità di migliorare i contenuti e le attività dell’associazione.</p>
      <p>Il servizio permette di consultare statistiche aggregate relative alle pagine visitate, ai siti di provenienza, al paese di collegamento, alla lingua e ad alcune caratteristiche tecniche del browser e del dispositivo.</p>
      <p>Il sistema di statistiche non utilizza cookie o localStorage nel browser del visitatore. Gli indirizzi IP vengono elaborati per ricavare la posizione geografica approssimativa e distinguere temporaneamente le visite ripetute, ma non vengono conservati nel database delle statistiche. Le informazioni tecniche impiegate per distinguere temporaneamente le visite sono mantenute in memoria per un massimo di otto ore.</p>
      <p>Secondo quanto dichiarato dal fornitore, i dati del servizio sono ospitati su server nell’Unione europea. Le statistiche non sono utilizzate dall’associazione per pubblicità personalizzata o profilazione commerciale.</p>
      <p>Il sito non utilizza cookie pubblicitari o di profilazione.</p>
      <h3>4. Contatti volontari</h3>
      <p>Se l’utente contatta spontaneamente l’associazione tramite email o telefono, i dati comunicati
        verranno utilizzati esclusivamente per rispondere alla richiesta ricevuta e per le eventuali
        successive comunicazioni strettamente necessarie alla gestione della stessa.</p>
      <h3>5. Conservazione dei dati</h3>
      <p>Gli eventuali dati comunicati volontariamente sono conservati per il tempo necessario a gestire
        la richiesta e, successivamente, per il periodo eventualmente richiesto dalla legge.</p>
      <h3>6. Diritti dell’interessato</h3>
      <p>L’interessato può chiedere in ogni momento l’accesso ai propri dati, la loro rettifica,
        la cancellazione, la limitazione del trattamento, nonché opporsi al trattamento nei casi
        previsti dal GDPR, scrivendo all’indirizzo email indicato nel footer.</p>
      <p>L’interessato ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.</p>
      <h3>7. Aggiornamenti</h3>
      <p>La presente informativa può essere aggiornata per adeguarla a modifiche normative o alle
        caratteristiche del sito. La versione pubblicata su questa pagina è quella vigente.</p>
    </div>
    <div id="cookieContent" hidden>
      <h2>Cookie Policy</h2>
      <p>Il sito <strong>L’Angolo di Amelie</strong> non utilizza cookie pubblicitari o di profilazione.</p>
      <h3>Statistiche senza cookie</h3>
      <p>Il sito utilizza un servizio esterno per misurare le visite e conoscere, in forma aggregata, quali contenuti vengono consultati. Questo sistema non installa cookie e non salva informazioni nel browser tramite localStorage. Le caratteristiche del trattamento sono descritte nella Privacy Policy del sito.</p>
      <h3>Funzionamento delle pagine</h3>
      <p>Le preferenze di visualizzazione delle schede e del carosello sono gestite durante la navigazione, senza utilizzare cookie persistenti per tali funzioni.</p>
      <h3>Contenuti esterni</h3>
      <p>Alcune risorse possono essere caricate da servizi esterni. Il caricamento comporta una connessione ai rispettivi server, ai quali vengono trasmessi i dati tecnici necessari alla comunicazione.</p>
    </div>
    <button type="button" class="legal-close" onclick="chiudiLegal()">Chiudi</button>
  </div>
</div>`;
}

let elementoPrimaDellaFinestra=null;

function apriFinestra(id){
  const overlay=document.getElementById(id);
  if(!overlay) return;
  elementoPrimaDellaFinestra=document.activeElement;
  overlay.classList.add('open');
  const chiudi=overlay.querySelector('.legal-close-btn');
  if(chiudi) chiudi.focus();
}

function chiudiFinestra(id){
  const overlay=document.getElementById(id);
  if(!overlay || !overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  if(elementoPrimaDellaFinestra && document.contains(elementoPrimaDellaFinestra)) elementoPrimaDellaFinestra.focus();
  elementoPrimaDellaFinestra=null;
}

function apriScheda(){apriFinestra('chiSiamoOverlay');}
function chiudiScheda(){chiudiFinestra('chiSiamoOverlay');}
function apriContatti(){apriFinestra('contattiOverlay');}
function chiudiContatti(){chiudiFinestra('contattiOverlay');}
function apriLegal(tipo){
  document.getElementById('privacyContent').hidden=tipo!=='privacy';
  document.getElementById('cookieContent').hidden=tipo!=='cookie';
  apriFinestra('legalOverlay');
}
function chiudiLegal(){chiudiFinestra('legalOverlay');}

function inizializzaComune(){
  const footer=document.querySelector('footer');
  if(footer) footer.innerHTML=htmlFooter();
  document.body.insertAdjacentHTML('beforeend',htmlFinestre());

  // Clic sullo sfondo scuro chiude la finestra
  document.querySelectorAll('.legal-overlay').forEach(overlay=>{
    overlay.addEventListener('click',evento=>{
      if(evento.target===overlay) chiudiFinestra(overlay.id);
    });
  });

  document.addEventListener('keydown',evento=>{
    if(evento.key==='Escape'){
      chiudiScheda();
      chiudiContatti();
      chiudiLegal();
    }
  });

  // Il logo in alto sparisce scorrendo la pagina.
  // data-dissolvenza="graduale" lo fa sfumare nei primi 100px, altrimenti sparisce dopo 50px.
  const logoBg=document.getElementById('logoBg');
  if(logoBg){
    const graduale=logoBg.dataset.dissolvenza==='graduale';
    const aggiornaLogo=()=>{
      logoBg.style.opacity=graduale ? String(1-Math.min(window.scrollY/100,1)) : (window.scrollY>50?'0':'1');
    };
    window.addEventListener('scroll',aggiornaLogo,{passive:true});
    aggiornaLogo();
  }
}

inizializzaComune();
