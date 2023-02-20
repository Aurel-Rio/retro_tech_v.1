/*
const express = require('express');
const router = express.Router();
const Joi = require('joi'); // bibliothèque de validation

// Middleware pour valider les données utilisateur
function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  });
  return schema.validate(user);
}

// Route pour créer un nouvel utilisateur
router.post('/', (req, res) => {
  // Valider les données utilisateur
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Enregistrer l'utilisateur dans la base de données
  // Ici, vous pouvez utiliser votre bibliothèque de base de données préférée pour enregistrer les données utilisateur

  // Envoyer une réponse
  res.send('Utilisateur enregistré avec succès !');
});

module.exports = router;

const { User } = require('../models'); // Importer le modèle User

// Définir la fonction qui gère la création d'un utilisateur
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body; // Récupérer les informations de l'utilisateur depuis la requête
    const user = await User.create({ username, email, password }); // Insérer le nouvel utilisateur dans la base de données
    res.status(201).json(user); // Renvoyer la réponse avec le nouveau utilisateur créé
  } catch (error) {
    console.log(error);
    res.status(500).send('Une erreur est survenue lors de la création de l\'utilisateur.'); // Renvoyer une erreur en cas d'échec
  }
}

module.exports = {
  createUser
};
*/
const { User } = require('../models');
const Joi = require('joi');

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  });
  return schema.validate(user);
}

const createUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Une erreur est survenue lors de la création de l\'utilisateur.');
  }
}

module.exports = {
  createUser
};
