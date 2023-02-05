function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Horário de: ${hora}h`;
    if (hora >= 0 && hora < 12) {
        img.src = "./imagens/manha.png";
        document.body.style.background = "#d4cebe";
    } else if (hora >= 12 && hora < 19) {
        img.src = "./imagens/tarde.png";
        document.body.style.background = "#ff9d4b";
    } else {
        img.src = "./imagens/noite.png";
        document.body.style.background = "#0e4964";
    }
}
