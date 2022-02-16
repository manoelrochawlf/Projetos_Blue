const prompt = require('prompt-sync')();

let p1;
let pe1;
let per1;
let perg1;
let pergu1;
let pergun1;
let pergunt1;
let pergunta1
let pergunta11;
let pergunta12;
let pergunta13;
let pergunta14;
let pergunta15;
// ----------
let abreCaixa;
let guardaFrase;
let repetirJogo = 0;
let contRepet = 0;
let perguntFunc;
let frasesIntuitivas = ["Você é o protagonista do seu próprio pesadelo", "Sanidade não é uma opção. Não se pode optar por reavê-la.", "Dizem ao mundo que você é louco e todos os seus protestos só confirma o que eles dizem.", "Sabia que a palavra “trauma” vem do grego para “ferida”?", "Isso é um jogo. Tudo isso é para você. Não está investigando nada. É um rato em um labirinto."];

//                                         FUNÇÕES(IDEALIZAÇÃO)

function validaResposta(valida) {
    if(valida != 1 && valida != 2) {
        console.log("!!! Digite 1 ou 2 !!!");
        console.log();
        return true
    } else {
        return false
    }
}

function escolhaFrases(){

    let fraseRandom = 0;

    console.log();
    console.log("Acabamos por aqui, mas se você desejar, podemos antes consultar a caixinha de frases, onde há algumas frases do filme Ilha do Medo, a inspiração desse jogo...");
    console.log();
    abreCaixa = +prompt(" 1 - Abre a caixinha | 2 - Não abre a caixinha -> ");
        console.log();
        while(validaResposta(abreCaixa) == true) {
            console.log();
            abreCaixa = +prompt(" 1 - Abre a caixinha | 2 - Não abre a caixinha -> ");
        }

            if(abreCaixa == 1) {

                console.log("Ótima opção...");
                console.log();
                
                fraseRandom = +prompt("Escolha um número de 1 a 5. -> ");
                    while(fraseRandom <= 0 || fraseRandom > 5){
                        console.log();
                        console.log("INVÁLIDO !");
                        console.log();
                        fraseRandom = +prompt("Escolha um número de 1 a 5. -> ");
                    }
                for(let i = 0; i < fraseRandom; i++){
                    guardaFrase = frasesIntuitivas[i];
                }
                    console.log();
                    console.log(guardaFrase);
                    console.log();
            }
                    console.log("Obrigado por jogar!");
                    console.log("END GAME")
                    console.log();
    }


let status = {

    saudePersonagem: 50,
    sanidadeMental: 50,
    dia: 1,
    hora: 22,

    tempoVaria: function(){
        this.hora++
        if (this.hora >= 24){
            this.hora = this.hora - 24;
            this.dia++;
        }
    },

    diminuiSanidade: function(){


        this.sanidadeMental = this.sanidadeMental - 15;
            if(this.sanidadeMental <= 0) {
                console.log();
                console.log("Sua dor de cabeça tá aumentando novamente, deseja tomar o remédio que William te deu ?");
                console.log();
                perguntFunc = +prompt(" 1 - Sim. | 2 - Não. -> ");
                while(validaResposta(perguntFunc) == true) {
                    perguntFunc = +prompt(" 1 - Sim. | 2 - Não. -> ");
                    console.log();
                }
                    if(perguntFunc == 1) {
                        this.sanidadeMental += 40;
                        this.saudePersonagem += 40;
                    } 
                    else {

                        console.log();
                        console.log("Você não toma o rémedio e após um tempo sua dor de cabeça aumenta, aumenta, aumenta e você acaba desmaiando");
                        console.log();
                        console.log("Você acaba acordando em uma sala toda branca e com um espelho nas quatro paredes que te cercam, o rémedio na verade era pra manter sua sanidade mental sob controle, você se olha no espelho e começa a chorar sem motivo aparente... Uma silhuete aparece na fresta da porta, e você uma voz... Você dessa vez nunca mais vai sair daí!!!");
                        console.log();
                        console.log("Você fica preso e enlouquece completamente... Se quiser pode voltar ao inicio para tentar descobrir a verdade...");
                        console.log();
                        repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                                                                                    
                        while(validaResposta(repetirJogo) == true) {
                            repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                            console.log();
                        }

                        if(repetirJogo == 2) {
                            escolhaFrases();
                            contRepet++
                        } 
                        else {
                            console.log("E lá vamos nós..");
                            this.sanidadeMental = 50;
                            this.saudePersonagem = 50;
                            this.dia = 1;
                            this.hora = 22;
                        }

                    }
                
            }


    },

    diminuiSaude: function(){

        this.saudePersonagem -= 15;
            if(this.saudePersonagem < 20) {
                console.log(" ! ! ! ");
                console.log("Sua sanidade mental está cada vez pior e por conta disso sua saúde está cada vez mais precária..");
                console.log(" ! ! ! ")

            }

    },

    loucuraTotal: function() {

        this.sanidadeMental = 0;
        console.log();
        console.log("Você acaba acordando em uma sala toda branca e com um espelho nas quatro paredes que te cercam, você se olha no espelho e começa a chorar sem motivo aparente... Uma silhueta aparece na fresta da porta, e você uma voz... Você dessa vez nunca mais vai sair daí!!!");
        console.log();
        console.log("Você fica preso e enlouquece completamente... Se quiser pode voltar ao inicio para tentar descobrir a verdade...");
        console.log();
        repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                                                                                    
            while(validaResposta(repetirJogo) == true) {
                repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                console.log();
            }
            if(repetirJogo == 2) {
                escolhaFrases();
                contRepet++
            } 
            else {
                console.log("E lá vamos nós..");
                this.sanidadeMental = 50;
                this.saudePersonagem = 50;
                this.dia = 1;
                this.hora = 21;
            }

    },

    mortePersonagem: function(){

        this.saudePersonagem = 0;

            console.log();
            console.log("Você infelizmente tomou a decisão errada e acabou morrendo, mas se quiser pode voltar ao inicio do jogo para tentar descobrir a verdade.");
            console.log(); 
            repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                                                                                    
                while(validaResposta(repetirJogo) == true) {
                    repetirJogo = +prompt("Deseja repetir o jogo ?  1 - Sim. | 2 - Não. -> ");
                    console.log();
                }

                    if(repetirJogo == 2) {
                        escolhaFrases();
                        contRepet++
                    } 
                    else {
                        console.log("E lá vamos nós..");
                        this.sanidadeMental = 50;
                        this.saudePersonagem = 50;
                        this.dia = 1;
                        this.hora = 21;
                        
                    }

    },

    fimDoJogo: function() {
            console.log();
            console.log("William então começa a contar que ele era responsável por cuidar de você, o paciente 06 que havia fugido, você chegou ao hospital psiquiatrico anos antes, depois de um trauma sofrido ao encontrar sua mulher que anteriormente havia pedido sua ajuda por estar tendo alucinações, dessa vez botando fogo na sua própria casa, com seus filhos dentro... Desde então você teve um trauma irreversível e vive em um eterno loop de achar que é um detetive tentando achar alguem perdido e reencontrando seus fantasmas pessoais, que não querem ir embora.... O diretor explica que o seu caso parece ser irreversível e somente uma cirurgia no seu cerebro poderia cura-lo, ou você voltaria ao mesmo loop.");
            console.log();
            console.log("O que você prefere?");
            console.log();
            pergunta15 = +prompt(" 1 - Morrer comom um monstro. | 2 - Viver como um homem bom -> ");
            console.log();
    
                while(validaResposta(pergunta15) == true) {
                    pergunta15 = +prompt(" 1 - Morrer como um monstro. | 2 - Viver como um homem bom -> ");
                    console.log();
                }
    
                if(pergunta15 == 1){

                escolhaFrases();
                contRepet++
                   
                } 
            else {
                console.log("E lá vamos nós..");
                this.sanidadeMental = 50;
                this.saudePersonagem = 50;
                this.dia = 1;
                this.hora = 22;
            }
    }

}

console.log();
console.log("OI POLICIAL CURRY, SEJA BEM VINDO AO HOSPITAL PSIQUIÁTRICO ESTADUAL DE SANTA BÁRBARA !");
console.log();
console.log(`
 - VOCÊ É UM DETETIVE BRASILEIRO SUPER CONCEITUADO QUE ATUALMENTE TRABALHA NA CIDADE DO RIO DE JANEIRO.
 - VOCÊ FOI CHAMADO PARA RESOLVER UM CASO SUPER COMPLICADO, EM UM LUGAR SECRETO.
 - SUA MISSÃO VAI SER NA ILHA DOS 5 MASTROS, LOCAL ISOLADO AONDE SE CONCENTRA UM HOSPITAL PSIQUIÁTRICO.
 - UMA PACIENTE COM ESQUIZOFRENIA SEVERA FUGIU, VOCÊ PRECISA RECOLHER PISTAS E DESCOBRIR SEU PARADEIRO.
.........................................................`)

while(status.saudePersonagem > 0 && contRepet == 0) {

    console.log(`
Você chegou ao Santa Bárbara, seu companheiro William está ao seu lado.
O diretor do hospital psiquiátrico vem recebe-los.
Vocês vieram bebendo um vinho que William trouxe no navio enquanto traçavam um plano.
Logo na entrada o segurança pede as armas, você protesta pórem eles reforçam que faz parte do protocolo.
Seu companheiro William se adianta e tira arma de forma atabalhoada de seu coldre e entrega ao segurança..

O que você faz ?`);
    console.log();
    p1= +prompt(`1 - Entrega a arma. | 2 - Se recusa a entregar. -> `);
    console.log(); 

    while(validaResposta(p1) == true) {
        p1= +prompt(`1 - Entrega a arma. | 2 - Se recusa a entregar. -> `);
        console.log();
    }

    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
    console.log(".........................................................");
    

    if(p1 == 1) {

        console.log("Você entra no hospital psiquiatrico acompanhado do diretor, nota que varios pacientes na área externa te olham de forma estranha, você ouve um barulho.... Vira para trás e vê um homem estranho vindo atrás de você.");
        console.log();
        console.log("O que você faz ?")
        console.log();
        pe1 = +prompt(`1 - Recua rapidamente. | 2 - Fica no mesmo lugar em guarda. -> `);
        console.log();

        while(validaResposta(pe1) == true) {
            pe1 = +prompt(`1 - Recua rapidamente. | 2 - Fica no mesmo lugar em guarda. -> `);
            console.log();
        }

        status.diminuiSaude
        status.diminuiSanidade();
        status.tempoVaria();
        console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
        console.log(".........................................................");

            if(pe1==1) {

                console.log();

                console.log("Ele te olha com uma lagrima no rosto, o rosto do homem parece alguem familiar... Logo te dá uma dor de cabeça muito forte, você tenta procurar o analgésico que carrega no bolso, e não encontra.  William te oferece o dele.");
                console.log();
                console.log("O que você faz ?")
                console.log();
                per1 = +prompt(" 1 - Você aceita. | 2 - Fala que já está passando e nega. -> ");
                console.log();

                while(validaResposta(per1) == true) {
                    per1 = +prompt(" 1 - Você aceita. | 2 - Fala que já está passando e nega. -> ");
                    console.log();
                }

                status.diminuiSaude();
                status.diminuiSanidade();
                status.tempoVaria();
                console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                console.log(".........................................................");

                    if(per1 == 1){

                        console.log();
                        console.log("Vocês adentram o lugar em que a paciente estava internada. De imediato voce percebe que há várias coisas escritas na parede A culpa é sua, Papai, Socorro, Você deveria ter me ajudado. Você encara William estupefato, ele te lança um olhar mórbido. Você olha pro lado e vê uma janela quebrada e melada de sangue, olha através dela e enxerga um matagal profundo.");
                        console.log();
                        console.log("O que você faz?");
                        console.log();
                        perg1 = +prompt(" 1 - Decide ir agora ao matagal procurar a paciente. | 2 - Decide esperar amanhecer. -> ");
                        console.log();

                        while(validaResposta(perg1) == true) {
                            perg1 = +prompt(" 1 - Decide ir agora ao matagal procurar a paciente. | 2 - Decide esperar amanhecer. -> ");
                            console.log();
                        }

                        status.diminuiSaude();
                        status.diminuiSanidade();
                        status.tempoVaria();
                        console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                        console.log(".........................................................");
                         
                            if(perg1==1){

                                console.log();
                                console.log("Você se direciona em direção ao matagal, o diretor chama William de lado, mas você nem se preocupa muito.. William retiscente e com cara de medo te segue... Você começa a sentir cheiro de fumaça, mas pergunta a William se também está sentindo, ele nega... Você chega ao matagal e começa a explorar, de repente você encontra um laço da cabelo no chão, pega para examina-lo e sua cabeçq explode de vez, aquele laço ativou algum gatilho em você, de repente você tem flashs de uma mulher loira sorrindo, você volta ao normal e o seu parceiro some, você ouve gritos...");
                                console.log();
                                console.log("O que você faz?");
                                console.log();
                                pergu1 = +prompt(" 1 - Decide ir em direção aos gritos. | 2 - Decide seguir a pista do laço. -> ");
                                console.log();

                                while(validaResposta(pergu1) == true) {
                                    pergu1 = +prompt(" 1 - Decide ir em direção aos gritos. | 2 - Decide seguir a pista do laço. -> ");
                                    console.log();
                                }

                                status.diminuiSaude();
                                status.diminuiSanidade();
                                status.tempoVaria();
                                console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                console.log(".........................................................");

                                if(pergu1 == 1) {

                                    console.log();
                                    console.log("Ele segue os gritos, e chega ao limite de um penhasco, quando olha algo parecido com um corpo entre as pedras.");
                                    console.log();
                                    console.log("O que você faz?");
                                    console.log();
                                    pergun1 = +prompt(" 1 -  Decide descer o penhasco. | 2 - Decide voltar e seguir a pista do laço. -> ");
                                    console.log();

                                    while(validaResposta(pergun1) == true) {
                                        pergun1 = +prompt(" 1 -  Decide descer o penhasco. | 2 - Decide voltar e seguir a pista do laço. -> ");
                                        console.log();
                                    }

                                    status.diminuiSaude();
                                    status.diminuiSanidade();
                                    status.tempoVaria();
                                    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                    console.log(".........................................................");

                                        if(pergun1==1){

                                            console.log();
                                            console.log("Você tomou uma queda monumental tentando descer o penhasco e ficou tonto, caiu em frente a uma caverna, antes de chegar ao chão, você ouve uma voz.");
                                            console.log();
                                            console.log("O que você faz?");
                                            console.log();
                                            pergunt1 = +prompt(" 1 -  Entra na caverna. | 2 - Continua tentando descer o penhasco. -> ");
                                            console.log();

                                            while(validaResposta(pergunt1) == true) {
                                                pergunt1 = +prompt(" 1 -  Entra na caverna. | 2 - Continua tentando descer o penhasco. -> ");
                                                console.log();   
                                            }

                                            status.diminuiSaude();
                                            status.diminuiSanidade();
                                            status.tempoVaria();
                                            console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                            console.log(".........................................................");

                                                if(pergunt1 == 1){

                                                    console.log();
                                                    console.log("Ele entra na caverna e vê uma mulher com os olhos fixados nele.. Ela começou a falar: `Você não deveria ter tomado o remédio, eu sou a paciente que fugiu, a paciente 15, mas eu apenas era uma doutora que vim fazer trabalhos volúntarios aqui, e eles me prenderam pra fazer experimentos no meu cerebro, todos querem fazer o mesmo com você, você é valioso pra eles, pagaram seu parceiro para ajuda-los`");
                                                    console.log();
                                                    console.log("Logo que você ouve tudo isso, você protesta, afinal você conhece William há tempos, você chama ela de maluca e lembra que ela tem esquizofrenia");
                                                    console.log();
                                                    console.log("Ela ri de forma histérica... e diz: `EU, MALUCA ? HAHAHAH Falei pra você não tomar o remédio, eu nem existo...` o cheiro de fumaça que você sentia anteriormente surge novamente, dessa vez mais forte ainda. você tem flashbacks novamente, dessa vez aquela mulher que conversou com você aparece nos flashbacks, mas de forma infantil.. Você volta ao normal olha de novo e a mulher sumiu, você fica confuso.. Sai da caverna olha pra baixo e o corpo que você tinha visto sumiu das pedras...");
                                                    console.log();
                                                    console.log("O que você faz ?");
                                                    console.log();
                                                    pergunta1 = +prompt(" 1 -  Tenta descer pra investigar. | 2 - Sobe pra ver o laço de antes e entender as coisas. -> ");
                                                    console.log();

                                                    while(validaResposta(pergunta1) == true) {
                                                        pergunta1 = +prompt(" 1 -  Tenta descer pra investigar. | 2 - Sobe pra ver o laço de antes e entender as coisas. -> ");
                                                        console.log();   
                                                    }

                                                    status.diminuiSaude();
                                                    status.diminuiSanidade();
                                                    status.tempoVaria();
                                                    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                    console.log(".........................................................");

                                                        if(pergunta1 == 1){
                                                            
                                                            console.log();
                                                            console.log("Sua sanidade mental não estava das melhores, sua cabeça estava um caos, você foi tentar descer e caiu de forma feia batendo a cabeça...");
                                                            console.log(); 
                                                            status.mortePersonagem();
                                                            status.tempoVaria();
                                                    
                                                        }
                                                        else {

                                                            console.log();
                                                            console.log("Você gasta toda sua energia tentando subir e ia caindo, até que alguem te puxa, você chega na parte de cima, olha quem te puxou e lá está ele, William. Ele te explicou que depois de pegar o laço no chão você começou a gritar cegamente e sumiu de vista... Ele perguntou se você estava bem, você agora sem ter certeza do que era real ou falso, respondeu que sim e que apenas foi averiguar algo e acabou caindo. O cheiro de fumaça persiste e dessa vez mais insuportável que nunca, apesar de William ainda afirmar não sentir nada você não suporta mais.");
                                                            console.log();
                                                            console.log("O que você faz");
                                                            console.log();
                                                            pergunta11 = +prompt(" 1 -  Seguir o cheiro da fumaça | 2 - Seguir o rastro do laço. -> ");
                                                            console.log();

                                                            while(validaResposta(pergunta11) == true) {
                                                                pergunta11 = +prompt(" 1 -  Seguir o cheiro da fumaça | 2 - Seguir o rastro do laço. -> ");   
                                                            }

                                                            status.diminuiSaude();
                                                            status.diminuiSanidade();
                                                            status.tempoVaria();
                                                            console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                            console.log(".........................................................");

                                                                if(pergunta11 == 1){

                                                                    console.log();
                                                                    console.log("Você entra no hospital psiquiatrico atrás do cheiro, entra em salas e mais salas, até que ouve gritos, olhá pra trás e William some mais uma vez, você entra na sala em que está ouvindo os gritos e logo recebe um ar quente na cara, você vê uma mulher loira rindo histéricamente e duas crianças no meio do fogo. Uma das crianças tinha o mesmo rosto da mulher que você tinha visto naquela caverna. A mulher loira te olha e começa a chorar `Você poderia ter me ajudado`. Você começa ir em direção a mulher loira..");
                                                                    console.log();
                                                                    console.log("De repente tudo some, o cheiro, o fogo, a mulher, as crianças e você se encontra em um quarto todo branco e na sua frente há apenas aquele homem que tentou te dar um soco no inicio... Ele parte pra cima de você..");
                                                                    console.log();
                                                                    console.log("O que você faz?");
                                                                    console.log();

                                                                    pergunta12 = +prompt(" 1 - Sai correndo. | 2 - Parte pra cima do homem. -> ");
                                                                    console.log();

                                                                    while(validaResposta(pergunta12) == true) {
                                                                        pergunta12 = +prompt(" 1 - Sai correndo. | 2 - Parte pra cima do homem. -> ");
                                                                        console.log(); 
                                                                    }

                                                                    status.diminuiSaude();
                                                                    status.diminuiSanidade();
                                                                    status.tempoVaria();
                                                                    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                                    console.log(".........................................................");

                                                                        if(pergunta12 == 1){

                                                                            console.log();
                                                                            console.log("Você corre confuso pelos corredores do hospital psiquiátrico, até que encontra a moça loira, que viu anteriormente,você pergunta se ela está bem, sem saber se ela é real ou fake. Ela vai em sua direção e fala: Amor você não deveria ter deixado eles te darem o remédio, eles querem te tirar de mim... Eles querem fazer experimentos com você... Do lado dela também surgem 2 crianças, uma com a mesma feição da menina da caverna e um menino com os mesmos traços do homem que o perseguia... Ambos dizem: `Eles querem te tirar da gente...`");
                                                                            console.log();
                                                                            console.log("Eles somem... e o diretor aparece no final do corredor ao lado de 2 homens. Você confuso lembra do que a mulher e as crianças te disseram, olha pro outro lado do corredor e vê mais 3 homens com o uniforme do hospital vindo do outro lado... O diretor grita pra você que ta tudo bem. Todos estão vindo na sua direção.. ao seu lado tem uma janela que dá direto ao matagal, a distância até o chão é consideravel..");
                                                                            console.log();
                                                                            console.log("O que você faz?");
                                                                            console.log();
                                                                            pergunta13 = +prompt(" 1 - Fica e resiste. | 2 - Pula pela janela. -> ");
                                                                            console.log();

                                                                            while(validaResposta(pergunta13) == true) {
                                                                                pergunta13 = +prompt(" 1 - Fica e resiste. | 2 - Pula pela janela. -> ");
                                                                                console.log(); 
                                                                            }

                                                                            status.diminuiSaude();
                                                                            status.diminuiSanidade();
                                                                            status.tempoVaria();
                                                                            console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                                            console.log(".........................................................");


                                                                                if(pergunta13 == 1){
                                                                                    
                                                                                    console.log();
                                                                                    console.log("Os homens chegam até você, e o diretor gentilmente pede para segui-lo, você nega dizendo que precisa encontrar seu parceiro, ele insiste, você nega mais uma vez, dessa vez então todos homens partem pra cima de você que tenta correr e consegue passar pelo diretor e gasta todas as energias correndo dos homens, até que escuta uma voz...");
                                                                                    console.log();
                                                                                    console.log("Uma parte da parede se abre, um fundo falso, William te chama..");
                                                                                    console.log();
                                                                                    console.log("O que você faz?");
                                                                                    console.log();
                                                                                    pergunta14 = +prompt(" 1 - Continua correndo. | 2 - Segue William. -> ");
                                                                                    console.log();

                                                                                    while(validaResposta(pergunta14) == true) {
                                                                                        pergunta14 = +prompt(" 1 - Continua correndo. | 2 - Segue William. -> ");
                                                                                        console.log();
                                                                                    }

                                                                                    status.diminuiSaude();
                                                                                    status.diminuiSanidade();
                                                                                    status.tempoVaria();
                                                                                    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                                                    console.log(".........................................................");
                                                                                    
                                                                                        if(pergunta14 == 1) {

                                                                                            console.log();
                                                                                            console.log("Você correu, correu, correu completamente desesperado até que tropeçou no pé de uma maca e foi lançado por uma janela.. não foi dessa vez... Mas se você quiser pode voltar ao inicio e tentar descobrir a verdade, fazendo as escolhas corretas");
                                                                                            console.log(); 

                                                                                            status.mortePersonagem();
                                                                                            status.tempoVaria();
                                                                                
                                                                                        }

                                                                                        else {

                                                                                            console.log();
                                                                                            console.log("Você segue William, mas antes mesmo de tentar falar qualquer coisa você apaga Você lembra de ver uma seringa, mas não entende muito o que está acontecendo..");
                                                                                            status.fimDoJogo();

                                                                                        }

                                                                                }

                                                                                else{

                                                                                    console.log();
                                                                                    console.log("A distância até o matagal era bem grande, e você ainda deu o azar de cair de cabeça. Não foi dessa vez, mas se você quiser pode voltar ao inicio e tentar descobrir a verdade.....");
                                                                                    console.log(); 
                                                                                    status.mortePersonagem();
                                                                                    status.tempoVaria();
                                                                            

                                                                                }

                                                                        }
                                                                        else{

                                                                            

                                                                            console.log();
                                                                            console.log("Você dá um soco nele, ele não se move, você acaba o acertando em cheio... O homem te olha enferucedio, você fica em guarda, de repente ele começa a chorar histéricamente e diz: PAPAI, POR QUE VOCÊ TA ME BATENDO ?");
                                                                            console.log();
                                                                            console.log("Você toma um susto, ele vem em direção a você, desssa vez como criança, você se distrai e acaba caindo pela janela..");
                                                                            
                                                                            console.log(); 

                                                                        
                                                                            status.mortePersonagem();
                                                                            status.tempoVaria();
                                                                       

                                                                        }


                                                                }
                                                                else {

                                                                    console.log();
                                                                    console.log("Você chega ao local que anteriormente tinha encontrado o laço, mostra pra Wiliam e explica que tinha encontrado antes deles terem se desencontrado... William te olha com cara de tristeza... você não entende..");
                                                                    console.log();
                                                                    console.log("William fala que encontrou pistas e que você precisa segui-lo, você lembra do que aquela mulher falou na caverna, o que você faz ?");
                                                                    console.log(); 
                                                                    console.log("O que você faz ?");
                                                                    console.log();
                                                                    pergunta12 = +prompt(" 1 - Segue ele. | 2 - Não segue. -> ");

                                                                    while(validaResposta(pergunta12) == true) {
                                                                    pergunta12 = +prompt(" 1 - Segue ele. | 2 - Não segue. -> ");
                                                                    console.log();
                                                                    }

                                                                    status.diminuiSaude();
                                                                    status.diminuiSanidade();
                                                                    status.tempoVaria();
                                                                    console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                                                    console.log(".........................................................");

                                                                        if(pergunta12 == 1) {

                                                                            console.log();
                                                                            console.log("Você segue ele desconfiado, ele estava cada vez mais sério.. William eu achei o documento sobre o paciente 06... Preciso conversar com você..");
                                                                            console.log();
                                                                            status.fimDoJogo();                       
                                                                        }
                                                                        else {

                                                                            console.log();
                                                                            console.log("Tudo bem... diz William mas eu preciso fazer isso de uma forma ou de outra, nesse mesmo momento William aperta um controle.. O remédio que ele tinha te dado tinha nanochips qeu atacavam o sistema nervoso e faziam a vitima... dormir");
                                                                            console.log();
                                                                            console.log("Você acorda amarrado em uma cadeira, William aparece ao lado do diretor, olhando pra você, de repente você lembra do que aquela mulher tinha falado, eles só podem estar querendo fazer experimentos, lavagem cerebral, ou qualquer coisa do tipo..");
                                                                            status.fimDoJogo();

                                                                        }
                                                                

                                                                }

                                                        }
                                                        

                                                } 
                                                else {

                                                    console.log();
                                                    console.log("Você acabou caindo e batendo a cabeça nas pedras, não conseguiu resistir, mas pode tentar voltar ao inicio pra tentar descobrir a verdade..");
                                                    console.log(); 
                                                    status.mortePersonagem();
                                                    status.tempoVaria();

                                                }

                                        }
                                        else {

                                            console.log();
                                            console.log("Você chega ao local que anteriormente tinha encontrado o laço, mostra pra Wiliam e explica que tinha encontrado antes deles terem se desencontrado... William te olha com cara de tristeza... você não entende..");
                                            console.log();
                                            console.log("William fala que encontrou pistas e que você precisa segui-lo.");
                                            console.log(); 
                                            console.log("O que você faz ?");
                                            console.log();
                                            pergunt1 = +prompt(" 1 - Segue ele. | 2 - Não segue. -> ");

                                            while(validaResposta(pergunt1) == true) {
                                                pergunt1 = +prompt(" 1 - Segue ele. | 2 - Não segue. -> ")
                                                console.log();   
                                            }

                                            status.diminuiSaude();
                                            status.diminuiSanidade();
                                            status.tempoVaria();
                                            console.log(`${status.hora} horas do dia ${status.dia} | Saúde: ${status.saudePersonagem} | Sanidade Mental: ${status.sanidadeMental}`);
                                            console.log(".........................................................");


                                                if(pergunt1 == 1){

                                                    console.log();
                                                    console.log("Você segue ele desconfiado, ele estava cada vez mais sério.. William eu achei o documento sobre o paciente 06... Preciso conversar com você..");
                                                    console.log();
                                                    status.fimDoJogo();

                                                }
                                                else{

                                                    console.log();
                                                    console.log("Você se recusa segui-lo, William estranha, e tenta ir atrás de você, em passos lentos... William de repente tenta te agarrar, você sai correndo desesperadamente, sua cabeça está uma bagunça, você precisa conversar com aquela mulher de novo..");
                                                    console.log();
                                                    console.log("Infelizmente você acabou tentando descer o penhasco e caindo de cabeça nos corais... Mas se quiser pode voltar ao inicio do game e tentar descobrir a verdade..");
                                                    console.log();
                                                    status.mortePersonagem();  
                                                    status.tempoVaria();
 

                                                }

                                        }

                                }
                                else {

                                    console.log();
                                    console.log("Você volta ao local em que o laço está, e vê uma mulher loira segurando ele na mão e sorrindo, você se encontra sozinho, a mulher vai em sua direção... ela olha de forma penetrante bem fundo nos seus olhos, seu corpo se arrepia inteiro, ela se aproxima lentamente e você se sente paralisado, ela chega cada vez mais perto, e te beija... nos 3 primeiros segundos você sente uma sensação incrivel, mas depois seu corpo começa a queimar, você sente aquela sensação de ardência que fica pior a cada momento, você se afasta e a mulher agora esta desfigurada, seu corpo queima muito, você começa a se debater, se debater, se debater e seu coração acelera de uma forma desproporcional... você olha pra cima e vê William chorando em cima de você, não tem fogo algum em você, sua visão vai escurecendo, escurecendo...");
                                    console.log();
                                    console.log("Você teve um infarto, não resistiu... Passou bem longe de descobrir a verdade..");
                                    
                                    status.mortePersonagem();
                                    status.tempoVaria();


                                }

                            }
                            else {

                                console.log();
                                console.log("Você decide dormir na sala em que o diretor te levou, afinal amanhã você tem um grande dia procurando a paciente 06 e vai ser tudo bem dificil naquele matagal");
                                console.log();
                                status.loucuraTotal();

                                status.tempoVaria();


                            }

                            }
                    else {

                        console.log();
                        console.log("Você nega o rémedio e após um tempo sua dor de cabeça aumenta, aumenta, aumenta e você acaba desmaiando");
                        console.log();
                        status.loucuraTotal();

                        status.tempoVaria();
                    }
                
            } else {

                console.log();
                console.log("Ele faz menção de te dar um soco e... acaba te abraçando, você sente um choque percorrer todo seu corpo, você gela.... acaba desmaiando.");
                status.loucuraTotal();

                status.tempoVaria();
            }
    }
    else {
        console.log("Eles te impedem de entrar sem entregar as armas, volte ao inicio do game !!!");
        console.log(".........................................................");
    }
}
