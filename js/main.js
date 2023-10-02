/*cotizador de indumentaria deportiva personalizada
    Datos que solicitaremos al usuario:
      Nombre y apellido
      Correo Electrónico (para poder hacer seguimiento de la consulta)
      Que cantidad necesita?

 */

function saludar() {
    console.log ("¡Hola. Estamos muy felices de recibirte en Herencia!");
      }

const productos = ["remera", "pantalonCorto", "campera", "pantalonLargo"];
console.log (productos);

class Producto {
        constructor(nombreProducto, precio) {
    
             this.nombreProducto = nombreProducto;
             this.precio = precio;
    
         }
    }
    
    const producto1 = new Producto("remera", 4800);
    console.log(producto1);

    const producto2 = new Producto("pantalonCorto", 4500);
    console.log(producto2);
    
    const producto3 = new Producto("campera", 10000);
    console.log(producto3);

    const producto4 = new Producto("pantalonLargo", 8000);
    console.log(producto4);

productos.forEach((producto) => {
        console.log(producto.nombre);
        console.log(producto.precio);
});

const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);





    let nombre = prompt("¿Cuál es tú Nombre?");
    let apellido = prompt("¿Cuál es tú Apellido?");
    let edad = prompt("¿Cuál es edad?");

    if (edad >= 18) {
             alert("Sos mayor de edad. Continúa cotizando!.");
         } else {
             alert("Sos menor de edad. Necesitarás asistencia de una persona mayor de edad para realizar el pago."); 
    }

    let email = prompt("¿Cuál es tú Email?"); 



const camisetaprecio= 5000;

let respuestaUsuario = prompt("¿Quieres realizar una cotización?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {

    var cantidad = prompt("¿Qué cantidad de remeras necesita cotizar?");
       alert("El precio de cada remera es de " + camisetaprecio + ". El valor de las " + cantidad + " remeras es de " + cantidad * camisetaprecio);


respuestaUsuario = prompt("¿Quieres realizar otra cotización?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "NO") {
break;
alert("¡Gracias por elegir Herencia!");
}
}

const obtenerDetalleDeRegistro = ( nombreyapellido, email, cantidad) => {
   return nombreyapellido + ", con correo electónico: " +
    email +
    ". Realizo la siguiente cotización: " +
    cantidad;
}