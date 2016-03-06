(function () {
    'use strict';

        angular.module('speechRank').controller('HomeController', function( $scope, ConferenceService, $twitterOAuth ) {
        console.log('HomeController loaded..');

        $scope.getConferences = function() {
            ConferenceService.getConferences()
                .then(function(response) {
                    console.log('response', response);
                    $scope.yearsArray = response.data;
                }).catch(function(error) {
                    console.error('error', error);
                });
        };

        $scope.getConferences();
    });
})();