$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $(".h1").show().fadeOut();
    });
    
    $("button").click(function(){
        $(".box").animate({
            width: 'toggle'
        });
    });

    $("button1").click(function(){
        $(".box1").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });
});




