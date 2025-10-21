function toggleMode() {
  const html = document.documentElement
  const body = document.body
  const logo = document.getElementById("logo")

  // alterna as classes de modo claro/escuro
  html.classList.toggle("light")
  body.classList.toggle("dark")

  // verifica o modo atual
  const isLightMode = html.classList.contains("light")

  // troca a logo conforme o modo
  if (logo) {
    logo.src = isLightMode ? "/src/img/Logo.jpg" : "img/logo-dark.png"
    logo.alt = isLightMode
      ? "Logo da Lumen (claro)"
      : "Logo da lumen (escuro)"
  }
}

// ao carregar a página, já aplica a logo correta
window.addEventListener("load", toggleMode)
