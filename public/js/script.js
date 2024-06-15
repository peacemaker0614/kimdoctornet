document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const response = await fetch('/auth/signup', {
                method: 'POST',
                body: new URLSearchParams(formData)
            });
            if (response.ok) {
                window.location.href = '/login.html';
            }
        });
    }

    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const response = await fetch('/auth/login', {
                method: 'POST',
                body: new URLSearchParams(formData)
            });
            if (response.ok) {
                window.location.href = '/index.html';
            } else {
                alert('로그인 실패');
            }
        });
    }

    const postForm = document.querySelector('#post-form');
    if (postForm) {
        postForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(postForm);
            const response = await fetch('/posts/create', {
                method: 'POST',
                body: new URLSearchParams(formData)
            });
            if (response.ok) {
                window.location.href = '/index.html';
            }
        });
    }

    const postListBody = document.querySelector('#post-list-body');
    if (postListBody) {
        fetch('/posts/all')
            .then(response => response.json())
            .then(posts => {
                postListBody.innerHTML = '';
                posts.forEach(post => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${post.category || '일반'}</td>
                        <td>${post.title}</td>
                        <td>${post.author}</td>
                        <td>${new Date(post.createdAt).toLocaleDateString()}</td>
                        <td>${post.likes || 0}</td>
                    `;
                    postListBody.appendChild(row);
                });
            });
    }
});
