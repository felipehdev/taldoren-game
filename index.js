
/* bardo */

function tratamentoPergunta1() {

    var pergunta = prompt('Acorde: \n a - Bardo \n s - Caçadora \n d - Mensageiro');
    if (pergunta == 'a') {
        window.location.href='./bard/bard1.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter/hunter1.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./messenger/mess2.html';
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

    var pergunta = prompt('O que você faz? \n a - Continuo tocando com mais entusiasmo . \n s - Toco canções melódicas .');

    if (pergunta == 'a') {
        window.location.href='./bard4.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard3.html';
    }
    else {
        tratamentoPergunta3()
    }
}

function tratamentoPergunta4() {

    var pergunta = prompt('O que você faz? \n a - Peço desculpas e começou a tocar algo festivo . \n s - Toco ainda mais animado, servindo de música ambiente para toda a confusão.');

    if (pergunta == 'a') {
        window.location.href='./bard5.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard5.html';
    }
    else {
        tratamentoPergunta4()
    }
}

function tratamentoPergunta5() {

    var pergunta = prompt('O que você faz? \n a - Me escondo. \n s - Encaro a multidão enfurecida.');

    if (pergunta == 'a') {
        window.location.href='./bard7.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard6.html';
    }
    else {
        tratamentoPergunta5()
    }
}

function tratamentoPergunta6() {

    var pergunta = prompt('O que você faz? \n a - Continuo tocando normalmente. \n s - Toco algo engraçado para servir de música de fundo para a briga.');

    if (pergunta == 'a') {
        window.location.href='./bard7.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard7.html';
    }
    else {
        tratamentoPergunta6()
    }
}

function tratamentoPergunta7() {

    var pergunta = prompt('Você vai continuar se apresentando aqui? \n a - Sim, me acorde de novo amanhã ao entardecer por favor. \n s - Não, vou pegar a próxima carruagem para Yggville.');

    if (pergunta == 'a') {
        window.location.href='./bard8.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard10.html';
    }
    else {
        tratamentoPergunta7()
    }
}

function tratamentoPergunta8() {

    var pergunta = prompt('O que você faz? \n a - Tento beber um copo de água . \n s - Tento voltar ao bar.');

    if (pergunta == 'a') {
        window.location.href='./bard1.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard1.html';
    }
    else {
        tratamentoPergunta8()
    }
}

function tratamentoPergunta9() {

    var pergunta = prompt('O que você faz? \n a - Me protejo próximo à caçadora. \n s - Me junto ao cocheiro e corro para a caverna. \n d - Anuncio a presença do mensageiro, se eles conseguirem uma boa recompensa levando os itens que ele carrega talvez vão embora logo.');

    if (pergunta == 'a') {
        window.location.href='./bard11.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard14.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./bard11.html';
    }
    else {
        tratamentoPergunta9()
    }
}

function tratamentoPergunta10() {

    var pergunta = prompt('O que você faz? \n a - Permaneço escondido na carruagem. \n s - Corro para fora da carruagem.');

    if (pergunta == 'a') {
        window.location.href='./bard12.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard13.html';
    }
    else {
        tratamentoPergunta10()
    }
}

function tratamentoPergunta11() {

    var pergunta = prompt('O que você faz? \n a - Corro para a caverna próxima para onde foi o cocheiro. \n s - Corro para a floresta para me esconder no escuro.');

    if (pergunta == 'a') {
        window.location.href='./bard14.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard21.html';
    }
    else {
        tratamentoPergunta11()
    }
}

function tratamentoPergunta12() {

    var pergunta = prompt('O que você faz? \n a - Entro mais a fundo a procura dele. \n s - Grito para que ele apareça.');

    if (pergunta == 'a') {
        window.location.href='./bard16.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard15.html';
    }
    else {
        tratamentoPergunta12()
    }
}

function tratamentoPergunta13() {

    var pergunta = prompt('O que você faz? \n a - Aguardo que ele apareça. \n s - Vou atrás dele.');

    if (pergunta == 'a') {
        window.location.href='./bard17.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard16.html';
    }
    else {
        tratamentoPergunta13()
    }
}

function tratamentoPergunta14() {

    var pergunta = prompt('Para onde você vai? \n a - Esquerda. \n s - Direita. \n d - Voltar.');

    if (pergunta == 'a') {
        window.location.href='./bard18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard18.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./bard17.html';
    }
    else {
        tratamentoPergunta14()
    }
}

function tratamentoPergunta15() {

    var pergunta = prompt('Para onde voce vai? \n a - Esquerda . \n s - Direita. \n d - Voltar');

    if (pergunta == 'a') {
        window.location.href='./bard20.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard20.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./bard19.html';
    }
    else {
        tratamentoPergunta15()
    }
}

function tratamentoPergunta16() {

    var pergunta = prompt('Para onde você vai? \n a - Esquerda. \n s - Direita.');

    if (pergunta == 'a') {
        window.location.href='./bard18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard20.html';
    }
    else {
        tratamentoPergunta16()
    }
}

function tratamentoPergunta17() {

    var pergunta = prompt('Para onde vai? \n a - Esquerda. \n s - Direita.');

    if (pergunta == 'a') {
        window.location.href='./bard18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./bard18.html';
    }
    else {
        tratamentoPergunta17()
    }
}

/*hunter*/

function tratamentoPergunta18() {

    var pergunta = prompt('O que você faz? \n a - Sinto muito, eu preciso aproveitar a lua de hoje e sair para caçar. \n s - Por uma quantia em coroas posso ficar.');

    if (pergunta == 'a') {
        window.location.href='./hunter2.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter3b.html';
    }
    else {
        tratamentoPergunta18()
    }
}

function tratamentoPergunta19() {

    var pergunta = prompt('O que você faz? \n a - Por uma boa quantia em coroas, eu aceito. \n s - Err.. eu preciso mesmo caçar.');

    if (pergunta == 'a') {
        window.location.href='./hunter3b.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter3.html';
    }
    else {
        tratamentoPergunta19()
    }
}

function tratamentoPergunta20() {

    var pergunta = prompt('O que você faz? \n a - Intervenho na confusão. \n s - Não é problema meu. Me dirijo a porta para sair para caçar.');

    if (pergunta == 'a') {
        window.location.href='./hunter4.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter11.html';
    }
    else {
        tratamentoPergunta20()
    }
}

function tratamentoPergunta21() {

    var pergunta = prompt('Como você pretende intervir? \n a -Chamo a atenção dos clientes e ordeno que se controlem ou terão de me enfrentar. \n s - Luto contra os clientes briguentos um por um, começando pelos mais fracos.');

    if (pergunta == 'a') {
        window.location.href='./hunter6.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter5.html';
    }
    else {
        tratamentoPergunta21()
    }
}

function tratamentoPergunta22() {

    var pergunta = prompt('Como você pretende intervir? \n a - Chamo a atenção dos clientes e ordeno que se controlem ou terão de me enfrentar. \n s - Luto com os clientes briguentos um por um começando com os mais fracos.');

    if (pergunta == 'a') {
        window.location.href='./hunter6.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter4.html';
    }
    else {
        tratamentoPergunta22()
    }
}

function tratamentoPergunta23() {

    var pergunta = prompt('O que você faz? \n a - Fico. \n s - Realmente prefiro a caça.');

    if (pergunta == 'a') {
        window.location.href='./hunter7.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter10.html';
    }
    else {
        tratamentoPergunta23()
    }
}

function tratamentoPergunta24() {

    var pergunta = prompt('O que você faz? \n a - Desço da árvore. \n s - Aguardo mais um pouco.');

    if (pergunta == 'a') {
        window.location.href='./hunter13.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter19.html';
    }
    else {
        tratamentoPergunta24()
    }
}

function tratamentoPergunta25() {

    var pergunta = prompt('O que você faz? \n a - Subo novamente na árvore mais próxima. \n s - Vou em direção ao uivo.');

    if (pergunta == 'a') {
        window.location.href='./hunter14.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter15.html';
    }
    else {
        tratamentoPergunta25()
    }
}

function tratamentoPergunta26() {

    var pergunta = prompt('O que você faz? \n a - Desço da árvore e procuro outro lugar para caçar. \n s - Chega de caçada por hoje, vou retornar a taverna.');

    if (pergunta == 'a') {
        window.location.href='./hunter18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter19b.html';
    }
    else {
        tratamentoPergunta26()
    }
}

function tratamentoPergunta27() {

    var pergunta = prompt('O que você faz? \n a - Ataco ele com meu arco e flecha.  \n s - Permaneço escondida. \n d - Vou embora silenciosamente.');

    if (pergunta == 'a') {
        window.location.href='./hunter16.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter16.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./hunter17.html';
    }
    else {
        tratamentoPergunta27()
    }
}

function tratamentoPergunta28() {

    var pergunta = prompt('O que você faz? \n a - Procuro outro lugar para caçar. \n s - Continuo aguardando outro animal que eu possa caçar. \n d - Chega de caçada por hoje, vou retornar a taverna. ');

    if (pergunta == 'a') {
        window.location.href='./hunter18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter19.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./hunter19b.html';
    }
    else {
        tratamentoPergunta28()
    }
}

function tratamentoPergunta29() {

    var pergunta = prompt('O que você faz? \n a - Acerto o felino com meu arco e flecha. \n s - Aguardo que o animal beba água e espero que ele se vá.');

    if (pergunta == 'a') {
        window.location.href='./hunter20.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter19.html';
    }
    else {
        tratamentoPergunta29()
    }
}

function tratamentoPergunta30() {

    var pergunta = prompt('O que você faz? \n a - Me escondo próximo ao bardo. \n s - Me preparo para o combate iminente.');

    if (pergunta == 'a') {
        window.location.href='./hunter22.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter23.html';
    }
    else {
        tratamentoPergunta30()
    }
}

function tratamentoPergunta31() {

    var pergunta = prompt('O que você faz? \n a - Me preparo para disparar. \n s - Aguardo para ter certeza do que está acontecendo.');

    if (pergunta == 'a') {
        window.location.href='./hunter25.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter24.html';
    }
    else {
        tratamentoPergunta31()
    }
}

function tratamentoPergunta32() {

    var pergunta = prompt('O que você faz? \n a - Permaneço escondido na carruagem. \n s - Corro para fora da carruagem.');

    if (pergunta == 'a') {
        window.location.href='./hunter26.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter26b.html';
    }
    else {
        tratamentoPergunta32()
    }
}

function tratamentoPergunta33() {

    var pergunta = prompt('O que você faz? \n a - Uso a carruagem em chamas como proteção. \n s - Corro em direção a floresta para me abrigar na sombra das árvores.');

    if (pergunta == 'a') {
        window.location.href='./hunter27.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter28.html';
    }
    else {
        tratamentoPergunta33()
    }
}

function tratamentoPergunta34() {

    var pergunta = prompt('O que você faz? \n a - Disparo uma flecha. \n s - Aguardo.');

    if (pergunta == 'a') {
        window.location.href='./hunter29.html';
    }
    else if (pergunta == 's') {
        window.location.href='./hunter30.html';
    }
    else {
        tratamentoPergunta34()
    }
}


/*messenger*/


function tratamentoPergunta35() {

    var pergunta = prompt('Você se dirige ao bar? \n a - Uma caneca de cerveja, por favor. \n s - Uma caneca de vinho, por favor. \n d - Uma caneca de suco, por favor.');

    if (pergunta == 'a') {
        window.location.href='./mess3.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess3.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess3.html';
    }
    else {
        tratamentoPergunta35()
    }
}

function tratamentoPergunta36() {

    var pergunta = prompt('O que você faz? \n a - Apenas observo. \n s - Mostro minha insatisfação com as canções do bardo. \n d - Rio discretamente.');

    if (pergunta == 'a') {
        window.location.href='./mess5b.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess4b.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess4.html';
    }
    else {
        tratamentoPergunta36()
    }
}

function tratamentoPergunta37() {

    var pergunta = prompt('O que você faz? \n a - Qual é? A canção é boa e as piadas são engraçadas. \n s - Não é nada, lembrei de uma piada.');

    if (pergunta == 'a') {
        window.location.href='./mess5.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess5b.html';
    }
    else {
        tratamentoPergunta37()
    }
}

function tratamentoPergunta38() {

    var pergunta = prompt('O que você faz? \n a - Questiono porque eles estão se divertindo tanto. \n s - Já demonstrei minha insatisfação.');

    if (pergunta == 'a') {
        window.location.href='./mess5c.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess5b.html';
    }
    else {
        tratamentoPergunta38()
    }
}
function tratamentoPergunta39() {

    var pergunta = prompt('O que você faz? \n a - Vou para outro canto do saguão. \n s - Argumento que ele está exagerando.');

    if (pergunta == 'a') {
        window.location.href='./mess5b.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess6.html';
    }
    else {
        tratamentoPergunta39()
    }
}

function tratamentoPergunta40() {

    var pergunta = prompt('O que você faz? \n a - Acuso ele de estar mentindo. \n s - Aponto como ele está bêbado e implicante. \n d - Parto pra violência. ');

    if (pergunta == 'a') {
        window.location.href='./mess7.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess7.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess8.html';
    }
    else {
        tratamentoPergunta40()
    }
}

function tratamentoPergunta41() {

    var pergunta = prompt('O que você faz? \n a - Me protejo próximo à caçadora. \n s - Me junto ao cocheiro e corro para a caverna. \n d - Grito aos atacantes que não vamos criar problemas e vamos descer.');

    if (pergunta == 'a') {
        window.location.href='./mess11.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess14.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess10.html';
    }
    else {
        tratamentoPergunta41()
    }
}

function tratamentoPergunta42() {

    var pergunta = prompt('O que você faz? \n a - Permaneço escondido na carruagem. \n s - Corro para fora da carruagem.');

    if (pergunta == 'a') {
        window.location.href='./mess12.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess13.html';
    }
    else {
        tratamentoPergunta42()
    }
}

function tratamentoPergunta43() {

    var pergunta = prompt('O que você faz? \n a - Permaneço escondido na carruagem. \n s - Corro para fora da carruagem.');

    if (pergunta == 'a') {
        window.location.href='./mess12.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess13.html';
    }
    else {
        tratamentoPergunta43()
    }
}

function tratamentoPergunta44() {

    var pergunta = prompt('O que você faz? \n a - Corro para a caverna próxima para onde foi o cocheiro. \n s - Corro para a floresta para me esconder no escuro. \n d - Me afasto da carroça e me rendo.');

    if (pergunta == 'a') {
        window.location.href='./mess14.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess21.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess13b.html';
    }
    else {
        tratamentoPergunta44()
    }
}

function tratamentoPergunta45() {

    var pergunta = prompt('O que você faz? \n a - Entro mais a fundo a procura dele. \n s - Grito para que ele apareça.');

    if (pergunta == 'a') {
        window.location.href='./mess16.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess15.html';
    }
    else {
        tratamentoPergunta45()
    }
}

function tratamentoPergunta46() {

    var pergunta = prompt('O que você faz? \n a - Aguardo que ele apareça. \n s - Vou atrás dele.');

    if (pergunta == 'a') {
        window.location.href='./mess17.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess16.html';
    }
    else {
        tratamentoPergunta46()
    }
}

function tratamentoPergunta47() {

    var pergunta = prompt('O que você faz? \n a - Esquerda. \n s - Direita. \n d - Voltar');

    if (pergunta == 'a') {
        window.location.href='./mess18.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess18.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess17.html';
    }
    else {
        tratamentoPergunta47()
    }
}


function tratamentoPergunta48() {

    var pergunta = prompt('O que você faz? \n a - Esquerda. \n s - Direita. \n d - Voltar à entrada.');

    if (pergunta == 'a') {
        window.location.href='./mess20.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess20.html';
    }
    else if (pergunta == 'd') {
        window.location.href='./mess19.html';
    }    
    else {
        tratamentoPergunta48()
    }
}

function tratamentoPergunta49() {

    var pergunta = prompt('O que você faz? \n a - Esquerda. \n s - Direita.');

    if (pergunta == 'a') {
        window.location.href='./mess20.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess20.html';
    }
    
    else {
        tratamentoPergunta49()
    }
}

function tratamentoPergunta50() {

    var pergunta = prompt('O que você faz? \n a - Esquerda. \n s - Direita.');

    if (pergunta == 'a') {
        window.location.href='./mess20b.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess20b.html';
    }
    
    else {
        tratamentoPergunta50()
    }
}

function tratamentoPergunta51() {

    var pergunta = prompt('O que você faz? \n a - Esquerda. \n s - Direita.');

    if (pergunta == 'a') {
        window.location.href='./mess20.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess20.html';
    }
    
    else {
        tratamentoPergunta51()
    }
}

function tratamentoPergunta52() {

    var pergunta = prompt('O que você faz? \n a - . \n s - .');

    if (pergunta == 'a') {
        window.location.href='./mess.html';
    }
    else if (pergunta == 's') {
        window.location.href='./mess.html';
    }
    
    else {
        tratamentoPergunta52()
    }
}


