document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Área de Tecnologia", "Desenvolvimento de IA", "Criação de Automações", "Análise de Dados"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('tech-role');
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenRoles = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Deletando
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 500); // Pausa antes de começar a nova palavra
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            // Escrevendo
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenRoles); // Pausa com a palavra completa
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();

    // --- Lógica do Modal (Pop-up) de Imagens ---

// Pega os elementos do modal no HTML
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-button");

// Pega todos os links que devem abrir o modal
const imageLinks = document.querySelectorAll(".open-modal");

// Adiciona o evento de clique para cada link de imagem
imageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede que o link abra em uma nova guia
        modal.style.display = "block";
        modalImg.src = this.href;
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar no botão (X)
closeBtn.addEventListener('click', closeModal);

// Fecha o modal ao clicar em qualquer lugar do fundo escuro
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});
});
