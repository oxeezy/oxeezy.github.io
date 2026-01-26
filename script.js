    window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            if ((scrollY > 900 && scrollY <= 5600)) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
   
    });