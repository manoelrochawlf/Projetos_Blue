var prompt = require('prompt-sync')();

// MINHA INTENÇÃO NO PROJETO ALÉM DE CUMPRIR OS REQUIsITOS É MOSTRAR VERSATILIDADE E FORMAS DIFERENTES DE USAR ESTRUTURAS DE REPETIÇÃO, CONDICIONAIS E OUTROS DESVIOS POSSIVEIS DENTRO DO CÓDIGO.

let contglobal = 0;
while(contglobal < 1) {
    console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~"); //Botei os 2 tios para dar a sensação de ondas.
    console.log(`ERA UMA VEZ.....
UM PIRATA CHAMADO WILLY, ELE DESBRAVOU OS SETE MARES E LUTOU CONTRA OS MONTROS MAIS PERIGOSOS E TEMIDOS DE TODO O OCEANO. ASSIM WILLY SE TORNOU LENDÁRIO, CAUSANDO TEMOR APENAS SOB O TREMULAR DE SUA BANDEIRA E O ECOAR DE SUA VOZ.`);
    console.log();
    let yes = 0;
    let no = 0;
    console.log();
    console.log("SEJA BEM-VINDO PIRATÃO");
    console.log("RESPONDA COM: S PARA SIM/ N PARA NÃO");
    console.log();
//---------------PERGUNTAS---------------

    for(let cont1 = 0; cont1 < 1;) {
        let pergunta1 = prompt(" 1 - JÁ CONSEGUIU SAQUEAR UM GALEÃO? -> ");
        if (pergunta1 == "S" || pergunta1 == "s"){
            yes = yes + 1
            cont1+=1
}
        else if (pergunta1 == "N" || pergunta1 == "n") {
            no = no + 1
            cont1+=1
}
        else {
            console.log();
            console.log("! * !")
            console.log(" Digite S ou N")
            console.log("! * !")
            console.log();
}
}
    console.log();
    console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~");
    console.log();
//---------------------------------------------------------------------------

    for(let cont2 = 0; cont2 < 1;) {
        let pergunta2 = prompt(" 2 - JÁ CAÇOU UM MONSTRO DOS MARES? -> ");
        if (pergunta2 == "S" || pergunta2 == "s") {
             yes = yes + 1
            cont2+=1
    }
        else if (pergunta2 == "N" || pergunta2 == "n") {
            no = no + 1
            cont2+=2
    }
        else {
            console.log();
            console.log("! * !");
            console.log(" Digite S ou N");
            console.log("! * !");
            console.log();
    }
}
console.log();
console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~");
console.log();

//---------------------------------------------------------------------------

    for(let cont3 = 0; cont3 < 1;) {
    let pergunta3 = prompt("3 - JÁ FEZ UMA BANDEIRA PIRATA ASSUSTADORA? -> ");
        if (pergunta3 == "S" || pergunta3 == "s") {
        yes = yes + 1
        cont3+=1
    }
        else if (pergunta3 == "N" || pergunta3 == "n") {
            no = no + 1
            cont3+=1
    }
        else {
            console.log();
            console.log("! * !");
            console.log(" Digite S ou N");
            console.log("! * !");
            console.log();
    }
}
    console.log();
    console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~");
    console.log();

//---------------------------------------------------------------------------
    for(let cont4 = 0; cont4 < 1;) {
        let pergunta4 = prompt(" 4 - JÁ CONSEGUIU ROUBAR O TESOURO DO SÉCULO? -> ");
        if (pergunta4 == "S" || pergunta4 == "s") {
        yes = yes + 1
        cont4+=1
    }
        else if (pergunta4 == "N" || pergunta4 == "n") {
            no = no + 1;
            cont4+=1;
    }
        else {
            console.log();
            console.log("! * !");
            console.log(" Digite S ou N");
            console.log("! * !");
            console.log();
    }
}
    console.log();
    console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~");
    console.log();

//----------------------------------------------------------------------------------------------------------------------------------------------

    for(let cont5 = 0; cont5 < 1;) {
        let pergunta5 = prompt("5 - JÁ CONSEGUIU SEU PROPRIO PAPAGAIO FALANTE ? -> "); 
        if (pergunta5 == "S" || pergunta5 == "s") {
            yes = yes + 1
            cont5+=1
    }
        else if (pergunta5 == "N" || pergunta5 == "n") {
            no = no + 1
            cont5+=1
    }
        else {
            console.log();
            console.log("! * !");
            console.log(" Digite S ou N");
            console.log("! * !");
            console.log();
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------
    console.log();
    console.log();
    console.log("RESULTADO");
    console.log("X~~O~X~O~~X");
    console.log("Sim:", yes, "  Não:", no);
    console.log("X~~O~X~O~~X");
    console.log();
    if(yes == 0){
    console.log("VOCÊ NÃO É DIGNO DE SER UM PIRATA!.");
 }
    else if (yes == 1) {
    console.log("Que piratinha mais meia boca em...");
 }
    else if (yes == 2){
    console.log("Que piratinha mais meia boca em...");
 }
    else if (yes == 3){
    console.log("Você foi um grande pirata, MAS UM TANTO SEM SAL EM HAHAHA.");
 }
    else if (yes == 4){
    console.log("Quase um Luffy do One Piece hahaha!!! Você faz parte dos piratas que marcaram geração.");
 }
    else {
    console.log("VOCÊ É O PIRATA MAIS LENDÁRIO DOS SETE MARES!");
 }
console.log();

    for(let contDono = 0; contDono<1;) {
        let donoProjeto = prompt("Quer saber sobre o dono do projeto? (S para Sim, N para Não) -> ").toUpperCase();
        switch (donoProjeto) {
            case "S":
                console.log("...............................");
                console.log("Manoel Rocha é um rapaz de 19 anos, com nada mais nada menos que o sonho de se tornar um grande programador e desenvolver projetos para ajudar pessoas :)");
                console.log("...............................");
                console.log();
                contDono+=1
        break;
            case "N": 
                contDono=+ 1;
         break;           
            default:
                console.log();
                console.log("! * !");
                console.log(" Digite S ou N");
                console.log("! * !");
                console.log();
        break;
    }
  }
    let repetJogo = prompt("Quer repetir o jogo? tecle S, se não, pressione qualquer outra tecla -> ").toUpperCase();
    console.log();
    let repetindoJogo =
        (repetJogo == "S")
            ? console.log("Vem pra aventura PIRATÃO")
            : contglobal=+1
}

// Fora do While, então só é apresentado se o usuario quiser acabr o jogo

console.log("NOSSA JORNADA PELOS SETE MARES ACABA AQUI!");
console.log("~~ ~~ ~~ ~~ ~~ ~~ ~~  ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~");
console.log();
console.log("MUITO OBRIGADO POR ACOMPANHAR MEU PRIMEIRO PROJETO PELA BLUE EDTECH.");
console.log("This World is blue.");
