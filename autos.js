const fs = require('fs')
const autos = [
  {
  marca: 'Susuki',
  modelo: 'Kicks',
  },
  {
  marca: 'Toyota',
  modelo: 'Corola',
  },
  {
  marca: 'GAC',
  modelo: 'GS4',
  },
  {
    marca: 'Changan',
    modelo: 'CS35 Plus',
  }
  ]

  fs.writeFileSync('autos.json', JSON.stringify(autos))
