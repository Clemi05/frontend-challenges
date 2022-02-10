const buttonRed = document.querySelector('.btn-red');
const buttonGreen = document.querySelector('.btn-green');
const buttonBlue = document.querySelector('.btn-blue');

/* Toggle Red Swatches */
buttonRed.addEventListener('click', () => {
  document.getElementById('red').classList.toggle('toggled');
});

/* Toggle Green Swatches */
buttonGreen.addEventListener('click', () => {
  document.getElementById('green').classList.toggle('toggled');
});

/* Toggle Blue Swatches */
buttonRed.addEventListener('click', () => {
  document.getElementById('blue').classList.toggle('toggled');
});
