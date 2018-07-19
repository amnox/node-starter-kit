
const fs = require('fs')

/*
 * Synchronous File Reads
*/
console.log(fs.readdirSync('./'))


/**
 * Asynchronous File reads
 */
fs.readdir('./', function(err,files){
    if (err) console.log('Error', err);
    else console.log('result: ',files)
})