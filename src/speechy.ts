class Speechy {
    private speechOptions: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
    private speech: SpeechSynthesis = window.speechSynthesis;
    isPaused: boolean = this.speech.paused;
    isPlaying: boolean = this.speech.speaking;
    error =  null

    /**
     * @param {string} lang  Language code [eg. en-US ]
     * 
     * @param {SpeechSynthesisUtterance['text']} text  Default text [default: 'Hi there!']
     */
    constructor(text: SpeechSynthesisUtterance['text'] = "Hi there!", lang: string = "en-US") {
        this.speechOptions.lang = lang;
        this.speechOptions.text = text;
        this.speechOptions.voice = this.getVoices()[0]

        this.speechOptions.onpause = () => {
            this.isPaused = this.speech.paused
            this.isPlaying = this.speech.speaking
        }

        this.speechOptions.onresume = () => {
            this.isPaused = this.speech.paused
            this.isPlaying = this.speech.speaking
        }

        this.speechOptions.onerror = (e) => {
            console.log({ error: e })
        }
    }

    /**
     * 
     * @returns {SpeechSynthesisVoice[]}  List of browser suported voices
     */
    getVoices() {
        return this.speech.getVoices();
    }

    /**
     * 
     * @param voice  Voice of the speech [default: Alex] | Depends on your browser
     */
    setVoice(voice: SpeechSynthesisVoice) {
        this.speechOptions.voice = voice;
    }

    /**
     * 
     * @param text  Text to be spoken
     */
    text(text: SpeechSynthesisUtterance['text']) {
        this.speechOptions.text = text;
    }

    /**
     *  Speaks the text
     */
    speak() {
        this.speech.speak(this.speechOptions);
    }

    say(text: string) {
        this.speechOptions.text = text;
        this.speak();
    }
    /**
     * 
     */
    pause() {
        this.speech.pause()
    }

    /**
     * 
     */
    resume() {
        this.speech.resume()
    }

    /**
     * 
     */
    stop() {
        this.speech.cancel();
        this.isPaused = this.speech.paused;
        this.isPlaying = this.speech.speaking;
    }

    /**
     * 
     * @param volume  Volume of the speech [default: 1]
     */
    setVolume(volume: number) {
        this.speechOptions.volume = volume;
    }

    /**
     * 
     * @param rate  Rate of the speech [default: 1]
     */
    setRate(rate: number) {
        this.speechOptions.rate = rate;
    }

    /**
     * 
     * @param pitch  Pitch of the speech [default: 1]
     */
    setPitch(pitch: number) {
        this.speechOptions.pitch = pitch;
    }

    onFinsh(callback: () => any) {
        this.speechOptions.onend = callback;
    }

}

export default Speechy;