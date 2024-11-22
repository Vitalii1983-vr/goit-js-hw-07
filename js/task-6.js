//Utils   
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  //Box logic
  const boxCountInput = document.querySelector('input[type="number"]');
  const boxes = document.getElementById('boxes');
  
  function createBoxes(amount) {
    destroyBoxes();
  
    const fragment = document.createDocumentFragment();
    let size = 30;
  
    for (let i = 1; i <= amount; i++) {
      fragment.appendChild(createBox(size));
      size += 10;
    }
  
    boxes.appendChild(fragment);
  }
  
  function createBox(size) { 
    const divBox = document.createElement('div');
    
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.margin = '5px';
    divBox.style.backgroundColor = getRandomHexColor();
    
    return divBox;
  }
  
  function destroyBoxes() {
    boxes.innerHTML = '';
  }
  
  function clearInputNumber() {
    boxCountInput.value = '';
  }
  
  // LIsteners
  document.querySelector('[data-create]').addEventListener('click', function (e) {
    const boxCount = parseInt(boxCountInput.value);
    if (boxCount > 1 && boxCount < 100) {
      createBoxes(boxCount);
      clearInputNumber();
    }  
  });
  
  document.querySelector('[data-destroy]').addEventListener('click', function (e) {
    destroyBoxes();
  });