const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

// Lógica para as frases inspiradoras
const quoteElement = document.getElementById('inspirational-quote');
const quotes = [
    "Acredite em si mesmo, e tudo será possível.",
    "O sucesso é a soma de pequenos esforços.",
    "Vá em busca do que você sempre sonhou!",
];

let currentQuoteIndex = 0;

function setQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Lógica para o relógio digital
const digitalClockElement = document.getElementById('digital-clock');

function setDigitalClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('pt-BR', options);
    digitalClockElement.textContent = timeString;
}

// Chame as funções inicialmente e configure o intervalo
setClock();
setDigitalClock(); // Chamar a função digital pela primeira vez
setQuote();
setInterval(setClock, 1000);
setInterval(setDigitalClock, 1000); // Atualiza o relógio digital a cada segundo
setInterval(setQuote, 10000); // Atualiza a frase a cada 10 segundos