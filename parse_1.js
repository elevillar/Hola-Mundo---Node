const fs = require('fs')
const tareas = fs.readFileSync('tareas.json', 'utf8')
console.log(tareas)

JSON.parse(tareas).forEach((tarea) => {
  console.log(tarea)
  })
