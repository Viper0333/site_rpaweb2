// Selecionando os elementos
const modal = document.getElementById('modal');
const fechar = document.getElementById('fechar');

// Função para "quebrar" a janela em pedaços
fechar.addEventListener('click', function() {
    const rect = modal.getBoundingClientRect(); // Pega as dimensões da janela

    // Criar 100 pedaços
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('modal-piece');
        
        // Definir o tamanho e a posição de cada pedaço
        piece.style.width = `${Math.random() * 30}px`;
        piece.style.height = `${Math.random() * 30}px`;
        piece.style.left = `${Math.random() * rect.width}px`;
        piece.style.top = `${Math.random() * rect.height}px`;
        piece.style.backgroundColor = getComputedStyle(modal).backgroundColor;
        
        // Adicionar o pedaço à janela modal
        modal.appendChild(piece);

        // Forçar a reintrodução no DOM para garantir que a transição ocorra
        requestAnimationFrame(() => {
            piece.classList.add('piece-fall');
        });

        // Remover os pedaços do DOM após a animação
        setTimeout(() => {
            piece.remove();
        }, 1500);
    }

    // Remover a janela principal após a animação
    setTimeout(() => {
        modal.remove();
    }, 1000);
});
