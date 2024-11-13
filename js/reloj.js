function obtenerFecha() {
  const fecha = new Date();
  // console.log(fecha.getDate());
  //console.log(fecha.getDay());
  //console.log(fecha.getMonth());
  //console.log(fecha.getFullYear());
  //console.log(fecha.getHours());
  //console.log(fecha.getMinutes());
  // console.log(fecha.getSeconds());

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //console.log(diasSemana(fecha.getDay()));
  //console.log(meses(fecha.getMonth()));

  const textoFecha = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  //console.log(textoFecha);

  //buscar el h2 que tine la fecha
  const tituloFecha = document.querySelector("h2");
  if (tituloFecha) {
    tituloFecha.innerText = textoFecha;
  }

  // Seleccionamos el elemento que mostrará el reloj
  const reloj = document.querySelector("h3");
  if (reloj) {
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");
    reloj.innerText = `${horas}:${minutos}:${segundos}`;
  }
}

setInterval(obtenerFecha, 1000);
