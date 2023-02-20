const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const { createUser } = require('./api/users'); // Importer la fonction createUser depuis le module users

app.use(bodyParser.json());
app.use(cors());

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil');
});

// Route pour créer un nouvel utilisateur
app.post('/users', createUser);

// Gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).send('Page introuvable !');
});

// Gérer les erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur serveur !');
});

function listen() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use, trying another port...`);
      port++;
      listen();
    }
  });
}

listen();