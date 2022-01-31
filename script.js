let procurarPrato = 0;
let procurarBebida = 0;
let procurarSobremesa = 0;
let total = 0;
let novoTotal = total.toFixed(2);
let Prato = "";
let Bebida = "";
let Sobremesa = "";

function selecionarPrato(prato) {
    Prato = prato;
    procurarPrato = document.querySelector(".conteudo__pratos__opcoes .conteudo--selecionar");
    if (procurarPrato !== null) {
        procurarPrato.classList.remove("conteudo--selecionar");
        const procurarIconePrato = document.querySelector(".conteudo__pratos__opcoes .icone")
        procurarIconePrato.classList.add("icone-desabilitado");
    }
    const bordaPrato = document.querySelector("." + prato);
    bordaPrato.classList.add("conteudo--selecionar");
    const encontrarIconePrato = document.querySelector("." + prato + ' .icone');
    encontrarIconePrato.classList.remove("icone--desabilitado");
}

function selecionarBebida(bebida) {
    Bebida = bebida;
    procurarBebida = document.querySelector(".conteudo__bebidas__opcoes .conteudo--selecionar");
    if (procurarBebida !== null) {
        procurarBebida.classList.remove("conteudo--selecionar");
        const procurarIconeBebida = document.querySelector(".conteudo__bebidas__opcoes .icone")
        procurarIconeBebida.classList.add("icone-desabilitado");
    }
    const bordaBebida = document.querySelector("." + bebida);
    bordaBebida.classList.add("conteudo--selecionar");
    const encontrarIconeBebida = document.querySelector("." + bebida + ' .icone');
    encontrarIconeBebida.classList.remove("icone--desabilitado");
}

function selecionarSobremesa(sobremesa) {
    Sobremesa = sobremesa;
    procurarSobremesa = document.querySelector(".conteudo__sobremesas__opcoes .conteudo--selecionar");
    if (procurarSobremesa !== null) {
        procurarSobremesa.classList.remove("conteudo--selecionar");
        const procurarIconeSobremesa = document.querySelector(".conteudo__sobremesas__opcoes .icone")
        procurarIconeSobremesa.classList.add("icone-desabilitado");
    }
    const bordaSobremesa = document.querySelector("." + sobremesa);
    bordaSobremesa.classList.add("conteudo--selecionar");
    const encontrarIconeSobremesa = document.querySelector("." + sobremesa + ' .icone');
    encontrarIconeSobremesa.classList.remove("icone--desabilitado");
}


function atualizarBotao() {
    if (procurarPrato !== 0 && procurarBebida !== 0 && procurarSobremesa !== 0) {
        const trocarBotao = document.querySelector(".botao");
        trocarBotao.classList.remove("botao--desativar");
        trocarBotao.classList.add("botao--ativar");
        trocarBotao.innerHTML = "Fechar pedido";
        const ativarLink = document.querySelector(".rodape .ativarLink");
            if(ativarLink !== null) {
                ativarLink.classList.remove("ativarLink");
            }
    }       
}

function fazerPedido() {
    let mensagem = "Olá, gostaria de fazer o pedido: " + "\n- Prato: " + Prato + "\n- Bebida: " + Bebida + "\n- Sobremesa: " + Sobremesa + "\nTotal: R$ " + novoTotal;
}
