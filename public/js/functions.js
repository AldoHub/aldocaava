$(function(){
    $("#menu-bars").on("click", ()=>{
        $("#menu").next("UL").toggle();
    })
        


    if(window.innerWidth <= 849){
       $("#menu").next("UL").hide(); 
      
    }
    if(window.innerWidth > 849){
        $("#menu").next("UL").show(); 
         
     }


    $(window).on("resize", ()=>{
        if(window.innerWidth <= 849){
            $("#menu").next("UL").hide(); 
           
         }
         if(window.innerWidth > 849){
             $("#menu").next("UL").show(); 
              
          }
             
    }); 
});
