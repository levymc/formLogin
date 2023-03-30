const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    console.log("aaa")
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(`Username: ${username}, Password: ${password}`);
});
