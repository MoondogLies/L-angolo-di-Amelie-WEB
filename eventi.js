// ============================================================
// SPONSOR / SOSTENITORI
// ============================================================
// Aggiungi o rimuovi qui i loghi dei sostenitori.
// Il logo può essere un file nella repository, ad esempio "logo.png",
// oppure un URL completo che inizia con https://

const sostenitori = [
  {
    nome: "Sostenitore",
    logo: "https://placehold.co/600x200/c8102e/ffffff?text=Il+tuo+logo",
    sito: ""
  },
    {
    nome: "Sostenitore",
    logo: "silhouette_capelli.png",
    sito: ""
  },
];


// ============================================================
// EVENTI CINEMA
// ============================================================

const eventiCinema = [
  {
    tipo: 'film',
    titolo: 'L\'ANIMA IN PACE',
    regia: 'Ciro Formisano',
    paese: 'Italia',
    data: '2026-12-27',
    ora: '17:00',
    descrizione:
        'Dora, una giovane donna che vive in una periferia romana, lavora consegnando la spesa a domicilio e cerca di costruire una vita migliore per sé e per i suoi fratellini. L’incontro con Andrea le offre una prospettiva di cambiamento, ma il passato e le difficoltà del quartiere continuano a pesare sul presente.',
    ospiti: 'Ciro Formisano, Daniela Poggi',
    immagine: 'lanimainpace.jpg',
    video: 'lanimainpace.mp4',
    videoPoster: 'lanimainpace.jpg'
  },

  {
    tipo: 'film',
    titolo: 'FRAGOLE SELVATICHE',
    regia: 'Tatyana Pandurska',
    paese: 'Bulgaria',
    data: '2027-02-07',
    ora: '17:00',
    descrizione:
        'Racconta la storia di Daphne Bello (interpretata da Vanina Kondova), un’architetta di New York sovraffaticata che torna nelle montagne dei Rodopi, in Bulgaria, per ereditare la vecchia casa della nonna.',
    ospiti: 'Tatyana Pandurska',
    immagine: 'fragoleselvatiche.jpeg',
    video: 'fragoleselvatiche.mp4',
    videoPoster: 'fragoleselvatiche.jpeg'
  },

  {
    tipo: 'film',
    titolo: 'BOLLA DI SAPONE',
    regia: 'Shinji Higashi',
    paese: 'Giappone',
    data: '2027-02-21',
    ora: '17:00',
    descrizione:
        'Il protagonista è Izumi (interpretata da Kento Hayashi), un giovane abbandonato dai genitori che vive di furti e aggressioni. Dopo un tentato omicidio, fugge in un villaggio rurale (Shiiba Village, prefettura di Miyazaki), dove soccorre un’anziana signora ferita (Etsuko Ichihara) e viene scambiato per suo nipote, iniziando un percorso di redenzione.',
    ospiti: '',
    immagine: 'bolladisapone.jpg',
    video: 'bolladisapone.mp4',
    videoPoster: 'bolladisapone.jpg'
  },

  {
    tipo: 'film',
    titolo: 'MAMBO MATERNICA',
    regia: 'Borbála Nagy',
    paese: 'Ungheria',
    data: '2027-01-10',
    ora: '17:00',
    descrizione:
        'Il film esplora la complessità e le sfide della maternità e dell’autodeterminazione attraverso le storie parallele di tre donne ungheresi che vivono in tre diverse città europee, le quali si trovano a dover prendere decisioni cruciali nell’arco di una sola giornata.',
    ospiti: 'Borbála Nagy',
    immagine: 'mambomaternica.jpg',
    video: 'mambo-maternica-trailer.mp4',
    videoPoster: 'mambomaternica.jpg'
  },

  {
    tipo: 'film',
    titolo: 'AONTAS',
    regia: 'Damian McCann',
    paese: 'Irlanda',
    data: '2027-03-07',
    ora: '17:00',
    descrizione:
        'Tre improvvisate ladre, guidate da una donna sull’orlo dell’esaurimento, decidono di rapinare una cooperativa di credito in una zona rurale irlandese. Il film si apre dopo la fallita rapina e procede in senso cronologico inverso, per svelare gli eventi che hanno condotto a quell’epilogo: così, quello che sembrava un colpo mal riuscito, si trasforma nel ritratto di una donna ostinata, prigioniera del passato.',
    ospiti: 'Susanna Pellis di Irish Film festa',
    immagine: 'aontas.jpeg',
    video: 'aontas.mp4',
    videoPoster: 'aontas.jpeg'
  }
];


// ============================================================
// EVENTI MUSICA
// ============================================================

const eventiMusica = [{
  tipo: 'musica',
  titolo: 'Serata di poesia e musica dal vivo',
  artista: 'Artisti ospiti',
  data: '2025-11-15',
  ora: '18:30',
  descrizione:
      'Una serata dedicata alla parola e alla musica dal vivo, con letture poetiche, performance musicali e incontro con il pubblico.',
  ospiti: 'Artisti ospiti',
  immagine: 'https://placehold.co/700x1050/c8102e/ffffff?text=Evento+musicale',
  video: '',
  videoPoster: ''
}];


// ============================================================
// EVENTI CONCORSI
// ============================================================

const eventiConcorsi = [{
  tipo: 'concorso',
  titolo: 'AMELIE IN CORTO',
  sottotitolo: 'Concorso di cortometraggi',
  data: '2027-04-04',
  ora: '17:00',
  descrizione:
      'Serata dedicata alla proiezione di tre cortometraggi selezionati per il concorso Amelie in Corto: “Pinocchio reborn” di Matteo Cirillo, “Una notte ancora” di Carmelo Segreto e “Jolanta” di Geraldine Ottier. Un incontro per scoprire nuove voci del cinema indipendente e sostenere la creatività emergente.',
  ospiti: '',
  immagine: 'https://placehold.co/700x1050/c8102e/ffffff?text=Amelie+in+Corto',
  video: '',
  videoPoster: ''
}];


// ============================================================
// UNIONE AUTOMATICA DEGLI EVENTI
// ============================================================

const eventi = [...eventiCinema, ...eventiMusica, ...eventiConcorsi];


// ============================================================
// SEZIONE "I NOSTRI SOSTENITORI"
// ============================================================

function inizializzaSostenitori(){
  if(!Array.isArray(sostenitori) || sostenitori.length===0){
    return;
  }

  const pulsanteProgrammazione=document.querySelector('.programma-btn-wrap');

  if(!pulsanteProgrammazione){
    return;
  }

  const stile=document.createElement('style');
  stile.textContent=`
    .sostenitori{
      margin-top:70px;
      text-align:center;
    }

    .sostenitori .section-title{
      margin-bottom:22px;
    }

    .sostenitori h2{
      color:var(--rosso);
      margin:0 0 8px;
      font-size:clamp(24px,3.5vw,34px);
    }

    .sostenitori p{
      margin:0;
      color:var(--grigio);
    }

    .sponsor-stage{
      position:relative;
      width:min(520px,100%);
      height:150px;
      margin:0 auto;
    }

    .sponsor-logo{
      position:absolute;
      inset:0;
      display:flex;
      align-items:center;
      justify-content:center;
      opacity:0;
      transition:opacity .7s ease;
      pointer-events:none;
    }

    .sponsor-logo.attivo{
      opacity:1;
      pointer-events:auto;
    }

    .sponsor-logo img{
      max-width:100%;
      max-height:130px;
      object-fit:contain;
      display:block;
    }

    @media(max-width:600px){
      .sponsor-stage{
        height:110px;
      }

      .sponsor-logo img{
        max-height:95px;
      }
    }
  `;

  document.head.appendChild(stile);

  const sezione=document.createElement('section');
  sezione.className='sostenitori';

  sezione.innerHTML=`
    <div class="section-title">
      <h2>I nostri sostenitori</h2>
      <p>Grazie a chi sostiene le attività de L’Angolo di Amelie.</p>
    </div>
    <div class="sponsor-stage" id="sponsorStage"></div>
  `;

  pulsanteProgrammazione.after(sezione);

  const stage=document.getElementById('sponsorStage');
  const loghi=[];

  sostenitori.forEach(sponsor=>{
    const elemento=document.createElement('div');
    elemento.className='sponsor-logo';

    const immagine=document.createElement('img');
    immagine.src=sponsor.logo;
    immagine.alt=sponsor.nome || 'Sostenitore';
    immagine.loading='lazy';

    if(sponsor.sito){
      const link=document.createElement('a');
      link.href=sponsor.sito;
      link.target='_blank';
      link.rel='noopener';
      link.setAttribute('aria-label',sponsor.nome || 'Sito del sostenitore');
      link.appendChild(immagine);
      elemento.appendChild(link);
    }else{
      elemento.appendChild(immagine);
    }

    stage.appendChild(elemento);
    loghi.push(elemento);
  });

  let indiceAttivo=0;

  function mostraSponsor(indice){
    loghi.forEach((logo,i)=>{
      logo.classList.toggle('attivo',i===indice);
    });
  }

  mostraSponsor(indiceAttivo);

  if(loghi.length>1){
    setInterval(()=>{
      indiceAttivo=(indiceAttivo+1)%loghi.length;
      mostraSponsor(indiceAttivo);
    },5000);
  }
}


// ============================================================
// PULSANTE "DONA"
// ============================================================

const datiBonifico={
  intestatario:"L’Angolo di Amelie",
  iban:"IT72 F083 2739 2400 0000 0002 311",
  bic:"",
  causale:"Donazione"
};


function inizializzaDona(){
  const sezioneSostenitori=document.querySelector('.sostenitori');

  if(!sezioneSostenitori){
    return;
  }

  const stileDona=document.createElement('style');
  stileDona.textContent=`
    .dona-wrap{
      text-align:center;
      margin-top:34px;
      position:relative;
    }

    .dona-btn{
      position:relative;
      display:inline-block;
      border:0;
      cursor:pointer;
      padding:16px 42px;
      border-radius:999px;
      font-family:var(--font-dettagli);
      font-size:1.05rem;
      font-weight:800;
      letter-spacing:1.5px;
      text-transform:uppercase;
      color:#4a3000;
      background:linear-gradient(135deg,#ffe082 0%,#ffc107 45%,#ff9800 100%);
      box-shadow:
        0 10px 26px rgba(255,193,7,.38),
        inset 0 1px 0 rgba(255,255,255,.75);
      animation:donaVibrazione 2.4s ease-in-out infinite;
      transition:transform .2s, box-shadow .2s;
      overflow:visible;
    }

    .dona-btn:hover{
      transform:translateY(-3px) scale(1.03);
      box-shadow:
        0 16px 34px rgba(255,193,7,.5),
        inset 0 1px 0 rgba(255,255,255,.8);
    }

    @keyframes donaVibrazione{
      0%,100%{transform:translate(0,0) rotate(0deg)}
      20%{transform:translate(-1px,1px) rotate(-.4deg)}
      40%{transform:translate(1px,-1px) rotate(.4deg)}
      60%{transform:translate(-1px,-1px) rotate(-.3deg)}
      80%{transform:translate(1px,1px) rotate(.3deg)}
    }

    .stella{
      position:absolute;
      color:#ffb300;
      font-size:14px;
      opacity:0;
      pointer-events:none;
      animation:stellaBrilla 2.6s ease-in-out infinite;
      text-shadow:0 0 8px rgba(255,193,7,.9);
    }

    .stella:nth-child(1){top:-14px;left:-18px;animation-delay:0s}
    .stella:nth-child(2){top:-20px;right:-12px;animation-delay:.45s}
    .stella:nth-child(3){bottom:-14px;left:-10px;animation-delay:.9s}
    .stella:nth-child(4){bottom:-18px;right:-20px;animation-delay:1.35s}
    .stella:nth-child(5){top:50%;left:-26px;animation-delay:1.8s}
    .stella:nth-child(6){top:50%;right:-26px;animation-delay:2.2s}

    @keyframes stellaBrilla{
      0%,100%{opacity:0;transform:scale(.5) rotate(0deg)}
      50%{opacity:1;transform:scale(1.15) rotate(25deg)}
    }

    .dona-overlay{
      position:fixed;
      inset:0;
      z-index:300;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:rgba(0,0,0,.65);
    }

    .dona-overlay.aperta{
      display:flex;
    }

    .dona-box{
      width:min(560px,100%);
      background:#fff;
      border-radius:20px;
      padding:clamp(22px,4vw,34px);
      box-shadow:0 30px 80px rgba(0,0,0,.35);
      text-align:left;
    }

    .dona-box h3{
      margin:0 0 8px;
      color:var(--rosso);
      font-size:clamp(22px,4vw,30px);
    }

    .dona-box p{
      margin:0 0 18px;
      color:var(--grigio);
      line-height:1.55;
    }

    .dona-dato{
      display:grid;
      gap:5px;
      margin-bottom:15px;
    }

    .dona-dato strong{
      color:var(--rosso-scuro);
      font-size:.8rem;
      letter-spacing:.6px;
      text-transform:uppercase;
    }

    .dona-dato span{
      color:#333;
      font-weight:600;
      word-break:break-word;
    }

    .dona-chiudi{
      margin-top:10px;
      background:var(--rosso);
      color:#fff;
      border:0;
      padding:12px 24px;
      border-radius:999px;
      font-weight:800;
      letter-spacing:.5px;
      text-transform:uppercase;
      cursor:pointer;
    }

    .dona-chiudi:hover{
      background:var(--rosso-scuro);
    }
  `;

  document.head.appendChild(stileDona);

  const contenitore=document.createElement('div');
  contenitore.className='dona-wrap';
  contenitore.innerHTML=`
    <button class="dona-btn" id="btnDona" type="button">
      <span class="stella">✦</span>
      <span class="stella">✦</span>
      <span class="stella">✦</span>
      <span class="stella">✦</span>
      <span class="stella">✦</span>
      <span class="stella">✦</span>
      Dona
    </button>
  `;

  sezioneSostenitori.after(contenitore);

  const overlay=document.createElement('div');
  overlay.className='dona-overlay';
  overlay.id='donaOverlay';

  overlay.innerHTML=`
    <div class="dona-box">
      <h3>Supporta L’Angolo di Amelie</h3>
      <p>
        Puoi sostenere le attività dell’associazione con un bonifico bancario.
      </p>

      <div class="dona-dato">
        <strong>Intestatario</strong>
        <span>${datiBonifico.intestatario}</span>
      </div>

      <div class="dona-dato">
        <strong>IBAN</strong>
        <span>${datiBonifico.iban}</span>
      </div>

      </div>

      <div class="dona-dato">
        <strong>Causale</strong>
        <span>${datiBonifico.causale}</span>
      </div>

      <button class="dona-chiudi" id="chiudiDona" type="button">Chiudi</button>
    </div>
  `;

  document.body.appendChild(overlay);

  const btnDona=document.getElementById('btnDona');
  const chiudiDona=document.getElementById('chiudiDona');

  btnDona.addEventListener('click',()=>{
    overlay.classList.add('aperta');
  });

  chiudiDona.addEventListener('click',()=>{
    overlay.classList.remove('aperta');
  });

  overlay.addEventListener('click',evento=>{
    if(evento.target===overlay){
      overlay.classList.remove('aperta');
    }
  });

  document.addEventListener('keydown',evento=>{
    if(evento.key==='Escape'){
      overlay.classList.remove('aperta');
    }
  });
}


inizializzaSostenitori();
inizializzaDona();
