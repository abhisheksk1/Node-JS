// Events Module
// Node js has a built-in module, called "events".
// where u can create-, fire-, and listen for- your own events.

//Example1- Registering for the events to be fired only one time using once.

//Example2- create an event emitter instance and register a couple of callbacks.

//Example3- Registering for the events with callback parameters. ........

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('Your Name is Abhishek');
});
event.on('sayMyName', () => {
    console.log('Your Name is Kumar');
});
event.on('sayMyName', () => {
    console.log('Your Name is Pandey');
});

event.emit('sayMyName');