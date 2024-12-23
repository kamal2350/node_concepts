// // When you want to execute some piece of code asynchronously, 
// // but as soon as possible, one option is to use the setImmediate()
// // function provided by Node.js:
// Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

// How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), 
// and from process.nextTick() and Promise.then()?

// A function passed to process.nextTick() is going to be executed on the current iteration of the event loop,
// after the current operation ends. 
// This means it will always execute before setTimeout and setImmediate.

// A setTimeout() callback with a 0ms delay is very similar to setImmediate(). 
// The execution order will depend on various factors, 
// but they will be both run in the next iteration of the event loop.
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

start();

// start foo bar zoo baz
