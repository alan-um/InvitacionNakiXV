// SCROLL

document
.getElementById('openInvitation')
.addEventListener('click', () => {

  document
  .getElementById('invitation')
  .scrollIntoView({
    behavior:'smooth'
  });

});

// COUNTDOWN

const targetDate =
new Date("2026-09-05T21:00:00").getTime();

function updateCountdown(){

  const now = Date.now();

  const distance =
  targetDate - now;

  const days =
  Math.floor(distance / (1000*60*60*24));

  const hours =
  Math.floor(
    (distance % (1000*60*60*24))
    /(1000*60*60)
  );

  const minutes =
  Math.floor(
    (distance % (1000*60*60))
    /(1000*60)
  );

  const seconds =
  Math.floor(
    (distance % (1000*60))
    /1000
  );

  document.getElementById('days').textContent =
    String(days).padStart(2,'0');

  document.getElementById('hours').textContent =
    String(hours).padStart(2,'0');

  document.getElementById('minutes').textContent =
    String(minutes).padStart(2,'0');

  document.getElementById('seconds').textContent =
    String(seconds).padStart(2,'0');

}

updateCountdown();

setInterval(
  updateCountdown,
  1000
);

// COPIAR ALIAS

document
.getElementById('copyAlias')
.addEventListener('click', () => {

  navigator.clipboard.writeText(
    'NakiMP'
  );

  alert('Alias copiado ⚡');

});

// PARTICULAS MAGICAS

const canvas =
document.getElementById('magicCanvas');

const ctx =
canvas.getContext('2d');

function resize(){

  canvas.width =
  window.innerWidth;

  canvas.height =
  window.innerHeight;

}

resize();

window.addEventListener(
'resize',
resize
);

const particles = [];

for(let i=0;i<60;i++){

  particles.push({

    x:Math.random()*canvas.width,

    y:Math.random()*canvas.height,

    r:Math.random()*2+1,

    speed:Math.random()*0.5+0.2

  });

}

function animate(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach(p=>{

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.r,
      0,
      Math.PI*2
    );

    ctx.fillStyle =
    'rgba(212,175,55,.8)';

    ctx.fill();

    p.y -= p.speed;

    if(p.y < -10){

      p.y = canvas.height+10;

    }

  });

  requestAnimationFrame(
    animate
  );

}

animate();