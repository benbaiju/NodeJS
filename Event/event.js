const eventEmitter = require('events');
const event = new eventEmitter();

event.on('eventName', (data) => {
    console.log('Event triggered:', data);
});

event.emit('eventName', "Hello, Event!");

event.on('error', (err) => {
    console.error('Error occurred:', err.message);
});
event.emit('error', new Error('Something went wrong!'));