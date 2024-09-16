var typed = new Typed(".text", {
    strings: ["App Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// custom cursor
document.addEventListener('mousemove', function(e) {
    const dotCursor = document.querySelector('.dot-cursor');
    const circle = document.querySelector('.circle');
    
    // Move the dot cursor
    dotCursor.style.left = `${e.clientX}px`;
    dotCursor.style.top = `${e.clientY}px`;
    
    // Move the circle with a slight delay
    setTimeout(() => {
        circle.style.left = `${e.clientX - 20}px`;
        circle.style.top = `${e.clientY - 20}px`;
    }, 50);
});
