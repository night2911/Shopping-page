const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;

  // Validate the email and password

  // If the email and password are valid, submit the form
  form.submit();
});