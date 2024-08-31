const tipoViaje = document.getElementById("tipoViaje");
const buscarVuelos = document.getElementById("buscarVuelos");

tipoViaje.addEventListener("change", () => {
  const fechaVuelta = document.getElementById("fechaVuelta");
  if (this.value === "idavuelta") {
    fechaVuelta.disabled = false;
  } else {
    fechaVuelta.disabled = true;
    fechaVuelta.value = "";
  }
});

buscarVuelos.addEventListener("click", function () {
  const destino = document.getElementById("destino").value.toLowerCase();
  const origen = document.getElementById("origen").value.toLowerCase(); //JR
  const resultados = document.getElementById("resultados");
  const opcionesVuelos = document.getElementById("opcionesVuelos")
  resultados.innerHTML = "";

  //Codigo #2 Jose Rejas

  /* los vuelos los dejé al final de este archivo, ya que agregue muchos mas J.R.
    const vuelos = [
        { aerolinea: 'Eleven Airline', vuelo: 'FL139', salida: '09:27', llegada: '08:25', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1200', duracion: '17 h 42 m' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL984', salida: '19:49', llegada: '23:27', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1500', duracion: '17 h 42 m' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL84', salida: '15:24', llegada: '02:27', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1000', duracion: '17 h 42 m' },
    ]; */

  let totalPasajeros = parseInt(ninos.value) + parseInt(pasajeros.value); //JR
  const textResultados = document.getElementById("text-resultado");
  if (totalPasajeros > 7) {
    //JR
    opcionesVuelos.style.display = "block";
    opcionesVuelos.style.color = "red";

    textResultados.innerHTML = "A sobrepasado el máximo de 7 pasajes por usuario"; //JR
  } else {
    //JR
    vuelos.forEach((vuelo) => {
      if (
        vuelo.destino.toLowerCase() === destino &&
        vuelo.origen.toLowerCase() === origen
      ) {
        const div = document.createElement("div");
        div.classList.add("vuelo");
        div.innerHTML = `
                <img src="./assets/img/avion1.JPG" alt="${vuelo.aerolinea}">
                <div class="vuelo-info">
                    <p>${vuelo.aerolinea} - ${vuelo.numeroVuelo}</p>
                    <p><strong>${vuelo.salida}</strong> ${vuelo.origen} <strong>${vuelo.llegada}</strong> ${vuelo.destino}</p>
                    <p>Duración: ${vuelo.duracion}</p>
                </div>
                <div class="vuelo-precio">
                    <p>USD $${vuelo.precio}</p>
                    <button>Seleccionar</button>
                </div>
            `;
        resultados.appendChild(div);
      }
    });

    document.getElementById("opcionesVuelos").classList.remove("oculto");
  } //JR
});

function obtenerFechaActual() {
  const hoy = new Date();
  const year = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const día = String(hoy.getDate()).padStart(2, "0");
  return `${year}-${mes}-${día}`; 
}

function formatearFecha(fecha) {
  const partes = fecha.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

ninos.addEventListener("blur", function () {
  ninosDetalles.innerHTML = "";
  if (ninos.value > 0) {
    for (i = 1; i <= ninos.value; i++) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      label.innerHTML = `<label for="childrenAge">Edad del niño ${i}:</label>`;
      input.innerHTML = `<input type='number' id="edadnino${i}" name="edadnino${i}" min="0" max="12">`;
      ninosDetalles.appendChild(label);
      ninosDetalles.appendChild(input);
    }
  }

  /*     <label for="childrenAge">Edad del niño:</label>
            <input type="number" id="childrenAge" name="childrenAge" min="0" value="1">
 */
});

// yanira
const fechaMinima = obtenerFechaActual();
const fechaIda = document.getElementById("fechaIda")
const fechaVuelta = document.getElementById("fechaVuelta")
fechaIda.min = fechaMinima;
fechaVuelta.min = fechaMinima;

//Inicio Codigo #1: realizado por Jose Rejas
const ninos = document.getElementById("childrens");
const ninosDetalles = document.getElementById("ninosDetalles");
const pasajeros = document.getElementById("pasajeros");

let totalPasajeros = parseInt(ninos.value) + parseInt(pasajeros.value); //JR
const textResultados = document.getElementById("text-resultado");
if (totalPasajeros > 7) {
  //JR
  document.getElementById("opcionesVuelos").style.display = "block";
  document.getElementById("opcionesVuelos").style.color = "red";

  textResultados.innerHTML = "A sobrepasado el máximo de 7 pasajes por usuario";
}


//Termino codigo #1: Jose Rejas
const vuelos = [
  // Itinerarios desde Santiago de Chile
  {
    origen: "Santiago de Chile",
    destino: "Amsterdam",
    salida: "22:00",
    llegada: "16:00",
    duracion: "14h",
    aerolinea: "KLM",
    fechaSalida: "2024-09-10",
    fechaLlegada: "2024-09-11",
    precio: 1200,
    tipoClase: "business",
    numeroVuelo: "KL1234",
  },
  {
    origen: "Santiago de Chile",
    destino: "Amsterdam",
    salida: "18:00",
    llegada: "12:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-09-10",
    fechaLlegada: "2024-09-11",
    precio: 1150,
    tipoClase: "turista",
    numeroVuelo: "AF5678",
  },
  {
    origen: "Santiago de Chile",
    destino: "Amsterdam",
    salida: "20:00",
    llegada: "14:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-09-10",
    fechaLlegada: "2024-09-11",
    precio: 1300,
    tipoClase: "primera clase",
    numeroVuelo: "LA9101",
  },
  {
    origen: "Santiago de Chile",
    destino: "Berlin",
    salida: "23:00",
    llegada: "16:00",
    duracion: "14h",
    aerolinea: "Lufthansa",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1250,
    tipoClase: "business",
    numeroVuelo: "LH1122",
  },
  {
    origen: "Santiago de Chile",
    destino: "Berlin",
    salida: "21:00",
    llegada: "12:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1200,
    tipoClase: "turista",
    numeroVuelo: "AF3344",
  },
  {
    origen: "Santiago de Chile",
    destino: "Berlin",
    salida: "19:00",
    llegada: "10:00",
    duracion: "14h",
    aerolinea: "British Airways",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1350,
    tipoClase: "primera clase",
    numeroVuelo: "BA5566",
  },
  {
    origen: "Santiago de Chile",
    destino: "Chicago",
    salida: "21:00",
    llegada: "05:00",
    duracion: "10h",
    aerolinea: "American Airlines",
    fechaSalida: "2024-09-20",
    fechaLlegada: "2024-09-20",
    precio: 1100,
    tipoClase: "business",
    numeroVuelo: "AA7788",
  },
  {
    origen: "Santiago de Chile",
    destino: "Chicago",
    salida: "19:00",
    llegada: "03:00",
    duracion: "10h",
    aerolinea: "United",
    fechaSalida: "2024-09-20",
    fechaLlegada: "2024-09-20",
    precio: 1050,
    tipoClase: "turista",
    numeroVuelo: "UA9900",
  },
  {
    origen: "Santiago de Chile",
    destino: "Chicago",
    salida: "23:00",
    llegada: "09:00",
    duracion: "10h",
    aerolinea: "Delta",
    fechaSalida: "2024-09-20",
    fechaLlegada: "2024-09-20",
    precio: 1200,
    tipoClase: "primera clase",
    numeroVuelo: "DL2233",
  },
  {
    origen: "Santiago de Chile",
    destino: "Londres",
    salida: "23:00",
    llegada: "15:00",
    duracion: "14h",
    aerolinea: "British Airways",
    fechaSalida: "2024-09-25",
    fechaLlegada: "2024-09-26",
    precio: 1400,
    tipoClase: "business",
    numeroVuelo: "BA4455",
  },
  {
    origen: "Santiago de Chile",
    destino: "Londres",
    salida: "21:00",
    llegada: "13:00",
    duracion: "14h",
    aerolinea: "Iberia",
    fechaSalida: "2024-09-25",
    fechaLlegada: "2024-09-26",
    precio: 1350,
    tipoClase: "turista",
    numeroVuelo: "IB6677",
  },
  {
    origen: "Santiago de Chile",
    destino: "Londres",
    salida: "19:00",
    llegada: "11:00",
    duracion: "14h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-09-25",
    fechaLlegada: "2024-09-26",
    precio: 1500,
    tipoClase: "primera clase",
    numeroVuelo: "UX8899",
  },
  {
    origen: "Santiago de Chile",
    destino: "Madrid",
    salida: "10:00",
    llegada: "02:00",
    duracion: "14h",
    aerolinea: "Iberia",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1300,
    tipoClase: "business",
    numeroVuelo: "IB1000",
  },
  {
    origen: "Santiago de Chile",
    destino: "Madrid",
    salida: "12:00",
    llegada: "04:00",
    duracion: "14h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1250,
    tipoClase: "turista",
    numeroVuelo: "UX2000",
  },
  {
    origen: "Santiago de Chile",
    destino: "Madrid",
    salida: "14:00",
    llegada: "06:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1400,
    tipoClase: "primera clase",
    numeroVuelo: "LA3000",
  },
  {
    origen: "Santiago de Chile",
    destino: "Sidney",
    salida: "17:00",
    llegada: "08:00",
    duracion: "15h",
    aerolinea: "Qantas",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-12",
    precio: 1600,
    tipoClase: "business",
    numeroVuelo: "QF4000",
  },
  {
    origen: "Santiago de Chile",
    destino: "Sidney",
    salida: "15:00",
    llegada: "06:00",
    duracion: "15h",
    aerolinea: "LATAM",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-12",
    precio: 1550,
    tipoClase: "turista",
    numeroVuelo: "LA5000",
  },
  {
    origen: "Santiago de Chile",
    destino: "Sidney",
    salida: "19:00",
    llegada: "10:00",
    duracion: "15h",
    aerolinea: "Emirates",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-12",
    precio: 1700,
    tipoClase: "primera clase",
    numeroVuelo: "EK6000",
  },
  // Itinerarios desde Puerto Montt
  {
    origen: "Puerto Montt",
    destino: "Amsterdam",
    salida: "12:00",
    llegada: "06:00",
    duracion: "14h",
    aerolinea: "KLM",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1250,
    tipoClase: "business",
    numeroVuelo: "KL7000",
  },
  {
    origen: "Puerto Montt",
    destino: "Amsterdam",
    salida: "08:00",
    llegada: "02:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1200,
    tipoClase: "turista",
    numeroVuelo: "AF8000",
  },
  {
    origen: "Puerto Montt",
    destino: "Amsterdam",
    salida: "14:00",
    llegada: "08:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1350,
    tipoClase: "primera clase",
    numeroVuelo: "LA9000",
  },
  {
    origen: "Puerto Montt",
    destino: "Berlin",
    salida: "16:00",
    llegada: "07:00",
    duracion: "14h",
    aerolinea: "Lufthansa",
    fechaSalida: "2024-10-05",
    fechaLlegada: "2024-10-06",
    precio: 1300,
    tipoClase: "business",
    numeroVuelo: "LH1001",
  },
  {
    origen: "Puerto Montt",
    destino: "Berlin",
    salida: "18:00",
    llegada: "09:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-10-05",
    fechaLlegada: "2024-10-06",
    precio: 1250,
    tipoClase: "turista",
    numeroVuelo: "AF2001",
  },
  {
    origen: "Puerto Montt",
    destino: "Berlin",
    salida: "20:00",
    llegada: "11:00",
    duracion: "14h",
    aerolinea: "British Airways",
    fechaSalida: "2024-10-05",
    fechaLlegada: "2024-10-06",
    precio: 1400,
    tipoClase: "primera clase",
    numeroVuelo: "BA3001",
  },
  {
    origen: "Puerto Montt",
    destino: "Chicago",
    salida: "05:00",
    llegada: "19:00",
    duracion: "10h",
    aerolinea: "American Airlines",
    fechaSalida: "2024-10-15",
    fechaLlegada: "2024-10-15",
    precio: 1150,
    tipoClase: "business",
    numeroVuelo: "AA4001",
  },
  {
    origen: "Puerto Montt",
    destino: "Chicago",
    salida: "07:00",
    llegada: "21:00",
    duracion: "10h",
    aerolinea: "United",
    fechaSalida: "2024-10-15",
    fechaLlegada: "2024-10-15",
    precio: 1100,
    tipoClase: "turista",
    numeroVuelo: "UA5000",
  },
  {
    origen: "Puerto Montt",
    destino: "Chicago",
    salida: "09:00",
    llegada: "23:00",
    duracion: "10h",
    aerolinea: "Delta",
    fechaSalida: "2024-10-15",
    fechaLlegada: "2024-10-15",
    precio: 1250,
    tipoClase: "primera clase",
    numeroVuelo: "DL6000",
  },
  {
    origen: "Puerto Montt",
    destino: "Londres",
    salida: "10:00",
    llegada: "04:00",
    duracion: "15h",
    aerolinea: "British Airways",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1450,
    tipoClase: "business",
    numeroVuelo: "BA7000",
  },
  {
    origen: "Puerto Montt",
    destino: "Londres",
    salida: "12:00",
    llegada: "06:00",
    duracion: "15h",
    aerolinea: "Iberia",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1400,
    tipoClase: "turista",
    numeroVuelo: "IB8000",
  },
  {
    origen: "Puerto Montt",
    destino: "Londres",
    salida: "14:00",
    llegada: "08:00",
    duracion: "15h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1550,
    tipoClase: "primera clase",
    numeroVuelo: "UX9000",
  },
  {
    origen: "Puerto Montt",
    destino: "Madrid",
    salida: "16:00",
    llegada: "06:00",
    duracion: "14h",
    aerolinea: "Iberia",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1350,
    tipoClase: "business",
    numeroVuelo: "IB10000",
  },
  {
    origen: "Puerto Montt",
    destino: "Madrid",
    salida: "18:00",
    llegada: "08:00",
    duracion: "14h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1300,
    tipoClase: "turista",
    numeroVuelo: "UX11000",
  },
  {
    origen: "Puerto Montt",
    destino: "Madrid",
    salida: "20:00",
    llegada: "10:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1450,
    tipoClase: "primera clase",
    numeroVuelo: "LA12000",
  },
  {
    origen: "Puerto Montt",
    destino: "Sidney",
    salida: "11:00",
    llegada: "05:00",
    duracion: "15h",
    aerolinea: "Qantas",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1650,
    tipoClase: "business",
    numeroVuelo: "QF13000",
  },
  {
    origen: "Puerto Montt",
    destino: "Sidney",
    salida: "13:00",
    llegada: "07:00",
    duracion: "15h",
    aerolinea: "LATAM",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1600,
    tipoClase: "turista",
    numeroVuelo: "LA14000",
  },
  {
    origen: "Puerto Montt",
    destino: "Sidney",
    salida: "15:00",
    llegada: "09:00",
    duracion: "15h",
    aerolinea: "Emirates",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1750,
    tipoClase: "primera clase",
    numeroVuelo: "EK15000",
  },
  {
    origen: "La Serena",
    destino: "Amsterdam",
    salida: "09:00",
    llegada: "23:00",
    duracion: "14h",
    aerolinea: "KLM",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1300,
    tipoClase: "business",
    numeroVuelo: "KL16000",
  },
  {
    origen: "La Serena",
    destino: "Amsterdam",
    salida: "11:00",
    llegada: "01:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1250,
    tipoClase: "turista",
    numeroVuelo: "AF17000",
  },
  {
    origen: "La Serena",
    destino: "Amsterdam",
    salida: "13:00",
    llegada: "03:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-09-15",
    fechaLlegada: "2024-09-16",
    precio: 1400,
    tipoClase: "primera clase",
    numeroVuelo: "LA18000",
  },
  {
    origen: "La Serena",
    destino: "Berlin",
    salida: "08:00",
    llegada: "23:00",
    duracion: "14h",
    aerolinea: "Lufthansa",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1350,
    tipoClase: "business",
    numeroVuelo: "LH19000",
  },
  {
    origen: "La Serena",
    destino: "Berlin",
    salida: "10:00",
    llegada: "01:00",
    duracion: "14h",
    aerolinea: "Air France",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1300,
    tipoClase: "turista",
    numeroVuelo: "AF20000",
  },
  {
    origen: "La Serena",
    destino: "Berlin",
    salida: "12:00",
    llegada: "03:00",
    duracion: "14h",
    aerolinea: "British Airways",
    fechaSalida: "2024-10-01",
    fechaLlegada: "2024-10-02",
    precio: 1450,
    tipoClase: "primera clase",
    numeroVuelo: "BA21000",
  },
  {
    origen: "La Serena",
    destino: "Chicago",
    salida: "14:00",
    llegada: "04:00",
    duracion: "10h",
    aerolinea: "American Airlines",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-10",
    precio: 1200,
    tipoClase: "business",
    numeroVuelo: "AA22000",
  },
  {
    origen: "La Serena",
    destino: "Chicago",
    salida: "16:00",
    llegada: "06:00",
    duracion: "10h",
    aerolinea: "United",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-10",
    precio: 1150,
    tipoClase: "turista",
    numeroVuelo: "UA23000",
  },
  {
    origen: "La Serena",
    destino: "Chicago",
    salida: "18:00",
    llegada: "08:00",
    duracion: "10h",
    aerolinea: "Delta",
    fechaSalida: "2024-10-10",
    fechaLlegada: "2024-10-10",
    precio: 1300,
    tipoClase: "primera clase",
    numeroVuelo: "DL24000",
  },
  {
    origen: "La Serena",
    destino: "Londres",
    salida: "07:00",
    llegada: "22:00",
    duracion: "15h",
    aerolinea: "British Airways",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1500,
    tipoClase: "business",
    numeroVuelo: "BA25000",
  },
  {
    origen: "La Serena",
    destino: "Londres",
    salida: "09:00",
    llegada: "00:00",
    duracion: "15h",
    aerolinea: "Iberia",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1450,
    tipoClase: "turista",
    numeroVuelo: "IB26000",
  },
  {
    origen: "La Serena",
    destino: "Londres",
    salida: "11:00",
    llegada: "02:00",
    duracion: "15h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-10-20",
    fechaLlegada: "2024-10-21",
    precio: 1600,
    tipoClase: "primera clase",
    numeroVuelo: "UX27000",
  },
  {
    origen: "La Serena",
    destino: "Madrid",
    salida: "12:00",
    llegada: "01:00",
    duracion: "14h",
    aerolinea: "Iberia",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1400,
    tipoClase: "business",
    numeroVuelo: "IB28000",
  },
  {
    origen: "La Serena",
    destino: "Madrid",
    salida: "14:00",
    llegada: "03:00",
    duracion: "14h",
    aerolinea: "Air Europa",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1350,
    tipoClase: "turista",
    numeroVuelo: "UX29000",
  },
  {
    origen: "La Serena",
    destino: "Madrid",
    salida: "16:00",
    llegada: "05:00",
    duracion: "14h",
    aerolinea: "LATAM",
    fechaSalida: "2024-11-01",
    fechaLlegada: "2024-11-02",
    precio: 1500,
    tipoClase: "primera clase",
    numeroVuelo: "LA30000",
  },
  {
    origen: "La Serena",
    destino: "Sidney",
    salida: "07:00",
    llegada: "00:00",
    duracion: "15h",
    aerolinea: "Qantas",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1700,
    tipoClase: "business",
    numeroVuelo: "QF31000",
  },
  {
    origen: "La Serena",
    destino: "Sidney",
    salida: "09:00",
    llegada: "02:00",
    duracion: "15h",
    aerolinea: "LATAM",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1650,
    tipoClase: "turista",
    numeroVuelo: "LA32000",
  },
  {
    origen: "La Serena",
    destino: "Sidney",
    salida: "11:00",
    llegada: "04:00",
    duracion: "15h",
    aerolinea: "Emirates",
    fechaSalida: "2024-11-10",
    fechaLlegada: "2024-11-12",
    precio: 1800,
    tipoClase: "primera clase",
    numeroVuelo: "EK33000",
  },
];
