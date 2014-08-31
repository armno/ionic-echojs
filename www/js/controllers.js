(function() {
  'use strict';

  angular.module('echoJs')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    this.items = [
      { id: 1, name: "article 1" },
      { id: 2, name: "article 2" },
      { id: 3, name: "article 3" },
      { id: 3, name: "article 4" }
    ];
  }
})();
