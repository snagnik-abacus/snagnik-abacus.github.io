// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile navigation elements
  const mobileNavToggle = document.createElement('div');
  mobileNavToggle.className = 'mobile-nav-toggle';
  mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
  
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  
  // Get all navigation links and clone them for mobile
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const mobileLink = document.createElement('a');
    mobileLink.className = 'mobile-nav-link';
    mobileLink.href = link.href;
    mobileLink.textContent = link.textContent;
    mobileNav.appendChild(mobileLink);
  });
  
  // Add mobile navigation to the body
  document.body.appendChild(mobileNavToggle);
  document.body.appendChild(mobileNav);
  
  // Toggle mobile navigation
  mobileNavToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    mobileNavToggle.innerHTML = mobileNav.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile navigation when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Update active link on scroll for mobile
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 300;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Hide mobile navigation on window resize if screen becomes larger
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove('active');
      mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});