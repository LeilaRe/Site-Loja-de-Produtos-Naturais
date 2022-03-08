//Validações campo novidades

function validacaoNome(field) {
    nome = field.value;
    
        if (nome.length >= 2) { 

            document.getElementById("msgnome").innerHTML="🗸";
        }else if (nome.length == 0){
            document.getElementById("msgnome").innerHTML="<font color='red'>Campo obrigatório.</font>";
    
        }else{

            document.getElementById("msgnome").innerHTML="<font color='red'>Nome inválido.</font>";
        }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@")); //substring: extrai um trecho do texto entre dois índices informados; usuario= antes do @
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length); //indexOf: encontra a primeira ocorrência de um texto informado por parâmetro. dominio= depois do @

        if ((usuario.length >= 1) && //Tamanho de usuário maior ou igual a 1 caracter.
            (dominio.length >= 3) && //Tamanho do domínio maior ou igual a 3 caracteres.
            (usuario.search("@") == -1) && //Usuário não pode conter o @.
            (dominio.search("@") == -1) && //Domínio não pode conter o @.
            (usuario.search(" ") == -1) && //Usuário não pode conter o “ ” espaço em branco.
            (dominio.search(" ") == -1) && //Domínio não pode conter o “ ” espaço em branco.
            (dominio.search(".")!= -1) &&  //Domínio tem que possuir “.” Ponto.
            (dominio.indexOf(".") >= 1)&& //A posição do primeiro ponto tem que ser maior ou igual a 1, lembrando a posição 0 deve ser ocupada por algum caracter após o @.
            (dominio.lastIndexOf(".") < dominio.length - 1)) { //A posição do ultimo ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter.

            document.getElementById("msgemail").innerHTML="🗸";
        }else if (field.value.length == 0){
            document.getElementById("msgemail").innerHTML="<font color='red'>Campo obrigatório.</font>";
        }else{
            document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
        }
}

function validacaoFone(field) {
    fone = field.value;

        if ((fone.length == 14)) {

            document.getElementById("msgfone").innerHTML="🗸";
        }else{
            document.getElementById("msgfone").innerHTML="<font color='red'>O formato deve ser (xx)xxxxx-xxxx</font>";
        }
}
            
//Carousel

$(document).ready(function() {
 
    //Velocidade da rotação e contador
    var speed = 3000;
    var run = setInterval('rotate()', speed);
     
    //Pega o valor da largura e calcular o valor da posição da esquerda
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);
     
    //Coloca o último item antes do primeiro item, caso o usuário clique no botão de ANTERIOR
    $('#slides li:first').before($('#slides li:last'));
     
    //Coloca o item atual na posição correta
    $('#slides ul').css({'left' : left_value});
     
    //Se o usuário clica no botão ANTERIOR
    $('#prev').click(function() {
     
    //Pega a posição da direita
    var left_indent = parseInt($('#slides ul').css('left')) + item_width;
     
    //Move o item
    $('#slides ul').animate({'left' : left_indent}, 200,function(){
     
    //Move o último item e o coloca como o primeiro
    $('#slides li:first').before($('#slides li:last'));
     
    //Coloca o item atual na posição correta
    $('#slides ul').css({'left' : left_value});
     
    });
     
    //Cancela o comportamento do click
    return false;
     
    });
     
    //Se o usuário clica no botão PROXIMO
    $('#next').click(function() {
     
    //Pega a posição da direita
    var left_indent = parseInt($('#slides ul').css('left')) - item_width;
     
    //Move o item
    $('#slides ul').animate({'left' : left_indent}, 200, function () {
     
    //Move o último item e o coloca como o primeiro
    $('#slides li:last').after($('#slides li:first'));
     
    //Coloca o item atual na posição correta
    $('#slides ul').css({'left' : left_value});
     
    });
     
    //Cancela o comportamento do click
    return false;
     
    });
     
    //Se o usuário está com o mouse sob a imagem, para a rotacao, caso contrário, continua
    $('#slides').hover(
     
    function() {
    clearInterval(run);
    },
    function() {
    run = setInterval('rotate()', speed);
    }
    );
     
    });
     
    //O temporatizador chamará essa função e a rotação será feita
    function rotate() {
    $('#next').click();
    }
 