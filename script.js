"use strict";
// let money = prompt("What is your monthly budget?", ""),
//   time = prompt("Enter date in YYYY-MM-DD format", "");

// let appData = {
//   budget: money,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   timeData: time,
//   savings: false,
// };

// let a1 = prompt("Enter a mandatory expense item for this month", ""),
//   a2 = prompt("How much will it cost?", ""),
//   a3 = prompt("Enter a mandatory expense item for this month", ""),
//   a4 = prompt("How much will it cost?", "");

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);

let money = prompt("What is your monthly budget?", ""),
  time = prompt("Enter data in YYYY-MM-DD format", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

let a1 = prompt("Enter a mandatory expense item for this month", ""),
  a2 = prompt("How much will it cost?", ""),
  a3 = prompt("Enter a mandatory expense item for this month", ""),
  a4 = prompt("How much will it cost?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
