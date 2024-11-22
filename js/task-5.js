function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  
  document.querySelector('.change-color').addEventListener('click', function (e) {
    const newColor = getRandomHexColor();
    const span = document.querySelector('.color');
    
    document.body.style.backgroundColor = newColor;
    span.textContent = newColor;
  
  });