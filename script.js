// Funktion zur Anpassung der Schriftgröße
function adjustHeaderFontSize() {
    document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
}

// Ruf die Funktion auf, wenn die Seite geladen wird
window.onload = adjustHeaderFontSize;
// Funktion zur Prüfung der Verfügbarkeit
function checkAvailability(resourceId) {
    const isAvailable = true; // Beispielwert
    document.getElementById(`resource${resourceId}-status`).innerText = isAvailable ?
    "Verfügbar" : "Nicht verfügbar";
}
// Funktion zur Buchung der Ressource
function bookResource(resourceId, resourceName) {
    alert(`Ressource '${resourceName}' wurde gebucht!`);
}
// Funktion zum Umschalten der Veranstaltungen
function toggleEvents(eventType) {
    const eventLists = ['guest_lectures', 'seminars', 'workshops'];
    eventLists.forEach(type => {
        const list = document.getElementById(type);
        if (type === eventType) {
            list.style.display = list.style.display === "none" ? "block" : "none"; // Umschalten
        } else {
            list.style.display = "none"; // Schließen der anderen Listen
        }
    });
}