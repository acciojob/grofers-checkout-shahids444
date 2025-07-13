// Wait until the DOM is fully parsed
window.addEventListener('DOMContentLoaded', () => {
  const priceCells = document.querySelectorAll('#groceryTable .prices');
  let total = 0;

  // Skip the header cell (index 0) and sum the rest
  for (let i = 1; i < priceCells.length; i++) {
    const value = parseFloat(priceCells[i].textContent.trim());
    if (!isNaN(value)) total += value;
  }

  // Build a new table row to display the total
  const table = document.getElementById('groceryTable');
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');

  totalCell.colSpan = 2; // Make the cell span the full width
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});
