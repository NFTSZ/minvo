// Simples interação de navegação entre seções
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Ocultar todas as seções
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar a seção que foi clicada
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).style.display = 'block';
    });
});

// Exibir a seção inicial
document.getElementById('home').style.display = 'block';
