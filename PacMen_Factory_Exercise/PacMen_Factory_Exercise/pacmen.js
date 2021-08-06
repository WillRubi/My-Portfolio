let pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
let focus = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  // TODO: set position here
  game.appendChild(newimg);

  // TODO add new Child image to game
  for(var i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].sttyle.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // let img = document.getElementById("pacmen");
  // let imgWidth = pacMen.width;
  // focus = (focus + 1) % 2;
  // direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  // pacMen.src = pacArray[direction][focus];
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
      item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
      
     
     
     
      
  // TODO: detect collision with all walls and make pacman bounce

}
// function checkPageBounds(direction, imgWidth, pos, pageWidth) {

//   if (pos > pageWidth - imgWidth) {
//    direction = 1;
  
//   }
  
//   if (pos < 0) {
//   direction = 0;
  
//   }
  
  
//     //
//     // TODO: Complete this to reverse direction upon hitting screen edge
//     //
    
//     return direction;
//   }
  

  
function stopOne() {
  pacMen.pop(); 
}
  function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}


//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}