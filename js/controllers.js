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
/**
 * CreateCtrl - controller
 */
function CreateCtrl($scope, $http, $state) {
//Set options for dropzone
    //Visit http://www.dropzonejs.com/#configuration-options for more options
    $scope.dzOptions = {
        url: '/alt_upload_url',
        paramName: 'photo',
        maxFilesize: '10',
        acceptedFiles: 'image/jpeg, images/jpg, image/png',
        addRemoveLinks: true
    };


    //Handle events for dropzone
    //Visit http://www.dropzonejs.com/#events for more events
    $scope.dzCallbacks = {
        'addedfile': function (file) {
            console.log(file);
            $scope.newFile = file;
        },
        'success': function (file, xhr) {
            console.log(file, xhr);
        }
    };


    //Apply methods for dropzone
    //Visit http://www.dropzonejs.com/#dropzone-methods for more methods
    $scope.dzMethods = {};
    $scope.removeNewFile = function () {
        $scope.dzMethods.removeFile($scope.newFile); //We got $scope.newFile from 'addedfile' event callback
    }
}

angular.module('bizfeed')
    .controller('MainCtrl', MainCtrl)
    .controller('ReportCtrl', ReportCtrl)
    .controller('CreateCtrl', CreateCtrl)
