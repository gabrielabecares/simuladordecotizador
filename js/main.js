console.log("Hola Bienvenidos a la clase 4 😊 (After Class)");

/*cotizador de indumentaria deportiva personalizada
    Datos que solicitaremos al usuario:
      Nombre y apellido
      Correo Electrónico (para poder hacer seguimiento de la consulta)
      Que cantidad necesita?

 */
let nombreyapellido = prompt("¿Cuál es tú Nombre y Apellido?");
let email = prompt("¿Cuál es tú Email?");
const camisetaprecio= 5000;

let respuestaUsuario = prompt("¿Quieres realizar una cotización?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {

    var cantidad = prompt("¿Qué cantidad de remeras necesita cotizar?");
       alert("El precio de cada remera es de " + camisetaprecio + ". El valor de las " + cantidad + " remeras es de " + cantidad * camisetaprecio);

respuestaUsuario = prompt("¿Quieres realizar otra cotización?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "NO") {

alert("¡Gracias por elegir Herencia!");
}
}

const obtenerDetalleDeRegistro = ( nombreyapellido, email, cantidad) => {
   return nombreyapellido + ", con correo electónico: " +
    email +
    ". Realizo la siguiente cotización: " +
    cantidad;
}