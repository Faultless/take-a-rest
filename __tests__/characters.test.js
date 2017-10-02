const axios = require('../__mocks__/axios');

describe('CRUD characters operations', () => {
  it('should get all characters', () =>
    axios.get('example/api/characters').then(res => expect(res.characters).toMatchSnapshot()));
  it('should fail to get characters', () =>
    axios.get('example/api/charactors').catch(err => expect(err).toMatchSnapshot()));
});
