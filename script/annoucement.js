let loginForm = document.getElementById('login-form');
let announcementForm = document.getElementById('announcement-form');
let loginBtn = document.getElementById('login-btn');
let postBtn = document.getElementById('post-btn');
let clearBtn = document.getElementById('clear-btn');
let announcementDisplay = document.getElementById('announcement-display');
let passwordInput = document.getElementById('password');
let authorizedPassword = 'Mymedia@dgems'; // Replace with your desired password
let scriptUrl = 'https://script.google.com/macros/s/AKfycbxh608XWpsdvvI4voiUnJyXkE6ElY64PomRZPSfin9xgwt2RD6i9bIjmfBxZEYICUS8lg/exec';

// Get the announcement from the Google Apps Script
fetch(scriptUrl)
    .then(response => response.json())
    .then(data => {
        if (data.announcement) {
            announcementDisplay.innerText = data.announcement;
        }
    })
    .catch(error => console.error(error));

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
        fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `announcement=${announcementText}&action=set`
        })
        .then(response => response.json())
        .then(data => {
            announcementDisplay.innerText = announcementText;
            document.getElementById('announcement').value = '';
        })
        .catch(error => console.error(error));
    }
});

clearBtn.addEventListener('click', () => {
    fetch(scriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `action=clear`
    })
    .then(response => response.json())
    .then(data => {
        announcementDisplay.innerText = '';
        document.getElementById('announcement').value = '';
    })
    .catch(error => console.error(error));
});
