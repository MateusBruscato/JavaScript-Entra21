function start() {
    const menu = "#menu-ativo";
    if ($(menu).is(":visible")) {
        esconderElemento($(menu));
    } else {
        mostrarElemento($(menu));
    }

}

function esconderElemento(ele) {
    $(ele).hide()
}

function mostrarElemento(ele) {
    $(ele).show()
}

function abrirJanela(ele){
    console.log($(ele));
    if($(ele).hasClass("tabuada")){
        $("#janela").find("#janela-conteudo").text("tabuada")
    }
    if($(ele).hasClass("imc")){
    }
    if($(ele).hasClass("calculadora")){
    }
    if($(ele).hasClass("ajax")){
        $("#janela").find("#title").text("Exemplo Ajax")
        const form = '<label></label>' +
                     '<input type="text" id="cep">' +
                     '<button id="enviar_cep">Enviar</button>';
        
        $(form).appendTo("#janela-conteudo")

    }
    $("#janela").show();
}