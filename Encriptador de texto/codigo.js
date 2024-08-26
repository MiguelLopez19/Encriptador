// Function to encrypt the text
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}


function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}


document.getElementById("encriptarBoton").addEventListener("click", function() {
    const inputText = document.getElementById("agarraTexto").value;
    const encryptedText = encryptText(inputText);
    document.querySelector(".cajaResultado textarea").value = encryptedText;
});


document.getElementById("desencriptarBoton").addEventListener("click", function() {
    const inputText = document.getElementById("agarraTexto").value;
    const decryptedText = decryptText(inputText);
    document.querySelector(".cajaResultado textarea").value = decryptedText;
});


document.getElementById("copiarBoton").addEventListener("click", function() {
    const resultText = document.querySelector(".cajaResultado textarea").value;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado al portapapeles!");
    });
});
