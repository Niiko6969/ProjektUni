//Scrolling When Sidebar Open
// Disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden'; // Prevents scrolling
}

// Enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}


//sidebar
document.getElementById('menu-btn').addEventListener('click', function() {
    // Toggle sidebar
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('dimmed-overlay');
    var menuBtn = document.getElementById('menu-btn'); // Menu Button

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        menuBtn.style.display = 'block';
        enableScroll(); 
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        menuBtn.style.display = 'none';
        disableScroll();
    }
});

//close sidebar when clicking ob overlay
document.getElementById('dimmed-overlay').addEventListener('click', function() {
    // Close sidebar when clicking on the overlay
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('dimmed-overlay');
    var menuBtn = document.getElementById('menu-btn');

    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    enableScroll(); //reenable scrolling
    setTimeout(function() {
        menuBtn.style.display = 'block';
    }, 130); // 300 Millisekunden Verzögerung (0,3 Sekunden)
});
