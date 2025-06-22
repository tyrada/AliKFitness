document.getElementById('trainer-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('trainer-email').value.trim().toLowerCase();
    const password = document.getElementById('trainer-password').value.trim();
  
    // Hardcoded trainer credentials
    const TRAINER_EMAIL = "trainer@alikfitness.com";
    const TRAINER_PASSWORD = "Trainer@123";
  
    if (email === TRAINER_EMAIL && password === TRAINER_PASSWORD) {
      alert("✅ Welcome, Trainer Name.");
      window.location.href = "/trainer-dashboard";
    } else {
      alert("❌ Unauthorized. Incorrect trainer credentials.");
    }
  });
  