-- Créer la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS house;
USE house;

-- Créer la table "remote" si elle n'existe pas
CREATE TABLE IF NOT EXISTS remote (
    idRemote INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    etat BOOLEAN
);

-- Insérer des valeurs par défaut (si aucune donnée n'existe)
INSERT INTO remote (nom, etat)
SELECT 'john', 1
WHERE NOT EXISTS (SELECT 1 FROM remote WHERE nom = 'john');
