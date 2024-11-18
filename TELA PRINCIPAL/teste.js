document.addEventListener('DOMContentLoaded', function () {
    // Código do IntersectionObserver para animação ao scroll
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1, // Secção é considerada visível quando 10% dela está na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ativa a animação
            } else {
                entry.target.classList.remove('visible'); // Remove a animação quando sai da viewport
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); // Observa cada secção
    });

    // Código para scroll suave nos links de navegação
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevenir o comportamento padrão do clique
            e.preventDefault();

            // Obter o ID da secção de destino
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll suave para a secção de destino
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Scroll suave
                    block: 'start' // Alinha ao topo da secção
                });
            }
        });
    });
});
// Função para adicionar a classe 'active' ao link correspondente à seção visível
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var links = document.querySelectorAll(".nav-link");

    // Verifique qual seção está visível na tela
    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        var link = links[index];

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            // Adiciona a classe 'active' no link da seção visível
            link.classList.add("active");
        } else {
            // Remove a classe 'active' dos links que não estão na seção visível
            link.classList.remove("active");
        }
    });
});


