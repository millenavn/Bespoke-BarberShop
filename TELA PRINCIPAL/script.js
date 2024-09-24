document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1, // Secção é considerada visível quando 20% dela está na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ativa a animação
            } else {
                entry.target.classList.remove('visible'); // Opcional, remove quando sai da viewport
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); // Observa cada secção
    });
});
