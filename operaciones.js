const fs = require('fs');

const createFile = (filename, content) => {
  fs.writeFileSync(filename, content)
}

const readFile = (filename) => {
  const content = fs.readFileSync(filename, 'utf8')
  return content;
}

module.exports = {
    createFile,
    readFile
};
