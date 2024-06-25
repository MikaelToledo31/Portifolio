
  function copyEmail() {
    var email = "mikaeltoledo31@gmail.com";
    var textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    document.getElementById("copy-email-icon").style.display = "inline";
    var btn = document.getElementById("copy-email-btn");
    btn.style.backgroundColor = "green";
    btn.innerHTML = "Email copiado! <i id='copy-email-icon' class='fa-solid fa-check'></i>";
  }
