function goToLogin() {
  window.location.href = "./pages/login.html";
}
function goToSignup() {
  window.location.href = "./pages/signup.html";
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
