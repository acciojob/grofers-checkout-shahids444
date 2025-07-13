// Step 1: Select all price elements
const priceElements = document.querySelectorAll('.prices');

// Step 2: Initialize total price variable
let totalPrice = 0;

// Step 3: Loop through the price elements and calculate the total
priceElements.forEach(priceElement => {
    // Convert the price text to a number
    // Assuming prices are in a format like "$10.00"
    const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g,""));
    totalPrice += price; // Add to total
});

// Step 4: Create a new row and cell for the total
const table = document.querySelector('table'); // Assuming you have a single table
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Set the cell content to the total price
newCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`; // Format as currency

// Step 5: Append the new cell to the new row, and the new row to the table
newRow.appendChild(newCell);
table.appendChild(newRow);