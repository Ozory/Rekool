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
        })
        .state('tab', {
            abstract: true,
            url: "/tab",
            templateUrl: "pages/tab.html"
        })
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'pages/tabs/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('tab.conta', {
            url: '/conta',
            views: {
                'tab-conta': {
                    templateUrl: 'pages/tabs/conta.html',
                    controller: 'contaController'
                }
            }
        });


    $urlRouterProvider.otherwise("/login");

});



rekoolapp.controller('loginController', function ($scope, Alerta) {

    $scope.Login = {
        email: "",
        senha: ""
    };

    $scope.ValidateLogin = function () {
        if ($scope.Login.email == "" || $scope.Login.senha == "") {
            Alerta.Erro("Email e senha são obrigatórios");
        }
    }
});

rekoolapp.controller('cadastroController', function ($scope, Alerta) {

});

rekoolapp.controller('homeController', function ($scope, Alerta) {

});

rekoolapp.controller('contaController', function ($scope, Alerta) {

});