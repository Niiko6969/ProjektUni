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


//sticky navbar
// Funktion, die überprüft, ob gescrollt wird, und die Navigation sticky macht
function makeNavSticky() {
    const headercont = document.querySelector('.header-container');
    const content = document.querySelector('.main');

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