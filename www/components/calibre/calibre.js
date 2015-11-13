'use strict';

angular.module('myApp.calibre',
    [
        'ngCookies',
        'myApp.calibre.controllers',
        'myApp.calibre.services'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.books', {
                    url: '/books',
                    views: {
                        'menuContent': {
                            templateUrl: 'components/calibre/books.html',
                            controller: 'BooksCtrl'
                        }
                    }
                })
                .state('app.book-detail', {
                    url: '/books/{id:int}',
                    views: {
                        'menuContent': {
                            templateUrl: 'components/calibre/book-detail.html',
                            controller: 'BooksDetailCtrl'
                        }
                    }
                });
        }])
    .directive('browseTo', function ($ionicGesture) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                var handleTap = function (e) {
                    // todo: capture Google Analytics here
                    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
                };
                var tapGesture = $ionicGesture.on('tap', handleTap, $element);
                $scope.$on('$destroy', function () {
                    // Clean up - unbind drag gesture handler
                    $ionicGesture.off(tapGesture, 'tap', handleTap);
                });
            }
        }
    })
;
