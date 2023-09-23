// Disable Shift key as a modifier for keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.shiftKey) {
        e.preventDefault(); // Prevent the default behavior
    }
});

// Disable Ctrl key combinations for keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey) {
        e.preventDefault(); // Prevent the default behavior
    }
});

// Disable function key shortcuts (F1 to F12)
document.addEventListener('keydown', function (e) {
    // Check if the key pressed is an F-key (F1 to F12)
    if (e.key.startsWith('F') || e.key.startsWith('f')) {
        e.preventDefault(); // Prevent the default behavior
    }
});

