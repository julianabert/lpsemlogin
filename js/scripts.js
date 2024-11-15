// Variável global para armazenar o valor atual da pipoca
let valorPipocaAtual = 0;
let valorRefriAtual = 0;

function calc(valor, marcado) {
    let total = Number(document.getElementById('total').value);

    if (marcado) {
        total += Number(valor);
    } else {
        total -= Number(valor);
    }

    document.getElementById('total').value = total;
}

function ing(valor, marcado) {
    let total = Number(document.getElementById('total').value);

    if (marcado) {
        total += Number(valor);
    } else {
        total -= Number(valor);
    }

    document.getElementById('total').value = total;
}

function pipocavalor() {
    const tamanho = document.getElementById('pipoca').value;
    let total = Number(document.getElementById('total').value);

    // Subtrai o valor da pipoca atual antes de adicionar o novo valor
    total -= valorPipocaAtual;

    if (tamanho === "p") {
        valorPipocaAtual = 20;
    } else if (tamanho === "m") {
        valorPipocaAtual = 25;
    } else if (tamanho === "g") {
        valorPipocaAtual = 30;
    } else if (tamanho === "xg") {
        valorPipocaAtual = 35;
    } else {
        // Se o usuário não quer pipoca, zera o valor da pipoca
        valorPipocaAtual = 0;
    }

    // Adiciona o novo valor da pipoca ao total
    total += valorPipocaAtual;

    document.getElementById('total').value = total;
}

function refrivalor() {
    const tamanho = document.getElementById('refri').value;
    let total = Number(document.getElementById('total').value);

    total-= valorRefriAtual;

    if (tamanho === "p") {
        valorRefriAtual = 10;
    } else if (tamanho === "m") {
        valorRefriAtual = 15;
    } else if (tamanho === "g") {
        valorRefriAtual = 20;
    } else {
        valorRefriAtual = 0;
    }

    total += valorRefriAtual;
    document.getElementById('total').value = total;
}

function compra() {
    const dia = document.getElementById('dias').value;
    const hora = document.getElementById('hora').value;
    const total = document.getElementById('total').value;

    alert(`Sua sessão foi agendada para:\n${dia}\nÀs ${hora}.\nSeu total foi de R$${total}`);
}

function trocaFilme() {
    const filmes = document.getElementById('filme').value;
    let nomefilme = '';

    if (filmes === "c") {
        nomefilme = "Challengers";
    } else if (filmes === "b") {
        nomefilme = "Barbie";
    } else if (filmes === "k") {
        nomefilme = "Kung Fu Panda 4";
    } else {
        nomefilme = "Duna 2";
    }

    document.getElementById('nomefilme').value = nomefilme;
}