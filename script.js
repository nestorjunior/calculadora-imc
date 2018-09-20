
$(function(){

  $('button').bind('click', function() {
    
      var altura = $('#altura').val();
      var peso = $('#peso').val();

      altura = altura.replace(',','.');
      peso = peso.replace(',','.');

      //IMC = peso / altura²
      var IMC = peso / (altura * altura);

      if (IMC < 16) {
        var detalhes = 'Baixo Peso: Muito Grave';
      }else if (IMC >= 16 && IMC < 16.99) {
        var detalhes = 'Baixo Peso: Grave';
      }else if (IMC >= 17 && IMC < 18.49) {
        var detalhes = 'Baixo Peso';
      }else if (IMC >= 18.50 && IMC < 24.99) {
        var detalhes = 'Normal';
      }else if (IMC >= 25 && IMC < 29.99) {
        var detalhes = 'Sobrepeso';
      }else if (IMC >= 30 && IMC < 34.99) {
        var detalhes = 'Obesidade Grau I';
      }else if (IMC >= 35 && IMC < 39.99) {
        var detalhes = 'Obesidade Grau II';
      }else if (IMC >= 40) {
        var detalhes = 'Obesidade Grau III';
      }

      $('#resultado').html('Seu IMC é: ' + IMC + 'Kg/m² e seu status é: ' + detalhes );

  });

})