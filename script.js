document.addEventListener("DOMContentLoaded", () => {

    const paragraphs = document.querySelectorAll("p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    paragraphs.forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateY(20px)";
        p.style.transition = "all 0.8s ease";

        observer.observe(p);
    });

    document.querySelectorAll("p").forEach(p => {
        p.addEventListener("transitionend", () => {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        });
    });
});
