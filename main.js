let second = 0;
let minutes = 0;
let millisecond = 0;

let buttonStart = document.querySelector(".stopwatch__btn-start");
let buttonPause = document.querySelector(".stopwatch__btn-pause");
let buttonMark = document.querySelector(".stopwatch__btn-mark");
let buttonReset = document.querySelector(".stopwatch__btn-reset");
let stopwatchList = document.querySelector(".stopwatch__mark-list");

let minutesScorebord = document.querySelector(".stopwatch-minutes");
let secondScorebord = document.querySelector(".stopwatch-second");
let millisecondScorebord = document.querySelector(".stopwatch-millisecond");

let stopwatchLoop;

buttonStart.addEventListener('click', function () {
    if (!stopwatchLoop) {
        stopwatchLoop = setInterval(function () {
            millisecond += 1;
            if (millisecond == 100) {
                second += 1;
                millisecond = 0;
            }
    
            if (second == 60) {
                minutes += 1;
                second = 0;
            }
            minutesScorebord.textContent = minutes;
            secondScorebord.textContent = second;
            millisecondScorebord.textContent = millisecond;
        }, 10);
    }
});

buttonPause.addEventListener('click', function() {
    clearInterval(stopwatchLoop);
    stopwatchLoop = null;
})

buttonReset.addEventListener('click', function() {
    clearInterval(stopwatchLoop);
    stopwatchLoop = null;
    minutes = 0;
    second = 0;
    millisecond = 0;
    minutesScorebord.textContent = '00';
    secondScorebord.textContent = '00';
    millisecondScorebord.textContent = '00';

    let stopwatchLiseDelete = document.querySelectorAll(".stopwatch__mark-item");

    for (const item of stopwatchLiseDelete) {
        item.remove();
    }
})

buttonMark.addEventListener('click', function() {
    let listItem = document.createElement("li");
    listItem.classList.add("stopwatch__mark-item");

    listItem.append(`Минута: ${minutes}, Секунда: ${second}, Мілісекунда: ${millisecond}`);
    stopwatchList.append(listItem);
})