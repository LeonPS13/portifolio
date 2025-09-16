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
});
