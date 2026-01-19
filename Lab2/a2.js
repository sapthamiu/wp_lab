function fall(){
    $("#ball").animate({top: "260px"}, 600, rise);
}
function rise(){
    $("#ball").animate({top: "0px"}, 600, fall);
}

$(document).ready(function(){
    fall();
});