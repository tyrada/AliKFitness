document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim().toLowerCase();
  const password = document.querySelector('input[type="password"]').value.trim();

  // Firebase login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Get user's Firestore profile data
      return firebase.firestore().collection("users").doc(user.uid).get();
    })
    .then((doc) => {
      if (!doc.exists) {
        throw new Error("❌ No user data found in Firestore.");
      }

      const userData = doc.data();
      alert(`✅ Login successful! Welcome, ${userData.name}.`);

      // Redirect based on role
      if (userData.role === "trainer") {
        window.location.href = "./trainer-dashboard.html";
      } else {
        window.location.href = "../index.html"; // or create client-dashboard.html
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("❌ " + error.message);
    });
});
