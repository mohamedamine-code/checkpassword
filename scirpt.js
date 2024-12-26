const password = document.getElementById("password");
const txt = document.getElementById("txt");
const i = document.querySelector('i'); // Assuming 'i' is an element for visual feedback

password.addEventListener("input", () => {
  const passwordValue = password.value; 
  const passwordLength = passwordValue.length;

  let message = '';
  let strengthClass = ''; // For visual feedback (optional)

  if (passwordLength < 6) {
    message = 'Weak';
    strengthClass = 'weak'; // Example: Add CSS class 'weak' to 'i'
  } else if (passwordLength < 10) {
    message = 'Medium';
    strengthClass = 'medium'; // Example: Add CSS class 'medium' to 'i'
  } else {
    message = 'Strong';
    strengthClass = 'strong'; // Example: Add CSS class 'strong' to 'i'
  }

  txt.textContent = message;
  i.classList.remove('weak', 'medium', 'strong'); // Remove previous classes
  i.classList.add(strengthClass); // Add the new class

});