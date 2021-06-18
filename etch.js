buttonListen();


function gridCreate(n) {
//Function to clear and create a grid with an input of an integer (n) which determines the size of grid within sketchbox node.
    const div = document.createElement('div');
    const sketchBox = document.querySelector('.sketch-box');

    sketchBox.innerHTML = '';
    div.classList.add('box');
    cssChange(n, sketchBox);
    for (let i=0; i<(n**2); i++){
        sketchBox.appendChild(div.cloneNode(true))
    };
    boxTransform();
}



function cssChange(n, sketchBox) {
//Funtion to create a string which can be inserted as value into the style of sketchbox node.
    let percentString = ((1/n)*100) + '% ';
    let cssString = percentString.repeat(n);

    sketchBox.style.gridTemplateColumns = cssString;
}


function boxTransform() {
//Function to allow a mouseover over a grid box to change the background color to black.
    let boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black'));
}

function buttonListen() {
//Function for allowing button to prompt user to create a new grid with thier input and filter that input.
    const newGridBtn = document.querySelector('.new-grid-btn'); 

    newGridBtn.addEventListener('click', () => {
        let userInput = parseInt(prompt('Please enter the number of rows/columns you wish to create a grid of (max 90):'));
        if (userInput < 91){
            gridCreate(userInput);
        }else if (userInput > 90) {
            alert('That number is too high! Please try again');
        }else alert('That is not a valid input');
    });
}