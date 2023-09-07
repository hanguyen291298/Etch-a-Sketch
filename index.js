let grid_r = 16;
let grid_c = 16;
const GRID_CONTAINER = document.querySelector(".grid-container");


for (let i = 1; i <= grid_r; i++){
    let grid_row = document.createElement("div") 
    grid_row.classList.add("grid-row")
    GRID_CONTAINER.appendChild(grid_row)
    for(let j = 1; j <= grid_c; j++){
        let new_div = document.createElement("div");
        new_div.classList.add("grid-child");
        grid_row.appendChild(new_div);
    }
}
 

function effect(element){
    element.addEventListener("mouseover", () => {
        element.setAttribute("style", "background: lightblue;");
    });
}


const grid_child = document.querySelectorAll(".grid-child");

grid_child.forEach(element => {
    effect(element)
});
