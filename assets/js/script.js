
// Nueva funcionalidad para el radio
document.addEventListener("DOMContentLoaded", (event) => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const btnEnviar = document.querySelector('#btnEnviar')
  //const tipoVueloSelect = document.querySelector("#tipoVuelo");
  const fechaVueltaInput = document.querySelector("#fechaVuelta");

  // inputs formulario
  const usernameInput = document.querySelector('#username')
  const telefonoInput = document.querySelector('#telefono')
  const emailInput = document.querySelector('#email')
  const messageInput = document.querySelector('#message')

  document.addEventListener('keyup', () => {
    if(usernameInput.value != '' && telefonoInput.value != '' && emailInput.value != '' && messageInput.value != ''){
      btnEnviar.disabled = false
    } else {      
      btnEnviar.disabled = true
    }
  })

  // // Al cambiar la opción en el select
  // tipoVueloSelect.addEventListener("change", function () {
  //   if (tipoVueloSelect.value === "idaVuelta") {
  //     fechaVueltaInput.removeAttribute("disabled");
  //   } else {
  //     fechaVueltaInput.setAttribute("disabled", true);
  //   }
  // });
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
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

