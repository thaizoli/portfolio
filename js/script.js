// Função para mostrar o alerta
function showAlert() {
    document.getElementById('alert').classList.remove('hidden');
}

// Função para esconder o alerta
function hideAlert() {
    document.getElementById('alert').classList.add('hidden');
}

// Mostrar o alerta automaticamente quando a página é carregada
window.onload = function() {
    showAlert();
};
