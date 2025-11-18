
  const langLinks = document.querySelectorAll('.lang a');

  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;

      // Update intro lines (only the .text span inside)
      document.querySelectorAll('.line').forEach(line => {
        const textSpan = line.querySelector('.text');
        const newText = line.dataset[lang];
        if (newText) {
          textSpan.textContent = newText;
        }
      });

      // Update About section (replace whole <p> text)
      document.querySelectorAll('.about-text').forEach(about => {
        const newText = about.dataset[lang];
        if (newText) {
          about.textContent = newText;
        }
      });

      // Update headings (like <h2> About)
      document.querySelectorAll('h2[data-en]').forEach(heading => {
        const newText = heading.dataset[lang];
        if (newText) {
          heading.textContent = newText;
        }
      });

      // Highlight active language
      langLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });



//TOGGLE THEME
  
  const toggleBtn = document.getElementById('toggle-theme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Save preference
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });

  // Load saved preference
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    }
  };

