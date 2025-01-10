// Blurr beim Suchen
const searchInputs = document.querySelectorAll(".searchinput"); // Alle Eingabefelder mit der Klasse "searchinput"
const popupBackground = document.getElementById("blurr");

// Hintergrund anzeigen, wenn eines der Such-Inputs angeklickt wird
searchInputs.forEach(searchInput => {
    searchInput.addEventListener("focus", () => {
        popupBackground.style.display = "block";
    });

    // Hintergrund ausblenden, wenn das Such-Input den Fokus verliert
    searchInput.addEventListener("blur", () => {
        popupBackground.style.display = "none";
    });

    // Event-Listener für die Enter-Taste, um die Suche auszuführen
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            performSearch(); // Suchfunktion aufrufen
            event.preventDefault(); // Verhindert das Standardverhalten
        }
    });
});

// Suchlogik
function performSearch() {
    const Suchbegriff = Array.from(searchInputs).map(input => input.value.toLowerCase()).join(" "); // Alle Suchbegriffe in Kleinbuchstaben
    const bookItems = document.querySelectorAll('.book-item'); // Alle Buchobjekte auswählen

    // Durchlaufe alle Buchobjekte
    bookItems.forEach(function(item) {
        const title = item.querySelector('.book-title').textContent.toLowerCase(); // Titel des Buches in Kleinbuchstaben
        const author = item.querySelector('.book-author').textContent.toLowerCase(); // Autor des Buches in Kleinbuchstaben
        const topic = item.querySelector('.book-topic').textContent.toLowerCase(); // Beschreibung des Buches in Kleinbuchstaben

        // Überprüfe, ob der Titel, Autor oder die Beschreibung den Suchbegriff enthält
        if ((title.includes(Suchbegriff) || author.includes(Suchbegriff) || topic.includes(Suchbegriff))) {
            item.style.display = 'flex'; // Buch anzeigen, wenn es übereinstimmt
        } else {
            item.style.display = 'none'; // Buch ausblenden, wenn es nicht übereinstimmt
        }
    });

    // Hinweis: Optional kannst du eine Nachricht anzeigen, wenn keine Bücher gefunden wurden.
    const noResults = Array.from(bookItems).every(item => item.style.display === 'none');
    if (noResults) {
        alert("Keine Ergebnisse für: " + Suchbegriff);
    }
}
