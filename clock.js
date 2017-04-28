class Clock {

  constructor(date) {
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  printTime(){
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    if(this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }

    if(this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    if(this.hours >= 24) {
      this.hours -= 24;
    }

    this.printTime();
  }
}

let newClock = new Clock(new Date());
setInterval( newClock._tick.bind(newClock), 1000);
