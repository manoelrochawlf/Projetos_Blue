var prompt = require('prompt-sync')();

    let contGlobal = 0;
    let classicoMilhoes = ["Vasco", "Flamengo", "Serie B"];
    let rodadasJogo;
    let computadorEscolhe;
    let usuarioEscolhe;
    let pontosUsuario = 0;
    let pontoComputador = 0;
    let empate;

    console.log();
    console.log(`
    SEJA BEM VINDO AO JOGO DO CLASSICO DOS MILHÕES ! (VERSÃO JOKENPO)

    Clássico dos Milhões é o clássico brasileiro entre Clube de Regatas do Flamengo e Club de Regatas Vasco da Gama, ambos da cidade do Rio de Janeiro.
    é amplamente considerado como um dos maiores clássicos do futebol brasileiro devido ao número de torcedores que envolve e por ser uma das maiores rivalidades futebolísticas do país.`
    );
    console.log();
    console.log("✠ crf ✠ crf ✠ crf ✠ crf ✠ crf ✠ crf ✠");
    console.log("      R E G R A S")
    console.log();
    console.log(" - VASCO VENCE DO FLAMENGO");
    console.log(" - VASCO PERDE PRA SERIE B");
    console.log();
    console.log(" - FLAMENGO GANHA DA SERIE B");
    console.log(" - FLAMENGO PERDE PRO VASCO");
    console.log();
    console.log(" - SERIE B GANHA DO VASCO");
    console.log(" - SERIE B PERDE PRO FLAMENGO")
    console.log("✠ crf ✠ crf ✠ crf ✠ crf ✠ crf ✠ crf ✠");
    console.log();
   // 1 - Permitir que eu decida quantas rodadas iremos fazer; x
    while(contGlobal<1) { // 5 - Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido; x
        rodadasJogo = +prompt("Quantas rodadas pretende jogar ? -> ");
        while(Number.isNaN(rodadasJogo)) {
            console.log(" ! ! ! ! ! ! ! ");
            console.log("Resposta inválida, por favor digite um número :(");
            console.log(" ! ! ! ! ! ! ! ");
            rodadasJogo = +prompt("Quantas rodadas pretende jogar ? -> ");
        }
        for(let i = 0; i < rodadasJogo; i++) {
            console.log();
            console.log();
   // 2 - Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo); x
            usuarioEscolhe = prompt("Escolha Vasco, Flamengo ou Serie B! -> ").toUpperCase();
            computadorEscolhe = Math.trunc(Math.random() * classicoMilhoes.length); // 3 - 3 - Decidir de forma aleatória a decisão do computador; x

                while(usuarioEscolhe != "VASCO" && usuarioEscolhe != "FLAMENGO" && usuarioEscolhe != "SERIE B") {
                    console.log("...............................................");
                    console.log(" !!!!! Digite Vasco, Flamengo ou Serie B !!!!!")
                    console.log("...............................................");
                    usuarioEscolhe = prompt("Escolha Vasco, Flamengo ou Serie B! -> ").toUpperCase();
            }
            console.log();
  // 4 - Comparar os valores e declarar o vencedor (marcando 1 vitória para ele); x
                if(usuarioEscolhe =="VASCO") {


                    if(computadorEscolhe == 0) {
                        console.log("       ✠     ✠     ✠ ");
                        console.log("EMPATE");
                        console.log(`O computador também escolheu ${classicoMilhoes[0]}. `);
                } 
                    else if(computadorEscolhe == 1) {  
                        pontosUsuario+=1;    
                        console.log("       ✠     ✠     ✠ ");                 
                        console.log("VOCÊ GANHOU!");
                        console.log(`O computador escolheu ${classicoMilhoes[1]}, e não tem jeito, É O GIGANTE DA COLINA QUE PRAVALECE.`);
                }   else {
                    console.log("       ✠     ✠     ✠ ");
                        console.log("VOCÊ PERDEU!");
                        pontoComputador+=1                        
                        console.log(`O computador escolheu ${classicoMilhoes[2]}, e você foi rebaixado kkkkkkkk.`);
                }
            } 

                else if (usuarioEscolhe == "FLAMENGO") {

                    if(computadorEscolhe == 0) {
                        console.log("     crf     crf     crf");
                        console.log("VOCÊ PERDEU");
                        pontoComputador+=1
                        console.log(`O computador escolheu ${classicoMilhoes[0]} e não tem como ganhar do GIGANTE DA COLINA...`);
                    } 
                    else if(computadorEscolhe == 1) {
                        console.log("     crf     crf     crf");
                        console.log("EMPATE");
                        console.log(`O computador também escolheu ${classicoMilhoes[1]}`);
                    } else {
                        console.log("     crf     crf     crf");
                        console.log("VOCÊ GANHOU");
                        pontosUsuario+=1;                        
                        console.log(`O computador escolheu ${classicoMilhoes[2]}, mas não tem como O MENGÃO SER REBAIXADO, NUNCA SERÁ.`);
                    }
                } 
                
                else {

                    if(computadorEscolhe == 0) {
                        pontosUsuario+=1;
                        console.log();
                        console.log("VOCÊ GANHOU!");
                        console.log(`O computador escolheu ${classicoMilhoes[0]} e você rebaixou ele kkkkkkk.`);
                        console.log();
                    } 
                    else if(computadorEscolhe == 1) {
                        console.log();
                        console.log("VOCÊ PERDEU!");
                        pontoComputador+=1
                        console.log(`O computador escolheu ${classicoMilhoes[1]} e não tem como o MENGUDO ser rebaixado...`);
                        console.log();
                    } else {
                        console.log();
                        console.log("EMPATE");
                        console.log(`O computador também escolheu ${classicoMilhoes[2]}.`);
                        console.log();
                    }

                    }
                    
        }
        console.log();
        console.log();
        console.log();

        empate = rodadasJogo - (pontosUsuario + pontoComputador);
  // 6 - Ao final das repetições, mostrar quantas rodadas cada jogador ganhou; x
    console.log("Você ganhou " + pontosUsuario + " pontos" + " e a maquina " + pontoComputador + ", vocês empataram " + empate + " vezes");

 // 7 - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador) 
    if(pontosUsuario > pontoComputador) {
        console.log("...............................................");
        console.log(" !!! VOCÊ É O GRANDE CAMPEÃO !!! ");
        console.log("...............................................");
    }
    else if (pontoComputador > pontosUsuario) {
            console.log("...............................................");
            console.log(" !!! O COMPUTADOR É O GRANDE CAMPEÃO !!! ");
            console.log("..............................................."); 
    }
    else {
        console.log("...............................................");
        console.log(" !!! O DUELO TERMINOU EMPATADO, OS 2 SÃO CAMPEÕES !!! ");
        console.log("...............................................");
    }
 // 8 - Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa. x
    console.log();
    let repetirJogo = +prompt("Se deseja jogar novamente tecle 1, se não digite 2 -> ");

        while(repetirJogo != 1 && repetirJogo != 2) {
            console.log("Digite um número válido");
            repetirJogo = +prompt("Se deseja jogar novamente tecle 1, se não digite 2 -> ");
    }
        if(repetirJogo == 1) {
            console.log();
            console.log("...............................................");
            console.log("Vamos lá")
            pontosUsuario = 0;
            pontoComputador = 0;
            rodadasJogo = 0;
    }   else {
            contGlobal++
    }

}
console.log();