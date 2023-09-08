// Create Pickr instance

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic',
    components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
    hex: true,
    rgba: true,
    hsla: true,
    hsva: true,
    cmyk: true,
    input: true,
    clear: true,
    save: true,
}
}
});

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

// get the selected color from buttons
const  defaultBackgroundMouseOver = "lightblue"
let SELECTED_COLOR = defaultBackgroundMouseOver;
const default_button = document.querySelector(".default-color");


default_button.addEventListener("click", ()=>{
    SELECTED_COLOR = defaultBackgroundMouseOver
})

pickr.on("save", (color)=>{
    SELECTED_COLOR = color.toHEXA().toString();    
})

// Create effection to divs that the mouse over

function effect(element){
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = SELECTED_COLOR;       
    })
}

// Create a function to clear the sketch every time the player press the clear button
const clear_button = document.querySelector(".clear")

function clear(){
    UpdateSize()
}

clear_button.addEventListener("click", clear)

