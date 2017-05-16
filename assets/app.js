var app = angular.module("app", []);

app.controller("first", function($scope) {

    $scope.appName = "CDAC";
    $scope.postList = [];

    var post = { "LIKE_COUNT": 0, "DISLIKE_COUNT": 0, "SUPER_LIKE_COUNT": 0 };
    $scope.newPost = angular.copy(post);

    $scope.createPost = function() {
        console.log($scope.newPost);

        $scope.postList.push($scope.newPost);

        $scope.newPost = angular.copy(post);
    }


    $scope.incrLikeCount = function(postObj) {
        console.log(postObj);

        postObj.LIKE_COUNT += 1;
    }
});