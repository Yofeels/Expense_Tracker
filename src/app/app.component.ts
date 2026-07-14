import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'expense-tracker';

  expenseName: string = '';
  amount: number = 0;

  latestExpenseName: string = '';
  latestAmount: number = 0;

  addExpense() {

    this.latestExpenseName = this.expenseName;
    this.latestAmount = this.amount;

    console.log("Expense:", this.latestExpenseName);
    console.log("Amount:", this.latestAmount);

    // Clear the form
    this.expenseName = '';
    this.amount = 0;
  }

}