// Seleciona a barra de navegação
var navbar = document.querySelector(".navbar");

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', function() {
    // Verifica se a posição atual de rolagem é maior que 0 (ou seja, a página foi rolada)
    if (window.scrollY > 0) {
        // Adiciona uma classe para tornar a barra de navegação transparente
        navbar.classList.add("scroll-down");
    } else {
        // Remove a classe para tornar a barra de navegação opaca
        navbar.classList.remove("scroll-down");
    }
});

function scrollToEscolha() {
    var escolhaElement = document.getElementById("escolha");
    escolhaElement.scrollIntoView({ behavior: 'smooth' });
}
