
const textArea = document.querySelector(".texto_input"); // Corregido: Usar "." para seleccionar por clase
const mensaje = document.querySelector(".mensaje");
const alerta = document.querySelector(".texto_avisorio_out");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/



function btnEncriptar() {  
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    alerta.style.display = "none"
}

function btndEncriptar() {  
    const textodEncriptado = desencriptar(textArea.value);
    mensaje.value = textodEncriptado;
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    alerta.style.display = "none"
}




function encriptar(strinEncriptador){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    strinEncriptador= strinEncriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(strinEncriptador.includes(matrizCodigo[i][0])){
            strinEncriptador = strinEncriptador.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return strinEncriptador
}

function desencriptar(strinDencriptador){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    strinDencriptador= strinDencriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(strinDencriptador.includes(matrizCodigo[i][0])){
            strinDencriptador = strinDencriptador.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return strinDencriptador
}