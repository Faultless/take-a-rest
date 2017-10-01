// @flow

const Router = require('express').Router;
const Model = require('../../models/character');

const character = Router();

character.route('/').post((req, res) => {
  const newCharacter = new Model(req.body.character);
  res.header({ 'Content-Type': 'application/json' });
  try {
    if (
      req.app.db
        .get('characters')
        .findIndex({ id: newCharacter.id })
        .value() !== -1
    ) {
      throw new Error('Duplicate character Ids');
    }

    req.app.db
      .get('characters')
      .push(newCharacter)
      .write();
  } catch (error) {
    res.status(409).end(JSON.stringify({ message: error.message }));
  }

  res.status(200).end(JSON.stringify({ message: 'character successfully added' }));
});

character
  .route('/:id')
  .get((req, res) => {
    const characterId = parseInt(req.params.id, 10);

    try {
      const requestedCharacter: Object = req.app.db
        .get('characters')
        .find({ id: characterId })
        .value();

      if (!requestedCharacter) throw new Error('Invalid character ID');

      res
        .status(200)
        .json({ character: requestedCharacter })
        .end();
    } catch (error) {
      res
        .status(404)
        .json({ message: error.message })
        .end();
    }
  })
  .post((req, res) => {
    const characterId = parseInt(req.params.id, 10);
    const requestedCharacter = req.app.db
      .get('characters')
      .find({ id: characterId })
      .value();

    res
      .status(200)
      .json({ character: requestedCharacter })
      .end();
  });

module.exports = character;
