
//document = objeto 
//Método getElementById => retorna um objeto

document.getElementById("botao").addEventListener("click", function() { 
    document.getElementById("img_principal").remove();
});
// Função para abrir menu escondido
document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("categorias").style.display = "block";
});
// Função para fechar menu
document.getElementById("closeicon").addEventListener("click", function(){
    document.getElementById("categorias").style.display = "none";
})

/*
var elemento = document.getElementById("botao");
elemento.onclick = function(){
    alert("Mensagem do alerta");
}
elemento.onmouseup = function(){
    alert("Segurando o clique");
} 
elemento.onmousedown = function(){
    alert("Soltando o clique");
}
elemento.onmouseover = function (){
    alert("Passando o mouse");
}
object.addEventListener("mousedown", myScript);
*/
