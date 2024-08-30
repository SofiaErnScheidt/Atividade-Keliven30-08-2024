const paragrafo1 = document.getElementById("paragrafo1")
const paragrafo2 = document.getElementsByClassName("paragrafo2")[0]
const botao = document.querySelector("#botao")

const link = document.getElementById("link")
const imagem = document.getElementById("imagem")
const botaoImagem = document.getElementById("botaoImagem")

link.setAttribute ('href' , 'https://www.instagram.com/sofia.ern.scheidt?igsh=MXA2Znk0eTYyNWNo') 
link.textContent= 'Você está precisando me ver.'

link.style.color = 'red'

var imagemAtual = 1
botaoImagem.addEventListener("click" , function(){
if (imagemAtual === 1){
    imagem.setAttribute ("src" , "imagem2.jpg")
    imagemAtual = 2 
}else{
    imagem.setAttribute("src" , "imagem1.jpg")
    imagemAtual = 1
}
})

botao.addEventListener("click", function(){
    paragrafo1.textContent = "Amo você"
    paragrafo2.textContent = "É verdade esse bilhete"
})


