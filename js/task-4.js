document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginForm = e.target.elements;
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const loginFormData = {
        [loginForm.email.name]: email,
        [loginForm.password.name]: password,
    };

    console.log(loginFormData);
    e.target.reset();
});