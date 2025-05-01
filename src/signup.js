document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from submitting normally
  
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
  
    if (!validatePassword(password)) {
      alert('❗ Password must:\n- Have at least 8 characters\n- Include one uppercase letter\n- Include one number\n- Include one special character (!@#$%^&*)');
      return;
    }
  
    const user = {
      name: name,
      email: email,
      password: password
    };
  
    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('✅ Sign Up Successful! You can now log in.');
    window.location.href = "./login.html";
  });
  
  // Password must have 8+ characters, 1 capital letter, 1 number, 1 special character
  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }
  