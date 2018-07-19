/* 
    1. Hello World 
*/

function hello(name) {
    console.log('hi '+name)
}

//hello('amnox')


/* 
    2. Scopes in node 
*/

// This would not work because global variables in Node are different from browser environment
//console.log(window)
// Instead
//console.log(module)


/* 
    3. Running an exported module 
*/ 

const logger = require('./logger')
//logger.log('message')



/*
    4. Path module
*/

const path = require('path')

console.log(path.parse(__filename))