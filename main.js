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
                    app.winHandle(cpuChoice, userChoice, result);
                } else if (userChoice === 2 && result % 2 != 0) {
                    $statusTitle.textContent = 'Perdeu';
                    app.looseHandle(cpuChoice, userChoice, result);
                } else if (userChoice === 1 && result % 2 != 0) {
                    $statusTitle.textContent = 'Ganhou';
                    app.winHandle(cpuChoice, userChoice, result);
                } else {
                    $statusTitle.textContent = 'Perdeu';
                    app.looseHandle(cpuChoice, userChoice, result);
                }
            },

            winHandle: function winHandle(cpuChoice, userChoice, result) {
                $handsYou.textContent = '';
                $handsCpu.textContent = '';
                var $text = document.createElement('h1');
                var $text2 = document.createElement('h1');
                $text.textContent = userChoice;
                $text2.textContent = cpuChoice;
                $handsYou.appendChild($text);
                $handsCpu.appendChild($text2);
            },

            looseHandle: function looseHandle(cpuChoice, userChoice, result) {
                $handsYou.textContent = '';
                $handsCpu.textContent = '';
                var $text = document.createElement('h1');
                var $text2 = document.createElement('h1');
                $text.textContent = userChoice;
                $text2.textContent = cpuChoice;
                $handsYou.appendChild($text);
                $handsCpu.appendChild($text2);
            }
        };
    })();

    app.init();

})();
