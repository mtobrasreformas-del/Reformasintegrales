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

.card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  background-color: white;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card h3 {
  margin: 10px 0 5px;
}

.card p {
  padding: 0 10px 15px;
  font-size: 14px;
  color: #555;
}
