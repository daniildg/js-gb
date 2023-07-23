/*
Задание:
 
Необходимо найти короткое видео в интернете, либо ссылку на него, 
либо можно его скачать.
Необходимо создать видеоплеер, с кнопками play/pause, ползунком, который 
движется, когда мы просматриваем видео, по которому можно перемотать видео.
Также необходимо писать текущее время видео (должно меняться при просмотре).
Должен быть ползунок громкости видео.
*/

const videoEl = document.querySelector("video");
console.log(videoEl);
const playButtonEl = document.querySelector(".play");
const pauseButtonEl = document.querySelector(".pause");
const videoInputEl = document.getElementById(`video_time`);
const audioInputEl = document.getElementById(`volume`);

const videoTimeEl = document.querySelector(`.time`);

playButtonEl.addEventListener(`click`, () => {
  videoEl.play();
});

playButtonEl.addEventListener(`click`, () => {
  videoEl.pause();
});

videoInputEl.addEventListener("input", () => {});
