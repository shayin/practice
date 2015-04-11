/**
 * Created by huangxuanxin on 2015/4/10.
 */

//function PhoneListCtrl($scope){
//    $scope.phones = [
//        {"name": "Nexus S" ,
//            "snippet": "Fast just got......"},
//        {"name" : "Motorola XOOM",
//            "snippet" : "The Next...."},
//        {"name" : "MOTOROLA XOOM",
//            "snippet" : "............" }
//    ];
//}


 angular.module('ngAppDemo',[]).controller('PhoneListCtrl',
    function($scope) {
        $scope.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'},
            {'name': "Motorola XOOM™ with Wi-Fi",
                'snippet': 'The Next, Next Generation tablet.'},
            {'name': "MOTOROLA XOOM™",
                'snippet': 'The Next, Next Generation tablet.'}
        ];
 });