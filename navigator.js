//User ausklappen
const userIcon = document.querySelector('.nav-symbol');
const userContent = document.querySelector('.user-content');
const userVerlauf = document.getElementById('Verlauf');

// Füge Event-Listener für das Klicken auf das User-Symbol hinzu
userIcon.addEventListener('click', () => {
    // Toggle die Klasse 'user-content-open' zum Ein-/Ausklappen des Menüs
    userContent.classList.toggle('user-content-open');
});

// Schließe das Dropdown, wenn außerhalb geklickt wird
document.addEventListener('click', (event) => {
    if (!userIcon.contains(event.target) && !userContent.contains(event.target)) {
        userContent.classList.remove('user-content-open');
    }
});


// Sidebar-Elemente auswählen
const sidebar = document.getElementById('sidebarVerlauf');
const sidebarContent = document.getElementById('sidebarContent');
const closeSidebarButton = document.getElementById('closeSidebar');


// Verlauf öffnen
userVerlauf.addEventListener('click', () => {

    // Sidebar öffnen
    sidebar.classList.add('open');

    const bookEntries = [];

    // Durchsuche localStorage nach allen Einträgen, die mit "book_" beginnen (ISBN-Schlüssel)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Überprüfen, ob der Schlüssel mit "book_" beginnt
        if (key.startsWith('book_')) {
            // Buchdaten abrufen und von JSON-String in ein Objekt umwandeln
            const bookData = JSON.parse(localStorage.getItem(key));
            bookEntries.push(bookData); // Füge das Buch zur Liste hinzu
        }
    }

    // Überprüfen, ob es gespeicherte Bücher gibt
    if (bookEntries.length > 0) {
        // Erstelle HTML für jedes Buch und füge es zur Sidebar hinzu
        bookEntries.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book-entry';
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Ausleihdauer:</strong> ${book.duration || 'Nicht angegeben'} Woche(n)</p>
                <p><strong>ISBN:</strong> ${book.ISBN}</p>
                <hr>
            `; //book duration kann nicht richtig angegeben werden
            sidebarContent.appendChild(bookDiv);
        });
    } else {
        // Keine Bücher im Verlauf
        sidebarContent.innerHTML = "<p>Keine Buchreservierung im Verlauf gefunden.</p>";
    }
});

// Sidebar schließen
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Sidebar ausblenden
});

//sticky navbar
// Funktion, die überprüft, ob gescrollt wird, und die Navigation sticky macht
function makeNavSticky() {
    const headercont = document.querySelector('.header-container');
    const content = document.querySelector('main');

    window.addEventListener('scroll', () => {
        if (window.scrollY > headercont.offsetTop) {
            headercont.classList.add('sticky'); // Klasse hinzufügen, wenn gescrollt wird
            content.style.paddingTop = `${headercont.offsetHeight}px`; // Höhe der Navigation berücksichtigen
        } else {
            headercont.classList.remove('sticky'); // Klasse entfernen, wenn oben
            content.style.paddingTop = '0'; // Wenn nicht sticky, padding zurücksetzen
        }
    });
}

// Aufrufen, wenn Seite geladen ist
document.addEventListener('DOMContentLoaded', makeNavSticky);