/**
 * Created by huangxuanxin on 2015/4/13.
 */

angular.module('ngAppDemo',[]).controller('PhoneListCtrl',
    function($scope) {
        $scope.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.',
                'age' : 0},
            {'name': "Motorola XOOM™ with Wi-Fi",
                'snippet': 'The Next, Next Generation tablet.',
                'age' : 1},
            {'name': "MOTOROLA XOOM™",
                'snippet': 'The Next, Next Generation tablet.',
                'age' : 2}
        ];

        $scope.orderProp = 'age';                    // 初始设定根据age来order
    }

);
