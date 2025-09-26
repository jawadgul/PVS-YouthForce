// Navbar toggle for mobile
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

// Modal logic
const modal = document.getElementById('authModal');

document.querySelectorAll('.open-auth').forEach(btn => {
  btn.addEventListener('click', () => {
    fetch(`./${btn.dataset.page}`) // ✅ login.html ya register.html ko load karega
      .then(res => res.text())
      .then(html => {
        modal.innerHTML = html;
        modal.classList.remove('hidden');
      })
      .catch(err => console.error("Error loading page:", err));
  });
});

function closeModal() {
  modal.classList.add('hidden');
  modal.innerHTML = '';
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') closeModal(); 
});

// Shared password toggle
function togglePassword(id, el) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    el.textContent = "";
  } else {
    input.type = "password";
    el.textContent = "";
  }
}
