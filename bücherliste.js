//Bücher dynamisch reinladen
// Ein Array, das die Informationen der Bücher enthält
//am besten wäre eine datenbank
//viele Objekte als showcase der Funktion
const books = [
  {
    title: "Eine kurze Geschichte der Zeit",
    author: "Stephen Hawking",
    publicationDate: "2022",
    topic: "Physik",
    description:
      "Eine Einführung in die modernen Physik, die Themen wie Schwarze Löcher und die Struktur des Universums behandelt.",
    status: "Nicht Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/eine_kurze_geschichte_der_zeit.jpg",

    //für detailansicht
    publisher: "Rowohlt Verlag",
    pageCount: 256,
    ISBN: "978-3499191218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Die Struktur wissenschaftlicher Revolutionen",
    author: "Thomas S. Kuhn",
    publicationDate: "1962",
    topic: "Wissenschaftstheorie",
    description:
      "Eine Analyse der Entwicklung wissenschaftlicher Paradigmen und der Rolle von Paradigmenwechseln in der Wissenschaft.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/die_struktur_wissenschaftlicher_revolutionen.jpg",

    //für detailansicht
    publisher: "Suhrkamp",
    pageCount: 278,
    ISBN: "978-3518273578",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Das egoistische Gen",
    author: "Richard Dawkins",
    publicationDate: "2015",
    topic: "Biologie",
    description:
      "Eine Untersuchung der Evolution aus der Perspektive der Gene und der natürlichen Selektion.",
    status: "Nicht Verfügbar",
    cover: "C:/Drittes Semester/WebPrg/HTLM/Bilder/das_selbstsuechtige_gen.jpg",

    //für detailansicht
    publisher: "Springer",
    pageCount: 403,
    ISBN: "978-3499881218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },

  {
    title: "Eine kurze Geschichte der Zeit",
    author: "Stephen Hawking",
    publicationDate: "1988",
    topic: "Physik",
    description:
      "Eine Einführung in die modernen Physik, die Themen wie Schwarze Löcher und die Struktur des Universums behandelt.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/eine_kurze_geschichte_der_zeit.jpg",

    //für detailansicht
    publisher: "Rowohlt Verlag",
    pageCount: 256,
    ISBN: "978-3499191218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Die Struktur wissenschaftlicher Revolutionen",
    author: "Thomas S. Kuhn",
    publicationDate: "1962",
    topic: "Wissenschaftstheorie",
    description:
      "Eine Analyse der Entwicklung wissenschaftlicher Paradigmen und der Rolle von Paradigmenwechseln in der Wissenschaft.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/die_struktur_wissenschaftlicher_revolutionen.jpg",

    //für detailansicht
    publisher: "Suhrkamp",
    pageCount: 278,
    ISBN: "978-3518273578",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Das egoistische Gen",
    author: "Richard Dawkins",
    publicationDate: "1976",
    topic: "Biologie",
    description:
      "Eine Untersuchung der Evolution aus der Perspektive der Gene und der natürlichen Selektion.",
    status: "Verfügbar",
    cover: "C:/Drittes Semester/WebPrg/HTLM/Bilder/das_selbstsuechtige_gen.jpg",

    //für detailansicht
    publisher: "Springer",
    pageCount: 403,
    ISBN: "978-3499881218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Eine kurze Geschichte der Zeit",
    author: "Stephen Hawking",
    publicationDate: "1988",
    topic: "Physik",
    description:
      "Eine Einführung in die modernen Physik, die Themen wie Schwarze Löcher und die Struktur des Universums behandelt.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/eine_kurze_geschichte_der_zeit.jpg",

    //für detailansicht
    publisher: "Rowohlt Verlag",
    pageCount: 256,
    ISBN: "978-3499191218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Die Struktur wissenschaftlicher Revolutionen",
    author: "Thomas S. Kuhn",
    publicationDate: "1962",
    topic: "Wissenschaftstheorie",
    description:
      "Eine Analyse der Entwicklung wissenschaftlicher Paradigmen und der Rolle von Paradigmenwechseln in der Wissenschaft.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/die_struktur_wissenschaftlicher_revolutionen.jpg",

    //für detailansicht
    publisher: "Suhrkamp",
    pageCount: 278,
    ISBN: "978-3518273578",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Das egoistische Gen",
    author: "Richard Dawkins",
    publicationDate: "1976",
    topic: "Biologie",
    description:
      "Eine Untersuchung der Evolution aus der Perspektive der Gene und der natürlichen Selektion.",
    status: "Verfügbar",
    cover: "C:/Drittes Semester/WebPrg/HTLM/Bilder/das_selbstsuechtige_gen.jpg",

    //für detailansicht
    publisher: "Springer",
    pageCount: 403,
    ISBN: "978-3499881218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Eine kurze Geschichte der Zeit",
    author: "Stephen Hawking",
    publicationDate: "1988",
    topic: "Physik",
    description:
      "Eine Einführung in die modernen Physik, die Themen wie Schwarze Löcher und die Struktur des Universums behandelt.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/eine_kurze_geschichte_der_zeit.jpg",

    //für detailansicht
    publisher: "Rowohlt Verlag",
    pageCount: 256,
    ISBN: "978-3499191218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Die Struktur wissenschaftlicher Revolutionen",
    author: "Thomas S. Kuhn",
    publicationDate: "1962",
    topic: "Wissenschaftstheorie",
    description:
      "Eine Analyse der Entwicklung wissenschaftlicher Paradigmen und der Rolle von Paradigmenwechseln in der Wissenschaft.",
    status: "Verfügbar",
    cover:
      "C:/Drittes Semester/WebPrg/HTLM/Bilder/die_struktur_wissenschaftlicher_revolutionen.jpg",

    //für detailansicht
    publisher: "Suhrkamp",
    pageCount: 278,
    ISBN: "978-3518273578",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
  {
    title: "Das egoistische Gen",
    author: "Richard Dawkins",
    publicationDate: "1976",
    topic: "Biologie",
    description:
      "Eine Untersuchung der Evolution aus der Perspektive der Gene und der natürlichen Selektion.",
    status: "Verfügbar",
    cover: "C:/Drittes Semester/WebPrg/HTLM/Bilder/das_selbstsuechtige_gen.jpg",

    //für detailansicht
    publisher: "Springer",
    pageCount: 403,
    ISBN: "978-3499881218",
    language: "Deutsch",

    //individueller Reservierungsstatus für den User
    reserved: false,
  },
];

// Filter-Zeitraum dropdown
const dropdowns = document.querySelectorAll(".zeitraum");

let selectedTimePeriod = "Alle Zeiträume"; // Variable für den ausgewählten Zeitraum
let currentBooks = books; // Variable, um die aktuell geladenen Bücher zu speichern

// Checkbox für die Filterung hinzufügen
const filterAvailableCheckbox = document.getElementById("filter-available");

// Event-Listener für die Checkbox
filterAvailableCheckbox.addEventListener("change", () => {
  loadFilteredBooks(); // Lade die Bücher basierend auf dem Status der Checkbox
});

dropdowns.forEach((zeitraum) => {
  const select = zeitraum.querySelector(".select");
  const caret = zeitraum.querySelector(".caret");
  const content = zeitraum.querySelector(".zeitraum-content");
  const options = content.querySelectorAll("li");
  const selected = select.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("caret-clicked");
    caret.classList.toggle("caret-rotate");
    content.classList.toggle("zeitraum-content-open");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
      content.style.display = "none";

      selectedTimePeriod = option.innerText; // Aktualisiere den ausgewählten Zeitraum
      loadFilteredBooks(); // Lade die Bücher basierend auf dem ausgewählten Zeitraum
    });
  });
});

//Max. Anzahl an Objekten, die gleichzeitig angezeigt werden anfangs
// Variablen zur Verwaltung des Ladens
let currentIndex = 0; // Aktueller Index der geladenen Bücher
const itemsPerLoad = 6; // Anzahl der Bücher, die beim Laden angezeigt werden
const bookListContainer = document.querySelector(".book-list-container ul");
const loadMoreButton = document.getElementById("load-more");
const MainTitel = document.querySelector(".BücherlisteÜberschrift");

// Funktion zum Laden der Bücher
function loadBooks(booksToLoad) {
  // Berechnung des nächsten Index
  const endIndex = Math.min(currentIndex + itemsPerLoad, booksToLoad.length);
  //reinladen der bücher
  for (let i = currentIndex; i < endIndex; i++) {
    const book = booksToLoad[i];

    // Erstellen eines neuen <li>-Elements für jedes Buch
    const bookItem = document.createElement("li");
    bookItem.className = "book-item"; // Klasse für das <li>-Element hinzufügen

    // Dynamische Klassen für den Status setzen
    const statusClass =
      book.status === "Verfügbar"
        ? "Status-Verfügbar"
        : "Status-Nicht-Verfügbar";

    // Hinzufügen des Buchinhalts in HTML-Form in das <li>-Element
    bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Buchcover"> <!-- Buchcover-Bild -->
            <div class="book-info"> <!-- Container für Buchinformationen -->
                <div class="book-title">${book.title}</div> <!-- Titel des Buches -->
                <div class="book-author">Autor: ${book.author}</div> <!-- Autor des Buches -->
                <div class="book-publication-date">Veröffentlicht: ${book.publicationDate}</div> <!-- Veröffentlichungsdatum -->
                <div class="book-topic">Thema: ${book.topic}</div> <!-- Thema -->
                <div class="book-description">${book.description}</div> <!-- Beschreibung des Buches -->
                <div class="book-status ${statusClass}">${book.status}</div> <!-- Verfügbarkeit -->
            </div>
            <div class="book-details"> <!-- Container für zusätzliche Buchdetails -->
                <i class="fas fa-file-pdf"></i> <!-- Symbol für PDF -->
                <a href="#">Kein Zugriff (PDF)</a> <!-- Link zu weiteren Informationen -->
            </div>
        `;

    // Event-Listener zum Leeren der Seite und Anzeigen der Buchdetails
    bookItem.addEventListener("click", () => {
      clearPage(); // Seite leeren
      showBookDetails(book); // Buchdetails anzeigen
    });

    // Hinzufügen des <li>-Elements zur <ul>-Liste im Container
    bookListContainer.appendChild(bookItem);
  }

  // Aktualisierung des aktuellen Index
  currentIndex = endIndex;

  // Load More Button ausblenden, wenn keine Bücher mehr verfügbar sind
  if (currentIndex >= booksToLoad.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block"; // Button anzeigen, wenn es noch mehr Bücher gibt
  }
}

// Funktion zum Leeren der Seite
function clearPage() {
  bookListContainer.innerHTML = ""; // Buchliste leeren
  loadMoreButton.style.display = "none"; // mehr laden button ausblenden
  MainTitel.style.display = "none"; // Überschrift ausblenden
}

// Funktion zur Anzeige der Buchdetails
function showBookDetails(book) {
  // Setze die Buchdetails in der Detailansicht
  const detailView = document.createElement("div");
  detailView.className = "book-detail-view";
  const statusClass =
    book.status === "Verfügbar" ? "Status-Verfügbar" : "Status-Nicht-Verfügbar"; // Statusklasse definieren

  // Button-HTML abhängig vom Status definieren
  const borrowButtonHTML =
    book.status === "Verfügbar"
      ? `<button id="ausleihen" class="ausleihen">Buch ausleihen</button>`
      : `<button id="ausleihen-grey" class="ausleihen" disabled;">Buch ausleihen</button>`;

  detailView.innerHTML = `
        <div>
            <img src="${book.cover}" alt="Buchcover" />
            <button id="close-detail">Zurück zur Liste</button>
            ${borrowButtonHTML} <!-- Ausleih-Button, abhängig vom Status -->
        </div>
        <div class="book-details-text">
            <h2>${book.title}</h2>
            <div class="book-info-section">
                <h4>Autor:</h4>
                <p>${book.author}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Beschreibung:</h4>
                <p>${book.description}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Veröffentlichungsdatum:</h4>
                <p>${book.publicationDate}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Verlag:</h4>
                <p>${book.publisher}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Seitenanzahl:</h4>
                <p>${book.pageCount}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>ISBN:</h4>
                <p>${book.ISBN}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Sprache:</h4>
                <p>${book.language}</p>
            </div>
            <hr>
            <div class="book-info-section">
                <h4>Status:</h4>
                <p class="${statusClass}">${book.status}</p> <!-- Status mit Klasse -->
            </div>
        </div>
    `;

  // Füge die Detailansicht hinzu
  bookListContainer.appendChild(detailView);

  // Event-Listener für den Ausleihen-Button, nur wenn das Buch verfügbar ist
  if (book.status === "Verfügbar") {
    const ausleihenButton = detailView.querySelector("#ausleihen");
    ausleihenButton.addEventListener("click", () => {
      showBorrowPopup(); // Popup anzeigen

      // Speichern des aktuellen Buchobjekts in localStorage unter der ISBN
      const bookKey = `book_${book.ISBN}`;
      localStorage.setItem(bookKey, JSON.stringify(book)); // Speichert das Buchobjekt
      console.log(
        `Buch "${book.title}" mit ISBN ${book.ISBN} wurde gespeichert.`
      );

      // Optional: Button deaktivieren oder Status nach dem Ausleihen ändern
      ausleihenButton.disabled = true;
      ausleihenButton.textContent = "Buch ausgeliehen";
    });
  }

  // Event-Listener für den Zurück-Button
  detailView.querySelector("#close-detail").addEventListener("click", () => {
    displayBooks(); // Buchliste wieder anzeigen
    checkBooks();
    MainTitel.style.display = "block"; // Überschrift wieder einblenden
  });
}

// Funktion zur Anzeige der Bücher
function displayBooks() {
  clearPage(); // Buchliste leeren
  currentIndex = 0; // Setze den Index zurück
  loadBooks(currentBooks); // Lade die Bücher erneut
}

// Funktion zum Laden der gefilterten Bücher
function loadFilteredBooks() {
  currentBooks = filterBooksByTimePeriod(books, selectedTimePeriod); // Filtere die Bücher
  if (filterAvailableCheckbox.checked) {
    currentBooks = currentBooks.filter((book) => book.status === "Verfügbar"); // Filtere nach Verfügbarkeit
  }
  currentIndex = 0; // Zurücksetzen des Index
  clearPage(); // Leere die Buchliste
  loadBooks(currentBooks); // Lade die gefilterten Bücher
}

// Filter-Funktion nach Zeitraum
function filterBooksByTimePeriod(books, timePeriod) {
  const currentYear = new Date().getFullYear();
  let minYear;

  switch (timePeriod) {
    case "Vergangene 12 Monate":
      minYear = currentYear - 1;
      break;
    case "Vergangene 2 Jahre":
      minYear = currentYear - 2;
      break;
    case "Vergangene 5 Jahre":
      minYear = currentYear - 5;
      break;
    case "Vergangene 10 Jahre":
      minYear = currentYear - 10;
      break;
    default:
      return books; // Alle Zeiträume: Alle Bücher anzeigen
  }

  return books.filter((book) => parseInt(book.publicationDate) >= minYear);
}

// Überprüfe, ob mehr Bücher vorhanden sind
function checkBooks() {
  // Anfänglich den Button anzeigen, wenn es mehr Bücher gibt
  if (currentBooks.length > itemsPerLoad) {
    loadMoreButton.style.display = "block";
  } else {
    loadMoreButton.style.display = "none";
  }
}

// Initiales Laden der ersten Bücher
loadBooks(books);

// Event-Listener für den Button "Weitere Ergebnisse laden"
loadMoreButton.addEventListener("click", () => {
  loadBooks(currentBooks); // Lade mehr Bücher basierend auf den aktuell gefilterten Büchern
});

// Initial den Button laden
checkBooks();

// Löscht den gesamten localStorage beim Laden der Seite
window.addEventListener("load", () => {
  localStorage.clear();
  console.log("localStorage wurde beim Laden der Seite geleert.");
});
