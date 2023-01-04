
let speakButton = document.querySelector('#startBTN');
let textInput = document.querySelector('#text');


textInput.addEventListener('focus', () => {
    textInput.setAttribute('style', 'border: 2px solid rgb(80, 97, 252)')
})

speakButton.addEventListener('click', (event) => {

    

    speakButton.textContent = "Reproduzindo..."
    event.preventDefault()

    let text = textInput.value

    // Verifica se o navegador suporta o SpeechSynthesis API
    if ('speechSynthesis' in window) {
        
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);

        setTimeout( () => {
            speakButton.textContent = "Reproduzir"

        },2500)
    }

    
});