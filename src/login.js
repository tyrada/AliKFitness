document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.querySelector('input[type="email"]').value.trim().toLowerCase();
    const password = document.querySelector('input[type="password"]').value.trim();
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (!storedUser) {
      alert('❗ No account found. Please sign up first.');
      return;
    }
  
    if (email === storedUser.email && password === storedUser.password) {
      alert('✅ Login successful! Welcome back, ' + storedUser.name);
      window.location.href = "../index.html";
    } else {
      alert('❌ Incorrect email or password.');
    }
  });
  