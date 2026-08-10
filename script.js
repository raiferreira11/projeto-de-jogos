const buttonMostrarJogos = document.querySelector('.mostrar-jogos')
const buttonJogosDisponiveis = document.querySelector('.jogos-disponiveis')
const buttonJogosPromoçao = document.querySelector('.jogos-promoçao')
const buttonMelhoresAvaliados = document.querySelector('.melhores-avaliados')
const buttonValorTotal = document.querySelector('.valor-total')
const lista = document.querySelector('ul')

function formatarDinheiro(valor) {
   const novovalor = valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
   })
   return novovalor
}
function mostrarJogos(produtoArray) {
   let minhaLi = ''
   produtoArray.forEach(produto => {
      minhaLi = minhaLi + `
 <li>
    <p>Nome: ${produto.nome}</p>
    <img src="${produto.src}">
    <p>Preço: ${formatarDinheiro(produto.preco)}</p>
    <p>Genêro: ${produto.genero}</p>
    <p>Plataforma: ${produto.plataforma}</p>
    </li>
 `
   });

   lista.innerHTML = minhaLi
}

function filtrarJogosDisponiveis() {
   const novaLista = menuOpçoes.filter((produto) => {
      if (produto.disponivel === true) return true
      else return false
   })
   return mostrarJogos(novaLista)
}

function jogosEmPromoçao() {
   const novaLista = menuOpçoes.map((produto) => {
      return {
         ...produto,
         preco: produto.preco * 0.9
      }
   })
   return mostrarJogos(novaLista)
}

function melhoresAvaliados() {
   const novaLista = menuOpçoes.filter((produto) => {
      if (produto.nota >= 9) return true
      else return false
   })
   return mostrarJogos(novaLista)
}

function valorTotal() {
   const valorTotal = menuOpçoes.reduce((acc, produto) => {
      return acc + produto.preco
   }, 0)

   lista.innerHTML = `
   <li>
      <p>O valor total é de R$ ${formatarDinheiro(valorTotal)}</p>
   </li>
  `
}

buttonMostrarJogos.addEventListener('click', () => mostrarJogos(menuOpçoes))
buttonJogosDisponiveis.addEventListener('click', filtrarJogosDisponiveis)
buttonJogosPromoçao.addEventListener('click', jogosEmPromoçao)
buttonMelhoresAvaliados.addEventListener('click', melhoresAvaliados)
buttonValorTotal.addEventListener('click', valorTotal)