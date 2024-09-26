exibirMensagemInicial();
speak('h1');
speak('p');

let tentativas = 0;
let listOfNumbers = [];
let numeroLimite = 100;
let numeroAleaatorio = makeNewRandomNumber(listOfNumbers);

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroAleaatorio) {
        let tentativaPalavra = tentativas > 1 ? "tentativas" : "tentativa";
        defNewText('h1', 'Acertou!');
        defNewText('p', `Você o descobriu em ${tentativas} ${tentativaPalavra}!`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else if (chute > numeroAleaatorio) {
        defNewText('p', 'O número secreto é menor do que ' + chute);
    } else {
        defNewText('p', 'O número aleatório é maior do que ' + chute);
    }
}

function reiniciarJogo() {
    limparCampo('input', '')
    exibirMensagemInicial()

    document.getElementById("reiniciar").setAttribute('disabled', true);

    tentativas = 0;
    numeroAleaatorio = makeNewRandomNumber(listOfNumbers);

    speak('h1');
}

function limparCampo(tag, content) {
    chute = document.querySelector(tag);
    chute.value = content;
}

function defNewText(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function speak(tag) {
    responsiveVoice.speak(document.querySelector(tag).innerHTML, 'Brazilian Portuguese Female', {rate:1.3})
}

function makeNewRandomNumber(lista) {
    if (lista.length >= numeroLimite) {
        lista = [];
    }
    while (true) {
        let num = parseInt(Math.random() * 100 + 1);
        if (lista.includes(num)) {
            break
        } else {
            lista.push(num);
            console.log(lista);
            return num;
        }
    }

    return num;
}

function exibirMensagemInicial() {
    defNewText('h1', "Novo Jogo!");
    defNewText('p', "Temos um novo número secreto entre 1 e 100!");
}