// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngIOS9UIWebViewPatch'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$ionicConfigProvider.tabs.position('top');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        controller: 'TabsCtrl',
        templateUrl: 'views/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.published', {
        url: '/published',
        views: {
            'tab-published': {
                templateUrl: 'views/view-reports.html?type=published',
                controller: 'PublishedReportsCtrl'
            }
        }
    })

    .state('tab.featured', {
        url: '/featured',
        views: {
            'tab-featured': {
                templateUrl: 'views/view-reports.html?type=featured',
                controller: 'FeaturedReportsCtrl'
            }
        }
    })

    .state('tab.submit', {
        url: '/submit',
        views: {
            'tab-submit': {
                templateUrl: 'views/submit-report.html',
                controller: 'SubmitReportsCtrl'
            }
        }
    })

    .state('tab.pending', {
        url: '/pending',
        views: {
            'tab-pending': {
                templateUrl: 'views/view-reports.html?type=pending',
                controller: 'PendingReportsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});
