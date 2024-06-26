function AlterarCorDoTexto() {
    let texto = document.querySelector('#TextoTitulo');
    texto.style.color = 'blue';
    texto = document.querySelector('#TextoParagrafo');
    texto.style.color = 'blue';
    let msg = document.querySelector("#mensagem");
    msg.innerHTML = 'Cores Alteradas!';

}