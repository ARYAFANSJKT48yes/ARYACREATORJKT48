<?php
$ip = $_SERVER['REMOTE_ADDR'];
$device = $_SERVER['HTTP_USER_AGENT'];
$time = date("Y-m-d H:i:s");

$conn = new mysqli("localhost", "root", "", "aryawebsite_db");

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$sql = "INSERT INTO visitors (ip_address, device, visit_time) VALUES ('$ip', '$device', '$time')";
$conn->query($sql);

echo "IP: $ip <br> Device: $device <br> Time: $time";

$conn->close();
?>
