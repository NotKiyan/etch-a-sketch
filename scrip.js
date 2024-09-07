const gridContainer = document.getElementsByClassName("grid-container");
const gridSize = document.getElementById('grid-size');
const eraserButton = document.getElementById('eraze');
let input = 0;
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
                cell.style.backgroundColor = "black";
            });
        }
    }
}
createGrid(16);
function userinput() {
    document.getElementById("grid-size").addEventListener("click", () => {
        input = parseInt(prompt("Enter the grid size"));
        if(input>99 || input <0){
            alert("Please enter a valid number between 0 and 99");
        }else {
            gridContainer[0].innerHTML = '';
            createGrid(input);
        }
        
    });
}


function reset(){
        document.getElementById('clear').addEventListener('click',()=>{
            gridContainer[0].innerHTML = '';
            if(input==0){
                createGrid(16);
            }else{
                createGrid(input);
            }
        
    });
}



eraserButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'white';
      });
    });
  });

userinput();
reset();


