function inizializzaSostenitori(){
  if(!Array.isArray(sostenitoriBox) || sostenitoriBox.length===0){
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

    .sostenitori-grid{
      display:grid;
      grid-template-columns:repeat(2, minmax(0, 1fr));
      gap:24px;
      align-items:stretch;
    }

    .sponsor-box{
      background:#fff;
      border:1px solid #eee;
      border-radius:18px;
      box-shadow:var(--ombra);
      padding:18px;
      display:flex;
      flex-direction:column;
      gap:12px;
    }

    .sponsor-box h3{
      margin:0;
      color:var(--rosso-scuro);
      font-size:1.1rem;
    }

    .sponsor-stage{
      position:relative;
      width:100%;
      height:150px;
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
      .sostenitori-grid{
        grid-template-columns:1fr;
      }

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
    <div class="sostenitori-grid" id="sostenitoriGrid"></div>
  `;

  pulsanteProgrammazione.after(sezione);

  const grid=document.getElementById('sostenitoriGrid');

  sostenitoriBox.forEach((box,indiceBox)=>{
    const boxElemento=document.createElement('div');
    boxElemento.className='sponsor-box';

    const titolo=document.createElement('h3');
    titolo.textContent=box.titolo || 'Sostenitori';
    boxElemento.appendChild(titolo);

    const stage=document.createElement('div');
    stage.className='sponsor-stage';
    boxElemento.appendChild(stage);

    const loghi=[];

    (box.loghi || []).forEach(sponsor=>{
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

    grid.appendChild(boxElemento);

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
  });
}


inizializzaSostenitori();