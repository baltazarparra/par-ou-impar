(function(){

    'use strict';

    var $main = document.querySelector('[data-js="main"]');
    var $main = document.querySelector('[data-js="main"]');
    var $handsYou = document.querySelector('[data-js="handsYou"]');
    var $handsCpu = document.querySelector('[data-js="handsCpu"]');
    var $scoreYou = document.querySelector('[data-js="scoreYou"]');
    var $scoreCpu = document.querySelector('[data-js="scoreCpu"]');
    var $btnPar = document.querySelector('[data-js="btnPar"]');
    var $btnImpar = document.querySelector('[data-js="btnImpar"]');
    var $statusTitle = document.querySelector('[data-js="statusTitle"]');

    var app = (function appController() {
        var userScore = 0;
        var cpuScore = 0;
        return {
            init: function init() {
                this.initEvents();
            },

            initEvents: function initEvents() {
                $btnPar.addEventListener('click', this.handleChoice(2));
                $btnImpar.addEventListener('click', this.handleChoice(1));
            },

            handleChoice: function handleChoice(userChoice) {
                return function() {
                    var cpuChoice = Math.floor(Math.random() * 5 + 1);
                    var result = cpuChoice + userChoice;
                    app.handleResult(cpuChoice, userChoice, result);
                }
            },

            handleResult: function handleResult(cpuChoice, userChoice, result) {
                if (userChoice === 2 && result % 2 == 0) {
                    $statusTitle.textContent = 'Ganhou';
                    userScore += 1;
                    app.winHandle(cpuChoice, userChoice, result);
                } else if (userChoice === 2 && result % 2 != 0) {
                    $statusTitle.textContent = 'Perdeu';
                    cpuScore += 1;
                    app.looseHandle(cpuChoice, userChoice, result);
                } else if (userChoice === 1 && result % 2 != 0) {
                    $statusTitle.textContent = 'Ganhou';
                    userScore += 1;
                    app.winHandle(cpuChoice, userChoice, result);
                } else {
                    $statusTitle.textContent = 'Perdeu';
                    cpuScore += 1;
                    app.looseHandle(cpuChoice, userChoice, result);
                }
                $scoreYou.textContent = userScore;
                $scoreCpu.textContent = cpuScore;
            },

            winHandle: function winHandle(cpuChoice, userChoice, result) {
                $handsYou.textContent = '';
                $handsCpu.textContent = '';
                var $yourChoiceImg = document.createElement('img');
                var $cpuChoiceImg = document.createElement('img');
                $yourChoiceImg.setAttribute('src', 'svgs/' + userChoice + '.svg');
                $cpuChoiceImg.setAttribute('src', 'svgs/' + cpuChoice + '.svg');
                $handsYou.appendChild($yourChoiceImg);
                $handsCpu.appendChild($cpuChoiceImg);
            },

            looseHandle: function looseHandle(cpuChoice, userChoice, result) {
                $handsYou.textContent = '';
                $handsCpu.textContent = '';
                var $yourChoiceImg = document.createElement('img');
                var $cpuChoiceImg = document.createElement('img');
                $yourChoiceImg.setAttribute('src', 'svgs/' + userChoice + '.svg');
                $cpuChoiceImg.setAttribute('src', 'svgs/' + cpuChoice + '.svg');
                $handsYou.appendChild($yourChoiceImg);
                $handsCpu.appendChild($cpuChoiceImg);
            }
        };
    })();

    app.init();

})();
