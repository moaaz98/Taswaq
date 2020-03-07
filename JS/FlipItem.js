$(function(){
    $(".item-info").click(function(){
        $(this).parents(".flip-box-inner").css({"transform": "rotateY(180deg)"})
    })
    
    $(".item-back").click(function(){
        $(this).parents(".flip-box-inner").css({"transform": "rotateY(0deg)"})
    })
})