const PlayFullVideo = (props, ref) => {
return (
    <div class="playFullVideo">
          <video id="fullVideo" loop>
            <source src="./assets/audio-video/kategora-april-desktop.mp4"
              type="video/mp4" />
          </video>
        </div>
)
}
export default PlayFullVideo;