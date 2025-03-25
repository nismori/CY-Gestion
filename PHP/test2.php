<?php

if(isset($_POST["nom"], $_POST["etat"])){
    $nom = $_POST["nom"];
    $etat = $_POST["etat"];
}

$servername = "localhost";
$username = "root";
$password = "cytech0001";
$database = "house";

// Connexion à MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

// Récupérer les noms de la table "remote"
$sql = "INSERT INTO remote VALUES = (2,$nom,$etat)";
$result = $conn->query($sql);

// Afficher les résultats
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Nom : " . $row["nom"] . "\n";
    }
} else {
    echo "Aucun résultat trouvé.";
}

// Fermer la connexion
$conn->close();

header(Location:"test2.html")
?>


