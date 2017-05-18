myApp.controller("phoneCtrl",
function QuestionController($scope, $http) {

    $scope.response = {};
    $scope.save = function (answer, answerForm){
        if(answerForm.$valid){

            // $http.post("php/forAjax.php", answer).then(function success (response) {
            //     $scope.response = answer;//response.data;
            //     console.log(response);
            // });
        }
    };

});