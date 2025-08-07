const gridContainer = document.getElementsByClassName("grid-container");
const gridSize = document.getElementById('grid-size');
const eraserButton = document.getElementById('eraze');
const colorPicker = document.getElementById('color-picker');
let input = 0;
let currentColor = '#000000'; 
let isEraserMode = false;

// Color palette 
const colors = [
    '#FF0000', '#FF4500', '#FFA500', '#FFD700', '#FFFF00',
    '#ADFF2F', '#00FF00', '#00FA9A', '#00FFFF', '#0080FF',
    '#0000FF', '#4169E1', '#8A2BE2', '#9400D3', '#FF00FF',
    '#FF1493', '#DC143C', '#B22222', '#800000', '#000000',
    '#696969', '#808080', '#A9A9A9', '#D3D3D3', '#FFFFFF'
];


function createColorPicker() {
    colors.forEach((color, index) => {
        const colorCell = document.createElement('div');
        colorCell.classList.add('color-cell');
        colorCell.style.backgroundColor = color;
        colorCell.dataset.color = color;
        
        if (index === 19) { 
            colorCell.classList.add('selected');
        }
        
        colorCell.addEventListener('click', () => {
           
            document.querySelectorAll('.color-cell').forEach(cell => {
                cell.classList.remove('selected');
            });
            
            
            colorCell.classList.add('selected');
            currentColor = color;
            isEraserMode = false; 
            
            
            eraserButton.style.backgroundColor = '#fff';
            eraserButton.style.color = '#000';
        });
        
        colorPicker.appendChild(colorCell);
    });
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        gridContainer[0].appendChild(row);
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.style.width = `${600 / size}px`;
            cell.style.height = `${600 / size}px`;
            cell.style.backgroundColor = "white";
            row.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                if (isEraserMode) {
                    cell.style.backgroundColor = "white";
                } else {
                    cell.style.backgroundColor = currentColor;
                }
            });
        }
    }
}

function userinput() {
    document.getElementById("grid-size").addEventListener("click", () => {
        input = parseInt(prompt("Enter the grid size"));
        if(input > 99 || input < 1){
            alert("Please enter a valid number between 1 and 99");
        } else {
            gridContainer[0].innerHTML = '';
            createGrid(input);
        }
    });
}

function reset(){
    document.getElementById('clear').addEventListener('click',() => {
        gridContainer[0].innerHTML = '';
        if(input == 0){
            createGrid(16);
        } else {
            createGrid(input);
        }
    });
}

eraserButton.addEventListener('click', () => {
    isEraserMode = !isEraserMode;
    if (isEraserMode) {
        eraserButton.style.backgroundColor = '#333';
        eraserButton.style.color = '#fff';
        
        document.querySelectorAll('.color-cell').forEach(cell => {
            cell.classList.remove('selected');
        });
    } else {
        eraserButton.style.backgroundColor = '#fff';
        eraserButton.style.color = '#000';

        document.querySelector(`[data-color="${currentColor}"]`).classList.add('selected');
    }
});


createColorPicker();
createGrid(16);
userinput();
reset();