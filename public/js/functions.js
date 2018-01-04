$(function(){
    $("#menu-bars").on("click", ()=>{
        $("#menu").next("UL").toggle();
        $("nav").css({"box-shadow": "0px 2px 2px #555"}); 
        $("#menu").next("UL").css({"display": "inline-table"});
       
        if($("#menu-bars").hasClass("fa fa-bars")){
            $("#menu-bars").removeClass("fa fa-bars");
            $("#menu-bars").addClass("fa fa-times");
        }else {
            $("#menu").next("UL").css({"display": "none"})
            $("nav").css({"box-shadow": ""});
            $("#menu-bars").removeClass("fa fa-times");
            $("#menu-bars").addClass("fa fa-bars");
         
        }
        
        
    })
        
    $(window).on("scroll", ()=>{
       if($(window).scrollTop() > 5){
        $("nav").css({"box-shadow": "0px 2px 2px #555"}); 
       }else{
        $("nav").css({"box-shadow": ""});
       }
    }); 

    if(window.innerWidth <= 849){
       $("#menu").next("UL").hide(); 
       if($("#menu-bars").hasClass("fa fa-times")){
            $("#menu-bars").removeClass("fa fa-times");
            $("#menu-bars").addClass("fa fa-bars");
        }
    }
    if(window.innerWidth > 849){
        $("#menu").next("UL").show(); 
                 
     }


    $(window).on("resize", ()=>{
        if(window.innerWidth <= 849){
            $("#menu").next("UL").hide(); 
          
            if($("#menu-bars").hasClass("fa fa-times")){
                $("#menu-bars").removeClass("fa fa-times");
                $("#menu-bars").addClass("fa fa-bars");
            }
         }
         if(window.innerWidth > 849){
             $("#menu").next("UL").show(); 
              
          }
             
    }); 
});
