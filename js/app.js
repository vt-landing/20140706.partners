'use strict';

var app = angular.module('WealthExplorer', [
  'ionic',
  'ionic.contrib.ui.tinderCards',
  'ionic.contrib.icon',
  'config',
  'LocalStorageModule',
  'ngCordova',
  'http-auth-interceptor',
  'uiGmapgoogle-maps'
])

.run(function($rootScope, $ionicPlatform, ENV) {
  console.log('Environment:', ENV.name);

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

      .state('app.splash', {
          url: '/splash',
          views: {
              'menuContent': {
                  templateUrl: 'templates/splash.html',
                  controller: 'SplashCtrl'
              }
          }
      })
      .state('app.uncoverJessica', {
          url: '/uncoverJessica',
          views: {
              'menuContent': {
                  templateUrl: 'templates/uncoverJessica.html',
                  controller: 'UncoverJessicaCtrl'
              }
          }
      })
      .state('app.overviewWealth', {
          url: '/overviewWealth',
          views: {
              'menuContent': {
                  templateUrl: 'templates/overviewWealth.html',
                  controller: 'OverviewWealthCtrl'
              }
          }
      })
      .state('app.hiddenWealth', {
          url: '/hiddenWealth',
          views: {
              'menuContent': {
                  templateUrl: 'templates/hiddenWealth.html',
                  controller: 'HiddenWealthCtrl'
              }
          }
      })
      .state('app.familyTime', {
          url: '/familyTime',
          views: {
              'menuContent': {
                  templateUrl: 'templates/familyTime.html',
                  controller: 'FamilyTimeCtrl'
              }
          }
      })

      .state('app.dailyUncovering', {
          url: '/dailyUncovering',
          views: {
              'menuContent': {
                  templateUrl: 'templates/dailyUncovering.html',
                  controller: ''
              }
          }
      })
      .state('app.myItems', {
          url: '/myItems',
          views: {
              'menuContent': {
                  templateUrl: 'templates/myItems.html',
                  controller: 'MyItemsCtrl'
              }
          }
      })
      .state('app.itemList2', {
          url: '/ItemsList2',
          views: {
              'menuContent': {
                  templateUrl: 'templates/ItemList2.html',
                  controller: 'ItemList2Ctrl'
              }
          }
      })
      .state('app.itemDetails', {
          url: '/itemDetails',
          views: {
              'menuContent': {
                  templateUrl: 'templates/itemDetails.html',
                  controller: 'ItemDetailsCtrl'
              }
          }
      })
      .state('app.itemSold', {
          url: '/itemSold',
          views: {
              'menuContent': {
                  templateUrl: 'templates/itemSold.html',
                  controller: 'ItemSoldCtrl'
              }
          }
      })



      .state('app.myWealth', {
          url: '/myWealth',
          views: {
              'menuContent': {
                  templateUrl: 'templates/splash.html',
                  controller: 'SplashCtrl'
              }
          }
      })
      .state('app.myReward', {
          url: '/myReward',
          views: {
              'menuContent': {
                  templateUrl: 'templates/splash.html',
                  controller: 'SplashCtrl'
              }
          }
      })
      .state('app.virtualInvestment', {
          url: '/virtualInvestment',
          views: {
              'menuContent': {
                  templateUrl: 'templates/virtualInvestment.html',
                  controller: 'VirtualInvestmentCtrl'
              }
          }
      })
      .state('app.virtualInvestment.portfolio', {
          url: '/portfolio',
          views: {
              'tab-portfolio': {
                  templateUrl: 'templates/viPortfolio.html',
                  controller: 'ViPortfolioCtrl'
              }
          }
      })
      .state('app.virtualInvestment.trade', {
          url: '/trade',
          views: {
              'tab-trade': {
                  templateUrl: 'templates/viTrade.html',
                  controller: 'ViTradeCtrl'
              }
          }
      })
      .state('app.virtualInvestment.compete', {
          url: '/compete',
          views: {
              'tab-compete': {
                  templateUrl: 'templates/viCompete.html',
                  controller: 'ViCompeteCtrl'
              }
          }
      })
      .state('app.virtualInvestment.learn', {
          url: '/learn',
          views: {
              'tab-learn': {
                  templateUrl: 'templates/viLearn.html',
                  controller: 'ViLearnCtrl'
              }
          }
      })

    .state('app.intro', {
      url: '/intro',
      views: {
        'menuContent': {
          templateUrl: 'templates/intro.html',
          controller: 'IntroCtrl'
        }
      }
    })

    .state('app.favorites', {
      url: '/favorites',
      views: {
        'menuContent': {
          templateUrl: 'templates/favorites.html',
          controller: 'FavoritesCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.home.map', {
      url: '/map/?latitude&longitude',
      views: {
        'tab-map': {
          templateUrl: 'templates/tab-map.html',
          controller: 'MapViewCtrl as mapCtrl'
        }
      }
    })

    .state('app.home.card', {
      url: '/card',
      views: {
        'tab-card': {
          templateUrl: 'templates/tab-card.html',
          controller: 'CardViewCtrl'
        }
      }
    })

    .state('app.home.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/tab-list.html',
          controller: 'ListViewCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/splash');
  //$urlRouterProvider.otherwise('/app/virtualInvestment/portfolio');
  //$urlRouterProvider.otherwise('/app/virtualInvestment/trade');
  //$urlRouterProvider.otherwise('/app/virtualInvestment/compete');
  //$urlRouterProvider.otherwise('/app.hiddenWealth');
  //$urlRouterProvider.otherwise('/app/myItems');
  // $urlRouterProvider.otherwise('/app/home/list');
})

.constant('$ionicLoadingConfig', {
  template: '<h3><icon ios="ion-loading-d" android="ion-loading-c" default="ion-refreshing"></icon></h3>Loading...'
})

.config(function($httpProvider) {
  $httpProvider.interceptors.push('TrendicityInterceptor');
})

.config(function($ionicConfigProvider) {
  // Make tabs show up at the bottom for android
  $ionicConfigProvider.tabs.position('bottom');
});
