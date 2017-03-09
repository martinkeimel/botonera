'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('botoneraApp', []);

app.controller('botoneraCtrl', function($scope) {
    $scope.botones = [
        {
            image: 'images/btn_blue.png',
            text: 'BABOOM!',
            audio: 'media/baboom.mp3'
        },
        {
            image: 'images/btn_red.png',
            text: 'Buenos dias',
            audio: 'media/buenos dias.mp3'
        },
        {
            image: 'images/btn_orange.png',
            text: 'Que placer',
            audio: 'media/que placer.mp3'
        },
        {
            image: 'images/btn_yellow.png',
            text: 'Arcoiris',
            audio: 'media/arcoiris.mp3'
        }
    ];
    
    $scope.bonus = [
        {
            image: 'images/btn_green.png',
            text: 'Bonus',
            audio: 'media/fefo come hombres.mp3'
        }
    ];
    
    $scope.playAudio = function (audioUrl){
        var audio = new Audio(audioUrl);
        audio.play();
    }
});


