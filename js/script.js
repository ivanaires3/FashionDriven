const usuario = prompt("Qual é seu nome?");

function selecionarModelo(opcao) {
    const jaSelecionado = document.querySelector('.modelo .selecionado');
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove('selecionado')
    }
    opcao.classList.add('selecionado')
}

function selecionarGola(opcao) {
    const jaSelecionado = document.querySelector('.gola .selecionado');
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove('selecionado')
    }
    opcao.classList.add('selecionado')
}

function selecionarTecido(opcao) {
    const jaSelecionado = document.querySelector('.tecido .selecionado');
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove('selecionado')
    }
    opcao.classList.add('selecionado')
}