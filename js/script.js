function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please signup.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
}
