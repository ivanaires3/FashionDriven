const usuario = prompt("Qual é seu nome?");

function selecionarOpcao(opcao) {
    const jaSelecionado = document.querySelector('.modelo .selecionado');
    if (jaSelecionado !== null) {
        jaSelecionado.classList.add('naoSelecionado')
        jaSelecionado.classList.remove('selecionado')
    }
    opcao.classList.remove('naoSelecionado')
    opcao.classList.add('selecionado')
}