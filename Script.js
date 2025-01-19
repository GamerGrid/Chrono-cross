// Função para incrementar o contador de monstros
function increment(monsterId) {
    const key = `monster_${monsterId}`;
    let count = localStorage.getItem(key) || 0;
    count = parseInt(count) + 1;
    localStorage.setItem(key, count);
    alert(`Você aprendeu ${monsterId}! Total: ${count}`);
}

// Função para decrementar o contador de monstros
function decrement(monsterId) {
    const key = `monster_${monsterId}`;
    let count = localStorage.getItem(key) || 0;
    if (count > 0) {
        count = parseInt(count) - 1;
        localStorage.setItem(key, count);
        alert(`Você removeu um ${monsterId}. Total: ${count}`);
    } else {
        alert("Nenhum progresso para remover.");
    }
}

// Alternar visibilidade dos detalhes do monstro
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.closest('.monster').querySelector('.monster-details');
        details.classList.toggle('hidden');
        button.textContent = details.classList.contains('hidden') ? '▼' : '▲';
    });
});
