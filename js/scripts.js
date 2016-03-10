window.scrollToTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    console.log("dsds");
    return false;
}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});