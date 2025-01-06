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

// Adding the auto theme change acooridng to browser
// Function to apply the theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // Check browser's theme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Apply the theme based on preference
  applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');

  // Listen for changes in the theme
  prefersDarkScheme.addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });

