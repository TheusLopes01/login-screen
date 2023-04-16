function mostraAviso() {
  alert("Carregando...")
}

window.onload = function () {
  let botaoAviso = document.getElementById("acessar")

  botaoAviso.onclick = function () {
    mostraAviso()
  }
}
