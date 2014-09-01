angular.module('echoJs', ['ionic', 'ui.router'])

.config(function($stateProvider) {

    console.log('what the fuck config');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'MainCtrl',
      resolve: {
        items: function($http) {
          console.log('what the fuck resolve');
          return $http.get('http://www.github.com');
        }
      }
    })

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})