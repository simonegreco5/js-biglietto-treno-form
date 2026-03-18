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

    let fullPrice = kmPrice * userKmRun
    console.log(fullPrice)

    // condizione scontistiche (under 18 / over 65)
    if (userAge < 18){
        console.log(fullPrice * (1 - 20 / 100))

    } else if (userAge > 65){
        console.log(fullPrice * (1 - 40 / 100))

    } else {
        console.log(fullPrice)

    }

})


