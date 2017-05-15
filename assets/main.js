var app = angular.module("app", []);

app.controller("first", function($scope) {
    var mypost = {
        "post": "Hello CDAC, Welcome to Khargar",
        "like": 50,
        "dislike": 100,
        "address": {
            "city": "MUMBAI"
        }
    };

    var username = "CDAC MUMBAI";

    $scope.mypost = mypost;
    $scope.username = username;

    $scope.postList = [{
            "post": "Hello CDAC, Welcome to Khargar",
            "like": 50,
            "dislike": 100
        },
        {
            "post": "Hello CDAC, Welcome to Khargar",
            "like": 50,
            "dislike": 100
        },
        {
            "post": "Hello CDAC, Welcome to Khargar",
            "like": 50,
            "dislike": 100
        },
        {
            "post": "Hello CDAC, Welcome to Khargar",
            "like": 50,
            "dislike": 100
        }, {
            "post": "Hello CDAC, Welcome to Khargar",
            "like": 50,
            "dislike": 100
        }
    ];
});


app.controller("second", function($scope) {
    $scope.movie = { "name": "Dr. Strange" };
});