// per attendere che il documento sia completamente caricato
document.addEventListener("DOMContentLoaded", function () {
    // Recupero degli elementi dal DOM
    const form = document.getElementById("user-form");
    const pulsanteGenera = document.getElementById("submit-btn");
    const campoNome = document.getElementById("first-name");
    const campoCognome = document.getElementById("surname");
    const campoEta = document.getElementById("eta"); 
    const campoDestinazione = document.getElementById("destination");
    const sezioneRisultato = document.querySelector(".container.pt-5.d-none"); // uso querySelector perchè non ho id
    const campoDestinazionePrezzo = document.getElementById("destinazione-prezzo");
    const campoPrezzoFinale = document.getElementById("prezzo-finale");

    //  prezzo e  sconti
    const prezzoPerKm = 0.21;
    const scontoMinorenne = 0.20;
    const scontoOver65 = 0.40;

    // Aggiungo l'evento click al pulsante Genera
    pulsanteGenera.addEventListener("click", function (event) {
        event.preventDefault(); // Impedisce il ricaricamento della pagina

        //  Raccolta dei dati dal form
        const nome = campoNome.value;
        const cognome = campoCognome.value;
        const eta = parseInt(campoEta.value); // Lettura dell'età inserita
        const destinazioneSelezionata = campoDestinazione.options[campoDestinazione.selectedIndex]; 
        const chilometri = parseInt(destinazioneSelezionata.dataset.km);

        // Calcolo del prezzo base del biglietto
        let prezzoTotale = chilometri * prezzoPerKm;

        //Applicazione degli sconti in base all'età
        if (eta < 18) {
            prezzoTotale = prezzoTotale - (prezzoTotale * scontoMinorenne); 
        } else if (eta >= 65) {
            prezzoTotale = prezzoTotale - (prezzoTotale *  scontoOver65); 
        }

        // prezzo finale con due decimali
        prezzoTotale = prezzoTotale.toFixed(2);

        //  Inserisco negli span vuoti
        campoDestinazionePrezzo.textContent = destinazioneSelezionata.textContent;
        campoPrezzoFinale.textContent = prezzoTotale;

        // Rimuovo della classe "d-none" 
        sezioneRisultato.classList.remove("d-none");
    });
});