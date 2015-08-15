// Alertas

rekoolapp.service('Alerta', function($ionicPopup){
    
    // Alerta padrao
    var _alert = function(message){
            $ionicPopup.alert({
              title: 'Rekkol',
              content: message
            });
    };
    
    // Mensagem de Erro
    var _erro = function(message){
            $ionicPopup.alert({
              title: 'Rekkol',
              content: message,
              buttons: [{
                  text: '<b>OK</b>',
                  type: 'button-assertive',
              }]
            });
    };
    
    return {
        Alerta:_alert,
        Erro: _erro
    };
});