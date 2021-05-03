function mostrar_formulario(){
    document.getElementById("formulario_reg").style.display="block";
    document.getElementById("formulario_sesion").style.display="none";
    document.getElementById("nombre").focus();
}

function mostrar_formulario_inic(){
    document.getElementById("usuario").value = "";
    document.getElementById("contrasenia").value = "";
    document.getElementById("formulario_sesion").style.display="block";
    document.getElementById("formulario_reg").style.display="none";
    document.getElementById("usuario").focus();
}

function usuario(){
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contraseña").value;
    if (usuario=="jaider" && contrasenia=="jaider123"){
        //window.location = "./modules/interfaz_usuario.html";
        document.write("Bienvenido")
    }else{
        document.getElementById("mensajes").innerHTML = "Usuario o contraseña incorrecta";
        alert("hola");
    }
} 

function inicio() {
    var ini = document.getElementById("inicio");
}