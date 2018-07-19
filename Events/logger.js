
const EventEmitter = require('events')

class Logger extends EventEmitter {
    log (message)  {
        //Send request
        console.log(message);

        // Raise an event
        this.emit('message', {id:'mato',ko:'plato'})
    }
}

module.exports = Logger ;