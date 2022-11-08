document.addEventListener('DOMContentLoaded', () => {
    const date = new Date('Dec 31 2022 05:45:00');

    const daysVal = document.querySelector(".timer__day");
    const hoursVal = document.querySelector(".timer__hour");
    const minutesVal = document.querySelector(".timer__min");
    const secondsVal = document.querySelector(".timer__sec");

    const timeCount = () => {
        let now = new Date();
        let leftUntil = date - now;

        let days = Math.floor(leftUntil / (1000 * 60 * 60 * 24));
        let hour = Math.floor((leftUntil / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((leftUntil / (1000 * 60)) % 60);
        let seconds = Math.floor((leftUntil / 1000) % 60);

        timerContent(daysVal, addZero(days));
        timerContent(hoursVal, addZero(hour));
        timerContent(minutesVal, addZero(minutes));
        timerContent(secondsVal, addZero(seconds));

        if (leftUntil <= 0) {
            document.querySelector('.timer').style.display = 'none';
            document.querySelector('.happyB').style.display = 'flex';
        }

    };
    setInterval(timeCount, 1000);

})
//проверка времени
function addZero(time) {
    time = time < 10 ? '0' + time : time;
    return time;
}

function timerContent(value, func) {
    value.textContent = func;
}

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const timerBlock = document.querySelectorAll('.timer__block');
//изменение цвета 
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    timerBlock.forEach(timer => {
        timer.classList.toggle('active');
    });
})

