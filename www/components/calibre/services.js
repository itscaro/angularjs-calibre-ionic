'use strict'

angular.module('myApp.calibre.services', [])
    .service('apiService', ['$rootScope', '$http', 'myAppConfig', function ($rootScope, $http, myAppConfig) {
        if (myAppConfig.server.host == '0.0.0.0') {
            this.endpointApi = 'http://127.0.0.1:' + myAppConfig.server.port + myAppConfig.server.path
        } else {
            this.endpointApi = 'http://' + myAppConfig.server.host + ':' + myAppConfig.server.port + myAppConfig.server.path
        }
        this.getBooks = function (page, limit, order, search) {
            // Return promise for controller to use.
            if (search) {
                search = '?title=' + search
            } else {
                search = ''
            }
            if (order) {
                order = '?order=' + order
            } else {
                order = ''
            }
            var _return = $http.get(this.endpointApi + '/api/books/page/' + page + '/' + limit + search + order);

            $rootScope.$broadcast('DEBUG', _return);

            return _return;
        };

        this.getBook = function (id) {
            var _return = $http.get(this.endpointApi + '/api/books/' + id);

            $rootScope.$broadcast('DEBUG', _return);

            return _return;
        };

        this.getBookCover = function (id, height) {
            return this.endpointApi + '/api/books/' + id + "/cover.jpg?height=" + height;
        };

        this.getBookInFormat = function (id, format) {
            return (this.endpointApi + '/api/books/' + id + '/download/' + format).toLocaleLowerCase();
        };
    }]);
