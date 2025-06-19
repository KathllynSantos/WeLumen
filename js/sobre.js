document.addEventListener('DOMContentLoaded', () => {
  function reorganizarSobreNos() {
    const section = document.querySelector('.sobre-nos');
    const texto = section.querySelector('.sobre-texto');
    const imagem = section.querySelector('.sobre-imagem');
    const titulo = texto.querySelector('h1');
    const paragrafos = Array.from(texto.querySelectorAll('p, a'));

    if(window.innerWidth <= 768) {
      // Remove título do texto e insere antes da imagem
      if(titulo && titulo.parentNode === texto) {
        texto.removeChild(titulo);
        section.insertBefore(titulo, imagem);
      }
      // Remove todos os parágrafos e botão do texto
      paragrafos.forEach(p => texto.removeChild(p));
      // Cria uma div para os textos restantes e insere depois da imagem
      let containerTexto = document.createElement('div');
      containerTexto.classList.add('sobre-texto-restante');
      paragrafos.forEach(p => containerTexto.appendChild(p));
      section.appendChild(containerTexto);
    } else {
      // Para telas maiores: volta ao normal
      const tituloOriginal = texto.querySelector('h1');
      const textoRestante = section.querySelector('.sobre-texto-restante');

      if(!tituloOriginal && titulo) {
        section.removeChild(titulo);
        texto.insertBefore(titulo, texto.firstChild);
      }
      if(textoRestante) {
        // Move os paragrafos de volta para texto e remove container extra
        const filhos = Array.from(textoRestante.childNodes);
        filhos.forEach(f => texto.appendChild(f));
        textoRestante.remove();
      }
    }
  }

  reorganizarSobreNos();

  window.addEventListener('resize', reorganizarSobreNos);
});
