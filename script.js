function calculateTotal() {
  const priceCells = document.querySelectorAll('.price');
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  // Update the #ans span
  document.getElementById('ans').textContent = total;

  // Also show the total as the last row inside the table (optional but nice)
  const tableBody = document.querySelector('#groceryTable tbody');
  let totalRow = document.getElementById('totalRow');

  if (!totalRow) {
    totalRow = document.createElement('tr');
    totalRow.id = 'totalRow';
    const td = document.createElement('td');
    td.colSpan = 2;
    totalRow.appendChild(td);
    tableBody.appendChild(totalRow);
  }

  totalRow.firstChild.textContent = `Total Price: ₹${total}`;
}

document.getElementById('calcBtn').addEventListener('click', calculateTotal);
