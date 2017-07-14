/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('bizfeed', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'LocalStorageModule',
        'thatisuday.dropzone'
    ]).config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('bizfeed');
    });
})();
