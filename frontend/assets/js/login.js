document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");

  // Toggle password
  window.togglePassword = function (id, btn) {
    const input = document.getElementById(id);
    if (!input) return;
    if (input.type === "password") {
      input.type = "text";
      btn.innerHTML = `<i class="uil uil-eye-slash"></i>`;
    } else {
      input.type = "password";
      btn.innerHTML = `<i class="uil uil-eye"></i>`;
    }
  };

  // Dummy login validation
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Demo purpose only
    alert(`Login successful for ${email} (demo)`);
    closeModal?.(); // agar modal ke andar run ho raha hai to modal close kare
  });

  // Switch to Register
  window.switchToRegister = function () {
    const modal = document.getElementById("authModal");
    if (modal) {
      fetch("./register.html")
        .then(res => res.text())
        .then(html => {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          modal.innerHTML = bodyMatch ? bodyMatch[1] : html;
        })
        .catch(err => console.error("Error loading register:", err));
    } else {
      window.location.href = "register.html";
    }
  };
});
