const API_URL = 'https://jsonplaceholder.typicode.com/users';

const elements = {
    name: document.querySelector('h1'),
    email: document.querySelector('p'),
    btn: document.querySelector('.tryAgain'),
    shimmers: document.querySelectorAll('.loading')
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateUI = (state, data = {}) => {
    const { name, email, btn, shimmers } = elements;

    if (state === 'loading') {
        name.classList.remove('show');
        email.classList.remove('show');
        btn.classList.remove('show');

        shimmers.forEach(s => s.style.display = 'block');
    } 
    else if (state === 'success') {
        shimmers.forEach(s => s.style.display = 'none');

        name.textContent = data.name;
        email.textContent = data.email;
        email.style.color = '#475569';

        name.classList.add('show');
        email.classList.add('show');
    } 
    else if (state === 'error') {
        shimmers.forEach(s => s.style.display = 'none');

        name.textContent = '';
        email.textContent = 'خطا در برقراری ارتباط با سرور ❌';
        email.style.color = '#ef4444';

        email.classList.add('show');
        btn.classList.add('show');
    }
};

const fetchUser = async (id = 1) => {
    try {
        updateUI('loading');

        await sleep(1200 + Math.random() * 800);

        const response = await fetch(`${API_URL}/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP Error status: ${response.status}`);
        }

        const user = await response.json();
        updateUI('success', user);

    } catch (error) {
        console.error('Fetch Error:', error);
        updateUI('error');
    }
};

elements.btn.addEventListener('click', () => fetchUser(2));
document.addEventListener('DOMContentLoaded', () => fetchUser(2));