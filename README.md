# Speechy

A simple script to help out with Text-to-speech in Javascript

## How to use 
    
```javascript
var speechy = new Speechy();
speechy.say("Hello World");
```

OR
    
```javascript
var speechy = new Speechy();
speechy.text("Hello World");
speechy.speak();
```

OR
    
```javascript
var speechy = new Speechy("Hello world");
speechy.speak();
```

## Other Methods

- `speechy.text(text)`: Sets the text to be spoken
- `speechy.speak()`: Speaks the text
- `speechy.pause()`: Pauses the speech
- `speechy.resume()`: Resumes the speech
- `speechy.stop()`: Stops the speechxw
- `speechy.setRate(rate)`: Sets the speech rate [0 - 1] default: 1
- `speechy.setPitch(pitch)`: Sets the speech pitch [0 - 1] default: 1
- `speechy.setVolume(volume)`: Sets the speech volume [0 - 1] default: 1
- `speechy.setVoice(voice)`: Sets the speech voice 
- `speechy.getVoices()`: Returns an array of available voices
