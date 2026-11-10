// ============================================================
// SOSTENITORI/E
// ============================================================
// Due box affiancati per i sostenitori.
// Per aggiungere un logo in un box, inserisci un nuovo oggetto
// dentro l’array "loghi" del box desiderato.
// Il logo può essere un file nella repository, ad esempio "logo.png",
// oppure un URL completo che inizia con https://

const sostenitoriBox = [
  {
    titolo: "Sostenitori",
    loghi: [
      {
        nome: "Sostenitore",
        logo: "bcc.jpg",
        sito: ""
      }
    ]
  },
  {
    titolo: "Sostenitori",
    loghi: [
      {
        nome: "Sostenitore",
        logo: "delavallee.png",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "papili.jpeg",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "dascenzi.png",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "isolaceliaca.png",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "iezzi.png",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "unieuro.jpg",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "fioridipina.png",
        sito: ""
      },
      {
        nome: "Sostenitore",
        logo: "valery.png",
        sito: ""
      }
    ]
  }
];


// ============================================================
// EVENTI CINEMA
// ============================================================
// Il campo "supporto" contiene il logo mostrato in basso a destra
// nella card. Puoi cambiarlo per ogni evento.

const eventiCinema = [
  {
    tipo: 'film',
    titolo: 'L\'ANIMA IN PACE',
    regia: 'Ciro Formisano',
    paese: 'Italia',
    data: '2026-12-27',
    ora: '17:00',
    descrizione:
        'Dora, una giovane donna che vive in una periferia romana, lavora consegnando la spesa a domicilio e cerca di costruire una vita migliore per sé e per i fratellini. L’incontro con Andrea le offre una prospettiva di cambiamento, ma il passato e le difficoltà del quartiere continuano a pesare sul presente.',
    ospiti: 'Ciro Formisano, Daniela Poggi',
    immagine: 'lanimainpace.jpg',
    video: 'lanimainpace.mp4',
    videoPoster: 'lanimainpace.jpg',
    supporto: 'icm.png'
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
    videoPoster: 'fragoleselvatiche.jpeg',
    supporto: 'icm.png'
  },

  {
    tipo: 'film',
    titolo: 'BOLLA DI SAPONE',
    regia: 'Shinji Higashi',
    paese: 'Giappone',
    data: '2027-02-21',
    ora: '17:00',
    descrizione:
        'Il protagonista è Izumi (interpretata da Kento Hayashi), un giovane abbandonato dai genitori che vive di furti e aggressioni. Dopo un tentato omicidio, fugge in un villaggio rurale (Shiiba Village, prefettura di Miyazaki), dove soccorre un’anziana signora ferita (Etsuko Ichihara), e viene scambiato per suo nipote, iniziando un percorso di redenzione.',
    ospiti: '',
    immagine: 'bolladisapone.jpg',
    video: 'bolladisapone.mp4',
    videoPoster: 'bolladisapone.jpg',
    supporto: 'icm.png'
  },

  {
    tipo: 'film',
    titolo: 'MAMBO MATERNICA',
    regia: 'Borbála Nagy',
    paese: 'Ungheria',
    data: '2027-01-24',
    ora: '17:00',
    descrizione:
        'Il film esplora la complessità e le sfide della maternità e dell’autodeterminazione attraverso le storie parallele di tre donne ungheresi che vivono in tre diverse città europee, le quali si trovano a dover prendere decisioni cruciali nell’arco di una sola giornata.',
    ospiti: 'Borbála Nagy',
    immagine: 'mambomaternica.jpg',
    video: 'mambo-maternica-trailer.mp4',
    videoPoster: 'mambomaternica.jpg',
    supporto: 'icm.png'
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
    videoPoster: 'aontas.jpeg',
    supporto: 'icm.png'
  },

  {
    tipo: 'film',
    titolo: 'LA VOIE ROYALE',
    regia: 'Frédéric Mermoud',
    paese: 'Francia',
    data: '2027-01-10',
    ora: '17:00',
    descrizione:
        'Sophie eccelle nel mondo accademico. Lascia la fattoria di famiglia per frequentare un corso di preparazione scientifica, ma di fronte a nuove sfide, scopre che il suo desiderio di frequentare il Politecnico è una vera lotta di ascesa sociale.',
    ospiti: '',
    immagine: 'lavoieroyale.jpg',
    video: 'lavoieroyale.mp4',
    videoPoster: 'lavoieroyale.jpg',
    supporto: 'icm.png'
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
  videoPoster: '',
  supporto: 'icm.png'
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
  videoPoster: '',
  supporto: 'icm.png'
}];


// ============================================================
// UNIONE AUTOMATICA DEGLI EVENTI
// ============================================================

const eventi = [...eventiCinema, ...eventiMusica, ...eventiConcorsi];


// ============================================================
// CORSI
// ============================================================
// Aggiungi, rimuovi o modifica i corsi qui.
// Il campo "categoria" contiene il nome del corso mostrato nella casella rossa.
// In "contatti.email" inserisci l’indirizzo email specifico di ciascun corso.
// I campi in "moduli" sono facoltativi: creano i box con docente e date.

const corsi = [
  {
    categoria: "Fotografia",
    titolo: "",
    descrizione: "Impara a osservare la luce, comporre l’inquadramento e raccontare storie attraverso la fotografia.",
    immagine: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    contatti: {
      referente: "Nome referente",
      email: "",
      informazioni: "Informazioni e modalità di iscrizione saranno presto disponibili."
    }
  },

  {
    categoria: "Pianoforte",
    titolo: "",
    descrizione: "Percorsi individuali per avvicinarsi allo strumento, alla lettura musicale e all’ascolto.",
    immagine: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80",
    contatti: {
      referente: "Leonardo",
      email: "leonardo.cupelli@gmail.com",
      informazioni: "Informazioni e modalità di iscrizione saranno presto disponibili."
    }
  },

  {
    categoria: "Bonsai",
    titolo: "",
    descrizione: "Scopri le tecniche di cura, potatura e coltivazione per creare e mantenere un bonsai nel tempo.",
    immagine: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
    contatti: {
      referente: "Nome referente",
      email: "",
      informazioni: "Informazioni e modalità di iscrizione saranno presto disponibili."
    }
  },

  {
    categoria: "A scuola di cinema",
    titolo: "",
    descrizione: "Un percorso cinematografico articolato in tre moduli: sceneggiatura, regia e recitazione.",
    immagine: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    contatti: {
      referente: "Nome referente",
      email: "",
      informazioni: "Informazioni e modalità di iscrizione saranno presto disponibili."
    },
    moduli: [
      {
        nome: "Sceneggiatura",
        docente: "Geraldine Ottier",
        inizio: "2026-09-01",
        fine: "2026-10-31"
      },
      {
        nome: "Regia",
        docente: "Geraldine Ottier",
        inizio: "",
        fine: ""
      },
      {
        nome: "Recitazione",
        docente: "Nome docente",
        inizio: "",
        fine: ""
      }
    ]
  }
];


// ============================================================
// DATI PER LA DONAZIONE
// ============================================================
// Modifica solo questi campi per aggiornare la scheda del bonifico.

const datiBonifico = {
  intestatario: "L’Angolo di Amelie",
  iban: "IT72 F083 2739 2400 0000 0002 311",
  bic: "",
  causale: "Donazione"
};


// ============================================================
// SOSTENITORI/E: RENDERING DIRETTO (SENZA FILE ESTERNO)
// ============================================================

function inizializzaSostenitori(){
  const pulsanteProgrammazione=document.querySelector('.programma-btn-wrap');

  if(!pulsanteProgrammazione){
    console.warn('Sostenitori: contenitore .programma-btn-wrap non trovato');
    return;
  }

  const stile=document.createElement('style');
  stile.textContent=`
    .sostenitori-e-section{
      margin-top:70px;
      text-align:center;
    }

    .sostenitori-e-section .section-title{
      margin-bottom:22px;
    }

    .sostenitori-e-section h2{
      color:var(--rosso);
      margin:0 0 8px;
      font-size:clamp(24px,3.5vw,34px);
    }

    .sostenitori-e-section p{
      margin:0;
      color:var(--grigio);
    }

    .sostenitori-e-grid{
      display:grid;
      grid-template-columns:repeat(2, minmax(0, 1fr));
      gap:24px;
      align-items:center;
    }

    .sostenitori-e-box{
      background:transparent;
      border:none;
      box-shadow:none;
      padding:0;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }

    .sostenitori-e-stage{
      position:relative;
      width:100%;
      height:150px;
    }

    .sostenitori-e-logo{
      position:absolute;
      inset:0;
      display:flex;
      align-items:center;
      justify-content:center;
      opacity:0;
      transition:opacity .7s ease;
      pointer-events:none;
    }

    .sostenitori-e-logo.attivo{
      opacity:1;
      pointer-events:auto;
    }

    .sostenitori-e-logo img{
      max-width:100%;
      max-height:130px;
      object-fit:contain;
      display:block;
    }

    @media(max-width:600px){
      .sostenitori-e-grid{
        grid-template-columns:1fr;
      }

      .sostenitori-e-stage{
        height:110px;
      }

      .sostenitori-e-logo img{
        max-height:95px;
      }
    }
  `;

  document.head.appendChild(stile);

  const sezione=document.createElement('section');
  sezione.className='sostenitori-e-section';

  sezione.innerHTML=`
    <div class="section-title">
      <h2>I nostri sostenitori</h2>
      <p>Grazie a chi sostiene le attività de L’Angolo di Amelie.</p>
    </div>
    <div class="sostenitori-e-grid" id="sostenitoriEGrid"></div>
  `;

  pulsanteProgrammazione.after(sezione);

  const grid=document.getElementById('sostenitoriEGrid');

  sostenitoriBox.forEach(box=>{
    const boxElemento=document.createElement('div');
    boxElemento.className='sostenitori-e-box';

    const stage=document.createElement('div');
    stage.className='sostenitori-e-stage';
    boxElemento.appendChild(stage);

    const loghi=[];

    (box.loghi || []).forEach(sostenitore=>{
      const elemento=document.createElement('div');
      elemento.className='sostenitori-e-logo';

      const immagine=document.createElement('img');
      immagine.src=sostenitore.logo;
      immagine.alt=sostenitore.nome || 'Sostenitore';
      immagine.loading='lazy';

      if(sostenitore.sito){
        const link=document.createElement('a');
        link.href=sostenitore.sito;
        link.target='_blank';
        link.rel='noopener';
        link.setAttribute('aria-label',sostenitore.nome || 'Sito del sostenitore');
        link.appendChild(immagine);
        elemento.appendChild(link);
      }else{
        elemento.appendChild(immagine);
      }

      stage.appendChild(elemento);
      loghi.push(elemento);
    });

    grid.appendChild(boxElemento);

    let indiceAttivo=0;

    function mostraSostenitore(indice){
      loghi.forEach((logo,i)=>{
        logo.classList.toggle('attivo',i===indice);
      });
    }

    mostraSostenitore(indiceAttivo);

    if(loghi.length>1){
      setInterval(()=>{
        indiceAttivo=(indiceAttivo+1)%loghi.length;
        mostraSostenitore(indiceAttivo);
      },5000);
    }
  });
}


inizializzaSostenitori();


// ============================================================
// SUPPORTO NELLE CARD
// ============================================================

function inizializzaSupporto(){
  const stile=document.createElement('style');
  stile.textContent=`
    .card-supporto{
      position:absolute;
      right:10px;
      bottom:10px;
      z-index:5;
      display:flex;
      align-items:center;
      gap:6px;
      max-width:45%;
    }

    .card-supporto img{
      max-height:34px;
      max-width:90px;
      object-fit:contain;
      display:block;
    }

    .card-supporto-testo{
      display:none;
      font-size:.7rem;
      color:#fff;
      text-shadow:0 1px 6px rgba(0,0,0,.8);
    }

    .card.expanded .card-supporto-testo{
      display:inline;
    }
  `;

  document.head.appendChild(stile);

  const cards=document.querySelectorAll('.card');

  eventi.forEach((evento,i)=>{
    const card=cards[i];

    if(!card){
      return;
    }

    const poster=card.querySelector('.card-poster');

    if(!poster){
      return;
    }

    const logoSupporto=evento.supporto || 'icm.png';

    const supporto=document.createElement('div');
    supporto.className='card-supporto';

    supporto.innerHTML=`
      <span class="card-supporto-testo">con il supporto di</span>
      <img src="${logoSupporto}" alt="Sostenitore">
    `;

    poster.appendChild(supporto);
  });
}


document.addEventListener('DOMContentLoaded', inizializzaSupporto);


// ============================================================
// CARICAMENTO DI CORSI E DONA
// ============================================================

const scriptCorsi=document.createElement('script');
scriptCorsi.src='corsi.js';

scriptCorsi.onload=()=>{
  const scriptDona=document.createElement('script');
  scriptDona.src='dona.js';
  document.body.appendChild(scriptDona);
};


document.body.appendChild(scriptCorsi);
