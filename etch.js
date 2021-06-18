//function: gridCreate (n) MAX n is 90 before crash.
function gridCreate(n) {
    //create a div variable
    const div = document.createElement('div');
    //create variable containg sketchbox
    const sketchBox = document.querySelector('.sketch-box');

    //add 'box' class to div#
    div.classList.add('box');
    //execute cssChange(n) 
    cssChange(n, sketchBox);

    //For loop up to n**2 
    for (let i=0; i<(n**2); i++){
        //append div variable to container variable
        sketchBox.appendChild(div.cloneNode(true))
    }
}


//func: ccsChange(n) 
function cssChange(n, sketchBox) {
    // create percentString variable = (1/n *100) + "% "
    let percentString = ((1/n)*100) + '% ';
    //create variable cssString = multiply percentString by n
    let cssString = percentString.repeat(n);

    //change css class "box" to contain value of cssString for grid-template-columns (style.gridTemplateColumns = "50px 50px 50px")
    sketchBox.style.gridTemplateColumns = cssString;
}
