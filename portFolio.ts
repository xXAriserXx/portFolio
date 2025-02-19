
const videoTag = document.querySelector("video") as HTMLVideoElement
const toggleVideo = document.getElementById("videoCheckBox") as HTMLInputElement

console.log(toggleVideo)

toggleVideo?.addEventListener("change", function () {
    if (!toggleVideo.checked) {
        videoTag?.pause()
    } else {
        videoTag?.play()
    }
})

document.addEventListener("DOMContentLoaded", () => {
    videoTag.pause()
})