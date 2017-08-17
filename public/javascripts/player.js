var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function youtube_parser(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  }
}

function onYouTubeIframeAPIReady() {
  $(".player").each(function() {
    var playerDiv = $(this);
    var playerId = playerDiv.attr("id");

    if (playerId) {
      var playerModalId = playerId.replace("-video","-modal")
      var player = new YT.Player(playerId, {
        videoId: youtube_parser(playerDiv.attr("src")),
        playerVars: {
          'controls' : 2,
          'autohide': 1,
          'modestbranding' : 1,
          'rel' : 0,
          'showinfo' : 0,
          'wmode' : "transparent",
          'origin': "https://alab-wisdom-for-wanderers.locomotivehosting.com",

        }
      });

      $('#'+playerModalId).on('hide.bs.modal', function (e) {
        player.stopVideo();
      });  
    }
  });
}
;
