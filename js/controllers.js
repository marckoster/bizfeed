/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $http) {
    console.log("do main stuff")
};




/**
 * ReportCtrl - controller
 */
function ReportCtrl($scope, $http, $state) {

}

angular.module('bizfeed')
  .controller('MainCtrl', MainCtrl)
  .controller('ReportCtrl', ReportCtrl)
