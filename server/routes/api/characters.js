// @flow

const Router = require('express').Router;
const { TYPES } = require('../../config');
const { InvalidParamNumberException, InvalidTypeException } = require('../../util/errors');

const characters = Router();

characters
  .route('/')
  .get((req, res) => {
    const charactersSnap = req.app.db.get('characters').value();
    res.json({ characters: charactersSnap });
    res.end();
  })
  .patch((req, res) => {
    const { type, affectedIds }: { type: string, affectedIds: Array<number> } = req.body;

    try {
      switch (type) {
        case TYPES.LIFE_DRAIN: {
          if (affectedIds.length !== 2) {
            throw new InvalidParamNumberException();
          }
          break;
        }
        default:
          throw new InvalidTypeException();
      }
    } catch (error) {
      res
        .status(406)
        .json({ message: error.messsage })
        .end();
    }
  });

module.exports = characters;
