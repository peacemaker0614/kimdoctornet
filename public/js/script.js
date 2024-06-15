document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm');
    const loginForm = document.querySelector('#loginForm');
    const postForm = document.querySelector('#postForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = signupForm.username.value;
            const password = signupForm.password.value;

            const response = await fetch('https://your-heroku-app.herokuapp.com/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log(data);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            const response = await fetch('https://your-heroku-app.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log(data);
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = postForm.title.value;
            const content = postForm.content.value;

            const response = await fetch('https://your-heroku-app.herokuapp.com/api/posts/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content })
            });

            const data = await response.json();
            console.log(data);
        });
    }
});
