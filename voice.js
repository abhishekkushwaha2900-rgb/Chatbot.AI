/*====================================
            KISAN MITRA AI
                VOICE
====================================*/


/*====================================
        SPEECH RECOGNITION
====================================*/

const SpeechRecognition =

window.SpeechRecognition ||

window.webkitSpeechRecognition;



let recognition = null;



/*====================================
        BROWSER SUPPORT CHECK
====================================*/

if (SpeechRecognition) {

    recognition =

        new SpeechRecognition();


    recognition.lang =

        CONFIG.SPEECH_LANGUAGE;


    recognition.continuous =

        false;


    recognition.interimResults =

        false;

}



/*====================================
        START LISTENING
====================================*/

function startListening() {


    if (!CONFIG.ALLOW_VOICE) {

        return;

    }


    if (!recognition) {


        alert(

            "आपका Browser Voice Support नहीं करता।"

        );


        return;

    }


    try {

        recognition.start();

    }

    catch (error) {

        console.error(

            "Voice Error :",

            error

        );

    }

}




/*====================================
        STOP LISTENING
====================================*/

function stopListening() {


    if (recognition) {

        recognition.stop();

    }

}




/*====================================
        VOICE RESULT
====================================*/

if (recognition) {


recognition.onresult =

function(event){


const text =

event.results[0][0].transcript;


messageInput.value =

text;


sendMessage();


};



}



/*====================================
        LISTENING STARTED
====================================*/

if(recognition){

recognition.onstart =

function(){

voiceButton.innerHTML=

"🔴";

};

}




/*====================================
        LISTENING STOPPED
====================================*/

if(recognition){

recognition.onend=

function(){

voiceButton.innerHTML=

"🎤";

};

}




/*====================================
            ERROR HANDLING
====================================*/

if(recognition){

recognition.onerror=

function(error){

console.error(

"Voice Error :",

error

);


voiceButton.innerHTML=

"🎤";


};

}




/*====================================
            TEXT TO SPEECH
====================================*/

function speakMessage(message){


if(!CONFIG.ALLOW_VOICE){

return;

}


if(!window.speechSynthesis){

return;

}


const speech =

new SpeechSynthesisUtterance();


speech.text =

message;


speech.lang =

CONFIG.SPEECH_LANGUAGE;


speech.rate =

1;


speech.pitch =

1;


speech.volume =

1;



window.speechSynthesis

.speak(speech);


}




/*====================================
        STOP SPEAKING
====================================*/

function stopSpeaking(){


window.speechSynthesis

.cancel();


}




/*====================================
        PAUSE SPEAKING
====================================*/

function pauseSpeaking(){


window.speechSynthesis

.pause();


}




/*====================================
        RESUME SPEAKING
====================================*/

function resumeSpeaking(){


window.speechSynthesis

.resume();


}




/*====================================
        VOICE BUTTON EVENT
====================================*/

voiceButton.addEventListener(

"click",

function(){


if(!recognition){

return;

}


startListening();


}


);




/*====================================
        AUTO CLEANUP
====================================*/

window.addEventListener(

"beforeunload",

function(){


stopListening();

stopSpeaking();


}

);




/*====================================
        CHECK SPEAKING STATUS
====================================*/

function isSpeaking(){


return window

.speechSynthesis

.speaking;


}




/*====================================
        CHECK LISTENING STATUS
====================================*/

function isListening(){


if(!recognition){

return false;

}


return true;


}