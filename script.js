function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    timeElement.textContent = `Waktu saat ini: ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime();
