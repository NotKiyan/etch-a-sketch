const gridContainer = document.getElementById('container');
let limit = 256;

for( let i =0 ; i <limit ; i++){
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = i + 1;
    gridContainer.appendChild(div);

}
const changeColor = document.getElementsByClassName('grid-item');

for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener('mouseover', () => {
        changeColor[i].style.backgroundColor = 'red'; 
    });

    changeColor[i].addEventListener('mouseout', () => {
        changeColor[i].style.backgroundColor = ''; 
    });
}


function createGrid(input){
    gridContainer.innerHTML = '';
    for( let i =0 ; i <input ; i++){
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.textContent = i + 1;
        gridContainer.appendChild(div);
    
    }
}

document.getElementById('prompt').addEventListener('click',()=>{
    const userInput = prompt('Enter the number of squares per side');
    console.log(`The user input is ${userInput}`);
    createGrid(userInput);

    


})