document.addEventListener("DOMContentLoaded", function () {
    let timezoneElement = document.getElementById("timezone");
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezoneElement.textContent = "Zona Waktu: " + timezone;
});
