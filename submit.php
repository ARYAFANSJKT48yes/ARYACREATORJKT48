<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secret = "YOUR_SECRET_KEY"; // Ganti dengan Secret Key lu
    $response = $_POST["g-recaptcha-response"];
    $remoteip = $_SERVER["REMOTE_ADDR"];

    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip");
    $captcha_success = json_decode($verify);

    if ($captcha_success->success) {
        echo "Verifikasi berhasil!";
    } else {
        echo "Verifikasi gagal!";
    }
}
?>
