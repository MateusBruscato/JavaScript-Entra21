
function calcular(){

    let tab1 = document.getElementById("tab1").value
    let tab2 = document.getElementById("tab2").value

    if(!tab1 || !tab2 || isNaN(tab1) || isNaN(tab2) ){
        alert("Por favor, insira dois números naturais. Ex.: 0, 1, 2, 3.")
        return
    }

    if(tab2 < tab1){
        let temp = tab1
        tab1 = tab2
        tab2 = temp
    }

    const container = document.createElement("div")
    container.classList.add("tables")
    document.body.appendChild(container)

    do{
        const tabuada = container.appendChild(document.createElement("ul"))

        for (let index = 1; index < 11; index++) {

        let linha = document.createElement("li")
        linha.className = "tab" + tab1
        linha.appendChild(document.createTextNode(tab1 + "X" + index + " = " + (tab1 * index)))
        tabuada.appendChild(linha)
        }
        tabuada.appendChild(document.createElement("br"))
        tab1++
    }while(tab1<=tab2)

    document.container.appendChild(tabuada)
}