let loginForm = document.getElementById('login-form');
let postForm = document.getElementById('post-form');
let loginBtn = document.getElementById('login-btn');
let postBtn = document.getElementById('post-btn');
let highlightsContainer = document.getElementById('highlights-container');
let authorizedPassword = 'Mymedia@dgems'; // Replace with your desired password

// Check if there are existing posts in localStorage
if (localStorage.getItem('posts')) {
    let storedPosts = JSON.parse(localStorage.getItem('posts'));
    storedPosts.forEach(post => {
        let highlightHTML = `
            <div class="highlight">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                ${post.media ? `<img src="${post.media}" alt="Post media">` : ''}
                <div class="comment-form">
                    <input type="text" placeholder="Comment">
                    <button>Post comment</button>
                </div>
                <div class="comments"></div>
            </div>
        `;
        highlightsContainer.insertAdjacentHTML('beforeend', highlightHTML);
    });
}

loginBtn.addEventListener('click', () => {
    let enteredPassword = document.getElementById('password').value;
    if (enteredPassword === authorizedPassword) {
        loginForm.style.display = 'none';
        postForm.style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
});

postBtn.addEventListener('click', () => {
    let postTitle = document.getElementById('post-title').value;
    let postContent = document.getElementById('post-content').value;
    let postMedia = document.getElementById('post-media').files[0];
    let post = {
        title: postTitle,
        content: postContent,
        media: postMedia ? URL.createObjectURL(postMedia) : ''
    };

    // Store the post in localStorage
    if (localStorage.getItem('posts')) {
        let storedPosts = JSON.parse(localStorage.getItem('posts'));
        storedPosts.push(post);
        localStorage.setItem('posts', JSON.stringify(storedPosts));
    } else {
        localStorage.setItem('posts', JSON.stringify([post]));
    }

    let highlightHTML = `
        <div class="highlight">
            <h2>${postTitle}</h2>
            <p>${postContent}</p>
            ${postMedia ? `<img src="${URL.createObjectURL(postMedia)}" alt="Post media">` : ''}
            <div class="comment-form">
                <input type="text" placeholder="Comment">
                <button>Post comment</button>
            </div>
            <div class="comments"></div>
        </div>
    `;
    highlightsContainer.insertAdjacentHTML('beforeend', highlightHTML);
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-media').value = '';
});


//This code stores each post in localStorage as a JSON string. When the page loads, it checks if there are existing posts in localStorage and displays them.

//To clear the posts, you can add a "Clear posts" button and attach an event listener to it that removes the posts from localStorage and clears the highlights container:


let clearPostsBtn = document.getElementById('clear-posts-btn');

clearPostsBtn.addEventListener('click', () => {
    localStorage.removeItem('posts');
    highlightsContainer.innerHTML = '';
});