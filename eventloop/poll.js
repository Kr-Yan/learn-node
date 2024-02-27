const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function(err, data) { /*an IO operation, which is an async operation*/
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

/*1. all tasks will be wait in the poll*/
someAsyncOperation();  /*2. push back to the pending callback loop*/
foo();
console.log('done');
