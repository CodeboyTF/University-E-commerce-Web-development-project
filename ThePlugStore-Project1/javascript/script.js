const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");
    const nameField = document.getElementById("nameField");
    const title = document.getElementById("title");

    loginBtn.onclick = function () {
      nameField.style.maxHeight = "0";
      title.innerHTML = "Log In";
      signupBtn.classList.add("disable");
      loginBtn.classList.remove("disable");
    }

    signupBtn.onclick = function () {
      nameField.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("disable");
      loginBtn.classList.add("disable");
    }

    function performRegistration() {
      const isRegistrationSuccessful = true; 

      if (isRegistrationSuccessful) {
        window.location.href = 'addto.html'; 
      } else {
        alert('Registration failed. Please try again');
      }
    }

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      performRegistration();
    });