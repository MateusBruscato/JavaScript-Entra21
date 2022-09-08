$("#janela").on("click", "#enviar_cep", submitCep)

function submitCep(){
    const cep = $("input#cep").val();
    $.ajax({
        type:"GET",
        url:'https://viacep.com.br/ws/' +cep+'/json/',
        dataType:"json",
        success:function(data){
            console.log(data)
            const ele = '<div>'+
                        '<p>logradouro:' + data.logradouro + '</p>'+
                        '</div>'
            $(ele).appendTo('#janela-conteudo');
        },
        error:function(){
            alert("Ops! Algo deu errado.")
        },
        beforeSend:function(){

        }
    })
}