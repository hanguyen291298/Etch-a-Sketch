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

// Create Grid Square: Every time the function is called,
// it deletes the old grid square and make a new one 
// the grid square is able to show grid lines or not
// the grid square will have effection function 

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
    show_grid()   
    effect()
}

// Create a funtion to show grid lines


const toggle = document.getElementById("toggle")
 
function show_grid(){
    let type = "none"
    const grid_childs = document.querySelectorAll(".grid-child")
    if (toggle.classList.contains("active")){
        type = "ridge"
    }
    grid_childs.forEach(element => {
        element.style.borderStyle = type
    });
}

// Create effection to the switch when it's active and show grid lines

toggle.addEventListener("click", ()=>{
    if (toggle.classList.contains("active")){
        toggle.classList.remove("active")
        toggle.classList.add("off")
        show_grid()
        
    }
    else{
        toggle.classList.remove("off")
        toggle.classList.add("active")
        show_grid()
        
    }
})

// Get the selected color from buttons to apply it 
// Create effection to divs that the mouse over

const  defaultBackgroundMouseOver = "lightblue";
let SELECTED_COLOR = defaultBackgroundMouseOver;
const default_color = document.querySelector(".default-color");


default_color.addEventListener("click", ()=>{
    SELECTED_COLOR = defaultBackgroundMouseOver
})

pickr.on("save", (color)=>{
    SELECTED_COLOR = color.toHEXA().toString();    
})

function effect(){
    const grid_childs = document.querySelectorAll(".grid-child")
    grid_childs.forEach(element => {
        element.addEventListener("mouseover", ()=>{
        element.style.backgroundColor = SELECTED_COLOR;
        console.log(SELECTED_COLOR);
        });        
    })
}

  
// Update the size of grid square evey time the player pull the range input
// When we update the size , createGrid is also called

const input_size = document.querySelector("#range-size");

function UpdateSize(){  

    const current_grid_size = document.querySelector(".your-grid-size"); 
    const size = document.querySelector(".size-value"); 
    const value = input_size.value;

    current_grid_size.style.fontSize = "24px"
    size.textContent = `Grid size: ${value} x ${value}`;
    createGrid(value)
 }

input_size.addEventListener("input", UpdateSize)
UpdateSize()

// get the selected color background and change its color

const background_color = document.querySelector(".grid-container")

pickr_grid.on("save", (color)=>{
    let color_selected = color.toHEXA().toString();
    background_color.style.backgroundColor = color_selected    
})

// Create a function to clear the sketch every time the player press the clear button
// After we hit clear, it should change background color to be white
const clear_button = document.querySelector(".clear")

function clear(){
    UpdateSize()
    background_color.style.backgroundColor = "white"
}

clear_button.addEventListener("click", clear)