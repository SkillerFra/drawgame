const container = document.querySelector("#container");
const resize = document.getElementById("resize");
const color = document.getElementById("color");
const clear = document.getElementById("clear");


// create defaultsized grid
function createGrid (size= 16) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(i=0; i < size*size; i++) {
      const div = document.createElement("div");
      div.classList.add("div-items");
      container.appendChild(div);
      div.addEventListener("mouseenter",  () =>{
          div.style.backgroundColor = "#14ffec";
      });
      
  };
}
createGrid();


//create girdcontent delete button
function gridClear () {
  let clearGrid = document.querySelectorAll(".div-items");
  clearGrid.forEach(element =>
   element.style.backgroundColor = "#222831")
}
clear.addEventListener("click", gridClear);



// create grid resize button 
const removeGrid = () => {
  let gridItems = [...document.querySelectorAll('.div-items')];
  gridItems.forEach(element => {
      element.remove();
  });
}
resize.addEventListener("click",  () => {
  removeGrid();
  let size
   do {
     size = parseInt(prompt("Choose a number from 1 to 128 to size your grid!"));
   }while (size < 0 || size > 129);
   createGrid(size);
})


//create random color button
let randomColorPick = () => {
  return '#' + (Math.random().toString(16) + "000000").substring(2,8)
}

function randomColor () {
  let c = document.querySelectorAll(".div-items");
  c.forEach(element => {
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = randomColorPick() ;
    })
  });
}


color.addEventListener("click", () => {
  randomColor(); 
});


