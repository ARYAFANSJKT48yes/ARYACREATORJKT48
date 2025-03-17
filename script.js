document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".container").style.display = "block";
    }, 2000);
    
    document.getElementById("whatsapp").addEventListener("click", function() {
        window.location.href = "https://wa.me/?text=ASSALAMUALAIKUM%20BANG";
    });

    function updateTime() {
        let now = new Date();
        document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-address").textContent = "IP Anda: " + data.ip;
        })
        .catch(() => {
            document.getElementById("ip-address").textContent = "Tidak dapat mendeteksi IP";
        });
});
