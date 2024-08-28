console.clear();
const vuelos = [
  {
    vuelo: "AA101",
    destino: "Nueva York",
    hora: "08:00",
    estado: "Abordando",
    puerta: "A1",
  },
  {
    vuelo: "BA202",
    destino: "Londres",
    hora: "09:30",
    estado: "En Espera",
    puerta: "B2",
  },
  {
    vuelo: "AF303",
    destino: "París",
    hora: "10:15",
    estado: "Cancelado",
    puerta: "C3",
  },
  {
    vuelo: "IB404",
    destino: "Madrid",
    hora: "11:00",
    estado: "A Tiempo",
    puerta: "D4",
  },
  {
    vuelo: "LH505",
    destino: "Berlín",
    hora: "12:30",
    estado: "Retrasado",
    puerta: "E5",
  },
  {
    vuelo: "DL606",
    destino: "Atlanta",
    hora: "13:00",
    estado: "Abordando",
    puerta: "F6",
  },
  {
    vuelo: "UA707",
    destino: "Chicago",
    hora: "14:00",
    estado: "En Espera",
    puerta: "G7",
  },
  {
    vuelo: "KL808",
    destino: "Ámsterdam",
    hora: "15:15",
    estado: "Cancelado",
    puerta: "H8",
  },
  {
    vuelo: "QF909",
    destino: "Sídney",
    hora: "16:45",
    estado: "A Tiempo",
    puerta: "I9",
  },
];

const cambiarBodyTabla = (vuelos) => {
  const tbody = document.querySelector("#filas");
  //console.log(tbody)
  const html = getRowsTabla(vuelos);
  // console.log(vueloss)
  tbody.innerHTML = html.join("");
};

const coloresArray = [
  "text-danger",
  "text-primary",
  "text-secondary",
  "text-dark",
];

const obtenerColorSegunEstado = (estado) => {
  switch (estado) {
    case "A Tiempo":
      return "text-success fw-bold";
      break;
    case "Abordando":
      return " fw-bold";
      break;
    case "Retrasado":
      return "text-warning fw-bold";
      break;
    case "Cancelado":
      return "text-danger fw-bold";
      break;
    default:
        return 'text-info'
      break;
  }
};

const getRowsTabla = (vuelos) => {
  //const maxArray = vuelos.lenght -1
  const vuelosHtml = vuelos.map((vuelo, index, array) => {
    return `
    <tr>
        <td>${index}</td>
        <td>${vuelo.vuelo}</td>
        <td>${array[randomIntFromInterval(0, 8)].destino}</td>
        <td>${array[randomIntFromInterval(0, 8)].hora}</td>
        <td class="${obtenerColorSegunEstado(vuelo.estado)}">${array[randomIntFromInterval(0, 8)].estado}</td>
        <td>${vuelo.puerta}</td>
    </tr>
`;
  });

  return vuelosHtml;
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

setInterval(() => {
  cambiarBodyTabla(vuelos);
}, 3000);


// Nueva funcionalidad para el formulario y el modal
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario y el refresco de la página

  // Mostrar el modal
  let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();

  // Vaciar el formulario después de que el modal sea mostrado
  this.reset();
});


// Nueva funcionalidad para el radio
document.addEventListener('DOMContentLoaded', (event) => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  
  radioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
          // Si el radio button ya está seleccionado, desmarcarlo
          if (this.checked) {
              // Desmarcar el radio button después de un pequeño retraso para permitir que el estado se actualice
              setTimeout(() => {
                  this.checked = false;
              }, 0);
          }
      });
  });
});


