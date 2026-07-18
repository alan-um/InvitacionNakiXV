// =========================
// ABRIR INVITACIÓN
// =========================

const openBtn = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const music = document.getElementById("magicMusic");

openBtn.addEventListener("click", () => {

    invitation.scrollIntoView({
        behavior:"smooth"
    });

    if(music){
        music.play().catch(()=>{});
    }

});

// =========================
// CUENTA REGRESIVA
// =========================

const targetDate = new Date(
    "September 5, 2026 21:00:00"
).getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const difference =
    targetDate - now;

    const days =
    Math.floor(
    difference / (1000*60*60*24)
    );

    const hours =
    Math.floor(
    (difference % (1000*60*60*24))
    / (1000*60*60)
    );

    const minutes =
    Math.floor(
    (difference % (1000*60*60))
    / (1000*60)
    );

    const seconds =
    Math.floor(
    (difference % (1000*60))
    / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);
updateCountdown();

// =========================
// COPIAR ALIAS
// =========================

document
.getElementById("copyAlias")
.addEventListener("click",()=>{

    navigator.clipboard.writeText(
        "NakiMP"
    );

    alert(
        "Alias copiado correctamente ⚡"
    );

});

// =========================
// PARTICULAS MAGICAS
// =========================

const particles =
document.getElementById("particles");

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add(
        "magic-particle"
    );

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.bottom =
    "-10px";

    particle.style.animationDuration =
    (Math.random()*4+4)+"s";

    particle.style.opacity =
    Math.random();

    particles.appendChild(
        particle
    );

    setTimeout(()=>{
        particle.remove();
    },8000);

}

setInterval(
createParticle,
200
);