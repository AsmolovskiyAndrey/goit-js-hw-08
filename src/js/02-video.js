import Player from '@vimeo/player'; //! из документации
// import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle'); //! из документации

const iframe = document.querySelector('iframe'); //! из документации
const player = new Player(iframe); //! из документации
const STORAGE_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(playTime, 1000));

lastTime(); //! если localStorage не пустой начнёт воспроизведение с последнего сохранённого времени

function playTime(data) { //? Функция запишет в localStorage секунды воспроизведения
    localStorage.setItem(STORAGE_TIME, data.seconds)
}

function lastTime() {//? Функция запишет в localStorage секунды воспроизведения и при перезагрузке вызовет setCurrentTime с сохр.временем
    const setTime = localStorage.getItem(STORAGE_TIME);

    if (setTime) {
        player.setCurrentTime(setTime);
    }
}