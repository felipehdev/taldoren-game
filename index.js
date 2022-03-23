

function tratamentoPergunta1() {

    var pergunta = prompt('Acorde: \n a - Bardo \n s - Caçadora \n d - mensageiro');
    if (pergunta == 'a') {
        window.location.href='./bard/bard1.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter/hunter1.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./menseger/menseger1.html';
    }
    else {
        tratamentoPergunta1()
    }
}

function tratamentoPergunta2() {

    var pergunta = prompt('O que você irá tocar? \n a - Canções com críticas políticas \n s - Canções satíricas \n d - Canções festivas');

    if (pergunta == 'a') {
        window.location.href='./bard2.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard2.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./bard3.html';
        
    }
    else {

    }
}

function tratamentoPergunta3() {

    var pergunta = prompt('O que você faz? \n a - Continuo tocando normalmente. \n s - Toco algo engraçado para servir de música de fundo para a briga.');

    if (pergunta == 'a') {
        window.location.href='./bard4.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard4.html';
    }
    else {
        tratamentoPergunta3()
    }
}