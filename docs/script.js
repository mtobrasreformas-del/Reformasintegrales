function enviarWhatsApp() {
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  var texto = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. 
Necesito una reforma: ${mensaje}`;

  var numero = "34600123456"; // CAMBIA TU NÚMERO
  var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");
}
