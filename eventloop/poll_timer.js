const fs = require('fs');

function someAsyncOperation(callback) {
  fs.readFile('./data/test.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100); /*set to the timer of the event loop*/

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('someAsyncOperation');
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
/* in event loop: 1. read file(pending callback); 2.go to poll 3. go to callback(empty) 4. go to timer(now is pending callback)*/