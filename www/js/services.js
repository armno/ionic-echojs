(function() {
  'use strict';

  angular.module('echoJs')
    .factory('Feed', Feed);

  Feed.$inject = ['$http'];

  console.log('what the fuck service');

  function Feed($http) {
    var feed = {
      getRss: getRss
    };

    return feed;

    function getRss() {
      return $http.get('http://www.echojs.com/rss');
    }
  }

})();