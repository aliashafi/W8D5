class Clock {
  constructor() {
    this.date = new Date();
    
  }

  printTime() {
    console.log(`${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`);
  }

  _tick() {
    // debugger;
    this.date.setSeconds(this.date.getSeconds() + 1);
    console.log(this.printTime());
  }
}

const clock = new Clock();
console.log(setInterval(function() {
    clock._tick();
  }, 1000));


