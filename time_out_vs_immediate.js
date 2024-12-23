const fs = require('node:fs');
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
  setImmediate(() => {
    console.log('immediate2');
  });
  setImmediate(() => {
    console.log('immediate3');
  });
 
});
setImmediate(() => {
    console.log('immediate 4');
  });
// set immediate will be called before any timers only if included i I/O Process
