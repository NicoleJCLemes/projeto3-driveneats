function selecionarPrato(prato) {
    const procurarPrato = document.querySelector(".conteudo__pratos__opcoes .conteudo--selecionar");
    if (procurarPrato !== null) {
        procurarPrato.classList.remove("conteudo--selecionar");
    }
    const bordaPrato = document.querySelector(prato);
    bordaPrato.classList.add("conteudo--selecionar");
}

function selecionarBebida(bebida) {
    const procurarBebida = document.querySelector(".conteudo__bebidas__opcoes .conteudo--selecionar");
    if (procurarBebida !== null) {
        procurarBebida.classList.remove("conteudo--selecionar");
    }
    const bordaBebida = document.querySelector(bebida);
    bordaBebida.classList.add("conteudo--selecionar");
}

function selecionarSobremesa(sobremesa) {
    const procurarSobremesa = document.querySelector(".conteudo__sobremesas__opcoes .conteudo--selecionar");
    if (procurarSobremesa !== null) {
        procurarSobremesa.classList.remove("conteudo--selecionar");
    }
    const bordaSobremesa = document.querySelector(sobremesa);
    bordaSobremesa.classList.add("conteudo--selecionar");
}