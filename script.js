document.addEventListener("DOMContentLoaded", () => {
    // Waktu berjalan
    function updateTime() {
        document.getElementById("time").textContent = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Ambil IP pengguna
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip").textContent = data.ip;
        })
        .catch(error => {
            document.getElementById("ip").textContent = "Gagal mendapatkan IP";
        });
});
