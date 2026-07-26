/*====================================
            KISAN MITRA AI
                CONFIG
====================================*/


const CONFIG = {


    /*==============================
            GEMINI API SETTINGS
    ==============================*/

    API_KEY : "YOUR_API_KEY",

    MODEL : "gemini-3.1-flash-lite",



    /*==============================
                BOT DETAILS
    ==============================*/

    BOT_NAME : "Kisan Mitra AI",

    BOT_VERSION : "1.0.0",

    LANGUAGE : "Hindi",



    /*==============================
            CHAT SETTINGS
    ==============================*/

    MAX_HISTORY : 30,

    MAX_MESSAGE_LENGTH : 3000,

    RESPONSE_DELAY : 500,



    /*==============================
            IMAGE SETTINGS
    ==============================*/

    ALLOW_IMAGE : true,

    MAX_IMAGE_SIZE : 5,



    /*==============================
            VOICE SETTINGS
    ==============================*/

    ALLOW_VOICE : true,

    SPEECH_LANGUAGE : "hi-IN",



    /*==============================
            MEMORY SETTINGS
    ==============================*/

    SAVE_CHAT : true,

    LOCAL_STORAGE : true,



    /*==============================
            UI SETTINGS
    ==============================*/

    SHOW_TYPING : true,

    SHOW_SUGGESTIONS : true,



    /*==============================
            SECURITY SETTINGS
    ==============================*/

    ALLOW_HTML : false,

    SAFE_MODE : true,


};



/*====================================
            DO NOT CHANGE
====================================*/


Object.freeze(CONFIG);