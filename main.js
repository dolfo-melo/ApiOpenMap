const key = "0fba1552e313312977df24b0868dc0cc";

function pesquisarCidade(){
    let nomeCidade = document.getElementById("cidade").value;
    console.log(nomeCidade); 
    dadosApi(nomeCidade);
}

async function dadosApi(nomeCidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())
    console.log(dados);
    trocarDados(dados);
}

function trocarDados(dados){
    document.getElementById('nomeCidade').innerHTML = dados.name;
    document.getElementById('temperatura').innerHTML = "Temperatura: " + dados.main.temp + "°";
    document.getElementById('umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.getElementById('previsao').innerHTML = dados.weather[0].description.toUpperCase();
    document.getElementById('previsaoTempo').style = "display: flex;"
    document.getElementById('previsaoTempo').src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}
