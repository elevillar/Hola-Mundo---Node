const fs = require('fs')
const xls = `Node Js \t Express Js`

fs.writeFileSync('test.xls', xls)
