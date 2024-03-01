const bar = (x) => console.log(`${x} : bar`);
const baz = () => console.log('baz');

const foo = (a) => {
  console.log('foo');
  setTimeout(function() {
    bar(a);
  }, 0);
  baz();
}

foo(2);
foo(1);

// 1. Call to foo(2):
// 2. Call to foo(1)
// 3. Event Loop & setTimeout Callbacks