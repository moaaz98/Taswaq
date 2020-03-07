$(function(){
    $(".login").click(function(){
        $(".login-section").siblings().css({opacity: 0.1, transition: "0.8s"});
        $(".login-section").children().hide();
        $(".login-section").css("display","block");
        $(".login-section").animate({top: "30%"}, 1000);
        $(".login-section").animate({ width: 400, marginLeft: "-50px", borderRadius: "10px"});
        $(".login-section").animate({ height: "290px"},1000,  showH1);
    })
    
    $(".login-submit").click(function(){
        $(this).parents(".login-section").hide();
        $(".login-section").siblings().css({opacity: 1, transition: "0.8s"});
    })

})

function showH1(){$(".login-section").children("h1").fadeIn("slow", showPar);}

function showPar(){$(".login-section").children("p").fadeIn("slow", showInput);}

function showInput(){$(".login-section").children(".name , .pass").slideDown("slow", showLogin);}

function showLogin(){$(".login-section").children(".login-submit").fadeIn("2000");}


