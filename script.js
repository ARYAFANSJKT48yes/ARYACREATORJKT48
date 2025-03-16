document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
});

function showMessage() {
    alert("Button berhasil diklik!");
}
