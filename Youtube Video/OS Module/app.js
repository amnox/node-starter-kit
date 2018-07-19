const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory} \n`+`Free Memory: ${freeMemory} \n`)

// This one is interesting: os.cpus()