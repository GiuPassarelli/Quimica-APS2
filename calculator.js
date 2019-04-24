var montarJSON = [
    {   
        "nome" : "Niquel",
        "Oxidação": "Ni -> Ni2+ + 2e",
        "Redução" : "Ni2+ + 2e -> Ni",
        "Elétrons" : 2,
        "PotencialRed" : -0.23,
        "Solução" : "NiSO4",
        "MassaMolar" : 58.6934,
        "MassaSolucao": 159.6106,
        "PrecoMetal" : 2.59 ,
        "PrecoSol" : 47.5
    },
    {   
        "nome" : "Zinco",
        "Oxidação" : "Zn -> Zn2+ + 2e",
        "Redução" : "Zn2+ + 2e -> Zn",
        "Elétrons" : 2,
        "PotencialRed" : -0.76,
        "Solução" : "ZnSO4",
        "MassaSolucao": 161.4446,
        "MassaMolar" : 65.38,
        "PrecoMetal" : 2.3,
        "PrecoSol" : 72
    },
    {   
        "nome":"Chumbo",
        "Oxidação" : "Pb -> Pb2+ + 2e",
        "Redução" : "Pb2+ + 2e -> Pb",
        "Elétrons" : 2,
        "PotencialRed" : -0.13,
        "Solução" :"Pb(NO3)2" ,
        "MassaSolucao": 331.2098,
        "MassaMolar" : 207.2,
        "PrecoMetal" : 7.3 ,
        "PrecoSol" : 880
    },
    {   
        "nome" :"Cádmio",
        "Oxidação" : "Cd->Cd2+ + 2e",
        "Redução" : "Cd2+ + 2e -> Cd",
        "Elétrons" : 2,
        "PotencialRed" : -0.4,
        "Solução" : "CdSO4",
        "MassaSolucao":208.4736,
        "MassaMolar" : 112.411,
        "PrecoMetal" : 90,
        "PrecoSol" : 1004
    },
    {   
        
        "nome": "Magnésio",
        "Oxidação" : "Mg -> Mg2+ + 2e",
        "Redução" : "Mg2+ + 2e -> Mg",
        "Elétrons" : 2,
        "PotencialRed" : -2.37,
        "Solução" :"MgS04" ,
        "MassaSolucao":120.3676, 
        "MassaMolar" : 24.305,
        "MassaSolucao": 331.2128,
        "PrecoMetal" : 56,
        "PrecoSol" :102.6
    },
    {   
        "nome" : "Prata",
        "Oxidação" : "Ag - > Ag+1 + 1e",
        "Redução" : "Ag+1 + 1e -> Ag",
        "Elétrons" : 1,
        "PotencialRed" : 0.8,
        "Solução" :"AgCl" ,
        "MassaSolucao":143.3212 , 
        "MassaMolar" : 107.8682,
        "PrecoMetal" :1.31 ,
        "PrecoSol" : 14000
    },
    {   
        "nome" : "Cobre",
        "Oxidação" : " Cu->Cu2+ + 2e",
        "Redução" : "Cu2+ + 2e -> Cu",
        "Elétrons" : 1,
        "PotencialRed" : 0.52,
        "Solução" :"CuSO4" ,
        "MassaSolucao":159.6086,
        "MassaMolar" : 63.546,
        "PrecoMetal" : 15 ,
        "PrecoSol" :6
    },
    {   
        "nome" :"Cromo",
        "Oxidação" : "Cr -> Cr3+ + 3e",
        "Redução" : "Cr3+ +3e -> Cr",
        "Elétrons" : 3,
        "PotencialRed" : -0.74,
        "Solução" : "Cr2(SO4)3",
        "MassaSolucao":392.1800,
        "MassaMolar" : 51.9961,
        "PrecoMetal" : 600,
        "PrecoSol" :276
    },
    {   
        "nome" : "Lítio", 
        "Oxidação" : "Li -> Li2+ + 2e",
        "Redução" : " Li2+ + 2e ->Li ",
        "Elétrons" : 1,
        "PotencialRed" : -3.04,
        "Solução" :  "LiCl",
        "MassaSolucao": 42.394,
        "MassaMolar" : 6.941,
        "PrecoMetal" : 79 ,
        "PrecoSol" :2400
    },
    {   
        "nome": "Potássio",
        "Oxidação" : "K -> K1+ + 1e",
        "Redução" : "K1+ + 1e -> K",
        "Elétrons" : 1,
        "PotencialRed" : -2.92,
        "PotencialOxi" : 2.92, 
        "Solução" : "KNO3",
        "MassaSolucao": 101.1032,
        "MassaMolar" : 39.0983,
        "PrecoMetal" : 0.95 ,
        "PrecoSol" : 26.90
    }
]

var selecionarJSON = [
    {
        "nome": "Bateria Selada UniPower UP12280",
        "ddp":12 ,
        "cap_carga":28 ,
        "preco": 412 
    },
    {
        "nome": "Pilha Recarregavel D Ni-Cd",
        "ddp":1.2 ,
        "cap_carga":4.5 ,
        "preco": 35
    },
    {
        "nome": "Bateria 9v recarregavel",
        "ddp":9,
        "cap_carga": 0.25,
        "preco": 36
    },
    {
        "nome": "Ni-MH 2/3 AAA 1,2V - 500mA",
        "ddp": 1.2,
        "cap_carga": 0.5,
        "preco": 10
    },
    {
        "nome": "BATERIA SELADA F187 UP672",
        "ddp":6 ,
        "cap_carga": 7.2,
        "preco": 72.9 
    }
]

function showDiv(divIdHide, divIdShow, style, subtitle){
    document.getElementById(divIdHide).style.display = 'none';
    document.getElementById(divIdShow).style.display = style;
    document.getElementById("subtitle").innerHTML = subtitle;
}

function montar(){
    montar2(montarJSON);
}

function selecionar(){
    selecionar2(selecionarJSON);
}

function montar2(montarJSON){    
    const metal1 = document.getElementById("metal1").value;
    const metal2 = document.getElementById("metal2").value;
    const concentracao1 = document.getElementById("concentracao1").value;
    const concentracao2 = document.getElementById("concentracao2").value;
    const massa1 = document.getElementById("massa1").value;
    const massa2 = document.getElementById("massa2").value;
    const temperatura = document.getElementById("temperatura").value;

    const mols1 = massa1/montarJSON[metal1].MassaMolar;
    const mols2 = massa2/montarJSON[metal2].MassaMolar;
    const e1 = montarJSON[metal1].Elétrons;
    const e2 = montarJSON[metal2].Elétrons;
    const potRed1 = montarJSON[metal1].PotencialRed;
    const potRed2 = montarJSON[metal2].PotencialRed;
    const F = 96485.33289;
    const R = 8.31;
    let ne, E0, concentracaoCima, concentracaoBaixo;

    if (mols1 > mols2){
        ne = mols2 * e1;
    }
    else{
        ne = mols1 * e2;
    }
    
    let Q = ne * F;

    if(potRed1 > potRed2){
        E0 = potRed1 - potRed2;
        concentracaoCima = concentracao2;
        concentracaoBaixo = concentracao1;
        document.getElementById("montarRed").innerHTML = montarJSON[metal1].Redução;
        document.getElementById("montarOxi").innerHTML = montarJSON[metal2].Oxidação;
    }
    else{
        E0 = potRed2 - potRed1;
        concentracaoCima = concentracao1;
        concentracaoBaixo = concentracao2;
        document.getElementById("montarRed").innerHTML = montarJSON[metal2].Redução;
        document.getElementById("montarOxi").innerHTML = montarJSON[metal1].Oxidação;
    }
    
    let E = E0 - (R* (temperatura+ 273,15))/(Q* Math.log(concentracaoCima/concentracaoBaixo));

    let Dq = Q/(100+massa1+massa2);    //100 = g total solucoes

    let De = Dq * 100;    //100 = mL total

    let custo = montarJSON[metal1].PrecoMetal/1000 * massa1;
    custo += montarJSON[metal1].PrecoSol/1000 * 50;
    custo += montarJSON[metal2].PrecoMetal/1000 * massa2;
    custo += montarJSON[metal2].PrecoSol/1000 * 50;

    document.getElementById("solucao1").innerHTML = "Solucao do metal 1: "+ montarJSON[metal1].Solução;
    document.getElementById("solucao2").innerHTML = "Solucao do metal 2: "+ montarJSON[metal2].Solução;
    document.getElementById("montarddp").innerHTML = "ddp: "+ E + " V";
    document.getElementById("montarCapdeCarga").innerHTML = "Capacidade de carga: " + Q + " Ah";
    document.getElementById("montarDendeCarga").innerHTML = "Densidade de carga: " + Dq + " Ah/g";
    document.getElementById("montarDendeEnergia").innerHTML = "Densidade de energia: " + De + " Ah*L/g";
    document.getElementById("montarCusto").innerHTML = "Custo: " + "R$ " + custo;

}


function selecionar2(selecionarJSON){
    const ddp = document.getElementById("ddp").value;
    const potencia = document.getElementById("potencia").value;
    const tempo = document.getElementById("tempo").value;
    var serie = [];
    var paralelo = [];
    var ddpsFinais = [];
    var potsFinais = [];

    let corrente = potencia/ddp;
    let capCarga = tempo * corrente;
    let capCargaBateriaOriginal, capCargaBateria, capCargaBateriaAntigo, ddpBateriaOriginal, ddpBateria, ddpBateriaAntigo, serieValue, paraleloValue;

    for(var i = 0; i < selecionarJSON.length; i++){
        capCargaBateriaOriginal = selecionarJSON[i].cap_carga;
        capCargaBateria = capCargaBateriaOriginal;

        ddpBateriaOriginal = selecionarJSON[i].ddp;
        ddpBateria = ddpBateriaOriginal;

        serieValue = 1;
        paraleloValue = 1;

        while(ddp > ddpBateria){
            ddpBateriaAntigo = ddpBateria;
            ddpBateria += ddpBateriaOriginal;
            serieValue += 1;
        }

        serie[i] = String(serieValue);
        ddpsFinais[i] = ddpBateria;

        if(serieValue == 1){
            serieValue = 2;
        }
        if((ddp - ddpBateriaAntigo) <= (ddpBateria - ddp)) {
            serie[i] = String(serieValue - 1);
            ddpsFinais[i] = ddpBateriaAntigo;
        }

        while(capCarga > capCargaBateria){
            capCargaBateriaAntigo = capCargaBateria;
            capCargaBateria += capCargaBateriaOriginal;
            paraleloValue += 1;
        }

        paralelo[i] = String(paraleloValue);
        potsFinais[i] = ddpsFinais[i] * capCargaBateria/tempo;
        
        if(paraleloValue == 1){
            paraleloValue = 2;
        }
        if((capCarga - capCargaBateriaAntigo) <= (capCargaBateria - capCarga)){
            paralelo[i] = String(paraleloValue - 1);
            potsFinais[i] = ddpsFinais[i] * capCargaBateriaAntigo/tempo;
        }
    }
    console.log(serie);
    console.log(paralelo);

    document.getElementById("nome1").innerHTML = selecionarJSON[0].nome;
    document.getElementById("serie1").innerHTML = "Pilhas em série: "+ serie[0];
    document.getElementById("paralelo1").innerHTML = "Pilhas em paralelo: "+ paralelo[0];
    document.getElementById("ddp1").innerHTML = "DDP da associação: "+ ddpsFinais[0];
    document.getElementById("pot1").innerHTML = "Potência da associação: "+ potsFinais[0];
    document.getElementById("preco1").innerHTML = "Custo: R$"+ selecionarJSON[0].preco * (paralelo[0] * serie[0]);

    document.getElementById("nome2").innerHTML = selecionarJSON[1].nome;
    document.getElementById("serie2").innerHTML = "Pilhas em série: "+ serie[1];
    document.getElementById("paralelo2").innerHTML = "Pilhas em paralelo: "+ paralelo[1];
    document.getElementById("ddp2").innerHTML = "DDP da associação: "+ ddpsFinais[1];
    document.getElementById("pot2").innerHTML = "Potência da associação: "+ potsFinais[1];
    document.getElementById("preco2").innerHTML = "Custo: R$"+ selecionarJSON[1].preco * (paralelo[1] * serie[1]);

    document.getElementById("nome3").innerHTML = selecionarJSON[2].nome;
    document.getElementById("serie3").innerHTML = "Pilhas em série: "+ serie[2];
    document.getElementById("paralelo3").innerHTML = "Pilhas em paralelo: "+ paralelo[2];
    document.getElementById("ddp3").innerHTML = "DDP da associação: "+ ddpsFinais[2];
    document.getElementById("pot3").innerHTML = "Potência da associação: "+ potsFinais[2];
    document.getElementById("preco3").innerHTML = "Custo: R$"+ selecionarJSON[2].preco * (paralelo[2] * serie[2]);

    document.getElementById("nome4").innerHTML = selecionarJSON[3].nome;
    document.getElementById("serie4").innerHTML = "Pilhas em série: "+ serie[3];
    document.getElementById("paralelo4").innerHTML = "Pilhas em paralelo: "+ paralelo[3];
    document.getElementById("ddp4").innerHTML = "DDP da associação: "+ ddpsFinais[3];
    document.getElementById("pot4").innerHTML = "Potência da associação: "+ potsFinais[3];
    document.getElementById("preco4").innerHTML = "Custo: R$"+ selecionarJSON[3].preco * (paralelo[3] * serie[3]);

    document.getElementById("nome5").innerHTML = selecionarJSON[4].nome;
    document.getElementById("serie5").innerHTML = "Pilhas em série: "+ serie[4];
    document.getElementById("paralelo5").innerHTML = "Pilhas em paralelo: "+ paralelo[4];
    document.getElementById("ddp5").innerHTML = "DDP da associação: "+ ddpsFinais[4];
    document.getElementById("pot5").innerHTML = "Potência da associação: "+ potsFinais[4];
    document.getElementById("preco5").innerHTML = "Custo: R$"+ selecionarJSON[4].preco * (paralelo[4] * serie[4]);
    
}

