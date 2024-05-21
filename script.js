//validaciones en inicio de sesion
function validarInicioSesion(){
    let inputEmail = document.getElementById("campoEmail").value;
    let inputContra = document.getElementById("campoContra").value;

    inputEmail!="" && inputContra !="" ?  location.href = "index.html": alert("Completar campos vacios");

}
