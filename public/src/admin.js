document.getElementById('admin-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('admin-email').value.trim().toLowerCase();
    const password = document.getElementById('admin-password').value.trim();
  
    // ✅ Hardcoded admin credentials
    const ADMIN_EMAIL = "admin@alikfitness.com";
    const ADMIN_PASSWORD = "Admin@123";
  
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      alert("✅ Welcome, Admin Ali.");
      window.location.href = "/admin-dashboard";
    } else {
      alert("❌ Unauthorized. Incorrect admin credentials.");
    }
  });
  