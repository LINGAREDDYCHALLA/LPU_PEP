// Create display
const display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.style.width = "220px";
display.style.height = "40px";
display.style.fontSize = "20px";
display.style.marginBottom = "10px";

// Create container
const container = document.createElement("div");
container.style.width = "240px";
container.style.margin = "100px auto";
container.style.textAlign = "center";

// Buttons
const buttons = [ 
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",
  "C","redy"
];

// Function to handle clicks
function handleClick(value){
    if(value === "C"){
        display.value = "";
    } else if(value === "="){
        try{
            display.value = eval(display.value);
        }catch{
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}
//Create buttons
buttons.forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.width = "50px";
    btn.style.height = "40px";
    btn.style.margin = "5px";
    btn.style.fontSize = "18px";
    btn.onclick = () => handleClick(text);
    container.appendChild(btn);
});

// Add to page
container.prepend(display);
document.body.appendChild(container);
