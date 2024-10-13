// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle menu for mobile view (if needed)
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
  });
  