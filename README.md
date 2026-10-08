# SpendWise - Week 6

## Project Overview

SpendWise is a simple budgeting application that helps users set a budget, add expenses, view their spending, and monitor the amount of money remaining.

This week, I improved SpendWise by making it interactive with JavaScript. The application now uses conditionals, arrays, loops, DOM manipulation, and event listeners.

## Improvements Made This Week

The main improvements made to SpendWise include:

* Added a budget input and budget tracking.
* Added an interactive expense form.
* Added expense categories.
* Added an expense array to store multiple records.
* Added loops to calculate and display expenses.
* Added conditional statements to provide budget feedback.
* Added dynamic dashboard updates.
* Added the ability to delete expenses.
* Added responsive styling for smaller screens.

## How Conditionals Are Used

Conditional statements are used to make decisions based on the user's budget and expenses.

For example, SpendWise checks whether the user has exceeded their budget:

```javascript
if (remaining < 0) {
    budgetMessage.textContent = "Warning: You have exceeded your budget!";
} else if (remaining === 0) {
    budgetMessage.textContent = "You have used your entire budget.";
} else if (remaining <= budget * 0.2) {
    budgetMessage.textContent = "Be careful! You have less than 20% of your budget remaining.";
} else {
    budgetMessage.textContent = "Good job! You are within your budget.";
}
```

These conditions allow the application to provide different feedback depending on the user's financial situation.

## How Arrays Are Used

An array called `expenses` is used to store multiple expense records.

```javascript
let expenses = [];
```

Each expense is stored as an object containing the expense name, amount, and category.

```javascript
const expense = {
    name: name,
    amount: amount,
    category: category
};

expenses.push(expense);
```

This makes it possible to manage many expenses instead of storing each expense in a separate variable.

## How Loops Are Used

A `for` loop is used to process the expenses stored in the array.

The loop calculates the total amount spent:

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Another loop is used to display all expense records in the HTML table.

## How the DOM Is Updated

DOM manipulation is used to display JavaScript data directly on the webpage.

For example:

```javascript
dashboardTotal.textContent = total.toFixed(2);
expenseCount.textContent = expenses.length;
dashboardRemaining.textContent = remaining.toFixed(2);
```

The application also creates table rows dynamically:

```javascript
const row = document.createElement("tr");
expenseTableBody.appendChild(row);
```

This means the dashboard and expense table change automatically when the user adds or deletes an expense.

## How User Interactions Are Handled

Event listeners are used to respond to user actions.

The budget button uses an event listener:

```javascript
setBudgetBtn.addEventListener("click", function () {
    // Set budget
});
```

The expense form also uses an event listener:

```javascript
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Add expense
});
```

These events allow the application to respond when the user sets a budget or submits a new expense.

## Challenges Encountered

One challenge was connecting the JavaScript data with the HTML dashboard. At first, changing the data would not automatically change what was displayed on the webpage.

I resolved this by creating an `updateDashboard()` function. This function recalculates the total expenses, remaining budget, budget message, and expense table whenever the user adds or deletes an expense.

Another challenge was working with multiple expense records. I solved this by using an array of expense objects and loops to process each record.

## Testing

I tested the application by:

* Setting a budget.
* Adding multiple expenses.
* Checking that the total expenses update correctly.
* Checking that the remaining budget changes.
* Testing the budget warning messages.
* Deleting expenses.
* Checking that the expense count updates.
* Testing the application on different screen sizes.

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM Manipulation
* Arrays
* Loops
* Conditional Statements
* Event Listeners

## Conclusion

This week's SpendWise project demonstrates how JavaScript can make a webpage interactive. User actions trigger JavaScript logic, the expense data is stored in an array, loops process the records, and DOM manipulation displays the results directly on the webpage.
