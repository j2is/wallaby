/**
 * Calculator
 * 
 * 
 *
 */

let es6bindall = require('es6bindall');

// Get the namespace
app = window.app = window.app || {};

class calculator {
   
  constructor() {
    this.isInit;
    this.subscriptions = [];

    es6bindall(this, [
      "init",
      "add"
    ]);
    this.init();
  }

  init(){
    if(this.isInit){
      return;
    }
    this.isInit = true;
  }

  kill(){
    this.removeEventListeners();
    PubSub.publish('module.kill');
  }

  add(a, b){
    if (a === 0) return b;

    if (b === 0) return a;

    return a + b;
  }

}

module.exports = calculator;