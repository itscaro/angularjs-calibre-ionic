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
                            controller: 'BookDetailCtrl'
                        }
                    }
                });
        }]);
