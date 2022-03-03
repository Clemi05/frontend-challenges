function flip(event) {
  const clickedImage = event.currentTarget;
  if (clickedImage.className === 'flip-image-inner') {
    if (clickedImage.style.transform == 'rotateY(180deg)') {
      clickedImage.style.transform = 'rotateY(0deg)';
    } else {
      clickedImage.style.transform = 'rotateY(180deg)';
    }
  }
};
