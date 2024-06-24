const { createFile, readFile } = require('./operaciones')

// Prueba de la función crear
createFile('test.txt', 'Este es el contenido del archivo de prueba')

// Prueba de la función leer
setTimeout(() => {
  const content = readFile('test.txt');
  console.log(content);
}, 1000);
