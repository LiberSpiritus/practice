const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const audio = new Audio();
audio.src = "./media/Bowl_190621_Complete.mp3";

function playBtnHandler() {
    audio.play();
    playBtn.classList.add("clear");
    stopBtn.classList.remove("clear");
}

function stopBtnHandler() {
    audio.pause();
    audio.currentTime = 0;
    playBtn.classList.remove("clear");
    stopBtn.classList.add("clear");
}

function init() {
    playBtn.addEventListener("click", playBtnHandler);
    stopBtn.addEventListener("click", stopBtnHandler);
    stopBtn.classList.add("clear");
}

init();