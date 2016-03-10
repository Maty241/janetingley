function showMenu(){
    $("#wrapper").addClass("toggled");
};

function hideMenu(){
    $("#wrapper").removeClass("toggled");
};

window.scrollToTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
};

$("#menu-toggle").click(function(e){
    if(!$("#wrapper").hasClass("toggled")){
        showMenu();
        e.stopPropagation();
    }
});

$("#page-content-wrapper").click(function(e){
    if($("#wrapper").hasClass("toggled")){
        hideMenu();
        e.stopPropagation();
    }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});

window.addEventListener('load', function(){
 
    var touchsurface = document.body,
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe){
        if (isrightswipe)
            showMenu();
        else{
            hideMenu();
        }
    }
 
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        //e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        //e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        //e.preventDefault()
    }, false)
 
}, false) // end window.onload