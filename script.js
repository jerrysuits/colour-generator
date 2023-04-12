//Get all of the elements
const button = document.querySelector('.btn');
const colour = document.querySelectorAll('.colour');
const hex = document.querySelectorAll('.hex');

//Add a click event on the button
button.addEventListener('click', generateColours);

function generateColours(){
     for(let i = 0; i < colour.length; i++){
          //Generate random colour
          const randomColour = Math.floor(Math.random() *16777215).toString(16);
          //adding the colour as a background
          colour[i].style.background = '#' + randomColour
          //add the animation
          colour[i].classList.add('fade-in'), 400;
          //add the hexcode above the colour
          hex[i].innerHTML = randomColour
     }
}

generateColours();