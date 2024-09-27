// Flygande bi-funktionalitet
const bee = document.getElementById('flyingBee');
const speed = 2; // Justera hastigheten på biet
let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let directionX = speed; // Riktning i x
let directionY = speed; // Riktning i y

function flyBee() {
    // Uppdatera positionen
    posX += directionX;
    posY += directionY;

    // Kolla gränser och ändra riktning vid kollision
    if (posX + bee.offsetWidth >= window.innerWidth || posX <= 0) {
        directionX *= -1; // Ändra riktning i x
    }
    if (posY + bee.offsetHeight >= window.innerHeight || posY <= 0) {
        directionY *= -1; // Ändra riktning i y
    }

    // Applicera positionen på biet
    bee.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(flyBee); // Fortsätt animeringen
}

// Starta flygningen när sidan laddas
flyBee();

// Visa meddelandet när knappen trycks
document.getElementById('loveButton').addEventListener('click', function() {
    document.getElementById('loveMessage').style.display = 'block'; // Visa meddelandet
    bee.style.display = 'block'; // Gör biet synligt
});