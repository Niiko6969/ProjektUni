// Funktion zum Anzeigen des Buchausleih-Popups
function showBorrowPopup() {
    document.getElementById('popup-background').style.display = 'block'; // Hintergrund zeigen
    document.getElementById('borrow-popup').style.display = 'block'; // Popup zeigen
}

// Event-Listener für das Schließen des Popups
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup-background').style.display = 'none'; // Hintergrund ausblenden
    document.getElementById('borrow-popup').style.display = 'none'; // Popup ausblenden
});


// Event-Listener für die Ausleihdauer-Buttons
document.querySelectorAll('.borrow-duration').forEach(button => {
    button.addEventListener('click', () => {

        //var für Überschrift
        const PopupTitel = document.querySelector('.PopupÜberschrift')
        // Blende die Ausleihdauer-Buttons aus
        const borrowOptions = document.querySelector('.button-container');
        borrowOptions.style.display = 'none'; // Ausleihbuttons ausblenden
        PopupTitel.style.display = 'none'; //Überschrift ausblenden

        // Zeige die Bestätigungsnachricht
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.innerHTML = 'Sind Sie sich sicher, dass Sie dieses Buch ausleihen möchten?';
        confirmationMessage.style.display = 'block'; // Bestätigungsnachricht anzeigen

        // Erstelle einen Bestätigungsbutton
        const confirmButton = document.createElement('button');
        confirmButton.innerText = 'Bestätigen';
        confirmButton.classList.add('confirm-button'); // Klasse für die Stile hinzufügen
        confirmationMessage.appendChild(confirmButton); // Füge den Bestätigungsbutton zur Nachricht hinzu
        
        // Event-Listener für den Bestätigungsbutton
        confirmButton.addEventListener('click', () => {
            const duration = button.getAttribute('data-duration'); // Holt das Attribut für die Dauer

            // Popup für die Reservierungsbestätigung erstellen
            const confirmationPopup = document.getElementById('confirmation-popup');
            const reservationMessage = document.getElementById('reservation-message');
            reservationMessage.innerHTML = `Ihre Buchung wurde erfolgreich bestätigt! <p>
            Bitte holen Sie das Buch innerhalb der nächsten 2 Tage ab.<p>
            Die Reservierung wird nach Ablauf dieser Frist zurückgesetzt! <p>
            <u>Ausleihdauer: ${duration} Woche(n).</u> `;

            confirmationPopup.style.display = 'block'; // Zeige das Bestätigungs-Popup      


            // Popup schließen und Inhalte wieder zurücksetzen
            resetPopup();
        });

        // Event-Listener für das Schließen des Bestätigungs-Popups
        document.getElementById('close-confirmation-popup').addEventListener('click', () => {
            document.getElementById('confirmation-popup').style.display = 'none'; // Schließt das Bestätigungs-Popup
        });
    });
});






// Event-Listener für den Schließen-Button des Popups
document.getElementById('close-popup').addEventListener('click', () => {
    // Popup schließen und zurücksetzen
    resetPopup();
});

// Funktion zum Zurücksetzen des Popups
function resetPopup() {
    const PopupTitel = document.querySelector('.PopupÜberschrift');
    const borrowOptions = document.querySelector('.button-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Setze den Popup-Inhalt zurück
    PopupTitel.style.display = 'block'; // Überschrift wieder anzeigen
    borrowOptions.style.display = 'flex'; // Ausleihbuttons wieder anzeigen
    confirmationMessage.style.display = 'none'; // Bestätigungsnachricht ausblenden
    
    // Entferne den Bestätigungsbutton, falls vorhanden
    const confirmButton = confirmationMessage.querySelector('.confirm-button');
    if (confirmButton) {
        confirmationMessage.removeChild(confirmButton);
    }

    // Popup ausblenden
    document.getElementById('popup-background').style.display = 'none';
    document.getElementById('borrow-popup').style.display = 'none';
}




