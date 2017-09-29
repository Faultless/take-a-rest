const Router = require('express').Router;
const Model = require('../../models/character');

const character = Router();

character.route('/').post((req, res) => {
  const newCharacter = new Model(req.body.character);
  req.app.db
    .get('characters')
    .push(newCharacter)
    .write();

  res.set({ 'Content-Type': '*/text', code: 200 }).end('character successfully added');
});

character
  .route('/:id')
  .get((req, res) => {
    const characterId = parseInt(req.params.id, 10);
    const requestedCharacter = req.app.db
      .get('characters')
      .find({ id: characterId })
      .value();

    res.json({ character: requestedCharacter });
    res.end();
  })
  .post((req, res) => {
    const characterId = parseInt(req.params.id, 10);
    const requestedCharacter = req.app.db
      .get('characters')
      .find({ id: characterId })
      .value();
    res.json({ character: requestedCharacter });
    res.end();
  });

module.exports = character;
