myApp.directive('myAnswerList', function () {
    return {
        restrict: "A",
        templateUrl: "templates/answersTmplt.html",
        transclude: true
    }

}
);