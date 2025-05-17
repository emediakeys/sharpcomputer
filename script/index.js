
// navigation bar section 
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

    const form = document.getElementById('comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const url = 'https://script.google.com/macros/s/AKfycbxh608XWpsdvvI4voiUnJyXkE6ElY64PomRZPSfin9xgwt2RD6i9bIjmfBxZEYICUS8lg/exec';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${name}&email=${email}&comment=${comment}`
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
        form.reset();
    });
