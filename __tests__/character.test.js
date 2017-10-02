const axios = require('../__mocks__/axios');

describe('CRUD operations for a single character', () => {
  it('should fetch a user by his ID', () => {
    axios.get('example/api/character/1').then(res => expect(res).toMatchSnapshot());
  });
  it('should fail to fetch a user by his ID', () => {
    axios.get('example/api/character/2').catch(err => expect(err).toMatchSnapshot());
  });
});
