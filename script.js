console.log('js-biglietto')

// creiamo le variabili per selezionare i nodi del dom 
const KmRunScript = document.getElementById('km-run')
const userAgeScript = document.getElementById('user-age')
const buttonScript = document.getElementById('button')
const formScript = document.querySelector('form')


// scriviamo la funzione usando il metodo event listeners
// aggiungiamo alla funzione il parametro (e).preventDefault()
// per eliminare il caricamento automatico della pagina
formScript.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(KmRunScript.value)
    console.log(userAgeScript.value)

})


