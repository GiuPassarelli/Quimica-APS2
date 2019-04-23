//var montar = JSON.parse(montar);

var montarJSON = [
    {   
        "id" : "1",
        "nome" : "Niquel",
        "Oxidação": "Ni -> Ni2+ + 2e",
        "Redução" : "Ni2+ + 2e -> Ni",
        "Elétrons" : 2,
        "PotencialRed" : -0.23,
        "Solução" : "NiSO4",
        "MassaMolar" : 58.6934,
        "Msol": 159.6106,
        "PrecoMetal" : 2.59 ,
        "PrecoSol" : ""
    },
    {   
        "id" : "2",
        "nome" : "Zinco",
        "Oxidação" : "Zn -> Zn2+ + 2e",
        "Redução" : "Zn2+ + 2e -> Zn",
        "Elétrons" : 2,
        "PotencialRed" : -0.76,
        "Solução" : "ZnSO4",
        "Msol": 161.4446,
        "MassaMolar" : 65.38,
        "PrecoMetal" : 2.3,
        "PrecoSol" : ""
    },
    {   
        "id" : "3",
        "nome":"Chumbo",
        "Oxidação" : "Pb -> Pb2+ + 2e",
        "Redução" : "Pb2+ + 2e -> Pb",
        "Elétrons" : 2,
        "PotencialRed" : -0.13,
        "Solução" :"Pb(NO3)2" ,
        "MassaMolar" : 207.2,
        "PrecoMetal" : 7.3 ,
        "PrecoSol" : ""
    },
    {   
        "id" : 4,
        "nome" :"Cádmio",
        "Oxidação" : "Cd->Cd2+ + 2e",
        "Redução" : "Cd2+ + 2e -> Cd",
        "Elétrons" : 2,
        "PotencialRed" : -0.4,
        "Solução" : "",
        "MassaMolar" : 112.411,
        "PrecoMetal" : "",
        "PrecoSol" : ""
    },
    {   
        "id":5,
        "nome": "Magnésio",
        "Oxidação" : "",
        "Redução" : "",
        "Elétrons" : 2,
        "PotencialRed" : -2.37,
        "Solução" :"MgS04" ,
        "MassaMolar" : 24.305,
        "Msol": 331.2128,
        "PrecoMetal" : "",
        "PrecoSol" :""
    },
    {   
        "nome" : "Prata",
        "Oxidação" : "",
        "Redução" : "",
        "Elétrons" : 1,
        "PotencialRed" : 0.8,
        "Solução" :"AgCl" ,
        "MassaMolar" : 107.8682,
        "PrecoMetal" :1.31 ,
        "PrecoSol" : ""
    },
    {   
        "id" : "7",
        "nome" : "Cobre",
        "Oxidação" : " Cd->Cd2+ + 2e",
        "Redução" : "Cd2+ + 2e -> Cd",
        "Elétrons" : 1,
        "PotencialRed" : 0.52,
        "Solução" :"CuSO4" ,
        "MassaMolar" : 63.546,
        "PrecoMetal" : 15 ,
        "PrecoSol" :6
    },
    {   
        "id": 8,
        "nome" :"Crômio",
        "Oxidação" : "",
        "Redução" : "",
        "Elétrons" : 3,
        "PotencialRed" : -0.74,
        "Solução" : "",
        "MassaMolar" : 51.9961,
        "PrecoMetal" : "",
        "PrecoSol" :""
    },
    {   
        "id" : 9,
        "nome" : "Lítio", 
        "Oxidação" : "Li -> Li2+ + 2e",
        "Redução" : " Li2+ + 2e ->Li ",
        "Elétrons" : 1,
        "PotencialRed" : -3.04,
        "Solução" :  "LiCl",
        "Msol": 42.394,
        "MassaMolar" : 6.941,
        "PrecoMetal" : 79 ,
        "PrecoSol" :2400
    },
    {   
        "id" : 10,   
        "nome": "Potássio",
        "Oxidação" : "",
        "Redução" : "",
        "Elétrons" : 1,
        "PotencialRed" : -2.92,
        "PotencialOxi" : 2.92, 
        "Solução" : "",
        "MassaMolar" : 39.0983,
        "PrecoMetal" :0.95 ,
        "PrecoSol" :""
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


function montar2(montarJSON){    
    const metal1 = document.getElementById("metal1").value;
    const metal2 = document.getElementById("metal2").value;
    const concentracao1 = document.getElementById("concentracao1").value;
    const concentracao2 = document.getElementById("concentracao2").value;
    const massa1 = document.getElementById("massa1").value;
    const massa2 = document.getElementById("massa2").value;
    const temperatura = document.getElementById("temperatura").value;

    const mols1 = 1;//massa1/montar.metal1.MassaMolar;
    const mols2 = 1;//massa2/montar.metal2.MassaMolar;
    const e1 = 1;//montar.metal1.Eletrons;
    const e2 = 1;//montar.metal2.Eletrons;
    const potRed1 = 1;//montar.metal1.PotencialRed;
    const potRed2 = 1;//montar.metal2.PotencialRed;
    const F = 96485.33289;
    const R = 8.31;
    let ne, E0, n, concentracaoCima, concentracaoBaixo;
    


    console.log(montarJSON);

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
    }
    else{
        E0 = potRed2 - potRed1;
        concentracaoCima = concentracao1;
        concentracaoBaixo = concentracao2;
    }
    
    let E = E0 - (R* (temperatura+ 273,15))/Q;

    E = E * math.log(concentracaoCima/concentracaoBaixo);

    let Dq = Q/(100+massa1+massa2);    //100 = g total solucoes

    let De = Dq * 100;    //100 = mL total

}


function selecionar(){
    
}

