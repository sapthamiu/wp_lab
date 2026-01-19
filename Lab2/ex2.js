$(document).ready(function(){ 
    $("#add").click(function() {
        let a = Number($("#in1").val());
        let b = Number($("#in2").val());
        $("#result").text("Result: " + (a + b));
    });
    $("#sub").click(function() {
        let a = Number($("#in1").val());
        let b = Number($("#in2").val());
        $("#result").text("Result: " + (a - b));
    });
    $("#mul").click(function() {
        let a = Number($("#in1").val());
        let b = Number($("#in2").val());
        $("#result").text("Result: " + (a * b));
    });
    $("#div").click(function() {
        let a = Number($("#in1").val());
        let b = Number($("#in2").val());
        $("#result").text("Result: " + (b !== 0 ? a / b : "Not defined"));
    });
});