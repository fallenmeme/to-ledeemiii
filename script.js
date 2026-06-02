document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll("p, h1, .signature");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    });

    items.forEach(item => {

        item.classList.add("hidden");
        observer.observe(item);

    });

});
