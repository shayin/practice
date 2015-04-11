/**
 * Created by huangxuanxin on 2015/4/11.
 */

var $module =angular.module('PhonecatApp', []);
    $module.controller('PhoneListCtrl',
        function($scope){
            $scope.phones = [
                {'name': 'Nexus S',
                    'snippet': 'Fast just got faster with Nexus S.'},
                {'name': "Motorola XOOM™ with Wi-Fi",
                    'snippet': 'The Next, Next Generation tablet.'},
                {'name': "MOTOROLA XOOM™",
                    'snippet': 'The Next, Next Generation tablet.'}
            ];
            $scope.yourname='world';
            $scope.hello="Hello, World!";
})

//
// module.controller('MyController',
//    function($scope){
//        $scope.hello = "Hello, World!";
//})



























