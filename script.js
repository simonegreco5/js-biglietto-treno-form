console.log('js-biglietto')

// creiamo le variabili per selezionare i nodi del dom 
const kmRunScript = document.getElementById('km-run')
const userAgeScript = document.getElementById('user-age')
const buttonScript = document.getElementById('button')
const formScript = document.querySelector('form')

// dato - costante prezzo per chilometro
const kmPrice = 0.21

// scriviamo la funzione usando il metodo event listeners
// aggiungiamo alla funzione il parametro (e).preventDefault()
// per eliminare il caricamento automatico della pagina
formScript.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(kmRunScript.value)
    console.log(userAgeScript.value)

    // elaborazione dati
    let userKmRun = kmRunScript.value
    let userAge = userAgeScript.value

    // calcoliamo il prezzo senza scontistiche applicate
    let fullPrice = kmPrice * userKmRun
    console.log(fullPrice)


    // creiamo le variabili dove poi aggiungeremo i vari prezzi
    let priceUnder = ''
    let priceOver = ''

    // condizione scontistiche (under 18 / over 65)
    if (userAge < 18){
        // console.log(fullPrice * (1 - 20 / 100))
        priceUnder = fullPrice * (1 - 20 / 100)
    

    } else if (userAge > 65){
        // console.log(fullPrice * (1 - 40 / 100))
        priceOver = fullPrice * (1 - 40 / 100)

        
    } else {
        fullPrice 
    
    }

    // stampiamo i prezzi con massimo 2 decimali (creando nuove variabili)
    // usando il metodo .toFixed() 
    // --> questo ci servirà per aggiungerli successivamente nella card finale che l'utente vedrà
    // adoperiamo Number() per rendere i numeri dei valori numerici e non più delle stringhe

    // prezzo under 18 (-20%)
    let resultUnder = Number(priceUnder).toFixed(2)
    // prezzo over 65 (-40%)
    let resultOver = Number(priceOver).toFixed(2)
    // prezzo full
    let resultFull = fullPrice.toFixed(2)

    

})


