$(document).ready(function () {
  $("a.arriba").on("click", function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      800
    ); // 800 milisegundos para un desplazamiento suave
  });
});
