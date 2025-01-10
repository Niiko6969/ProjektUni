// Event-Daten mit Kürzeln
const events = {
    "2024-11-05": ["Bücherr.", "Raumb."],
    "2024-11-12": ["Seminar"],
    "2024-11-13": ["Workshop"],
    "2024-11-14": ["Gastvortrag"],
    "2024-11-20": ["Bücherr."],
    "2024-11-22": ["Raumb."],
    "2024-11-28": ["Dokab."], // Kürzel für Dokumentenabgabe
    "2024-11-30": ["Jahresabschl."]
};

// Detaillierte Informationen für die einzelnen Ereignisse
const eventDetails = {
    "2024-11-05": [
        {
            title: "Bücherrückgabe",
            description: "Bitte alle entliehenen Bücher bis zu diesem Datum zurückgeben.",
            location: "Bibliothek, 2. Stock",
            time: "09:00 - 17:00",
            author: "Bibliothekar"
        },
        {
            title: "Raumbuchung",
            description: "Raum 202 ist für eine Besprechung reserviert.",
            location: "Raum 202",
            time: "10:00 - 11:00",
            author: "Raummanager"
        }
    ],
    "2024-11-12": [{
        title: "Seminar: Moderne Technologien",
        description: "Ein Seminar über die neuesten Trends in der Technologie.",
        location: "Konferenzraum A",
        time: "14:00 - 16:00",
        author: "Dr. Müller"
    }],
    "2024-11-13": [{
        title: "Workshop: Einführung in das Projektmanagement",
        description: "Ein praktischer Workshop, um Projektmanagement-Fähigkeiten zu entwickeln.",
        location: "Raum 303",
        time: "13:00 - 15:00",
        author: "Frau Schmidt"
    }],
    "2024-11-14": [{
        title: "Gastvortrag: Innovative Ansätze im Bildungsbereich",
        description: "Ein Gastredner spricht über neue Ansätze im Bildungswesen.",
        location: "Auditorium",
        time: "18:00 - 20:00",
        author: "Prof. Meyer"
    }],
    "2024-11-20": [{
        title: "Bücherrückgabe",
        description: "Bitte alle entliehenen Bücher bis zu diesem Datum zurückgeben.",
        location: "Bibliothek, 2. Stock",
        time: "09:00 - 17:00",
        author: "Bibliothekar"
    }],
    "2024-11-22": [{
        title: "Raumbuchung",
        description: "Raum 101 steht für eine Besprechung zur Verfügung.",
        location: "Raum 101",
        time: "11:00 - 12:00",
        author: "Raummanager"
    }],
    "2024-11-28": [{
        title: "Dokumentenabgabe",
        description: "Abgabe von wichtigen Dokumenten für das Projekt.",
        location: "Büro 101",
        time: "12:00 - 13:00",
        author: "Projektleiter"
    }],
    "2024-11-30": [{
        title: "Jahresabschlussbesprechung",
        description: "Jahresabschlussbesprechung mit dem gesamten Team.",
        location: "Konferenzraum C",
        time: "10:00 - 12:00",
        author: "Herr Maier"
    }]
};

const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
];

const calendar = document.getElementById("calendar");
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");

let currentDate = new Date();

// Monat und Jahr in Dropdown-Menüs initialisieren
function initializeSelectors() {
    monthNames.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    const currentYear = currentDate.getFullYear();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

// Kalender anzeigen
function renderCalendar() {
    calendar.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Leere Felder für Tage vor dem ersten Tag des Monats
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement("div");
        calendar.appendChild(emptyDiv);
    }

    // Tage des Monats
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;

        // Ereignisse für das jeweilige Datum anzeigen
        if (events[date]) {
            events[date].forEach(event => {
                const button = document.createElement("button");
                button.className = "event-button";
                button.textContent = event;
                button.onclick = () => showEventDetails(date, event);
                dayDiv.appendChild(button);
            });
        }

        calendar.appendChild(dayDiv);
    }

    monthSelect.value = month;
    yearSelect.value = year;
}

// Ereignisdaten anzeigen
function showEventDetails(date, event) {
    const detailsArray = eventDetails[date];
    const detail = detailsArray.find(e => e.title === getFullEventTitle(event));

    if (detail) {
        document.getElementById("event-title").textContent = detail.title;
        document.getElementById("event-description").textContent = detail.description;
        document.getElementById("event-location").textContent = "Ort: " + detail.location;
        document.getElementById("event-time").textContent = "Uhrzeit: " + detail.time;
        document.getElementById("event-author").textContent = "Autor: " + detail.author;
        document.getElementById("event-details").style.display = "block";
    } else {
        document.getElementById("event-details").style.display = "none";
    }
}

// Hilfsfunktion zum Erhalten des vollständigen Titels basierend auf dem Kürzel
function getFullEventTitle(shortTitle) {
    switch (shortTitle) {
        case "Bücherr.": return "Bücherrückgabe";
        case "Raumb.": return "Raumbuchung";
        case "Seminar": return "Seminar: Moderne Technologien";
        case "Workshop": return "Workshop: Einführung in das Projektmanagement";
        case "Gastvortrag": return "Gastvortrag: Innovative Ansätze im Bildungsbereich";
        case "Dokab.": return "Dokumentenabgabe";
        case "Jahresabschl.": return "Jahresabschlussbesprechung";
        default: return "";
    }
}

// Monat ändern
document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Auswahl ändern
monthSelect.addEventListener("change", () => {
    currentDate.setMonth(parseInt(monthSelect.value));
    renderCalendar();
});

yearSelect.addEventListener("change", () => {
    currentDate.setFullYear(parseInt(yearSelect.value));
    renderCalendar();
});

// Initialisierung
initializeSelectors();
renderCalendar();
