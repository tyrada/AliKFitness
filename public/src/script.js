function goToLogin() {
  window.location.href = "/login";
}
function goToSignup() {
  window.location.href = "/signup";
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
