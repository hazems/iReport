angular.module('starter.controllers', [])

.controller('AllReportsCtrl', function($scope, Reports) {
  $scope.reports = Reports.all();
})

.controller('FeaturedReportsCtrl', function($scope, Reports) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.reports = Reports.getFeatured();
})

/*
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

.controller('SubmitReportsCtrl', function($scope) {
  /*$scope.settings = {
    enableFriends: true
  };*/
});
