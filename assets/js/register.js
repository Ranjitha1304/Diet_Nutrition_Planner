    const openRegisterBtn = document.getElementById('openRegister');
    const registerModal = document.getElementById('registerModal');
    const otpModal = document.getElementById('otpModal');
    const continueBtn = document.getElementById('continueWithMail');
    const registerBtn = document.getElementById('registerBtn');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const pinInput = document.getElementById('pinInput');

    const errorMessages = document.querySelectorAll('.error-message');
    const successMessage = document.getElementById('successMessage');

    // Show first modal
    openRegisterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      registerModal.style.display = 'flex';
    });

    continueBtn.addEventListener('click', () => {
      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const nameRegex = /^[A-Za-z\s'-]{2,}$/;
    
      if (!fullName || !nameRegex.test(fullName) || !email || !emailRegex.test(email)) {
        errorMessages[0].style.display = 'block';
        errorMessages[0].textContent = 'Please enter a valid full name and Valid email address.';
      } else {
        errorMessages[0].style.display = 'none';
        registerModal.style.display = 'none';
        otpModal.style.display = 'flex';
      }
    });
    
    // Validate 6-digit PIN and show success
    registerBtn.addEventListener('click', () => {
      const pin = pinInput.value.trim();

      if (!/^\d{6}$/.test(pin)) {
        errorMessages[1].style.display = 'block';
        errorMessages[1].textContent = 'Please enter a valid 6-digit PIN.';
        successMessage.style.display = 'none';
      } else {
        errorMessages[1].style.display = 'none';
        successMessage.style.display = 'block';
        registerBtn.disabled = true;

    // Give user time to see success message, then close modal        
      setTimeout(() => {
        otpModal.style.display = 'none';
        successMessage.style.display = 'none';
        registerBtn.disabled = false;

        fullNameInput.value = "";
        emailInput.value = "";
        pinInput.value = "";
      }, 1000);
    }
  });

