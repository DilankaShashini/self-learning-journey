// Function ensuring only ONE button is toggled ON at a time
function toggleButton(selector) {
  const button = document.querySelector(selector);

  // If the clicked button is NOT toggled on
  if (!button.classList.contains('is-toggled')) {
    // Turn off any previously toggled button first
    turnOffPreviousButton();
    // Turn ON current button
    button.classList.add('is-toggled');
  } else {
    // If already ON, turn it OFF
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}