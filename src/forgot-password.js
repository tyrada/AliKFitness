document.getElementById('reset-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('reset-email').value.trim().toLowerCase();
    const newPassword = document.getElementById('new-password').value.trim();
  
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user || user.email !== email) {
      alert('❗ No account found with that email.');
      return;
    }
  
    if (!validatePassword(newPassword)) {
      alert('❗ Password must:\n- Have at least 8 characters\n- Include one uppercase letter\n- Include one number\n- Include one special character (!@#$%^&*)');
      return;
    }
  
    user.password = newPassword;
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('✅ Password reset successful! You can now log in.');
    window.location.href = "./login.html";
  });
  
  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }
  