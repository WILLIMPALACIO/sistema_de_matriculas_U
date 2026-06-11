// REGISTRO

function registrar() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if(nombre === "" || correo === "" || clave === ""){
        alert("Complete todos los campos");
        return;
    }

    let usuario = {
        nombre,
        correo,
        clave
    };

    localStorage.setItem(correo, JSON.stringify(usuario));

    alert("Usuario registrado correctamente");

    window.location.href = "login.html";
}

// LOGIN

function login() {
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    let usuario = JSON.parse(localStorage.getItem(correo));

    if(usuario && usuario.clave === clave){
        localStorage.setItem("sesion", usuario.nombre);
        alert("Bienvenido " + usuario.nombre);
        window.location.href = "../index.html";
    }
    else{
        alert("Correo o contraseña incorrectos");
    }
}

// MOSTRAR USUARIO

function mostrarUsuario() {
    let nombre = localStorage.getItem("sesion");

    if(nombre){
        let usuario = document.getElementById("usuarioLog");

        if(usuario){
            usuario.innerHTML = "👤 " + nombre;
        }
    }
}

// CERRAR SESIÓN

function cerrarSesion(){
    localStorage.removeItem("sesion");
    location.reload();
}

// BUSCADOR

function buscarPrograma(){

    let texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase();

    let programas = [
        "Ingeniería de Sistemas",
        "Ingeniería Civil",
        "Ingeniería Industrial",
        "Ingeniería Ambiental",
        "Ingeniería Electrónica",
        "Ingeniería Mecánica",
        "Psicología",
        "Contaduría Pública",
        "Administración de Empresas"
    ];

    let resultado = programas.filter(
        p => p.toLowerCase().includes(texto)
    );

    document.getElementById("resultadoBusqueda")
    .innerHTML = resultado.join("<br>");
}

window.onload = mostrarUsuario;