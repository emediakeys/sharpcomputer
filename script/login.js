const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	authenticateUser(username, password);
});

function authenticateUser(username, pa ssword) {
	// Authenticate the user using the Google Sheets API
	gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1SaLjaL2yyMHP-uej87NxMQEA3qd43cibXzcWJCIDmDA',
		range: 'Sheet1!A2:L100' // Update this range to match your spreadsheet
	}).then((response) => {
		const values = response.result.values;
		if (values.length === 0) {
			console.log('No data found.');
			return;
		}
		const userData = values.find((row) => row[0] === username && row[1] === password);
		if (userData) {
			console.log('User authenticated successfully!');
			// Redirect to the protected page
			window.location.href = 'protected-page.html';
		} else {
			console.log('Invalid username or password.');
		}
	}, (err) => {
		console.error(err);
	});
}

// Load the Google API client library
function loadGoogleApi() {
	const script = document.createElement('script');
	script.src = '(script/login.js)';
	document.body.appendChild(script);
}

loadGoogleApi();