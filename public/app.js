'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('botoneraApp', []);

app.controller('botoneraCtrl', function($scope) {
    $scope.botones = [
        {
            image: 'images/btn_blue.png',
            text: 'Bicho',
            audio: 'media/bicho.mp3'
        },
        {
            image: 'images/btn_red.png',
            text: 'Buen dia',
            audio: 'media/buen dia.mp3'
        },
        {
            image: 'images/btn_orange.png',
            text: 'Corneta',
            audio: 'media/corneta.mp3'
        },
        {
            image: 'images/btn_yellow.png',
            text: 'Jajaja',
            audio: 'media/jajaja.mp3'
        },
        {
            image: 'images/btn_green.png',
            text: 'Tincho',
            audio: 'media/tincho.mp3'
        },
        {
            image: 'images/btn_blue.png',
            text: 'Y bueno',
            audio: 'media/y bueno.mp3'
        }
    ];
    
    $scope.bonus = [
        {
            image: 'images/btn_green.png',
            text: 'Fefo',
            audio: 'media/fefo come hombres.mp3'
        }
    ];
    
    $scope.playAudio = function (audioUrl){
        var audio = new Audio(audioUrl);
        audio.play();
    }
});


