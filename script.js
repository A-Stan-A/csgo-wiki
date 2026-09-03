// Pobieramy linki z nawigacji oraz wszystkie artykuły
const navLinks = document.querySelectorAll('.navbar nav ul li a');
const articles = document.querySelectorAll('.wiki-article');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('#', '');

        // Jeśli kliknięto "Strona Główna", pokaż wszystkie artykuły
        if (targetId === 'glowna') {
            articles.forEach(article => article.style.display = 'block');
            return;
        }

        // Ukryj wszystkie artykuły, a pokaż tylko ten wyprany
        articles.forEach(article => {
            if (article.id === targetId) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});