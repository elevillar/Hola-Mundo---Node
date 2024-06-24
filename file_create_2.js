const fs = require('fs')
const tareas = [
{ text: 'Ir al gimnasio' },
{ text: 'Buscar al niño al colegio' },
{ text: 'Pagar los gastos comunes' },
{ text: 'Cargar bencina' }
]
fs.writeFileSync('tareas.json', JSON.stringify(tareas) )

JSON.parse(tareas).forEach((tarea) => {
  console.log(tarea)
  })