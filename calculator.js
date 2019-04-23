var montar = JSON.parse(montar);

function showDiv(divIdHide, divIdShow, style, subtitle){
    document.getElementById(divIdHide).style.display = 'none';
    document.getElementById(divIdShow).style.display = style;
    document.getElementById("subtitle").innerHTML = subtitle;
}

function montar(){    
    const metal1 = document.getElementById("metal1").value;
    const metal2 = document.getElementById("metal2").value;
    const concentracao1 = document.getElementById("concentracao1").value;
    const concentracao2 = document.getElementById("concentracao2").value;
    const massa1 = document.getElementById("massa1").value;
    const massa2 = document.getElementById("massa2").value;
    const temperatura = document.getElementById("temperatura").value;

    const mols1 = massa1/montar.metal1.MassaMolar;
    const mols2 = massa2/montar.metal2.MassaMolar;
    const e1 = montar.metal1.Eletrons;
    const e2 = montar.metal2.Eletrons;
    const potRed1 = montar.metal1.PotencialRed;
    const potRed2 = montar.metal2.PotencialRed;
    const F = 96485.33289;
    const R = 8.31;
    let ne, E0, n, concentracaoCima, concentracaoBaixo;

    console.log(e1);

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