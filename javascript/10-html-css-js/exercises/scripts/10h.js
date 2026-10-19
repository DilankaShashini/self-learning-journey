function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const totalCostElement = document.querySelector('.js-total-cost');
  let cost = Number(inputElement.value);

  // Clear previous error class
  totalCostElement.classList.remove('error-message');

  // Error handling: if cost is negative (< 0)
  if (cost < 0) {
    totalCostElement.classList.add('error-message');
    totalCostElement.innerHTML = 'Error: cost cannot be less than $0';
    return;
  }

  // Calculate total with shipping
  if (cost < 40) {
    cost = cost + 10;
  }

  totalCostElement.innerHTML = `$${cost}`;
}