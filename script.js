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


    // creiamo la variabile dove poi aggiungeremo il prezzo selezionato nella condizionale
    let finalPrice
    

    // condizione scontistiche (under 18 / over 65)
    if (userAge < 18){
        // console.log(fullPrice * (1 - 20 / 100))
        finalPrice = fullPrice * (1 - 20 / 100)

    } else if (userAge > 65){
        // console.log(fullPrice * (1 - 40 / 100))
        finalPrice = fullPrice * (1 - 40 / 100)
        
    } else {
        finalPrice = fullPrice 
    
    }

    // stampiamo i prezzi con massimo 2 decimali (creando una nuova variabile)
    // usando il metodo .toFixed() 
    // --> questo ci servirà per aggiungerli successivamente nella card finale che l'utente vedrà
    // adoperiamo Number() per rendere i numeri dei valori numerici e non più delle stringhe

    // prezzo under 18 (-20%)
    let finalResult = Number(finalPrice).toFixed(2)
    

    // selezioniamo i nodi del dom della card biglietto 
    const numero = document.querySelector('.numero')
    const prezzo = document.querySelector('.prezzo')
    const posto = document.querySelector('.posto')
    const carrozza = document.querySelector('.carrozza')

    // generiamo dei numeri casuali per il biglietto
    let postoCasuale = Math.floor((Math.random() * 30) + 1)
    let carrozzaCasuale = Math.floor((Math.random() * 12) + 1)
    let numeroCasuale = Math.floor((Math.random() * 10000) + 1000)

    numero.innerText = numeroCasuale
    prezzo.innerText = `${finalResult} €`
    posto.innerText = `${postoCasuale}B`
    carrozza.innerText = carrozzaCasuale
    

})


