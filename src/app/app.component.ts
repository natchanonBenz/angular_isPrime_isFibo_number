import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'question1';
  selectionList = ['isPrime', 'IsFibanacci']
  resultTest: any;
  numberInput: any
  selectionValue: any

  setResult() {

    if (this.numberInput < 0) {
      this.numberInput = 0
    }
    if (this.selectionValue == 'isPrime') {
      this.resultTest = isPrime(this.numberInput)
    }
    else if (this.selectionValue == 'IsFibanacci') {
      this.resultTest = isFibonacci(this.numberInput)
    }


  }


}
function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}

function isPerfectSquare(x) {
  let s = Math.sqrt(parseFloat(x))
  return (s * s == x);
}
