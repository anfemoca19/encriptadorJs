function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var outputText = document.getElementById("outputText");
  var copyButton = document.getElementById("copyButton");
  
  // Encriptación con Base64
  var encryptedText = btoa(inputText);
  
  outputText.innerText =   encryptedText;
  
  // Mostrar el botón de copiar después de la encriptación
  copyButton.style.display = "block";
}

function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var outputText = document.getElementById("outputText");
  
  // Desencriptación con Base64
  var decryptedText = atob(inputText);
  
  outputText.innerText = "Texto desencriptado: " + decryptedText;
}

function copytext() {
  var outputText = document.getElementById("outputText").innerText;

  // Crear un elemento de texto temporal y copiar el contenido
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  alert("Texto copiado al portapapeles");
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}