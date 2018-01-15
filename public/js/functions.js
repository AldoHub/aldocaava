$(function(){

    $(window).on("scroll", ()=>{
       if($(window).scrollTop() > 1){
        $("nav").css({"box-shadow": "0px 2px 2px #000"}); 
       }else{
        $("nav").css({"box-shadow": ""});
       }
    }); 




    $("body").on("click", "#nav-icon", ()=>{
        $("#nav-icon").toggleClass("open");
        $("nav ul:last-of-type").toggleClass("hide", 50, "linear");     
    });

});
