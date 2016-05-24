// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(['$ionicPlatform', '$ionicPopup','$rootScope','$location',function($ionicPlatform, $ionicPopup, $rootScope, $location) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    //主页面显示退出提示框
    $ionicPlatform.registerBackButtonAction(function (e) {

      e.preventDefault();

      function showConfirm() {
        var confirmPopup = $ionicPopup.confirm({
          title: '<strong>退出应用?</strong>',
          template: '你确定要退出应用吗?',
          okText: '退出',
          cancelText: '取消'
        });

        confirmPopup.then(function (res) {
          if (res) {
            ionic.Platform.exitApp();
          } else {
            // Don't close
          }
        });
      }

    
    showConfirm();

      return false;
    }, 101);
}])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.tabs', {
        url: '/tabs',
        views: {
            'menuContent': {
                templateUrl: 'templates/tabs.html',
                controller: 'TabsCtrl'
            },
            'fabContent': ''
        }
    })

    .state('app.tabs.doc', {
        url: '/doc',
        views: {
            'tab-doc': {
                templateUrl: 'templates/tabs-doc.html',
                controller: 'TabsCtrl'
            }
        }
    })

    .state('app.tabs.doc.file', {
        url: '/file',
        views: {
            'tab-doc-file': {
                templateUrl: 'templates/tabs-doc-file.html',
                controller: 'TabsDocFileCtrl'
            }
        }
    })

    .state('app.tabs.doc.upload', {
        url: '/upload',
        views: {
            'tab-doc-upload': {
                templateUrl: 'templates/tabs-doc-upload.html',
                controller: 'TabsCtrl'
            }
        }
    })

    .state('app.tabs.doc.download', {
        url: '/download',
        views: {
            'tab-doc-download': {
                templateUrl: 'templates/tabs-doc-download.html',
                controller: 'TabsCtrl'
            }
        }
    })

    .state('app.tabs.qna', {
        url: '/qna',
        views: {
            'tab-qna': {
                templateUrl: 'templates/tabs-qna.html',
                controller: 'TabsCtrl'
            }
        }
    })

    .state('app.tabs.exp', {
        url: '/exp',
        views: {
            'tab-exp': {
                templateUrl: 'templates/tabs-exp.html',
                controller: 'TabsCtrl'
            }
        }
    })

    .state('app.tabs.wiki', {
        url: '/wiki',
        views: {
            'tab-wiki': {
                templateUrl: 'templates/tabs-wiki.html',
                controller: 'TabsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
