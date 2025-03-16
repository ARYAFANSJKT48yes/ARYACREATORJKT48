function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

function changeColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'black' ? 'blue' : 'black';
}

function createRain() {
    for (let i = 0; i < 100; i++) {
        let drop = document.createElement("div");
        drop.classList.add("raindrop");
        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(drop);
    }
}
createRain();
