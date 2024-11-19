function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container')
let cartao = document.createElement('article')    
cartao.className = 'cartao'

cartao.innerHTML = `
   <div class="cartão__conteudo">
    <h3>${categoria}</h3>
    <div class="cartão__conteudo__pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartão__conteudo__resposta">
    <p>${resposta}</p> 
    </div>
     </div>
`
let respostaEstaVisivel = false  
function viraCartao(){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active'),respostaEstaVisivel
}

container.appendChild(cartao)

}