(function() {
  'use strict';

  angular.module('echoJs')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['items'];

  function MainCtrl() {
    this.items = items;
  }
})();
