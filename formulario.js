document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formRegistroNegocio');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = form.nombre.value;
      const correo = form.correo.value;
      const telefono = form.telefono.value;
      const tipo = form.tipo.value;
      const descripcion = form.descripcion.value;

      const mensaje = `Hola, quiero registrar mi negocio en TurnoRD:%0A` +
        `📛 Nombre: ${nombre}%0A` +
        `📧 Correo: ${correo}%0A` +
        `📞 Teléfono: ${telefono}%0A` +
        `🏢 Tipo: ${tipo}%0A` +
        `📝 Servicios: ${descripcion}`;

      const numero = "18497114807";
      const url = `https://wa.me/${numero}?text=${mensaje}`;

      window.open(url, '_blank');
    });
  }
});


