
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {

    // add override element on minefield
    const minefield = document.getElementById("minefield");
    minefield.innerHTML = `<div class="box-container"></div>`;
    
    // Create counter 
    for (let i = 1; i <= 100; i++) {
        // creare elemento square
        //aggiungo i quadrati al minefield
        // const square = document.createElement("div");
        const square = createNewElement();

        //append element on box-container
        const box = document.querySelector(".box-container");
        box.appendChild(square);
        square.innerHTML = `<p class="m-auto">${i}</p>`
        
        //add eventlistener onclick
        square.addEventListener("click", function() {
            square.classList.toggle("hold");
        })
    }
})

// create functions
function createNewElement(num){
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerText = num;
    return square;
}
