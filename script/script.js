const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
    let clicked = []; //array caselle cliccate
    points = 0;
    const squareDimension = 100;
    const numOfBombs = 16;
    const bombs = [];
    let gameOver = false;
    for (let i =  0; i < numOfBombs; i++) {
        bombs.push(getRandomUniqueNumber(bombs, 1, squareDimension));
    };

    // add override element on minefield
    const minefield = document.getElementById("minefield");
    minefield.innerHTML = `<div class="box-container"></div>`;
    
    // Create counter 
    for (let i = 1; i <= squareDimension; i++) {
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
            // se clicchi su una bomba - game over
            if (!gameOver){
                if (bombs.includes(i)){
                    square.classList.add("hold", "bomb");
                    gameOver = true;
                } else {
                    square.classList.toggle("hold");
                    clicked.push(i);
                    points++;
                }
            } else {
                console.log("Game Over");
            }
            console.log(points);
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

function getRandomNumber(numMin, numMax) {
    if (numMin === numMax) {
        return numMax;
    }
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}


function getRandomUniqueNumber(blackList, min, max) {
    let isValid = false;
    let randomNum;

    //  # finché non trovo un numero valido
    while (isValid === false) {
        // # genero un nuovo numero randomico nell'intervallo richiesto
        randomNum = getRandomNumber(min, max);

        // # se non è un doppione
        if (!blackList.includes(randomNum)) {
            // # ho trovato un nuovo numero randomico nella lista
            isValid = true;
        }
    }
    // # e lo restituisco
    return randomNum;
}
