window.onload = function importDate() {
    let date = new Date();
    let input = document.getElementById("date");
    input.setAttribute("value", date);
}

alert("something");
function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('firstName');
    const emailInput = document.getElementById('email');
  
    let isValid = true;
  
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }
  
    if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('error');
    } 
    else {
        emailInput.classList.remove('error');
    }
  
    if (isValid) {
        document.getElementById('myForm').submit();
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
    
}
  
  document.getElementById('submit-button').addEventListener('submit', validateForm);