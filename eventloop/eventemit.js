const EventEmitter = require('events');

class TimerEmitter extends EventEmitter {
  constructor() {
    super();
    this.eventName = 'CleanTimer';
    this.timerIds = [];
  }
  addTimerId(id) {
    this.timerIds.push(id);
  }
  removeTimerId(id) {
    this.timerIds.shift(id);
  }
  trigger() {
    this.emit(this.eventName);
  }
}

const bar = (x, timerCleaner) => {
  console.log(`${x} : bar`);
  timerCleaner.trigger();
}
const baz = () => console.log('baz');
const foo = (a, timerCleaner) => {
  console.log('foo');
  const tid = setTimeout(function() {
    bar(a, timerCleaner);
  }, 0);
  baz();
  return tid;
}

const timerEmitter = new TimerEmitter();
timerEmitter.on(timerEmitter.eventName, () => {
  console.log(`${timerEmitter.eventName} cleaning up timer`);
  clearTimeout(timerEmitter.timerIds[0]);
});
timerEmitter.addTimerId(foo(2, timerEmitter));
timerEmitter.removeTimerId(foo(1, timerEmitter));
/*clean the timer*/