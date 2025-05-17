const form = document.getElementById('application-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = document.getElementById('full-name').value.trim();
  const dateOfBirth = document.getElementById('date-of-birth').value;
  const residentialAddress = document.getElementById('residential-address').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();
  const emailAddress = document.getElementById('email-address').value.trim();
  const guardianName = document.getElementById('guardian-name').value.trim();
  const guardianAddress = document.getElementById('guardian-address').value.trim();
  const guardianPhoneNumber = document.getElementById('guardian-phone-number').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  let isValid = true;

  // Validate required fields
  if (fullName === '' || dateOfBirth === '' || residentialAddress === '' || phoneNumber === '' || emailAddress === '' || guardianName === '' || guardianAddress === '' || guardianPhoneNumber === '' || password === '' || confirmPassword === '') {
    errorMessage.textContent = 'Please fill in all required fields.';
    isValid = false;
  }

  // Validate email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailAddress)) {
    errorMessage.textContent = 'Invalid email address.';
    isValid = false;
  }

  // Validate password match
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    isValid = false;
  }

  // Validate phone numbers
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phoneNumber) || !phoneRegex.test(guardianPhoneNumber)) {
    errorMessage.textContent = 'Invalid phone number.';
    isValid = false;
  }

  if (isValid) {
    // Submit the form data to the server or perform further processing
    console.log('Form submitted:');
    console.log({
      fullName,
      dateOfBirth,
      residentialAddress,
      phoneNumber,
      emailAddress,
      guardianName,
      guardianAddress,
      guardianPhoneNumber,
      password
    });
    errorMessage.textContent = '';
  }
});