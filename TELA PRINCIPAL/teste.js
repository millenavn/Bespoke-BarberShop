document.addEventListener('DOMContentLoaded', function () {
    
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); 
    });

    
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
           
            e.preventDefault();

            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
});

window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var links = document.querySelectorAll(".nav-link");

   
    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        var link = links[index];

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            
            link.classList.add("active");
        } else {
           
            link.classList.remove("active");
        }
    });
});


