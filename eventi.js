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


inizializzaSostenitori();