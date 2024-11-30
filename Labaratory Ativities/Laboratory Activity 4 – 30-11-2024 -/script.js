<script>
window.addEventListener('load', function() {
  setTimeout(function() {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '0';
    setTimeout(function() {
      splashScreen.style.display = 'none';
    }, 2000);
  }, 3000);
});

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
</script>
