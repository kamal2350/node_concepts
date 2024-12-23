//EventEmitter class is provided to handle events in Nodejs
const EventEmitter = require('events');
const eventEmitter  = new EventEmitter();
//  Event Emitter provides many methods e.g emit,on,once,eventName
// emit is used to trigger an event
// on is used to add a callback function that's going to be executed when the event is triggered4
eventEmitter.on('start', (number) => {
    console.log('started at '+number );
  });

eventEmitter.emit('start',23);
// The EventEmitter object also exposes several other methods to interact with events, like

// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event
