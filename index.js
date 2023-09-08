// Create Pickr instances

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

const pickr_grid = Pickr.create({
    el: '.background-picker',
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

// get the selected color background and make a function to change its color

const background_color = document.querySelector(".grid-container")

pickr_grid.on("save", (color)=>{
    let color_selected = color.toHEXA().toString();
    background_color.style.backgroundColor = color_selected    
})

// Create a function to clear the sketch every time the player press the clear button
const clear_button = document.querySelector(".clear")

function clear(){
    UpdateSize()
    background_color.style.backgroundColor = "white"

}

clear_button.addEventListener("click", clear)



// create a funtion to make grid lines
const grid_lines = document.querySelectorAll(".grid-child")
function show_grid(tyle){
    grid_lines.forEach(element => {
        element.style.borderStyle = tyle
    });
}
// Create effection to the switch when it's active and show grid lines

const toggle = document.getElementById("toggle")


toggle.addEventListener("click", ()=>{
    if (toggle.classList.contains("active")){
        toggle.classList.remove("active")
        toggle.classList.add("off")
        show_grid("none")
        
    }
    else{
        toggle.classList.remove("off")
        toggle.classList.add("active")
        show_grid("ridge")
        })
    }
})

