const user = "Carlos"
const pass= 1234
function verificar(){
    let usuario = document.getElementById("usuario").value
    let clave = document.getElementById("clave").value
    if(usuario==user && clave==pass){
        alert("Login exitoso")
    }else{
        alert("Usuario o clave incorrecta")
    }
}