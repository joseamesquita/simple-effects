$(document).ready(function () {
    $(".clickable").click(function () {
        //$("p").click(function () {
        //$(".clickable").click(function () {
        $("img").show(); //show a hidden element 
        //$(".walrus-showing").show();
        //$(".walrus-hidden").hide();
        // $("#walrus-showing").toggle();
        $("#walrus-showing").slideToggle();
        $("#walrus-hidden").toggle();
    });
});
//});