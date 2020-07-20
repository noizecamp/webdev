/**
 * Create a class `TempTracker`
 *
 * It has two methods:
 *
 *   setTemp: takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *   getTemp: returns the last temperature set by
 *            the setTemp function.
 *
 */

export class TempTracker {
  setTemp(newVal){
    this.temp = newVal;
  }

  getTemp(){
    return this.temp;
  }
}

/**
 * Create a class `AverageTempTracker`
 *
 * Offers the same functionality as `TempTracker`
 *
 * Additionally, it implements:
 *
 *   getAverageTemp: returns the average of temps that
 *                   have been set
 *
 */

export class AverageTempTracker extends TempTracker {
  constructor(){
    super();
    this.temps = [];
  }
  
  setTemp(newVal){
    super.setTemp(newVal);
    this.temps.push(newVal);
  }

  getTemp(){
    return super.getTemp();
  }

  getAverageTemp(){
    var total = this.temps.reduce(function(sum, arr) {       
      return sum + arr;  
    },0);

    return total / this.temps.length;
  }  
}

/**
 * Create a class `BoundedTempTracker`
 *
 * Implements functionality of `TempTracker`
 *
 * Additionally, it implements:
 *      setTemp: same as before, but it does not set the temp
 *               if it is greater than 100 or less than 0.
 *
 *      getTemp: same as before, but it tracks each time
 *               getTemp has been called
 *
 *      getTempReads: returns how many times `getTemp` has
 *                    been called
 *
 */

export class BoundedTempTracker extends TempTracker{
  
  constructor(){
    super();
    this.counter = new Counter();
  }

  setTemp(newVal){
    if(newVal < 0 || newVal > 100){
      return;
    }
    super.setTemp(newVal);
  }

  getTemp(){
    this.counter.tick();
    return super.getTemp();
  }

  getTempReads(){
    return this.counter.tick() - 1;
  }
}

export class Counter {
  /**
   * Step 1: Rewrite setting the initial state without
   * the `constructor` method.
   */
  constructor() {
    this.counter = 1;
  }

  /**
   * Step 2: rewrite `this.counter` to use a private field
   *         so it can't be accessed outside the class.
   */
  tick() { return this.counter++ }
}
