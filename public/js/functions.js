$(function(){
        
   
        $('#nav-icon').click(function(){
          $(this).toggleClass('open');
          $("#menu").next("UL").toggle();  
   
        });
      
    

    $(window).on("scroll", ()=>{
       if($(window).scrollTop() > 5){
        $("nav").css({"box-shadow": "0px 2px 2px #555"}); 
       }else{
        $("nav").css({"box-shadow": ""});
       }
    }); 

    if(window.innerWidth <= 849){
       $("#menu").next("UL").hide(); 
       
    }
    if(window.innerWidth > 849){
        $("#menu").next("UL").show(); 
                 
     }


    $(window).on("resize", ()=>{
        if(window.innerWidth <= 849){
            $("#menu").next("UL").hide(); 
            $("#nav-icon").removeClass("open");
        }
         if(window.innerWidth > 849){
             $("#menu").next("UL").show(); 
              
          }
             
    }); 
});
