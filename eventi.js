// INFORMAZIONI DELL’ASSOCIAZIONE
const INFO_ASSOCIAZIONE = {
  indirizzo: 'Via delle Rimesse 14/16, 00015 Monterotondo (RM)',
  email: 'info@angolodiamelie.it',
  facebook: 'https://www.facebook.com/share/1EsXa52DvT/?mibextid=wwXIfr'
};

// SOSTENITORI/E
// 'nome' è il nome reale del sostenitore: viene letto dai lettori di schermo e mostrato al passaggio del mouse.
const sostenitoriBox = [
  {
    titolo: 'Sostenitori',
    loghi: [{nome: 'BCC Roma', logo: 'bcc.jpg', sito: 'https://www.bccroma.it'}]
  },
  {
    titolo: 'Sostenitori',
    loghi: [
      {nome: 'De La Vallée', logo: 'delavallee.png', sito: 'https://www.delavallee.it'},
      {nome: 'Autofficina Papili', logo: 'papili.jpeg', sito: ''},
      {nome: 'D’Ascenzi', logo: 'dascenzi.png', sito: 'https://www.dascenzi.it'},
      {nome: 'L’Isola Celiaca Monterotondo', logo: 'isolaceliaca.png', sito: 'https://lisolaceliaca.it/affiliato/monterotondo/'},
      {nome: 'Gruppo Iezzi', logo: 'iezzi.png', sito: 'https://www.gruppoiezzi.it'},
      {nome: 'Unieuro Monterotondo Scalo', logo: 'unieuro.jpg', sito: 'https://www.unieuro.it/online/negozi/Unieuro-Monterotondo-Scalo'},
      {nome: 'I Fiori di Pina', logo: 'fioridipina.png', sito: 'https://www.facebook.com/p/I-Fiori-di-Pina-61575371019310/'},
      {nome: 'Agenzia Tosca', logo: 'agenziatosca.jpg', sito: ''},
      {nome: 'Hotel Valery', logo: 'valery.png', sito: 'https://www.hotelvalery.it'}
    ]
  }
];

// VIDEO IN EVIDENZA (HOME)
// Sezione che compare in home tra gli eventi e i sostenitori.
// Per mostrarla: carica il file video nel sito e scrivi il suo nome in 'video'.
// Per nasconderla: lascia video: '' (la sezione non viene creata).
const videoInEvidenza = {
  titolo: '',        // facoltativo, es. 'Il nostro anno insieme'
  descrizione: '',   // facoltativo, testo breve sotto al titolo
  video: '',         // es. 'video-associazione.mp4'
  poster: ''         // facoltativo: immagine mostrata prima dell'avvio, es. 'foto.jpg'
};

// CONTENUTI DELLE CARD EVENTI
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

// CORSI
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
