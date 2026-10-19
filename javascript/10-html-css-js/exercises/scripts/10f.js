// Reusable toggle function using selector parameter
function toggleButton(selector) {
  const button = document.querySelector(selector);

  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}