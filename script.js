document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                toggleButton.textContent = 'Light Mode';
            } else {
                toggleButton.textContent = 'Dark Mode';
            }
        });
    }
});