
document.addEventListener("DOMContentLoaded", function() {
    // Animasi waktu real-time
    function updateTime() {
        const now = new Date();
        document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Ambil IP pengguna (butuh server)
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-address").textContent = "IP Anda: " + data.ip;
        })
        .catch(() => {
            document.getElementById("ip-address").textContent = "IP tidak dapat dideteksi";
        });
});
