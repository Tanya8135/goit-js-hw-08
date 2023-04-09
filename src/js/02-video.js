
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const STORAGE = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Обробник подій. 
player.on('timeupdate', throttle(function (data) {
    try {
        localStorage.setItem(STORAGE, JSON.stringify(data.seconds));
    } catch (e) {
        console.log("Cannot save video time.");
    }
}, 1000));

// Отримує збережений час з localStorage
const savedTime = localStorage.getItem(STORAGE);

// знаходе цей збережений час з localStorage та відтворює відео
player.setCurrentTime(JSON.parse(savedTime))
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                console.log("The time was less than 0 or greater than the video’s duration");
                break;
            default:
                console.log("Some other error occurred");
                break;
        }
    });
