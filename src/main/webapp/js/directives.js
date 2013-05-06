app.directive('devoxxOnReturnKey', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.keypress(function(e) {
                if (e.which == 13) {
                    scope.$apply(attrs.devoxxOnReturnKey);
                    return false;
                }
            });
        }
    };
});
