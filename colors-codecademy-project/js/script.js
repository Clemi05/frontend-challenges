const buttonRed = document.querySelector('.btn-red');
const buttonGreen = document.querySelector('.btn-green');
const buttonBlue = document.querySelector('.btn-blue');

/* Toggle Red Swatches */
buttonRed.addEventListener('click', () => {
  document.getElementById('red-lightness').classList.toggle('toggled');
  document.getElementById('red-saturation').classList.toggle('toggled');
  document.getElementById('red-hue').classList.toggle('toggled');
});

/* Toggle Green Swatches */
buttonGreen.addEventListener('click', () => {
  document.getElementById('green-lightness').classList.toggle('toggled');
  document.getElementById('green-saturation').classList.toggle('toggled');
  document.getElementById('green-hue').classList.toggle('toggled');
});

/* Toggle Blue Swatches */
buttonBlue.addEventListener('click', () => {
  document.getElementById('blue-lightness').classList.toggle('toggled');
  document.getElementById('blue-saturation').classList.toggle('toggled');
  document.getElementById('blue-hue').classList.toggle('toggled');
});
