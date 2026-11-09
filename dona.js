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

      <div class="dona-dato">
        <strong>BIC / SWIFT</strong>
        <span>${datiBonifico.bic || "Non necessario per bonifici nazionali"}</span>
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


inizializzaDona();