$(document).ready(function(){ 
    $("#updatebtn").click(function(){
        let bg = $("#bgcolor").val();
        let font = $("#fontfamily").val();
        let size = $("#fontsize").val() + "px"; 
        let msg = $("#greetinput").val();
        let border = $("input[name='border']:checked").val();
        $("#cardpreview").css({
            "background-color": bg, 
            "font-family": font, 
            "border-style": border
        });
        $("#cardtext").css("font-size", size).text(msg);
        if($("#showimg").is(":checked"))
            $("#cardimg").show(); 
        else $("#cardimg").hide(); 
    });
});