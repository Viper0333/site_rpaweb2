function abrirModal() {
    const modal = document.getElementById('Janela_modal') /*Pegue o elemento que possui o seguinte id*/
    modal.classList.add('abrir') /*trabalha adc e removendo classe do modal*/

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target == 'Janela_modal' ){ /* quando o alvo for o id fechar ou o id for o janela_modal */
            modal.classList.remove('abrir')
        }
    } )
}

document.addEventListener('DOMContentLoaded', function () {
    // Selecione todos os cards
    const cards = document.querySelectorAll('.card');

    // Para cada card, adicione um evento de clique
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // Adiciona ou remove a classe 'flipped' para virar o card
            card.classList.toggle('flipped');
        });
    });
});