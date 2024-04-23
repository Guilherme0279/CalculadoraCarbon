document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCarbonFootprint();
});

document.getElementById('StartVoice').addEventListener('click', function(){
    startVoiceCommand();
});

function startVoiceCommand() {
    if (annyang) {
        annyang.setLanguage('pt-BR');
        var commands = {
            'calcular (pegada) (de) (carbono)': calculateCarbonFootprint,
            '*texto': Teste
        };
        annyang.addCommands(commands);
        annyang.start();
    } else {
        alert('O reconhecimento de voz não é suportado neste navegador')
    }
}

function teste(texto){
    console.log (texto);
    annyang.pause();
}
function calculateCarbonFootprint() {
    console.log ('calculando!');
    var fuelAmount = parseFloat(document.getElementById('fuel').value);
    var distance = parseFloat(document.getElementById('distance').value);

    var fuelEmissionfactor = 2.68;
    var distanceEmission = 0.12;

    var carbonFootprint = (fuelAmount * fuelEmissionfactor) + (distance * distanceEmission);

    document.getElementById('result').innerHTML = "A Pegada de Carbono " + carbonFootprint.toFixed(2) + " kg CO2";
}