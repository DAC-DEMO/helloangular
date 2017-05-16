var app = angular.module("app", []);

app.controller("first", function($scope, $http) {
    $scope.appName = "CDAC";

    $scope.newPost = {
        "POST_TYPE": "TEXT",
        "PATH_OF_POST": null
    };

    var postList = [];
    $scope.postList = postList;



    $scope.createPost = function() {
        console.log($scope.newPost);

        var url = "http://localhost:3010/post/";
        var hpromise = $http.post(url, $scope.newPost);
        hpromise.then(function(response) {
            console.log(response);

            $scope.readAllPost();
            $scope.newPost.POST = "";
        }).catch(function(err) {
            console.log(err);
        });
    };


    $scope.readAllPost = function() {
        var url = "http://localhost:3010/post/";
        var hpromise = $http.get(url);
        hpromise.then(function(response) {
            console.log(response.data);

            $scope.postList = response.data;

        }).catch(function(err) {
            console.log(err);
        });
    };
    $scope.readAllPost();

});