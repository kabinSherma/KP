

// change the background color of nav bar when we scroll down 

// getting navbar elements

let navbar = document.querySelector(".nav-bar");  

window.addEventListener("scroll", () => {


        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        }
        else {
            navbar.classList.remove("scrolled");
        }
    });


