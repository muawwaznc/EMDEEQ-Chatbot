// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // CTA Button Alert
  document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Thank you for showing interest! The feature is coming soon.');
  });
  