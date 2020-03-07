$(function(){
    $(".icon-button").click(function(){
        $(this).siblings(".other-icons").slideToggle(1500);
        var Idiv = document.getElementsByClassName(".other-icons");
        $(this).css("display","none");

    })
})