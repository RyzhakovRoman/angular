myApp.controller("phoneCtrl", function ($scope) {

    $scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers:
            [{
                text: 'AngularJS!',
                author: 'Вова Сидоров',
                date: '20/10/2013',
                rate:2
            },{
                text: 'AngularJS лучше всех',
                author: 'Олег Кузнецов',
                date: '21/10/2013',
                rate:3
            },{
                text: 'фигасе квестшен',
                author: 'Неизвестный',
                date: '22/10/2013',
                rate:0
            }]
    };

    $scope.voteUp = function (answer){
        answer.rate++;
    };
    $scope.voteDown = function (answer){
        answer.rate--;
    };
});

// myApp.controller("answerCtrl", function ($scope) {
//
//         $scope.save = function (answer, answerForm){
//             console.dir(answerForm);
//             if(answerForm.$valid){
//                 // действия по сохранению
//                 alert(answer.author + ", ваш ответ сохранен");
//             }
//         };
// });