function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    if (fano.value > ano || fano.value < 1920)
        window.alert("Verifique os dados e tente novamente!");
    else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - fano.value;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./imagens/criancaH.png");
            } else if (idade < 19) {
                img.setAttribute("src", "./imagens/jovemH.png");
            } else if (idade < 50) {
                img.setAttribute("src", "./imagens/AdultoH.png");
            } else {
                img.setAttribute("src", "./imagens/idosoH.png");
            }
        } else {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./imagens/CriancaM.png");
            } else if (idade < 19) {
                img.setAttribute("src", "./imagens/jovemM.png");
            } else if (idade < 50) {
                img.setAttribute("src", "./imagens/AdultaM.png");
            } else {
                img.setAttribute("src", "./imagens/idosaM.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `${genero} de ${idade} anos!`;
        res.appendChild(img);
    }
}
