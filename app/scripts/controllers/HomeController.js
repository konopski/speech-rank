(function () {
    'use strict';

    angular.module('speechRank').controller('HomeController', function( $scope, ConferenceService,
                $twitterOAuth, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, toastr ) {
        console.log('HomeController loaded..');
        $twitterOAuth.init(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET);

        console.log('connecting to twitter')
        $twitterOAuth.connect().then(function(data) {
            /* Make API calls here */
            console.log('calling twitter')
            var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=<twitter_handle>&count=2"
            $twitterOAuth.call(url).then(function(data) {
              console.log(data);
            }, function(err) {
                console.error('error', err)
                toastr.error(err);
            });

        }, function(err) {
                console.error('error', err)

        });

        $scope.getConferences = function() {
            ConferenceService.getConferences()
                .then(function(response) {
                    console.log('response', response);
                    $scope.yearsArray = response.data;
                }).catch(function(error) {
                    toastr.error(error.data, 'Server Error!');
                });
        };

        $scope.getConferences();
    });
})();
