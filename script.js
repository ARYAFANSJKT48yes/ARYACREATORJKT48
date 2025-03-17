
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
    }, 2000);

    function updateTime() {
        let now = new Date();
        document.getElementById("user-info").innerHTML = "⏰ Waktu: " + now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("user-info").innerHTML += "<br>🌍 IP Anda: " + data.ip;
        })
        .catch(() => document.getElementById("user-info").innerHTML += "<br>⚠️ IP Tidak Diketahui");
});
