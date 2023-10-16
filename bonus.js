// bonus

console.log('griglia');
// - recupero la griglia dal DOM
const gridDOMElement = document.querySelector('.grid-container');
console.log(gridDOMElement);

// - recupero il bottone dal DOM
const btnPlayDOMElement = document.getElementById('play-btn');
console.log(btnPlayDOMElement);





btnPlayDOMElement.addEventListener('click', function(){    
    // - recupero gli elementi della select dal DOM 
    const difficultyDOMElement = document.getElementById('difficulty');
    const value = difficultyDOMElement.options[difficultyDOMElement.selectedIndex].value;
    console.log(value);
    
    if (value ==='easy') {
        gridGenerator(100, '')
        gridDOMElement.classList.add('border-easy');

    } else if (value === 'normal') {
        gridGenerator(81, 'medium-difficulty')
        gridDOMElement.classList.add('border-normal');
    } else if (value === 'hard') {
        gridGenerator(49, 'hard-difficulty')
        gridDOMElement.classList.add('border-hard');
    }   
        
    // - recupero gli elementi generati precedentemente dal DOM 
    const gridItemDOMElements = document.querySelectorAll('.grid-item');
    console.log(gridItemDOMElements);

    // - creo un ciclo for per assegnare un evento click alla cella che vado a premere 
    for (i = 0; i < gridItemDOMElements.length; i++) {

        const currentitemElements = gridItemDOMElements[i];
        console.log(currentitemElements);
        const bombs = getArrayOfRandomIntBetween(1,100,16);
        console.log(bombs[i])

        currentitemElements.addEventListener('click', function () {

            if (currentitemElements.innerHTML.includes(bombs)) {

                currentitemElements.classList.add('red-cell');

            } else if (!currentitemElements.innerHTML.includes(bombs)) {

                currentitemElements.classList.add('cyan-cell');
                
            }

            console.log('ho cliccato sulla casella ' + currentitemElements.innerHTML);        

        })

    }
})

function gridGenerator(numCells, classCell) {
    const gridDOMElement = document.querySelector('.grid-container');
    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('border-grid', 'border-normal', 'border-hard'); 
      

    for (let i = 0; i < numCells; i++) {
        const n = i + 1;      
    
        const htmlCell = `<div class="grid-item ${classCell}">${n}</div>`;        
        gridDOMElement.innerHTML += htmlCell;
    }
}


// bombe
// const bombs = getArrayOfRandomIntBetween(1,100,16);
// console.log(bombs)


function getArrayOfRandomIntBetween(min,max,number) {
    const bombsArray = []

    // popolare l'array con i numeri indicati in 'number'
    while(bombsArray.length < number) {
        //generare numeri random che vanno da un minimo (min) ad un massimo (max)
       const n = getRandomIntInclusive(min,max)
       //Se n non è presente nell'array
       console.log(bombsArray.includes(n), n)
       if(bombsArray.includes(n) === false) {
           //pushare in numero nell'array
            bombsArray.push(n)
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
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}



