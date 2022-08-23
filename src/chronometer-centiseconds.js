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
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime / 100);
    return seconds % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
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
    let centiSeconds = this.getCentiseconds();
    let mString = this.computeTwoDigitNumber(minutes);
    let sString = this.computeTwoDigitNumber(seconds);
    let cString = this.computeTwoDigitNumber(centiSeconds);
    return mString + ":" + sString + "." + cString;
  }
}
