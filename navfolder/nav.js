
  fetch('navfolder/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Reinitialize the hamburger menu script
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Highlight current page
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add('current-page');
        }
      });
    });