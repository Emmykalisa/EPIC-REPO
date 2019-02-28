// Get the modal for login
var modal_login = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_login) {
        modal.style.display = "none";
    }
}

// Get the modal for signup
var modal_register = document.getElementById('register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_register) {
    modal.style.display = "none";
  }
}

// Get the modal for reset password
var modal_reset = document.getElementById('reset');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_reset) {
    modal.style.display = "none";
  }
}

document.getElementById("submit").onclick=function(){
  window.location.href="../html/dashboard.html";
}