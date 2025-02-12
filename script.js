function generatorPassword() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvxyz@#$&?£¢€¥";
  var passwordLength = 8;
  var newPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    newPassword += chars[randomNumber];
  }

  document.getElementById("password").value = newPassword;
}

function copyPassword() {
  var copyText = document.getElementById("password");

  if (copyText.value === "") {
    alert("Generate a password first!");
    return;
  }

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  
  alert("Password copied to clipboard!");
}
