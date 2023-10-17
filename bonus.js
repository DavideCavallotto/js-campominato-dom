// bonus

console.log('griglia');
// - recupero la griglia dal DOM
const gridDOMElement = document.querySelector('.grid-container');
console.log(gridDOMElement);

// - recupero il bottone dal DOM
const btnPlayDOMElement = document.getElementById('play-btn');
console.log(btnPlayDOMElement);

// - recupero in counter dal DOM
let counterDOMElement = document.querySelector('.counter');
console.log(counterDOMElement);
console.log(counterDOMElement,'punti');

let counter = 0;

btnPlayDOMElement.addEventListener('click', function(){    
    // - recupero gli elementi della select dal DOM 
    const difficultyDOMElement = document.getElementById('difficulty');
    const value = difficultyDOMElement.options[difficultyDOMElement.selectedIndex].value;
    console.log(value);
    let numberOfCell;

    if (value ==='easy') {
        numberOfCell = 100;
        gridGenerator(numberOfCell, '');
        gridDOMElement.classList.add('border-easy');

    } else if (value === 'normal') {
        numberOfCell = 81;
        gridGenerator(numberOfCell, 'medium-difficulty');
        gridDOMElement.classList.add('border-normal');
    } else if (value === 'hard') {
        numberOfCell = 49;
        gridGenerator(numberOfCell, 'hard-difficulty');
        gridDOMElement.classList.add('border-hard');
    }   
        
    // - recupero gli elementi generati precedentemente dal DOM 
    const gridItemDOMElements = document.querySelectorAll('.grid-item');
    
    // - creo un ciclo for per assegnare un evento click alla cella che vado a premere 
    const bombs = getArrayOfRandomIntBetween(1,numberOfCell,16);
    for (let i = 0; i < gridItemDOMElements.length; i++) {
        
        const currentitemElements = gridItemDOMElements[i];       
                        
        currentitemElements.addEventListener('click', function () {
            const cellNumber = parseInt(currentitemElements.innerHTML);
            if (bombs.includes(cellNumber)) {

                currentitemElements.classList.add('red-cell');                               
                gridDOMElement.classList.add('end-game');
                alert('Hai perso ' + (counterDOMElement.innerHTML = 'Hai totalizzato: ' + counter + ' Punti'));
            } else {

                currentitemElements.classList.add('cyan-cell');
                counter++;                
                
                counterDOMElement.innerHTML = 'Punti: ' + counter;            
            }

            console.log('ho cliccato sulla casella ' + currentitemElements.innerHTML);                         

        })

    }    
})
// creo una funzione che mi generi la griglia
function gridGenerator(numCells, classCell) {
    const gridDOMElement = document.querySelector('.grid-container');
    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('border-grid', 'border-normal', 'border-hard'); 
    gridDOMElement.classList.remove('end-game');
    counter = 0; 
    counterDOMElement.innerHTML = '<div class="counter"></div>';   
      

    for (let i = 0; i < numCells; i++) {
        const n = i + 1;      
    
        const htmlCell = `<div class="grid-item ${classCell}">${n}</div>`;        
        gridDOMElement.innerHTML += htmlCell;
    }
}


// bombe
// const bombs = getArrayOfRandomIntBetween(1,100,16);
// console.log(bombs)

// creo una funzione che mi generi un tot di numeri 
function getArrayOfRandomIntBetween(min,max,number) {

    const bombsArray = [];

    // popolare l'array con i numeri indicati in 'number'
    while(bombsArray.length < number) {
       //generare numeri random che vanno da un minimo (min) ad un massimo (max)
       const n = getRandomIntInclusive(min,max);
       //Se n non è presente nell'array
       console.log(n);
       if(bombsArray.includes(n) === false) {
           //pushare in numero nell'array
            bombsArray.push(n);
       } 
       // potremmo anche scrivere 
       //    if(!bombsArray.includes(n)) {
       //      bombsArray.push(n)

       //     }
       // Altrimenti se n è presente nell'array dei numeri già generati, non pushera n ma ripeterà il ciclo per trovare un n non presente
    }
    
    return bombsArray
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}