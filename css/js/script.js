 // js/script.js

// Smooth reveal animation

const sections = document.querySelectorAll(
    ".service-card, .project-card, .hero-content, .hero-image, .contact"
);


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});




// Mobile navigation effect

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        document.querySelector("nav").classList.remove("active");

    });

});




// Button hover animation

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});
