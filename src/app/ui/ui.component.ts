import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition";
import { substraction } from '../substraction/substraction';
import { squareRoot } from '../square/square-root';
import { multiplication } from '../mult/multiplication';
import { division } from '../division/division';
import { power } from '../power/power';
import { percentage } from '../percentage/percentage';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  result = 0;
  operator1 = 0;
  operator2 = 0;
  squareRootResult = 0;
  numberForSquareRoot = 0;
  multiplicationResult = 0;
  divisionResult = 0;
  powerResult = 0;
  base = 0;
  exponent = 0;
  percentageResult = 0;
  total = 0;
  percent = 0;

  addition() {
    this.result = addition(this.operator1, this.operator2);
  }

  substraction() {
    this.result = substraction(this.operator1, this.operator2);
  }

  calculateSquareRoot() {
    this.squareRootResult = squareRoot(this.numberForSquareRoot);
  }

  multiply() {
    this.multiplicationResult = multiplication(this.operator1, this.operator2);
  }

  divide() {
    if (this.operator2 === 0) {
      alert("Cannot divide by zero"); // Por ejemplo, podría ser un alerta
      this.divisionResult = NaN; // Use NaN to represent an error
    } else {
      this.divisionResult = division(this.operator1, this.operator2);
    }
  }

  calculatePower() {
    this.powerResult = power(this.base, this.exponent);
  }

  calculatePercentage() {
    this.percentageResult = percentage(this.total, this.percent);
  }

}