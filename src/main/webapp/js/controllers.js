// Injecting rootScope only allowed in AppCtrl, because of handling routing errors
app.controller('AppCtrl', function($rootScope, $route, $log) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        $log.debug('$routeChangeError:', event, current, previous, rejection);
    });
    $rootScope.$on('$routeChangeStart', function(event, current, previous, rejection) {
        $log.debug('$routeChangeStart', event, current, previous, rejection);
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
        $log.debug('$routeChangeSuccess', event, current, previous, rejection);
    });
    $log.debug($route.routes)
});

app.controller('HomeCtrl', function($scope, $location, TalksService) {
    $scope.data = {
        talks: TalksService.talks()
    }
});