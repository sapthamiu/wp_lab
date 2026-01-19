function slide(){
    $("#text").animate({left: "400px"}, 3000, function(){
        $("#text").css("left", "-200px");
        slide();
    })
    }
$(document).ready(function(){
    slide();
})