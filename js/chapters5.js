/**
 * Created by huangxuanxin on 2015/4/13.
 */

angular.module('ngAppDemo',[]).controller('PhoneListCtrl',
    function($scope, $http) {
        $http.get('chapters5.json').success(function(data){
            $scope.phones = data;
        });
        $scope.orderProp= 'age';

        PhoneListCtrl.$inject = ['$scope', '$http'];   //解决JS压缩引起的依赖注入系统不能正确识别服务的问题
    }



);
