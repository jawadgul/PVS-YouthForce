document.addEventListener("DOMContentLoaded", () => {
  const volunteerTab = document.getElementById("volunteerTab");
  const orgTab = document.getElementById("orgTab");
  const volunteerForm = document.getElementById("volunteerForm");
  const orgForm = document.getElementById("orgForm");
  const volPassword = document.getElementById("volPassword");
  const volConfirm = document.getElementById("volConfirm");
  const orgPassword = document.getElementById("orgPassword");
  const orgConfirm = document.getElementById("orgConfirm");
  const volStatus = document.getElementById("volStatus");
  const orgStatus = document.getElementById("orgStatus");

  // 🔹 Tab switching
  volunteerTab?.addEventListener("click", () => {
    volunteerTab.classList.add("active");
    orgTab.classList.remove("active");
    volunteerForm.classList.remove("hidden");
    orgForm.classList.add("hidden");
  });

  orgTab?.addEventListener("click", () => {
    orgTab.classList.add("active");
    volunteerTab.classList.remove("active");
    orgForm.classList.remove("hidden");
    volunteerForm.classList.add("hidden");
  });

  // 🔹 Toggle password
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

  // 🔹 Volunteer confirm password validation
  volConfirm?.addEventListener("input", () => {
    if (volConfirm.value === volPassword.value && volConfirm.value !== "") {
      volStatus.style.display = "block";
      volStatus.style.color = "#00c896";
      volStatus.className = "uil uil-check-circle status-icon";
    } else {
      volStatus.style.display = "block";
      volStatus.style.color = "red";
      volStatus.className = "uil uil-times-circle status-icon";
    }
  });

  // 🔹 Organization confirm password validation
  orgConfirm?.addEventListener("input", () => {
    if (orgConfirm.value === orgPassword.value && orgConfirm.value !== "") {
      orgStatus.style.display = "block";
      orgStatus.style.color = "#00c896";
      orgStatus.className = "uil uil-check-circle status-icon";
    } else {
      orgStatus.style.display = "block";
      orgStatus.style.color = "red";
      orgStatus.className = "uil uil-times-circle status-icon";
    }
  });

  // 🔹 Dummy form submits
  volunteerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Volunteer Registered (demo)");
  });
  orgForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Organization Registered (demo)");
  });

  // 🔹 Switch to Login
  window.switchToLogin = function () {
    const modal = document.getElementById("authModal");
    if (modal) {
      fetch("./login.html")
        .then(res => res.text())
        .then(html => {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          modal.innerHTML = bodyMatch ? bodyMatch[1] : html;
        })
        .catch(err => console.error("Error loading login:", err));
    } else {
      window.location.href = "login.html";
    }
  };
});
