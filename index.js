let nome = 'Victor'
let botao = document.getElementById('btn')

botao.addEventListener('click', function () {
    document.getElementById('saudacao').textContent = `Olá, ${nome}!`
})