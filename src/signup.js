document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value.trim();

  const formattedName = formatName(nameInput);

  if (!validatePassword(password)) {
    alert("❗ Password must:\n- Be at least 8 characters\n- Include an uppercase letter\n- Include a number\n- Include a special character (!@#$%^&*)");
    return;
  }

  // Create Firebase Auth account
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save user data to Firestore
      return firebase.firestore().collection('users').doc(user.uid).set({
        name: formattedName,
        email: email,
        role: "client",
        createdAt: new Date()
      });
    })
    .then(() => {
      alert("✅ Account created successfully! Redirecting to login...");
      window.location.href = "./login.html";
    })
    .catch((error) => {
      console.error("Signup error:", error);
      alert("❌ " + error.message);
    });
});

// Format name to Proper Case
function formatName(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Password validation rule
function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(password);
}
