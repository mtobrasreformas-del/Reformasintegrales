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
.beneficios {
  text-align: left;
  margin: 15px 0;
  padding-left: 20px;
}

.beneficios li {
  margin-bottom: 8px;
}
.legal {
  font-size: 12px;
  color: #777;
  margin-top: 20px;
}
h1, h2 {
  color: #1f3c88;
}
.whatsapp-fijo {
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
