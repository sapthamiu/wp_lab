$(document).ready(function(){ 
    $("table").css({
        "border-collapse": "collapse", 
        "margin-bottom": "20px"
    });
    $("td, th").css("border", "solid black 2px");
    $("tr:even").css("background-color", "#fddccfff");
    $("tr:odd").css("background-color", "#e2a3a3ff");
    $(".button").css({ 
        "display": "flex",
        "justify-content": "center" 
    })
    $("#container").css({ 
        "position": "relative", 
        "left": "500px"
    }); 
    $("button").click(function(){
        $("#container").animate({ 
            left: '0px'
        }, "slow"); });
});