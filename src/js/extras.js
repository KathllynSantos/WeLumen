// We Lúmen - acessibilidade por teclado nos pontos do carrossel do hero.
// Os pontos são <span role="button">; Enter ou Espaço disparam o mesmo clique do mouse.
document.querySelectorAll(".carousel-dots .dot").forEach(function (dot) {
  dot.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dot.click();
    }
  });
});
