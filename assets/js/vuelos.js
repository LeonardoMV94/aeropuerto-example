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
  {
    vuelo: "EK101",
    destino: "Dubái",
    hora: "17:00",
    estado: "Abordando",
    puerta: "J10",
  },
  {
    vuelo: "SQ202",
    destino: "Singapur",
    hora: "18:30",
    estado: "En Espera",
    puerta: "K11",
  },
  {
    vuelo: "CX303",
    destino: "Hong Kong",
    hora: "19:15",
    estado: "Cancelado",
    puerta: "L12",
  },
  {
    vuelo: "JL404",
    destino: "Tokio",
    hora: "20:00",
    estado: "A Tiempo",
    puerta: "M13",
  },
  {
    vuelo: "NH505",
    destino: "Osaka",
    hora: "21:30",
    estado: "Retrasado",
    puerta: "N14",
  },
  {
    vuelo: "KE606",
    destino: "Seúl",
    hora: "22:00",
    estado: "Abordando",
    puerta: "O15",
  },
  {
    vuelo: "QF707",
    destino: "Melbourne",
    hora: "23:00",
    estado: "En Espera",
    puerta: "P16",
  },
  {
    vuelo: "EY808",
    destino: "Abu Dabi",
    hora: "00:15",
    estado: "Cancelado",
    puerta: "Q17",
  },
  {
    vuelo: "QR909",
    destino: "Doha",
    hora: "01:45",
    estado: "A Tiempo",
    puerta: "R18",
  },
  {
    vuelo: "AF101",
    destino: "París",
    hora: "06:00",
    estado: "Abordando",
    puerta: "S19",
  },
  {
    vuelo: "LH202",
    destino: "Fráncfort",
    hora: "07:30",
    estado: "En Espera",
    puerta: "T20",
  },
  {
    vuelo: "BA303",
    destino: "Londres",
    hora: "09:15",
    estado: "Cancelado",
    puerta: "U21",
  },
  {
    vuelo: "AA404",
    destino: "Los Ángeles",
    hora: "10:00",
    estado: "A Tiempo",
    puerta: "V22",
  },
  {
    vuelo: "DL505",
    destino: "Atlanta",
    hora: "11:30",
    estado: "Retrasado",
    puerta: "W23",
  },
  {
    vuelo: "UA606",
    destino: "San Francisco",
    hora: "12:00",
    estado: "Abordando",
    puerta: "X24",
  },
  {
    vuelo: "EK707",
    destino: "Dubái",
    hora: "13:00",
    estado: "En Espera",
    puerta: "Y25",
  },
  {
    vuelo: "SQ808",
    destino: "Singapur",
    hora: "14:15",
    estado: "Cancelado",
    puerta: "Z26",
  },
  {
    vuelo: "CX909",
    destino: "Hong Kong",
    hora: "15:45",
    estado: "A Tiempo",
    puerta: "A27",
  },
  {
    vuelo: "JL101",
    destino: "Tokio",
    hora: "16:00",
    estado: "Abordando",
    puerta: "B28",
  },
  {
    vuelo: "NH202",
    destino: "Osaka",
    hora: "17:30",
    estado: "En Espera",
    puerta: "C29",
  },
  {
    vuelo: "KE303",
    destino: "Seúl",
    hora: "18:15",
    estado: "Cancelado",
    puerta: "D30",
  },
];

const cambiarBodyTabla = (vuelos) => {
  const tbody = document.querySelector("#filas");
  //console.log(tbody)
  const html = getRowsTabla(vuelos);
  // console.log(vueloss)
  tbody.innerHTML = html.join("");
};

const obtenerColorSegunEstado = (estado) => {
  switch (estado) {
    case "A Tiempo":
      return "text-light fw-bold bg-success";
    case "Abordando":
      return "fw-bold";
    case "Retrasado":
      return "text-dark fw-bold bg-warning";
    case "Cancelado":
      return "text-light fw-bold bg-danger";
    default:
      return "text-dark fw-bold bg-info";
  }
};

const getRowsTabla = (vuelos) => {
  let indiceGlobal = 0;
  const filas = document.querySelector('#filas')
  const paginacion = document.querySelector('#paginacion')

  const mostrarVuelos = () => {
    const vuelosActuales = vuelos.slice(indiceGlobal, indiceGlobal + 10); // Obtener los próximos 10 vuelos

    const vuelosHtml = vuelosActuales
      .map((vuelo, index) => {
        return `
          <tr>
            <td>${index + indiceGlobal}</td>
            <td>${vuelo.vuelo}</td>
            <td>${vuelo.destino}</td>
            <td>${vuelo.hora}</td>
            <td class="${obtenerColorSegunEstado(vuelo.estado)}">${
          vuelo.estado
        }</td>
            <td>${vuelo.puerta}</td>
          </tr>
        `;
      })
      .join(""); 
      filas.innerHTML = vuelosHtml
      paginacion.innerHTML = `${indiceGlobal+10} - ${vuelos.length}`
    
    
    indiceGlobal += 10;

    if (indiceGlobal >= vuelos.length) {
      indiceGlobal = 0; 
    }
  };

  mostrarVuelos(); 

  setInterval(mostrarVuelos, 3000); 
};
getRowsTabla(vuelos);

