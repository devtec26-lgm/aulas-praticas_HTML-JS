function calcsal(){
    let sbruto = document.getElementById("sBruto").value;
    if(sbruto <= 1621){
        let vdesconto = (7.5/100) * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vDesc").value= vdesconto.toFixed(2);
        document.getElementById("sLiqd").value= sliquido.toFixed(2);
    }
    else if(sbruto <= 2902.84){
        let vdesconto = (9/100) * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vDesc").value= vdesconto.toFixed(2);
        document.getElementById("sLiqd").value= sliquido.toFixed(2);
    }
    else if(sbruto <= 4354.27){
        let vdesconto = (12/100) * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vDesc").value= vdesconto.toFixed(2);
        document.getElementById("sLiqd").value= sliquido.toFixed(2);
    }
    else{
        let vdesconto = (14/100) * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vDesc").value= vdesconto.toFixed(2);
        document.getElementById("sLiqd").value= sliquido.toFixed(2);
    }
}


function limpar(){
    document.getElementById("sBruto").value="";
    document.getElementById("vDesc").value= "";
    document.getElementById("sLiqd").value= "";
}
