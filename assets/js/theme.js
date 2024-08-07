document.getElementById('theme-switcher').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  });




  
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  // Show the button when scrolling down 100px from the top
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };

  // Scroll to the top when the button is clicked
  scrollUpBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });