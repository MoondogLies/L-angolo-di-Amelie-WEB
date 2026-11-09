// ============================================================
// SPONSOR / SOSTENITORI
// ============================================================
// Aggiungi o rimuovi qui i loghi dei sostenitori.
// Il logo può essere un file nella repository, ad esempio "logo.png",
// oppure un URL completo che inizia con https://

const sostenitori = [
  {
    nome: "Sostenitore",
    logo: "icm.png",
    sito: "https://www.icmcomune.it"
  },
    {
    nome: "Sostenitore",
    logo: "comunemonterotondo.jpg",
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
// CARICAMENTO DEI MODULI DELLA HOME
// ============================================================

const scriptSostenitori=document.createElement('script');
scriptSostenitori.src='sostenitori.js';

scriptSostenitori.onload=()=>{
  const scriptCorsi=document.createElement('script');
  scriptCorsi.src='corsi.js';

  scriptCorsi.onload=()=>{
    const scriptDona=document.createElement('script');
    scriptDona.src='dona.js';
    document.body.appendChild(scriptDona);
  };

  document.body.appendChild(scriptCorsi);
};


document.body.appendChild(scriptSostenitori);
