var rekoolapp = angular.module('rekoolapp', ['ionic']);

//#region CONFIGURATION

rekoolapp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

//#endregion

rekoolapp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
          url: "/login",
          templateUrl: "pages/login.html"
      })
      .state('cadastro', {
          url: "/cadastro",
          templateUrl: "pages/cadastro.html"
      });

    $urlRouterProvider.otherwise("/login");

});

rekoolapp.controller('loginController', function ($scope) {
   // console.log("teste de Login");
});

rekoolapp.controller('cadastroController', function ($scope) {
    //console.log("teste de cadastro");
});