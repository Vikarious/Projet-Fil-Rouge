const hideVideoElement = document.getElementById('hide_video');
const lightboxElement = document.getElementById('lightbox');
var player;

const videoThumbs = document.querySelectorAll('.show_video');
for (var i=0; i<videoThumbs.length; i++) {
    videoThumb = videoThumbs[i];
    videoThumb.addEventListener('click', function(e) {
        lightboxElement.style.display = 'flex';                
        player.loadVideoById(e.target.dataset.videoId, 0, "large");                
    });
}
hideVideoElement.addEventListener('click', function() {
    lightboxElement.style.display = 'none';
    player.stopVideo();
});

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {width: '848', height: '480',} );
}
