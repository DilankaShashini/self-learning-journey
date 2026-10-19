// Load saved calculation from localStorage or set empty string
let calculation = localStorage.getItem('calculation') || '';

// Display saved calculation on page load
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function evaluateCalculation() {
  if (calculation === '') return;
  
  // Safely evaluate math expression string
  calculation = eval(calculation).toString();
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function clearCalculation() {
  calculation = '';
  displayCalculation();
  localStorage.removeItem('calculation');
}

function displayCalculation() {
  document.querySelector('.js-calculation-display').innerHTML = calculation || '0';
}