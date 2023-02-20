const sqlite3 = require('sqlite3').verbose();

// Ouvrir la base de données
const db = new sqlite3.Database('retrotech');

// Créer la table "users"
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);`);

// Fermer la base de données
db.close();