const gridContainer = document.getElementById('container');


for( let i =0 ; i <256 ; i++){
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


document.getElementById('prompt').addEventListener('click',()=>{
    const userInput = prompt('Enter the number of squares per side');
    console.log(`The user input is ${userInput}`);


})