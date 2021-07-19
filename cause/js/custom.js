//adding a lightbox for donation
$(document).ready(function(){
    $("#lightbox").click(function(){
        $(".donateBtn").velocity("callout.flash");
    });


    //when clicked on the button, close the lightbox
    $("#lightbox_close_btn").click(function(){
        console.log("Closing lightbox...");
        $("#lightbox").fadeOut();
        //$("#lightbox").css("display", "none");
    });

    //opening the lightbox
    $(".img-fluid").click(function(){
        console.log("Openning the lightbox");
        $("#lightbox").css("display","flex");
    });

    // this is javascript instead of jquery - jquery starts off with the dollar sign
    setTimeout(function(){
        $("#lightbox").css("display","flex");
    },3000); //set for 3000 milliseconds for 3 second
});
