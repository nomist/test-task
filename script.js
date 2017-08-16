$(document).ready(function() {
  $(window).resize(function(){
    var wrapperWidth = $(".image__wrapper").width(),
        playerWidth = $(".musical__wrapper").width(),
        wireWidth = wrapperWidth - playerWidth,
        $wireRed = $('.image__wire--red'),
        wireRedWidth = wireWidth - 10;

    $wireRed.css('clip','rect(0px, 600px, 60px, '+wireRedWidth+'px)');
  });
  $(window).resize();
});
