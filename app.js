
let speakButton = document.querySelector('#startBTN');
let textInput = document.querySelector('#text');


speakButton.addEventListener('click', (event) => {
    event.preventDefault()

    let text = textInput.value

    // Verifica se o navegador suporta o SpeechSynthesis API
    if ('speechSynthesis' in window) {
        
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
});