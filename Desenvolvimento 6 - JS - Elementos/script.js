let titulo = document.createElement("h1");

titulo.id = 'titulo';
titulo.innerText = "Loja de Dispositivos Eletrônicos";

document.body.appendChild(titulo);


const divProduto = document.createElement("div");
divProduto.id = 'produto';
document.body.appendChild(divProduto);

divProduto.innerHTML = `
<h2 class="produto-nome">Placa de Vídeo RTX 4090 Asus NVIDIA ROG Strix, 24 GB GDDR6X</h2>
<p class="produto-descricao">Por dentro e por fora, cada elemento da placa dá ao monstruoso espaço para a GPU respirar livremente e alcançar o melhor desempenho. O reinado desencadeado da arquitetura NVIDIA Ada Lovelace está aqui.</p>
`;

let produtoImagem = document.createElement("img");
produtoImagem.src = './placa-de-video-4090.jpg';
produtoImagem.alt  = 'RTX 4090';
produtoImagem.style.width = '500px';
produtoImagem.style.height = 'auto';
divProduto.appendChild(produtoImagem);

let produtoPreco = document.createElement("p");
produtoPreco.innerText = 'Preço: R$ 13.500,00';
divProduto.appendChild(produtoPreco);



