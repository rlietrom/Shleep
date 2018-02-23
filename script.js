$(document).ready(function(){

  // $(window).on("scroll", function() {
  //   console.log("scrollling")
  //    if ($(this).scrollTop() > 100) {
  //       $("topnav").css("background-color","#252525");
  //    }
  //    else {
  //       $("topnav").css("background-color","#fff");
  //    }
  // });

  var scroll_pos = 0;
   $(document).scroll(function() {
       scroll_pos = $(this).scrollTop();
       if(scroll_pos > 210) {
           $(".topnav").css('background-color', 'white');
       } else {
           $("topnav").css('background-color', transparent);
       }
   });

});

//navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
