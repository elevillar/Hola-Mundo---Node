const fs = require('fs')
// Leer el archivo autos.json de manera síncrona
const data = fs.readFileSync('autos.json', 'utf8')
console.log(data);

// Parsear el contenido del archivo JSON
const autos = JSON.parse(data);

// Iterar sobre cada elemento y mostrar el nombre del modelo en mayúsculas
autos.forEach(auto => {
  console.log(auto.modelo.toUpperCase())
});