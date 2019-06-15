var player; //Youtube 
var currentPlay = 0;

function onYouTubeIframeAPIReady() {}

function onPlayerReady(event) {}

function onPlayerStateChange(event) {}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            "autoplay": 0,
            "controls": 0,
            "start": playTime[currentPlay][0],
            "end": playTime[currentPlay][1],
            "showinfo": 0,
            "rel": 0,
            "Tiv_load_policy": 3
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
    // 當Youtube播放器準備好時
    function onPlayerReady(event) {
        $("#playButton").click(function () {
            $("h2[class='h22']").text(player.getVideoData().title);
            player.playVideo()
        });
    }

    function onPlayerStateChange(event) {
        console.log(currentPlay);
        if (event.data == 0 && (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1])) {
            if (currentPlay < playList.length - 1) {
                currentPlay++;
                player.loadVideoById({
                    "videoId": playList[currentPlay],
                    "startSeconds": playTime[currentPlay][0],
                    "endSeconds": playTime[currentPlay][1],
                    "suggestedQuality": "large"
                });
            } else {
                currentPlay = 0;
                player.loadVideoById({
                    "videoId": playList[currentPlay],
                    "startSeconds": playTime[currentPlay][0],
                    "endSeconds": playTime[currentPlay][1],
                    "suggestedQuality": "large"
                });
            }
        }
        if (player.getVideoLoadedFraction() > 0) {
            $("h2[class='h22']").text(player.getVideoData().title);
        }
    }
}
