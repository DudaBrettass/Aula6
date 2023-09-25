console.log('Teste do Js')

function getusuarios(){

fetch("https://jsonplaceholder.typicode.com/users").then( (resp1)=> resp1.json() ).then( (resp2) => mostrausuarios(resp2) )

}

function mostrausuarios(dados){
console.log(dados);
var container = document.getElementById('usuarios');
dados.forEach( (usuario) => {
    let paragrafo = document.createElement('p');
    paragrafo.innerText = usuario.name;
    container.appendChild(paragrafo);
});


}




function getfoto(){
    fetch("https://picsum.photos/200/300").then((resp)=>mostrarfoto(resp))
}
function mostrarfoto(dado) {
    console.log(dado.url);
let container = document.getElementById('fotuu');
let imagem = document.createElement('img');
imagem.src = dado.url;
container.appendChild(imagem);
}

getusuarios();
getfoto();