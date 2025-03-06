document.addEventListener("DOMContentLoaded", function () {
    // Recupero degli elementi dal DOM
    const form = document.getElementById("modulo-utente");
    const pulsanteGenera = document.getElementById("bottone-invia");
    const campoNome = document.getElementById("nome");
    const campoCognome = document.getElementById("cognome");
    const campoEta = document.getElementById("eta"); 
    const campoDestinazione = document.getElementById("destinazione");
    const sezioneRisultato = document.getElementById("risultato"); 
    const campoDestinazionePrezzo = document.getElementById("destinazione-prezzo");
    const campoPrezzoFinale = document.getElementById("prezzo-finale");
    
    // Selezione della card del biglietto
    const biglietto = document.getElementById("biglietto");
    const campoNomePasseggero = document.getElementById("nome-passeggero");
    const campoCognomePasseggero = document.getElementById("cognome-passeggero");
    const campoCostoBiglietto = document.getElementById("costo-biglietto");

    // Prezzo e sconti
    const prezzoPerKm = 0.21;
    const scontoMinorenne = 0.20;
    const scontoOver65 = 0.40;

    // Aggiungo l'evento click al pulsante Genera
    pulsanteGenera.addEventListener("click", function (event) {
        event.preventDefault(); // Impedisce il ricaricamento della pagina

        // Raccolta dei dati dal form
        const nome = campoNome.value;
        const cognome = campoCognome.value;
        const eta = parseInt(campoEta.value);
        const destinazioneSelezionata = campoDestinazione.options[campoDestinazione.selectedIndex]; 
        const chilometri = parseInt(destinazioneSelezionata.dataset.km);

        // Controllo dei dati inseriti
        if (nome === "" || cognome === "" || isNaN(eta)) {
            alert("Errore: Inserisci i dati richiesti!");
            return;
        }

        // Calcolo del prezzo base del biglietto
        let prezzoTotale = chilometri * prezzoPerKm;

        // Applicazione degli sconti in base all'età
        if (eta < 18) {
            prezzoTotale -= prezzoTotale * scontoMinorenne; 
        } else if (eta >= 65) {
            prezzoTotale -= prezzoTotale * scontoOver65; 
        }

        // Prezzo finale con due decimali
        prezzoTotale = prezzoTotale.toFixed(2);

        // Inserisco i dati negli span vuoti
        campoDestinazionePrezzo.textContent = destinazioneSelezionata.textContent;
        campoPrezzoFinale.textContent = prezzoTotale;

        // Aggiorno la card del biglietto con le informazioni
        campoNomePasseggero.textContent = nome;
        campoCognomePasseggero.textContent = cognome;
        campoCostoBiglietto.textContent = prezzoTotale;

        // Rimuovo la classe "d-none" per mostrare il risultato e la card
        sezioneRisultato.classList.remove("d-none");
        biglietto.classList.remove("d-none");
    });
});