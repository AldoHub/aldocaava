window.addEventListener("scroll",() =>{
    if(document.documentElement.scrollTop < 10) {
        $(".main").css({"transform": ""})
    }else {
        $(".main").css({"transform": "translateY(0px)"})
    }
});