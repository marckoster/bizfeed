/**
 *
 * bizfeed Router to manage routing and views
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/dashboard/main");

    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
        .state('dashboard', {
            abstract: true,
            url: "/dashboard",
            templateUrl: "views/common/content_top_navigation.html",
        })
        .state('dashboard.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Bizfeed' ,  heading: 'Dashboard' }
        })
}
angular
    .module('bizfeed')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
