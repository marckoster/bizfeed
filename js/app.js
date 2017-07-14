/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('bizfeed', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'LocalStorageModule'
    ]).config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('bizfeed');
    });
})();
