const { curry, compose } = require('ramda');

const indexOf = curry((what, str) => str.indexOf(what));

const apiIndex = indexOf('api');

const subString = curry((offset, pos, str) => str.substr(pos + offset));

const subStringOffsetFour = subString(4);

const subStringAfterApi = compose(subStringOffsetFour, apiIndex);

const requestString = str => subStringAfterApi(str)(str);

const findType = str => (subString('/', str) !== null ? 1 : 0);

const constructFileName = (str) => {
  const pathArray = str.split('/');
  let fileName = '';
  pathArray.forEach((path, index) => {
    if (index === pathArray.length - 1) {
      fileName += path;
    } else {
      fileName += `${path}/`;
    }
  });
  return fileName;
};

const parseString = str => ({ reqType: findType(str), fileName: constructFileName(str) });

module.exports = {
  requestString,
  parseString,
};
