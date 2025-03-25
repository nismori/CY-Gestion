<?php

$servername = "localhost";
$username = "root";
$password = "cytech0001";

// Connexion au serveur MySQL
$conn = new mysqli($servername, $username, $password);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Lire le fichier SQL et exécuter les requêtes
$sqlScript = file_get_contents("../BDD/init.sql");
if ($conn->multi_query($sqlScript)) {
    echo "Base de données et tables créées avec succès !\n";
} else {
    echo "Erreur lors de la création : " . $conn->error . "\n";
}

// Fermer la connexion
$conn->close();
?>
