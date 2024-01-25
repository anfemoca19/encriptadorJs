function encrypt() {
  let inputText = document.getElementById("inputText").value;
  let outputText = document.getElementById("outputText");
  let copyButton = document.getElementById("copyButton");
  let subTitleOutput = document.getElementById("subTitleOutput")
  
  // Encriptación con Base64
  let encryptedText = btoa(inputText);
  
  outputText.innerText =   encryptedText;
  
  // Mostrar el botón de copiar después de la encriptación
  copyButton.style.display = "block";
  subTitleOutput.style.display = "none"
}

function decrypt() {
  let inputText = document.getElementById("inputText").value;
  let outputText = document.getElementById("outputText");
  
  // Desencriptación con Base64
  let decryptedText = atob(inputText);
  
  outputText.innerText = decryptedText;
}

function copytext() {
  let outputText = document.getElementById("outputText").innerText;

  // Crear un elemento de texto temporal y copiar el contenido
  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  alert("Texto copiado al portapapeles");
}

function toggleDarkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}