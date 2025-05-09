document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // stop form from refreshing the page

  const username = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  fetch('https://ict4510.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
.then(response => {
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json(); 
})
.then(data => {
  const firstName = data.user.first_name;

  document.getElementById('login-form').style.display = 'none';
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.innerText = `Welcome, ${firstName}!`;
  welcomeMessage.style.display = 'block';
})
});