let loginForm = document.getElementById('login-form');
let announcementForm = document.getElementById('announcement-form');
let loginBtn = document.getElementById('login-btn');
let postBtn = document.getElementById('post-btn');
let clearBtn = document.getElementById('clear-btn');
let announcementDisplay = document.getElementById('announcement-display');
let passwordInput = document.getElementById('password');

let authorizedPassword = 'Mymedia@dgems'; // Replace with your desired password

// Check if there's an existing announcement in localStorage
if (localStorage.getItem('announcement')) {
    announcementDisplay.innerText = localStorage.getItem('announcement');
}

loginBtn.addEventListener('click', () => {
    let enteredPassword = passwordInput.value;
    if (enteredPassword === authorizedPassword) {
        loginForm.style.display = 'none';
        announcementForm.style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
});

postBtn.addEventListener('click', () => {
    let announcementText = document.getElementById('announcement').value;
    if (announcementText !== '') {
        announcementDisplay.innerText = announcementText;
        localStorage.setItem('announcement', announcementText); // Store the announcement in localStorage
        document.getElementById('announcement').value = '';
    }
});

clearBtn.addEventListener('click', () => {
    announcementDisplay.innerText = '';
    localStorage.removeItem('announcement'); // Remove the announcement from localStorage
    document.getElementById('announcement').value = '';
});