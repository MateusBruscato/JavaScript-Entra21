function calcularIMC(){

    let altura = document.getElementById("floatingAltura").value
    let peso = document.getElementById("floatingPeso").value
    let alert = document.querySelector(".alerta_invalid");
    let alert_imc = document.querySelector(".alerta_imc");


    altura = altura.replace(',', '.')
    peso = peso.replace(',', '.')

    if(altura <= 0 || peso <= 0 || isNaN(altura) || isNaN(peso)) {
        alert.classList.toggle("collapse");
        return
    }

    let imc = (peso / (altura * altura)).toFixed(2)
    let valor_imc = document.getElementById("valorimc")
    function app_imc(classificacao){
        append_imc = valor_imc.appendChild(document.createTextNode(imc))
        append_line = valor_imc.appendChild(document.createElement("br"))
        append_class = valor_imc.appendChild(document.createTextNode(classificacao)) 
    }

    if(imc < 18.5){
        app_imc("Classificação: Magreza.")
        alert_imc.classList.toggle("collapse");
    }
    else if(imc >= 18.5 && imc < 25){
        app_imc("Classificação: Normal.")
        alert_imc.classList.toggle("collapse");
    }
    else if(imc >= 25 && imc < 30){
        app_imc("Classificação: Sobrepeso.")
        alert_imc.classList.toggle("collapse");
    }
    else if(imc >= 30 && imc < 40){
        app_imc("Classificação: Obesidade.")
        alert_imc.classList.toggle("collapse");
    }
    else{
        app_imc("Classificação: Obesidade Grave.")
        alert_imc.classList.toggle("collapse");
    }
}

function closeAlert() {
    let alert = document.querySelector(".alerta_invalid");
    alert.classList.toggle("collapse");
}
function closeAlertImc() {
    let alert = document.querySelector(".alerta_imc");
    alert.classList.toggle("collapse");
    let valor_imc = document.getElementById("valorimc")
    while(valor_imc.firstChild){
        valor_imc.removeChild(valor_imc.firstChild)
    }
}