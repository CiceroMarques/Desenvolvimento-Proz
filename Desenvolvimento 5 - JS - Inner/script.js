let elementH1 = document.querySelector("h1");
let elementLista = document.querySelector("ul");
let elementA = document.querySelector("a");
let elementOrdenada = document.querySelector("ol")

elementH1.innerText = "Título principal!"
elementA.innerText = "Acesse o site Proz cliquando aqui!"

elementLista.innerHTML = `
<h2>Lista não ordenada</h2> 
    <li><a href="https://talentocloud.joyclass.com/login">Plataforma Joy</a></li>
    <li><a href="https://www.chess.com/">Jogue Xadrez</a></li>
    <li><a href="https://www.google.com/">Google</a></li>
`

elementOrdenada.innerHTML = `
<h2>Lista Ordenada</h2> 
    <li><a href="https://olympics.com/pt/paris-2024/calendario/31-julho?utm_campaign=dp_google">Calendário Olímpiadas</a></li>
    <li><a href="https://www.hltv.org/">HLTV</a></li>
    <li><a href="http://weavesilk.com/">Divita-se aqui!!</a></li>
`

