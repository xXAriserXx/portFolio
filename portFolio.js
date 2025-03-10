"use strict";
const videoTag = document.querySelector("video");
const toggleVideo = document.getElementById("videoCheckBox");
console.log(toggleVideo);
toggleVideo === null || toggleVideo === void 0 ? void 0 : toggleVideo.addEventListener("change", function () {
    if (!toggleVideo.checked) {
        videoTag === null || videoTag === void 0 ? void 0 : videoTag.pause();
    }
    else {
        videoTag === null || videoTag === void 0 ? void 0 : videoTag.play();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    videoTag.pause();
});

const notDone = document.querySelectorAll(".not_done");

for (let i = 0; i < notDone.length; i++) {
    notDone[i].addEventListener("click", (e) => {
        e.preventDefault();
        alert("Il questa funzione non è ancora stata implementata");
    });
}