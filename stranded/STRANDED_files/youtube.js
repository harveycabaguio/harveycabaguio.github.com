var tag = document.createElement('script');
 
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
var video;
function onYouTubeIframeAPIReady() {
        video = new YT.Player(player, {
                height: '480',
                width: '640',
                videoId: 'SoG6udXueAk',
                playerVars: {
                        'wmode': 'Opaque'
                },
                events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                }
        });
};
 
function onPlayerReady(event) {
	//event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
                done = true;
                overlay.style.opacity = '1.0'; // THIS NEEDS TO BE REPLACE WITH THE DISPLAY STYLE
        };
        if (event.data == YT.PlayerState.PLAYING) {
                overlay.style.opacity = '1.0'; // THIS NEEDS TO BE REPLACE WITH THE DISPLAY STYLE
        };
        if (event.data == YT.PlayerState.PAUSED) {
                overlay.style.opacity = '0'; // THIS IS THE DISPLAY OF OVERLAY WHEN NOT VISIBLE
        };
}
 
function stopVideo() {
        video.stopVideo();
        overlay.style.opacity = '0'; // THIS IS THE DISPLAY OF OVERLAY WHEN NOT VISIBLE
}