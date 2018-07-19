
const EventEmitter = require('events')
const emitter = new EventEmitter();

/**
 * Register a listener
 */
emitter.on('messageLogged', (...args)=>{
    console.log(args);
})

/**
 * Raise an event
 */
emitter.emit('messageLogged', 1, 'url')

const Logger = require('./logger')
const logger = new Logger()

logger.on('message', (arg) => {
    console.log('extended Logger', arg)
})

logger.log('This is the message we Preach')