"use strict";
class Speechy {
    /**
     * @param {string} lang  Language code [eg. en-US ]
     *
     * @param {SpeechSynthesisUtterance['text']} text  Default text [default: 'Hi there!']
     */
    constructor(text = "Hi there!", lang = "en-US") {
        this.speechOptions = new SpeechSynthesisUtterance();
        this.speech = window.speechSynthesis;
        this.isPaused = this.speech.paused;
        this.isPlaying = this.speech.speaking;
        this.error = null;
        this.speechOptions.lang = lang;
        this.speechOptions.text = text;
        this.speechOptions.voice = this.getVoices()[0];
        this.speechOptions.onpause = () => {
            this.isPaused = this.speech.paused;
            this.isPlaying = this.speech.speaking;
        };
        this.speechOptions.onresume = () => {
            this.isPaused = this.speech.paused;
            this.isPlaying = this.speech.speaking;
        };
        this.speechOptions.onerror = (e) => {
            console.log({ error: e });
        };
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
    setVoice(voice) {
        this.speechOptions.voice = voice;
    }
    /**
     *
     * @param text  Text to be spoken
     */
    text(text) {
        this.speechOptions.text = text;
    }
    /**
     *  Speaks the text
     */
    speak() {
        this.speech.speak(this.speechOptions);
    }
    say(text) {
        this.speechOptions.text = text;
        this.speak();
    }
    /**
     *
     */
    pause() {
        this.speech.pause();
    }
    /**
     *
     */
    resume() {
        this.speech.resume();
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
    setVolume(volume) {
        this.speechOptions.volume = volume;
    }
    /**
     *
     * @param rate  Rate of the speech [default: 1]
     */
    setRate(rate) {
        this.speechOptions.rate = rate;
    }
    /**
     *
     * @param pitch  Pitch of the speech [default: 1]
     */
    setPitch(pitch) {
        this.speechOptions.pitch = pitch;
    }
    onFinsh(callback) {
        this.speechOptions.onend = callback;
    }
}
