const Router = require('express').Router;

const characters = Router();

characters.route('/').get((req, res) => {
  const charactersSnap = req.app.db.get('characters').value();
  res.json({ characters: charactersSnap });
  res.end();
});

module.exports = characters;
