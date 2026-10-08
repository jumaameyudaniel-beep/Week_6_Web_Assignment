// Store the budget
let budget = 0;

// Array used to store multiple expense records
let expenses = [];

// Get elements from the HTML
const budgetInput = document.getElementById("budget");
const setBudgetBtn = document.getElementById("setBudgetBtn");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetAmount = document.getElementById("budgetAmount");
const totalExpenses = document.getElementById("totalExpenses");
const remainingAmount = document.getElementById("remainingAmount");

const dashboardTotal = document.getElementById("dashboardTotal");
const expenseCount = document.getElementById("expenseCount");
const dashboardRemaining = document.getElementById("dashboardRemaining");

const budgetMessage = document.getElementById("budgetMessage");
const expenseTableBody = document.getElementById("expenseTableBody");
const emptyMessage = document.getElementById("emptyMessage");


// Set the user's budget
setBudgetBtn.addEventListener("click", function () {
    const enteredBudget = Number(budgetInput.value);

    if (enteredBudget <= 0 || isNaN(enteredBudget)) {
        budgetMessage.textContent = "Please enter a valid budget.";
        return;
    }

    budget = enteredBudget;

    budgetInput.value = "";

    updateDashboard();
});


// Add a new expense
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Conditional statement for validation
    if (name === "" || amount <= 0 || category === "") {
        alert("Please fill in all expense details correctly.");
        return;
    }

    // Add expense object to the array
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    // Clear the form
    expenseForm.reset();

    // Update webpage
    updateDashboard();
});


// Calculate the total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    // Loop through every expense in the array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update all dashboard information
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = budget - total;

    // Update budget information
    budgetAmount.textContent = budget.toFixed(2);
    totalExpenses.textContent = total.toFixed(2);
    remainingAmount.textContent = remaining.toFixed(2);

    // Update dashboard cards
    dashboardTotal.textContent = total.toFixed(2);
    expenseCount.textContent = expenses.length;
    dashboardRemaining.textContent = remaining.toFixed(2);

    // Decision making based on the remaining budget
    if (budget === 0) {
        budgetMessage.textContent = "Please set your budget.";
    } else if (remaining < 0) {
        budgetMessage.textContent = "Warning: You have exceeded your budget!";
    } else if (remaining === 0) {
        budgetMessage.textContent = "You have used your entire budget.";
    } else if (remaining <= budget * 0.2) {
        budgetMessage.textContent = "Be careful! You have less than 20% of your budget remaining.";
    } else {
        budgetMessage.textContent = "Good job! You are within your budget.";
    }

    // Display expenses
    displayExpenses();
}


// Display expenses in the table
function displayExpenses() {
    // Clear existing table rows
    expenseTableBody.innerHTML = "";

    // Show message when there are no expenses
    if (expenses.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    // Loop through expenses and create table rows
    for (let i = 0; i < expenses.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expenses[i].name}</td>
            <td>${expenses[i].category}</td>
            <td>KSh ${expenses[i].amount.toFixed(2)}</td>
            <td>
                <button class="delete-btn" onclick="deleteExpense(${i})">
                    Delete
                </button>
            </td>
        `;

        expenseTableBody.appendChild(row);
    }
}


// Delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);

    // Update the dashboard after deleting
    updateDashboard();
}


// Display the initial dashboard
updateDashboard();