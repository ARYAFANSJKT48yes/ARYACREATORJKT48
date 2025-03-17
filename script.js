function updateTime() {
    let now = new Date();
    document.getElementById("time").innerText = "Waktu Anda: " + now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Ambil IP dan kirim notifikasi
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-info").innerText = "IP Anda: " + data.ip;
        fetch('https://your-server.com/send-notification', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ ip: data.ip }) 
        });
    })
    .catch(error => console.error('Error mengambil IP:', error));