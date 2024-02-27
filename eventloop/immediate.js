const fs = require('fs');

fs.readFile('./data/test.txt', function(err, data) {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  if (err) console.log('Error');
  else console.log(data);

  const timeoutScheduled = Date.now();
  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);  /*timer phase*/
  }, 10);

  setImmediate(() => {
    console.log('I was scheduled to run immediately'); /*check phase*/
  });
});
 /*so the order goes: IO callback, check callback, timer callback (check phaselo goes before timer)*/
