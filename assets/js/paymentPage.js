function validateAndProceed() {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
  
    const cardRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  
    if (!cardRegex.test(cardNumber)) {
      alert("Please enter a valid 16-digit credit card number.");
      return;
    }
  
    if (!cvvRegex.test(cvv)) {
      alert("Please enter a valid 3-digit CVV code.");
      return;
    }
  
    if (!expiryRegex.test(expiry)) {
      alert("Please enter expiry date in MM/YY format.");
      return;
    }
  
    if (cardName === '') {
      alert("Please enter the name on the card.");
      return;
    }
  
    // Redirect to next page
    window.location.href = "/payment-success.html";
  }
  