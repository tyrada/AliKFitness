document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let name = document.getElementById('signup-name').value.trim();
    let email = document.getElementById('signup-email').value.trim().toLowerCase();
    const password = document.getElementById('signup-password').value.trim();
  
    name = formatName(name); // Capitalize first letters
  
    // Check if email exists
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      alert('❗ An account with this email already exists. Please log in instead.');
      window.location.href = "./login.html";
      return;
    }
  
    // Password strength
    if (!validatePassword(password)) {
      alert('❗ Password must:\n- Have at least 8 characters\n- Include one uppercase letter\n- Include one number\n- Include one special character (!@#$%^&*)');
      return;
    }
  
    const user = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('✅ Sign Up Successful! You can now log in.');
    window.location.href = "./login.html";
  });
  
  // Capitalize each word in name to be a proper noun
  function formatName(name) {
    return name
      .split(' ')
      .filter(Boolean)
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  // Password rule
  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }
  