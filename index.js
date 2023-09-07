
// Update the size evey time the player pull the range input
const your_grid_size = document.querySelector(".your-grid-size");
const input_size = document.querySelector("#range-size");
let size = document.querySelector(".size-value"); 

 function UpdateSize(){   
    const value = input_size.value;
    your_grid_size.style.fontSize = "24px"
    size.textContent = `Grid size: ${value} x ${value}`;
    createGrid(value)
    const grid_child = document.querySelectorAll(".grid-child");
    grid_child.forEach(element => {
    effect(element)
});

 }

input_size.addEventListener("input", UpdateSize)
UpdateSize()


// create grid square 


function createGrid(size){
    const GRID_CONTAINER = document.querySelector(".grid-container");
    GRID_CONTAINER.innerHTML = '';
    for (let i = 1; i <= size; i++){
        let grid_row = document.createElement("div") 
        grid_row.classList.add("grid-row")
        GRID_CONTAINER.appendChild(grid_row)
        for(let j = 1; j <= size; j++){
            let new_div = document.createElement("div");
            new_div.classList.add("grid-child");
            new_div.setAttribute("style", `width: ${640/size}px; height: ${640/size}px;`)
            grid_row.appendChild(new_div);
        }
    }
}


// Create effection to divs that the mouse over

function effect(element){
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "lightblue";
    });
}


