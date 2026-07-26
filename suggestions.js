/*====================================
            KISAN MITRA AI
            SUGGESTIONS
====================================*/


/*====================================
            DEFAULT BUTTONS
====================================*/

const SUGGESTIONS = [

    "🌾 गेहूं की खाद",

    "🐛 कीट नियंत्रण",

    "💧 सिंचाई सलाह",

    "🍀 फसल रोग",

    "🌱 बीज चयन",

    "🌾 धान की खेती",

    "🌿 जैविक खेती",

    "🚜 कृषि तकनीक"

];



/*====================================
        GET ALL BUTTONS
====================================*/

function getSuggestionButtons() {

    return document.querySelectorAll(

        ".suggestion"

    );

}



/*====================================
        UPDATE BUTTON TEXT
====================================*/

function loadSuggestions() {


    const buttons =

        getSuggestionButtons();


    buttons.forEach(

        (button, index) => {


            if (

                SUGGESTIONS[index]

            ) {

                button.textContent =

                    SUGGESTIONS[index];

            }

        }

    );

}




/*====================================
            SEND MESSAGE
====================================*/

function sendSuggestion(message) {


    messageInput.value =

        message;


    sendMessage();

}




/*====================================
        BUTTON CLICK EVENTS
====================================*/

function addSuggestionEvents() {


    const buttons =

        getSuggestionButtons();


    buttons.forEach(

        button => {


            button.addEventListener(

                "click",

                function () {


                    const text =

                        this.textContent;


                    sendSuggestion(

                        text

                    );


                }

            );


        }

    );


}




/*====================================
            SHOW BUTTONS
====================================*/

function showSuggestions() {


    const box =

        document.querySelector(

            ".suggestion-box"

        );


    if (box) {

        box.style.display =

            "flex";

    }


}




/*====================================
            HIDE BUTTONS
====================================*/

function hideSuggestions() {


    const box =

        document.querySelector(

            ".suggestion-box"

        );


    if (box) {

        box.style.display =

            "none";

    }


}




/*====================================
        TOGGLE SUGGESTIONS
====================================*/

function toggleSuggestions() {


    const box =

        document.querySelector(

            ".suggestion-box"

        );


    if (

        box.style.display ===

        "none"

    ) {

        showSuggestions();

    }

    else {

        hideSuggestions();

    }


}




/*====================================
        CHECK AVAILABILITY
====================================*/

function hasSuggestions() {


    return SUGGESTIONS.length > 0;

}




/*====================================
        ADD NEW SUGGESTION
====================================*/

function addSuggestion(text) {


    SUGGESTIONS.push(

        text

    );

}




/*====================================
        REMOVE SUGGESTION
====================================*/

function removeSuggestion(text) {


    const index =

        SUGGESTIONS.indexOf(

            text

        );


    if (

        index > -1

    ) {

        SUGGESTIONS.splice(

            index,

            1

        );

    }


}




/*====================================
            TOTAL BUTTONS
====================================*/

function totalSuggestions() {


    return SUGGESTIONS.length;

}




/*====================================
        AUTO INITIALIZATION
====================================*/

window.addEventListener(

    "load",

    function () {


        if (

            CONFIG.SHOW_SUGGESTIONS

        ) {

            loadSuggestions();

            addSuggestionEvents();

        }


    }

);