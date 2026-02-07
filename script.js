function enviarWhatsApp() {
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  var texto = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. 
Necesito una reforma: ${mensaje}`;

  var numero = "34673360927"; // CAMBIA TU NÚMERO
  var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");

  .contenedor-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}


