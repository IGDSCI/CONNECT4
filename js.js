var imagem1 = document.getElementById('img1')
var imagem2 = document.getElementById('img2')
var imagem3 = document.getElementById('img3')
var imagem4 = document.getElementById('img4')
var imagem5 = document.getElementById('img5')
var imagem6 = document.getElementById('img6')
var imagem7 = document.getElementById('img7')

var imagem8 = document.getElementById('img8')
var imagem9 = document.getElementById('img9')
var imagem10 = document.getElementById('img10')
var imagem11 = document.getElementById('img11')
var imagem12 = document.getElementById('img12')
var imagem13 = document.getElementById('img13')
var imagem14 = document.getElementById('img14')

var imagem15 = document.getElementById('img15')
var imagem16 = document.getElementById('img16')
var imagem17 = document.getElementById('img17')
var imagem18 = document.getElementById('img18')
var imagem19 = document.getElementById('img19')
var imagem20 = document.getElementById('img20')
var imagem21 = document.getElementById('img21')

var imagem22 = document.getElementById('img22')
var imagem23 = document.getElementById('img23')
var imagem24 = document.getElementById('img24')
var imagem25 = document.getElementById('img25')
var imagem26 = document.getElementById('img26')
var imagem27 = document.getElementById('img27')
var imagem28 = document.getElementById('img28')

var imagem29 = document.getElementById('img29')
var imagem30 = document.getElementById('img30')
var imagem31 = document.getElementById('img31')
var imagem32 = document.getElementById('img32')
var imagem33 = document.getElementById('img33')
var imagem34 = document.getElementById('img34')
var imagem35 = document.getElementById('img35')

var imagem36 = document.getElementById('img36')
var imagem37 = document.getElementById('img37')
var imagem38 = document.getElementById('img38')
var imagem39 = document.getElementById('img39')
var imagem40 = document.getElementById('img40')
var imagem41 = document.getElementById('img41')
var imagem42 = document.getElementById('img42')

var jogador = document.getElementById('jogador')
var contador = 1;


document.getElementById("img1").addEventListener("click", mudarImagemDeFundo123456);
document.getElementById("img2").addEventListener("click", mudarImagemDeFundo123456);
document.getElementById("img3").addEventListener("click", mudarImagemDeFundo123456);
document.getElementById("img4").addEventListener("click", mudarImagemDeFundo123456);
document.getElementById("img5").addEventListener("click", mudarImagemDeFundo123456);
document.getElementById("img6").addEventListener("click", mudarImagemDeFundo123456);

document.getElementById("img7").addEventListener("click",  mudarImagemDeFundo789101112);
document.getElementById("img8").addEventListener("click",  mudarImagemDeFundo789101112);
document.getElementById("img9").addEventListener("click",  mudarImagemDeFundo789101112);
document.getElementById("img10").addEventListener("click", mudarImagemDeFundo789101112);
document.getElementById("img11").addEventListener("click", mudarImagemDeFundo789101112);
document.getElementById("img12").addEventListener("click", mudarImagemDeFundo789101112);

document.getElementById("img13").addEventListener("click", mudarImagemDeFundo131415161718);
document.getElementById("img14").addEventListener("click", mudarImagemDeFundo131415161718);
document.getElementById("img15").addEventListener("click", mudarImagemDeFundo131415161718);
document.getElementById("img16").addEventListener("click", mudarImagemDeFundo131415161718);
document.getElementById("img17").addEventListener("click", mudarImagemDeFundo131415161718);
document.getElementById("img18").addEventListener("click", mudarImagemDeFundo131415161718);

document.getElementById("img19").addEventListener("click", mudarImagemDeFundo192021222324);
document.getElementById("img20").addEventListener("click", mudarImagemDeFundo192021222324);
document.getElementById("img21").addEventListener("click", mudarImagemDeFundo192021222324);
document.getElementById("img22").addEventListener("click", mudarImagemDeFundo192021222324);
document.getElementById("img23").addEventListener("click", mudarImagemDeFundo192021222324);
document.getElementById("img24").addEventListener("click", mudarImagemDeFundo192021222324);

document.getElementById("img25").addEventListener("click", mudarImagemDeFundo252627282930);
document.getElementById("img26").addEventListener("click", mudarImagemDeFundo252627282930);
document.getElementById("img27").addEventListener("click", mudarImagemDeFundo252627282930);
document.getElementById("img28").addEventListener("click", mudarImagemDeFundo252627282930);
document.getElementById("img29").addEventListener("click", mudarImagemDeFundo252627282930);
document.getElementById("img30").addEventListener("click", mudarImagemDeFundo252627282930);

document.getElementById("img31").addEventListener("click", mudarImagemDeFundo313233343536);
document.getElementById("img32").addEventListener("click", mudarImagemDeFundo313233343536);
document.getElementById("img33").addEventListener("click", mudarImagemDeFundo313233343536);
document.getElementById("img34").addEventListener("click", mudarImagemDeFundo313233343536);
document.getElementById("img35").addEventListener("click", mudarImagemDeFundo313233343536);
document.getElementById("img36").addEventListener("click", mudarImagemDeFundo313233343536);

document.getElementById("img37").addEventListener("click", mudarImagemDeFundo373839404142);
document.getElementById("img38").addEventListener("click", mudarImagemDeFundo373839404142);
document.getElementById("img39").addEventListener("click", mudarImagemDeFundo373839404142);
document.getElementById("img40").addEventListener("click", mudarImagemDeFundo373839404142);
document.getElementById("img41").addEventListener("click", mudarImagemDeFundo373839404142);
document.getElementById("img42").addEventListener("click", mudarImagemDeFundo373839404142);


function mudarImagemDeFundo123456() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem6.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem6.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem5.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem5.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem4.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem4.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem3.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem3.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem2.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem2.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem1.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem1.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem6.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem6.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem5.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem5.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem4.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem4.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem3.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem3.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem2.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem2.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem1.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem1.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo789101112() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem12.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem12.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem11.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem11.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem10.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem10.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem9.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem9.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem8.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem8.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem7.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem7.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem12.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem12.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem11.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem11.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem10.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem10.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem9.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem9.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem8.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem8.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem7.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem7.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo131415161718() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem18.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem18.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem17.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem17.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem16.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem16.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem15.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem15.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem14.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem14.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem13.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem13.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem18.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem18.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem17.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem17.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem16.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem16.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem15.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem15.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem14.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem14.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem13.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem13.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo192021222324() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem24.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem24.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem23.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem23.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem22.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem22.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem21.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem21.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem20.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem20.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem19.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem19.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem24.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem24.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem23.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem23.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem22.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem22.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem21.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem21.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem20.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem20.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem19.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem19.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo252627282930() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem30.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem30.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem29.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem29.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem28.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem28.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem27.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem27.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem26.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem26.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem25.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem25.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem30.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem30.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem29.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem29.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem28.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem28.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem27.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem27.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem26.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem26.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem25.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem25.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo313233343536() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem36.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem36.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem35.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem35.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem34.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem34.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem33.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem33.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem32.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem32.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem31.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem31.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem36.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem36.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem35.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem35.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem34.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem34.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem33.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem33.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem32.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem32.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem31.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem31.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}

function mudarImagemDeFundo373839404142() {
    contador = contador + 1
    if (contador % 2 == 0){
        if(imagem42.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem42.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if (imagem41.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem41.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem40.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem40.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem39.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem39.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem38.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem38.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        } else if(imagem37.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem37.src = "Campo_vermelho.png"
            jogador.innerHTML = 'É a vez do jogador Amarelo'
        }  
    } else {
        if (imagem42.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem42.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem41.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem41.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem40.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem40.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem39.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem39.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem38.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem38.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        } else if (imagem37.src == "http://127.0.0.1:5500/Campo_neutro.png"){
            imagem37.src = "Campo_amarelo.png"
            jogador.innerHTML = 'É a vez do jogador Vermelho'
        }
    }
}