function inizializzaDona(){
  if(document.querySelector('.dona-btn')){
    return;
  }

  const sezioneSostenitori=document.querySelector('.sostenitori-e-section');

  if(!sezioneSostenitori){
    return;
  }

  const stileDona=document.createElement('style');
  stileDona.textContent=`
    /* Riquadro "Sostienici": invito + pulsante con riflesso di luce */
    .dona-wrap{
      width:min(100%,380px);
      margin:34px auto 0;
      text-align:center;
      padding:24px 22px 26px;
      border-radius:20px;
      background:linear-gradient(160deg,#fff 0%,#fff6f2 100%);
      border:1px solid #f1d9d2;
      box-shadow:var(--ombra);
    }

    .dona-icona{
      width:46px;
      height:46px;
      margin:0 auto 10px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(200,16,46,.1);
      color:var(--rosso);
    }

    .dona-icona svg{
      width:24px;
      height:24px;
      display:block;
    }

    .sostenitori-e-section .dona-wrap h3{
      font-family:var(--font-titoli);
      margin:0 0 6px;
      color:var(--rosso-scuro);
      font-size:1.15rem;
    }

    .sostenitori-e-section .dona-wrap p{
      margin:0 0 16px;
      color:var(--grigio);
      font-size:.9rem;
      line-height:1.5;
    }

    .dona-btn{
      position:relative;
      overflow:hidden;
      isolation:isolate;
      border:0;
      cursor:pointer;
      padding:14px 34px;
      border-radius:999px;
      background:var(--rosso);
      color:#fff;
      font-family:var(--font-dettagli);
      font-size:1rem;
      font-weight:800;
      letter-spacing:1.5px;
      text-transform:uppercase;
      box-shadow:0 8px 20px rgba(200,16,46,.28);
      transition:transform 160ms var(--ease-out), background-color .2s ease;
    }

    /* Riflesso di luce: passa tre volte quando il pulsante entra nello schermo, poi si ferma */
    .dona-btn::after{
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:-60%;
      width:40%;
      background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent);
      transform:translateX(0) skewX(-20deg);
      pointer-events:none;
    }

    .dona-btn.in-vista::after{
      animation:donaRiflesso 3.8s var(--ease-in-out) 3;
    }

    .dona-btn:hover{
      background:var(--rosso-scuro);
    }

    @media(hover:hover) and (pointer:fine){
      .dona-btn:hover{transform:translateY(-2px)}
    }

    .dona-btn:active{
      transform:scale(.97);
    }

    .dona-btn:focus-visible{
      outline:3px solid var(--rosso);
      outline-offset:4px;
    }

    @keyframes donaRiflesso{
      0%,60%{transform:translateX(0) skewX(-20deg)}
      85%,100%{transform:translateX(475%) skewX(-20deg)}
    }

    /* Desktop: il riquadro sta al centro, tra i due loghi dei sostenitori */
    @media(min-width:761px){
      .sostenitori-e-grid.con-dona{
        grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);
      }
      .sostenitori-e-grid.con-dona .dona-wrap{
        width:380px;
        margin:0;
      }
    }

    /* Schermi più stretti: il riquadro va sotto ai loghi, su tutta la riga */
    @media(max-width:760px){
      .sostenitori-e-grid.con-dona .dona-wrap{
        grid-column:1 / -1;
        order:1;
      }
    }

    @media(prefers-reduced-motion:reduce){
      .dona-btn::after,.dona-btn.in-vista::after{animation:none;display:none}
      .dona-btn{transition:none}
      .dona-btn:hover,.dona-btn:active{transform:none}
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

    .dona-chiudi{
      transition:transform 160ms var(--ease-out), background-color .2s ease;
    }

    .dona-chiudi:active{
      transform:scale(.97);
    }
  `;

  document.head.appendChild(stileDona);

  const invito=(typeof invitoSostegno!=='undefined' && invitoSostegno) || {};
  const titoloInvito=invito.titolo || 'Ti piace quello che facciamo?';
  const testoInvito=invito.testo || '';

  const contenitore=document.createElement('div');
  contenitore.className='dona-wrap';
  contenitore.innerHTML=`
    <div class="dona-icona" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.4 2.5h1.6c.8-1.4 2.3-2.5 4.4-2.5 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>
    </div>
    <h3>${escapeHtml(titoloInvito)}</h3>
    ${testoInvito ? `<p>${escapeHtml(testoInvito)}</p>` : ''}
    <button class="dona-btn" id="btnDona" type="button">Sostienici</button>
  `;

  // Su desktop il riquadro va al centro tra i due loghi; altrimenti sotto ai loghi
  const grigliaSostenitori=sezioneSostenitori.querySelector('.sostenitori-e-grid');
  if(grigliaSostenitori && grigliaSostenitori.children.length===2){
    grigliaSostenitori.classList.add('con-dona');
    grigliaSostenitori.insertBefore(contenitore,grigliaSostenitori.children[1]);
  }else{
    sezioneSostenitori.appendChild(contenitore);
  }

  const overlay=document.createElement('div');
  overlay.className='dona-overlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Sostienici');
  overlay.id='donaOverlay';

  overlay.innerHTML=`
    <div class="dona-box">
      <h3>Supporta L’Angolo di Amelie</h3>
      <p>
        Puoi sostenere le attività dell’associazione con un bonifico bancario.
      </p>

      <div class="dona-dato">
        <strong>Intestatario</strong>
        <span>${escapeHtml(datiBonifico.intestatario)}</span>
      </div>

      <div class="dona-dato">
        <strong>IBAN</strong>
        <span>${escapeHtml(datiBonifico.iban)}</span>
      </div>

      <div class="dona-dato">
        <strong>BIC / SWIFT</strong>
        <span>${escapeHtml(datiBonifico.bic || "Non necessario per bonifici nazionali")}</span>
      </div>

      <div class="dona-dato">
        <strong>Causale</strong>
        <span>${escapeHtml(datiBonifico.causale)}</span>
      </div>

      <button class="dona-chiudi" id="chiudiDona" type="button">Chiudi</button>
    </div>
  `;

  document.body.appendChild(overlay);

  const btnDona=document.getElementById('btnDona');
  const chiudiDona=document.getElementById('chiudiDona');

  // Il riflesso parte solo quando il pulsante si vede (una volta)
  if('IntersectionObserver' in window){
    const osservatore=new IntersectionObserver(voci=>{
      if(voci.some(voce=>voce.isIntersecting)){
        btnDona.classList.add('in-vista');
        osservatore.disconnect();
      }
    },{threshold:.6});
    osservatore.observe(btnDona);
  }else{
    btnDona.classList.add('in-vista');
  }

  btnDona.addEventListener('click',()=>{
    overlay.classList.remove('chiusura-istantanea');
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
    if(evento.key==='Escape' && overlay.classList.contains('aperta')){
      overlay.classList.add('chiusura-istantanea');
      overlay.classList.remove('aperta');
    }
  });
}


inizializzaDona();