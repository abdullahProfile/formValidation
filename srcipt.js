const submitBtn = document.querySelector('#submit');
const hidPass = document.querySelector(".passBtn");
const userPassword = document.getElementById('password').value;

submitBtn.addEventListener('click', function() {

  const userName = document.querySelector('#name').value.trim();
  const userEmail = document.querySelector('#email').value.trim();

  const hidPass = document.querySelector(".passBtn");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordArr = [1,2,3,5];

  if((userName.trim() === "")){
    alert("❌ Please fill in the Name field.");
  }
  else if (!/^[A-Za-z]+$/.test(userName)) {
    alert("❌ Name must contain only A-Z letters.")
  }else if(userEmail == "" || !emailPattern.test(userEmail)){
    alert("❌ Enter Valid Email");
  }else if (userPassword == "" || passwordArr.length !=(userPassword.length)) {
    alert("❌ Enter password!");
  }else {
    alert("✅Submitted Successfully:")
  }
});

 const passwordInput = document.getElementById('password');
 const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  togglePassword.src = isPassword ? './images/showPass.svg' : './images/hidePas.svg';
});