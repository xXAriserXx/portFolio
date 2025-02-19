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
