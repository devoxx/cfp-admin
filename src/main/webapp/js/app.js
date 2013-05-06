var app = angular.module('DevoxxCfpAdminApp', ['ui.bootstrap', '$strap.directives'], null);

app.config(function($routeProvider) {
    console.log('generic config')
    // General routing
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).otherwise({
            redirectTo: '/'
        });
});
