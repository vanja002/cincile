<?php
$servername = "localhost";
$username = "korisnickoIme";
$password = "lozinka";
$dbname = "cincila_land";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$ime = $_POST['name'];
$email = $_POST['email'];
$kako_ste_saznali = $_POST['how-found'];
$poruka = $_POST['message'];


$stmt = $conn->prepare("INSERT INTO Odgovori (ime, email, kako_ste_saznali, poruka) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $ime, $email, $kako_ste_saznali, $poruka);
$stmt->execute();

echo "Podaci su uspešno sačuvani.";

$stmt->close();
$conn->close();
?>
