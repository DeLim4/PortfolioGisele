function clickMenu() {
    if (menu.style.display == 'block') { menu.style.display = 'none' }
    else { menu.style.display = 'block' }
}


const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")


botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.add("modo-escuro");
    

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro")
    } else {
        body.classList.add("modo-escuro")
    }
});

