const message = document.getElementById('message');
const container = document.getElementById('container');
const numberOfBoxes = 12; 
const sameColor = true;

const getRandomColor = function() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 4)];
  }
  return color;
}

for (let i = 0; i < numberOfBoxes; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.addEventListener('mouseenter', function() {
  this.style.backgroundColor = getRandomColor(); 
  if (checkAllColors()) 
    message.style.display = "flex";
  else
    message.style.display = "None";
  });
  container.appendChild(box);
}



function checkAllColors(){
  const boxes = document.querySelectorAll('.box');
  const firstColor = boxes[0].style.backgroundColor;
  for(const box of boxes){
    if(box.style.backgroundColor !== firstColor)
      return false
  }
  return true
}



