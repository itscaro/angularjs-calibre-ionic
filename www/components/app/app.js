// Ionic Starter App

var Config = {
    server: {
        host: 'at.itscaro.com',
        port: 80,
        path: '/angular-calibre'
    }
}

angular.module('myApp.angular-calibre-ionic', [
    'ionic',
    'myApp.app.controllers',
    'myApp.calibre',
    'ngMaterial'
])

    .value('myAppConfig', Config)

    .run(function ($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });


        $rootScope.loadingMode = 'indeterminate';
        $rootScope.isLoading = true;
    })

    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');

        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'components/app/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'components/app/search.html'
                    }
                }
            })

            .state('app.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'components/app/about.html'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/books');
    })


;
