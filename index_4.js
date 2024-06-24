const { saludar, darLasGracias } = require('./modales.js')

const argumentos = process.argv.slice(2)

const nombreParaSaludar = argumentos[0]

const nombreParaAgradecer = argumentos[1]

saludar(nombreParaSaludar)

darLasGracias(nombreParaAgradecer)
