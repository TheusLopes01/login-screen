function mostraAviso() {
  alert("Seja bem vindo!")
}

window.onload = function () {
  let botaoAviso = document.getElementById("acessar")

  botaoAviso.onclick = function () {
    mostraAviso()
  }
}
