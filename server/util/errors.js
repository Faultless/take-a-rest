// @flow

class InvalidTypeException extends Error {
  constructor() {
    super('Invalid Type Provided.');
  }
}

class InvalidParamNumberException extends Error {
  constructor() {
    super('Invalid Number of Paramters supplied.');
  }
}

class DuplicateCharacterException extends Error {
  constructor() {
    super('Duplicate character ID.');
  }
}

class InvalidIdentifierException extends Error {
  constructor() {
    super('Invalid ID supplied.');
  }
}

module.exports = {
  InvalidParamNumberException,
  InvalidTypeException,
  DuplicateCharacterException,
  InvalidIdentifierException,
};
