angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location, LoginService) {

    $scope.$on('$ionicView.enter', function(e) {
        $scope.data = {};
    });

    $scope.login = function() {
        var userName = $scope.data.userName;
        var password = $scope.data.password;

        var user = LoginService.authenticate(userName, password);

        if (user.authenticated) {
            $location.path("/tab/published");
        } else {
            alert("Invalid credentails");
        }
    }
})

.controller('PublishedReportsCtrl', function($scope, Reports) {
    $scope.reports = Reports.getPublished();
})

.controller('FeaturedReportsCtrl', function($scope, Reports) {
    $scope.reports = Reports.getFeatured();
})

.controller('PendingReportsCtrl', function($scope, Reports) {
    $scope.reports = Reports.getPending();
})

.controller('HeaderCtrl', function($scope, $location) {
    console.log("In HeaderCtrl ...");

    $scope.logout = function() {
        console.log("clicked ...");
        $location.path("/login");
    }
})

.controller('TabsCtrl', function($scope, CurrentUser) {
    $scope.$on('$ionicView.enter', function(e) {
        $scope.userRole = CurrentUser.load().role;
    });
})

.controller('SubmitReportsCtrl', function($scope) {
    //TODO implement ...
});
