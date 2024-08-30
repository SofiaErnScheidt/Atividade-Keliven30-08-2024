const paragrafo1 = document.getElementById("paragrafo1")
const paragrafo2 = document.getElementsByClassName("paragrafo2")[0]
const botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    paragrafo1.textContent = "Amo você"
    paragrafo2.textContent = "É verdade esse bilhete"
})