const voiceBox = document.querySelector("#voice")
const textBox = document.querySelector("#text")
const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const resumeBtn = document.querySelector("#resume")
const cancelBtn = document.querySelector("#cancel")

// Instances of Speechy
const speechy = new Speechy()

// Get all browser supported voices
const voices = speechy.getVoices()

// Populate the Voice Dropdown in the HTML
if(voices.length) {
    voices.forEach((voice, index) => {
        const option = new Option(voice?.name, index, index === 0 && true)
        voiceBox.appendChild(option)
    })
}


// Handle voice change event
voiceBox.addEventListener('change', (event) => {
    event.preventDefault()
    const value = voiceBox.value || 0
    const voice = voices[value]
    speechy.setVoice(voice)
})

// Handle play button click event
playBtn.addEventListener("click", e => {
    // Get the input value 
    const text = textBox.value
    if(!text) {
        alert("Please enter a valid text")
        return
    }
    speechy.text(text)
    speechy.speak()
})

// Handle play button click event
pauseBtn.addEventListener("click", e => {
    speechy.pause()
    console.log(`pause`, speechy)
})

// Handle resume button click event
cancelBtn.addEventListener("click", e => {
    speechy.stop()
    console.log(`stop`, speechy)
})

// Handle resume button click event
resumeBtn.addEventListener("click", e => {
    speechy.resume()
    console.log(`resume`, speechy)
})
