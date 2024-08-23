// script.js
const modeIcon = document.getElementById('mode_icon');
const loginForm = document.getElementById('login_form');

modeIcon.addEventListener('click', () => {
    loginForm.classList.toggle('dark');

    // Troca o ícone da lua para o sol
    if (loginForm.classList.contains('dark')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});