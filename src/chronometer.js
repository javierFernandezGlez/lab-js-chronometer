class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(arguments.length > 0) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let answerString = "";
    if(value >= 10) {
      answerString = String(value);
    }
    else {
      answerString = "0" + String(value);
    }
    return answerString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let mString = this.computeTwoDigitNumber(minutes);
    let sString = this.computeTwoDigitNumber(seconds);
    return mString + ":" + sString;
  }
}
