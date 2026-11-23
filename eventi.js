// INFORMAZIONI DELL’ASSOCIAZIONE
const INFO_ASSOCIAZIONE = {
  indirizzo: 'Via delle Rimesse 14/16, 00015 Monterotondo (RM)',
  email: 'info@angolodiamelie.it',
  facebook: 'https://www.facebook.com/share/1EsXa52DvT/?mibextid=wwXIfr'
};

// SOSTENITORI/E
const sostenitoriBox = [
  {
    titolo: 'Sostenitori',
    loghi: [{nome: 'Sostenitore', logo: 'bcc.jpg', sito: 'https://www.bccroma.it'}]
  },
  {
    titolo: 'Sostenitori',
    loghi: [
      {nome: 'Sostenitore', logo: 'delavallee.png', sito: 'https://www.delavallee.it'},
      {nome: 'Sostenitore', logo: 'papili.jpeg', sito: ''},
      {nome: 'Sostenitore', logo: 'dascenzi.png', sito: 'https://www.dascenzi.it'},
      {nome: 'Sostenitore', logo: 'isolaceliaca.png', sito: 'https://lisolaceliaca.it/affiliato/monterotondo/'},
      {nome: 'Sostenitore', logo: 'iezzi.png', sito: 'https://www.gruppoiezzi.it'},
      {nome: 'Sostenitore', logo: 'unieuro.jpg', sito: 'https://www.unieuro.it/online/negozi/Unieuro-Monterotondo-Scalo'},
      {nome: 'Sostenitore', logo: 'fioridipina.png', sito: 'https://www.facebook.com/p/I-Fiori-di-Pina-61575371019310/'},
      {nome: 'Sostenitore', logo: 'agenziatosca.jpg', sito: ''},
      {nome: 'Sostenitore', logo: 'valery.png', sito: 'https://www.hotelvalery.it'}
    ]
  }
];

// CONTENUTI DELLE CARD EVENTI IMPORTATI DA MAIN
const eventiCinema = [
  {
    tipo: 'film',
    titolo: 'L\'ANIMA IN PACE',
    regia: 'Ciro Formisano',
    paese: 'Italia',
    data: '2026-12-27',
    ora: '17:00',
    descrizione: 'Dora, una giovane donna che vive in una periferia romana, lavora consegnando la spesa a domicilio e cerca di costruire una vita migliore per sé e per i fratellini. L’incontro con Andrea le offre una prospettiva di cambiamento, ma il passato e le difficoltà del quartiere continuano a pesare sul presente.',
    ospiti: 'Ciro Formisano, Daniela Poggi',
    immagine: 'lanimainpace.jpg',
    immagini: [],
    video: 'lanimainpace.mp4',
    videoPoster: 'lanimainpace.jpg',
    supporto: '',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'FRAGOLE SELVATICHE',
    regia: 'Tatyana Pandurska',
    paese: 'Bulgaria',
    data: '2027-02-21',
    ora: '17:00',
    descrizione: 'Racconta la storia di Daphne Bello (interpretata da Vanina Kondova), un’architetta di New York sovraffaticata che torna nelle montagne dei Rodopi, in Bulgaria, per ereditare la vecchia casa della nonna.',
    ospiti: 'Tatyana Pandurska',
    immagine: 'fragoleselvatiche.jpeg',
    immagini: [],
    video: 'fragoleselvatiche.mp4',
    videoPoster: 'fragoleselvatiche.jpeg',
    supporto: 'istitutobulgarodicultura.png',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'BOLLA DI SAPONE',
    regia: 'Shinji Higashi',
    paese: 'Giappone',
    data: '2027-02-07',
    ora: '17:00',
    descrizione: 'Il protagonista è Izumi (interpretata da Kento Hayashi), un giovane abbandonato dai genitori che vive di furti e aggressioni. Dopo un tentato omicidio, fugge in un villaggio rurale (Shiiba Village, prefettura di Miyazaki), dove soccorre un’anziana signora ferita (Etsuko Ichihara), e viene scambiato per suo nipote, iniziando un percorso di redenzione.',
    ospiti: '',
    immagine: 'bolladisapone.jpg',
    immagini: [],
    video: 'bolladisapone.mp4',
    videoPoster: 'bolladisapone.jpg',
    supporto: 'IMG_9104.jpeg',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'MAMBO MATERNICA',
    regia: 'Borbála Nagy',
    paese: 'Ungheria',
    data: '2027-01-24',
    ora: '17:00',
    descrizione: 'Il film esplora la complessità e le sfide della maternità e dell’autodeterminazione attraverso le storie parallele di tre donne ungheresi che vivono in tre diverse città europee, le quali si trovano a dover prendere decisioni cruciali nell’arco di una sola giornata.',
    ospiti: 'Borbála Nagy',
    immagine: 'mambomaternica.jpg',
    immagini: [],
    video: 'mambo-maternica-trailer.mp4',
    videoPoster: 'mambomaternica.jpg',
    supporto: 'MKIungheria.png',
    'altri loghi': ['nationalfilmhungary.jpg', 'citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'AONTAS',
    regia: 'Damian McCann',
    paese: 'Irlanda',
    data: '2027-03-07',
    ora: '17:00',
    descrizione: 'Tre improvvisate ladre, guidata da una donna sull’orlo dell’esaurimento, decidono di rapinare una cooperativa di credito in una zona rurale irlandese. Il film si apre dopo la fallita rapina e procede in senso cronologico inverso, per svelare gli eventi che hanno condotto a quell’epilogo: così, quello che sembrava un colpo mal riuscito, si trasforma nel ritratto di una donna ostinata, prigioniera del passato.',
    ospiti: 'Susanna Pellis di Irish Film Festa',
    immagine: 'aontas.jpeg',
    immagini: [],
    video: 'aontas.mp4',
    videoPoster: 'aontas.jpeg',
    supporto: 'irish-film-festa-contorno-bianco.svg',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'LA VOIE ROYALE',
    regia: 'Frédéric Mermoud',
    paese: 'Francia',
    data: '2027-01-10',
    ora: '17:00',
    descrizione: 'Sophie eccelle nel mondo accademico. Lascia la fattoria di famiglia per frequentare un corso di preparazione scientifica, ma di fronte a nuove sfide, scopre che il suo desiderio di frequentare il Politecnico è una vera lotta di ascesa sociale.',
    ospiti: '',
    immagine: 'lavoieroyale.jpg',
    immagini: [],
    video: 'lavoieroyale.mp4',
    videoPoster: 'lavoieroyale.jpg',
    supporto: 'ifcinema.png',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'A HAPPY DAY',
    regia: 'Hisham Zaman',
    paese: 'Norvegia',
    data: '2026-11-29',
    ora: '17:00',
    descrizione: 'È la storia di tre amici adolescenti bloccati in un luogo ghiacciato in un centro norvegese per giovani richiedenti asilo. I tre adolescenti sognano cosa ci sia oltre la neve e il ghiaccio e decidono di escogitare un piano per scappare, attraversare la montagna e raggiungere un mondo dove i loro desideri possano essere realizzati. I loro continui tentativi di evadere dal rifugio si rivelano sempre inutili, proprio come le feste per il 18esimo compleanno, organizzate dal centro prima dell’inizio degli ordini di espulsione.Questa volta, però, il loro piano sembra perfetto e non destinato a fallire, fino a quando uno di loro s\'innamora.',
    ospiti: '',
    immagine: 'https://images.squarespace-cdn.com/content/v1/5d5c376ffd05ea0001470e05/4857e971-fcaf-4e5e-a75e-bf1a6e972a59/A+Happy+Day+Still+1.jpg',
    immagini: [],
    video: 'ahappyday.mp4',
    videoPoster: 'https://images.squarespace-cdn.com/content/v1/5d5c376ffd05ea0001470e05/4857e971-fcaf-4e5e-a75e-bf1a6e972a59/A+Happy+Day+Still+1.jpg',
    supporto: '',
    'altri loghi': [],
    logoAlto: 'novembrenordico.png'
  },
  {
    tipo: 'film',
    titolo: 'TUTTI PARLANO DEL TEMPO',
    regia: 'Annika Pinske',
    paese: 'Germania',
    data: '2027-03-20',
    ora: '21:00',
    descrizione: 'Clara, una donna di 39 anni che ha lasciato la provincia dell\'ex Germania dell\'Est per costruirsi una vita indipendente a Berlino. Nella capitale insegna all\'università e sta completando il suo dottorato di ricerca in filosofia, destreggiandosi tra le ambizioni accademiche, una relazione con un suo studente e il rapporto complesso e intenso con la sua relatrice, Margot.',
    ospiti: '',
    immagine: 'https://www.dffb.de/wp-content/uploads/2022/01/WETTER-Still-1.jpg',
    immagini: [],
    video: 'tuttiparlanodeltempo.mp4',
    videoPoster: 'https://www.dffb.de/wp-content/uploads/2022/01/WETTER-Still-1.jpg',
    supporto: 'GoetheInstitut.png',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  },
  {
    tipo: 'film',
    titolo: 'ESCAPE NET',
    regia: 'Dzintars Dreibergs',
    paese: 'Lettonia',
    data: '2027-04-16',
    ora: '21:00',
    descrizione: 'Ispirato a eventi reali, il film è ambientato nella Lettonia dell\'era stalinista e racconta la nascita della leggendaria squadra femminile di pallacanestro TTT Riga. La protagonista è una giovane donna (interpretata da Agnese Budovska) che vede nello sport la sua unica opportunità per viaggiare all\'estero, attraversare la Cortina di ferro e riunirsi con il fratello rifugiato in esilio.',
    ospiti: '',
    immagine: 'https://m.media-amazon.com/images/M/MV5BNzkzOTMxYzItMjMxMS00ODgwLThjZGUtM2E1YzFjOTEwMDkzXkEyXkFqcGc@._V1_.jpg',
    immagini: [],
    video: 'escapenet.mp4',
    videoPoster: 'https://m.media-amazon.com/images/M/MV5BNzkzOTMxYzItMjMxMS00ODgwLThjZGUtM2E1YzFjOTEwMDkzXkEyXkFqcGc@._V1_.jpg',
    supporto: '',
    'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
    logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
  }
];

const eventiMusica = [];

const eventiConcorsi = [{
  tipo: 'concorso',
  titolo: 'AMELIE IN CORTO',
  sottotitolo: 'Concorso di cortometraggi',
  data: '2027-04-23',
  ora: '21:00',
  descrizione: 'Serata dedicata alla proiezione di tre cortometraggi selezionati per il concorso Amelie in Corto: “Pinocchio reborn” di Matteo Cirillo, “Una notte ancora” di Carmelo Segreto e “Jolanta” di Geraldine Ottier. Un incontro per scoprire nuove voci del cinema indipendente e sostenere la creatività emergente.',
  ospiti: 'Geraldine Ottier, Matteo Cirillo, Carmelo Segreto',
  immagine: 'jolanta.jpg',
  immagini: ['jolanta.jpg', 'pinocchioreborn.jpg', 'unanotteancora.jpeg'],
  video: '',
  videoPoster: '',
  supporto: '',
  'altri loghi': ['citta-metropolitana-di-roma-capitale.svg', 'Comune-Monterotondo.png', 'icm.jpeg'],
  logoAlto: 'ilfavolosocinemadiamelie_bianco.svg'
}];

const eventi = [...eventiCinema, ...eventiMusica, ...eventiConcorsi];

// CORSI: DATI CONSERVATI DA FIX_
const corsi = [
  {
    categoria: 'Fotografia',
    titolo: '',
    descrizione: 'Impara a osservare la luce, comporre l’inquadramento e raccontare storie attraverso la fotografia.',
    immagine: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    contatti: {
      referente: 'Nome referente',
      email: 'massimo.fagioli@gmail.com',
      informazioni: 'Impara a guardare il mondo con occhi nuovi e a trasformare un istante in un ricordo. Un percorso pratico per conoscere la tua macchina fotografica, capire la luce, comporre l’inquadramento e raccontare storie attraverso le immagini. Imparerai a osservare dettagli che prima ti sfuggivano e a dare voce, attraverso le foto, al tuo modo personale di vedere il mondo.'
    }
  },
  {
    categoria: 'Pianoforte',
    titolo: '',
    descrizione: 'Percorsi individuali per avvicinarsi allo strumento, alla lettura musicale e all’ascolto.',
    immagine: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
    contatti: {
      referente: 'Leonardo',
      email: 'info@angolodiamelie.it',
      informazioni: 'Impara a suonare il pianoforte partendo da ciò che senti, non solo da ciò che leggi. Un percorso individuale per avvicinarti allo strumento con gradualità: prime note, lettura musicale, ritmo e ascolto. Che tu sia alle prime armi o voglia riprendere dopo anni, troverai uno spazio sereno per costruire confidenza, esprimerti e scoprire il piacere di fare musica con le tue mani.'
    }
  },
  {
    categoria: 'Bonsai',
    titolo: '',
    descrizione: 'Scopri le tecniche di cura, potatura e coltivazione per creare e mantenere un bonsai nel tempo.',
    immagine: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
    contatti: {
      referente: 'Nome referente',
      email: 'bonsaiclubmonterotondo26@gmail.com',
      informazioni: 'Coltiva pazienza, attenzione e bellezza in un piccolo albero che cresce con te. Un percorso per avvicinarti all’arte del bonsai: dalla scelta della pianta alle tecniche di potatura, irrigazione e cura nel tempo. Imparerai a osservare, intervenire con delicatezza e costruire, stagione dopo stagione, un piccolo paesaggio vivo da tenere accanto a te.'
    }
  },
  {
    categoria: 'A scuola di cinema',
    titolo: '',
    descrizione: 'Un percorso cinematografico articolato in tre moduli: sceneggiatura, regia e recitazione.',
    immagine: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    contatti: {
      referente: 'Nome referente',
      email: 'info@angolodiamelie.it',
      informazioni: 'Dall’idea alla scena: scopri come nasce un film attraverso sceneggiatura, regia e recitazione. Tre percorsi per dare forma alle storie, guidare lo sguardo e vivere le emozioni davanti alla macchina da presa.'
    },
    moduli: [
      {nome: 'Sceneggiatura', docente: 'Geraldine Ottier', inizio: '2026-10-24', fine: '2026-12-12'},
      {nome: 'Regia', docente: 'Geraldine Ottier', inizio: '', fine: ''},
      {nome: 'Recitazione', docente: 'da definire', inizio: '', fine: ''}
    ]
  }
];

const datiBonifico = {
  intestatario: 'L’Angolo di Amelie',
  iban: 'IT72 F083 2739 2400 0000 0002 311',
  bic: '',
  causale: 'Donazione'
};

// RENDERING E FUNZIONI CONSERVATI DA FIX_
function inizializzaSostenitori() {
  const pulsanteProgrammazione = document.querySelector('.programma-btn-wrap');
  if (!pulsanteProgrammazione) {
    console.warn('Sostenitori: contenitore .programma-btn-wrap non trovato');
    return;
  }
  const stile = document.createElement('style');
  stile.textContent = `
    .sostenitori-e-section{margin-top:70px;text-align:center;}
    .sostenitori-e-section .section-title{margin-bottom:22px;}
    .sostenitori-e-section h2{color:var(--rosso);margin:0 0 8px;font-size:clamp(24px,3.5vw,34px);}
    .sostenitori-e-section p{margin:0;color:var(--grigio);}
    .sostenitori-e-grid{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:24px;align-items:center;}
    .sostenitori-e-box{background:transparent;border:none;box-shadow:none;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;}
    .sostenitori-e-stage{position:relative;width:100%;height:150px;}
    .sostenitori-e-logo{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .7s ease;pointer-events:none;}
    .sostenitori-e-logo.attivo{opacity:1;pointer-events:auto;}
    .sostenitori-e-logo img{max-width:100%;max-height:130px;object-fit:contain;display:block;}
    @media(max-width:600px){
      .sostenitori-e-grid{grid-template-columns:1fr;}
      .sostenitori-e-stage{height:110px;}
      .sostenitori-e-logo img{max-height:95px;}
    }
  `;
  document.head.appendChild(stile);
  const sezione = document.createElement('section');
  sezione.className = 'sostenitori-e-section';
  sezione.innerHTML = `
    <div class="section-title">
      <h2>I nostri sostenitori</h2>
      <p>Grazie a chi sostiene le attività de L’Angolo di Amelie.</p>
    </div>
    <div class="sostenitori-e-grid" id="sostenitoriEGrid"></div>
  `;
  pulsanteProgrammazione.after(sezione);
  const grid = document.getElementById('sostenitoriEGrid');
  sostenitoriBox.forEach(box => {
    const boxElemento = document.createElement('div');
    boxElemento.className = 'sostenitori-e-box';
    const stage = document.createElement('div');
    stage.className = 'sostenitori-e-stage';
    boxElemento.appendChild(stage);
    const loghi = [];
    (box.loghi || []).forEach(sostenitore => {
      const elemento = document.createElement('div');
      elemento.className = 'sostenitori-e-logo';
      const immagine = document.createElement('img');
      immagine.src = sostenitore.logo;
      immagine.alt = sostenitore.nome || 'Sostenitore';
      immagine.loading = 'lazy';
      if (sostenitore.sito) {
        const link = document.createElement('a');
        link.href = sostenitore.sito;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', sostenitore.nome || 'Sito del sostenitore');
        link.appendChild(immagine);
        elemento.appendChild(link);
      } else {
        elemento.appendChild(immagine);
      }
      stage.appendChild(elemento);
      loghi.push(elemento);
    });
    grid.appendChild(boxElemento);
    let indiceAttivo = 0;
    function mostraSostenitore(indice) {
      loghi.forEach((logo, i) => {logo.classList.toggle('attivo', i === indice);});
    }
    mostraSostenitore(indiceAttivo);
    if (loghi.length > 1) {
      setInterval(() => {
        indiceAttivo = (indiceAttivo + 1) % loghi.length;
        mostraSostenitore(indiceAttivo);
      }, 5000);
    }
  });
}
inizializzaSostenitori();

function inizializzaSupporto() {
  const stile = document.createElement('style');
  stile.textContent = `
    body.card-aperta .nav-arrow{opacity:0;visibility:hidden;pointer-events:none;transition:none;}
    .card-supporto{position:absolute;right:10px;bottom:10px;z-index:5;display:flex;align-items:center;gap:6px;max-width:45%;}
    .card-supporto img{max-height:44px;max-width:120px;object-fit:contain;display:block;}
    .card-supporto-testo{display:none;font-size:.7rem;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.8);}
    .card.expanded .card-supporto-testo{display:inline;}
    .card-logo-alto{position:absolute;left:10px;top:10px;z-index:5;display:flex;align-items:center;gap:6px;max-width:45%;}
    .card-logo-alto img{max-height:44px;max-width:120px;object-fit:contain;display:block;}
  `;
  document.head.appendChild(stile);
  const cards = document.querySelectorAll('.card');
  eventi.forEach((evento, i) => {
    const card = cards[i];
    if (!card) return;
    const poster = card.querySelector('.card-poster');
    if (!poster) return;
    const logoSupporto = evento.supporto;
    if (logoSupporto) {
      const supporto = document.createElement('div');
      supporto.className = 'card-supporto';
      supporto.innerHTML = `<img src="${logoSupporto}" alt="Sostenitore">`;
      poster.appendChild(supporto);
    }
    const logoAlto = evento.logoAlto;
    if (logoAlto) {
      const logo = document.createElement('div');
      logo.className = 'card-logo-alto';
      logo.innerHTML = `<img src="${logoAlto}" alt="Logo">`;
      poster.appendChild(logo);
    }
  });
}
document.addEventListener('DOMContentLoaded', inizializzaSupporto);

const scriptCorsi = document.createElement('script');
scriptCorsi.src = 'corsi.js?v=20261123a';
scriptCorsi.onload = () => {
  const scriptDona = document.createElement('script');
  scriptDona.src = 'dona.js?v=20261112c';
  document.body.appendChild(scriptDona);
};
document.body.appendChild(scriptCorsi);

function inizializzaPulsanteStatuto() {
  document.querySelectorAll('#chiSiamoOverlay .legal-box').forEach(box => {
    const link = box.querySelector('a[href="statuto.pdf"]');
    if (!link) return;
    const titolo = [...box.querySelectorAll('h3')].find(elemento => elemento.textContent.trim() === 'Statuto dell’associazione');
    if (titolo) {
      const testo = titolo.nextElementSibling;
      if (testo && testo.tagName === 'P' && !testo.contains(link)) testo.remove();
      titolo.remove();
    }
    link.textContent = 'Statuto';
    link.setAttribute('download', 'statuto.pdf');
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.style.display = 'inline-block';
    link.style.backgroundColor = 'var(--rosso)';
    link.style.color = '#fff';
    link.style.padding = '12px 24px';
    link.style.borderRadius = '999px';
    link.style.fontWeight = '800';
    link.style.textDecoration = 'none';
    link.style.textTransform = 'none';
    link.setAttribute('aria-label', 'Scarica lo statuto in PDF');
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inizializzaPulsanteStatuto);
} else {
  inizializzaPulsanteStatuto();
}

function aggiungiAltriLoghi(card, evento) {
  const contenitore = card.querySelector('.card-details, .evento-info');
  if (!contenitore || contenitore.querySelector('.card-altri-loghi')) return;
  const elenco = evento && evento['altri loghi'];
  const loghi = Array.isArray(elenco) ? elenco.filter(src => typeof src === 'string' && src.trim()).map(src => src.trim()) : [];
  if (!loghi.length) return;
  const gruppo = document.createElement('div');
  gruppo.className = 'card-altri-loghi';
  gruppo.tabIndex = 0;
  gruppo.setAttribute('role', 'group');
  gruppo.setAttribute('aria-label', 'Altri loghi dell’evento');
  const fila = document.createElement('div');
  fila.className = 'card-altri-loghi-fila';
  loghi.forEach((src, indice) => {
    const img = document.createElement('img');
    img.alt = 'Logo aggiuntivo ' + (indice + 1);
    img.decoding = 'async';
    img.addEventListener('error', () => {
      img.remove();
      if (!fila.children.length) gruppo.remove();
    }, {once: true});
    img.src = src;
    fila.appendChild(img);
  });
  gruppo.appendChild(fila);
  contenitore.appendChild(gruppo);
}
function inizializzaAltriLoghi() {
  if (inizializzaAltriLoghi.attivo) return;
  inizializzaAltriLoghi.attivo = true;
  const stile = document.createElement('style');
  stile.textContent = `
    .card-altri-loghi{width:100%;max-width:100%;min-width:0;grid-column:1 / -1;margin-top:18px;overflow-x:auto;overscroll-behavior-x:contain;direction:rtl;-webkit-overflow-scrolling:touch;}
    .card-altri-loghi-fila{display:flex;flex-wrap:nowrap;align-items:center;justify-content:flex-end;gap:12px;width:max-content;min-width:100%;direction:ltr;}
    .card-altri-loghi-fila img{display:block;position:static;flex:0 0 auto;width:auto;height:44px;max-width:120px;object-fit:contain;transform:none;}
    .card:not(.expanded) .card-altri-loghi{display:none;}
    .card-altri-loghi:focus-visible{outline:2px solid var(--rosso);outline-offset:-2px;}
  `;
  document.head.appendChild(stile);
  document.querySelectorAll('.card[data-index]').forEach(card => {
    const evento = eventi[Number(card.dataset.index)];
    aggiungiAltriLoghi(card, evento);
  });
  if (typeof window.creaCard === 'function' && typeof window.renderGrid === 'function') {
    const creaCardOriginale = window.creaCard;
    window.creaCard = function(evento) {
      const card = creaCardOriginale.call(this, evento);
      aggiungiAltriLoghi(card, evento);
      return card;
    };
    window.renderGrid();
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inizializzaAltriLoghi, {once: true});
} else {
  inizializzaAltriLoghi();
}
