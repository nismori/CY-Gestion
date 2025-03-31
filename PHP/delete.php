<?php 
$servername = "localhost";
$username = "root";
$password = "cytech0001";  // Remplace par ton mot de passe

// Connexion à MySQL
$conn = new mysqli($servername, $username, $password);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Supprimer la base de données
$sql = "DROP DATABASE IF EXISTS house";

if ($conn->query($sql) === TRUE) {
    echo "La base de données 'house' a été supprimée avec succès.\n";
} else {
    echo "Erreur lors de la suppression de la base de données : " . $conn->error . "\n";
}

// Fermer la connexion
$conn->close();
?>
