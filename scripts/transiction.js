document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href');

        // Adiciona a transição de desvanecimento na página atual
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href; // Redireciona após a transição
        }, 500); // Tempo para a transição desaparecer
    });
});
