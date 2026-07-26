/*====================================
            KISAN MITRA AI
                MEMORY
====================================*/


/*====================================
            CHAT HISTORY
====================================*/

if (!window.chatHistory) {

    window.chatHistory = [];

}



/*====================================
        MEMORY INITIALIZATION
====================================*/

function initializeMemory() {

    if (!window.chatHistory) {

        window.chatHistory = [];

    }

}


/*====================================
            ADD USER MESSAGE
====================================*/

function addUserMemory(message) {

    initializeMemory();


    window.chatHistory.push({

        role: "user",

        parts: [

            {

                text: message

            }

        ]

    });


    manageMemory();

}




/*====================================
            ADD AI MESSAGE
====================================*/

function addAIMemory(message) {

    initializeMemory();


    window.chatHistory.push({

        role: "model",

        parts: [

            {

                text: message

            }

        ]

    });


    manageMemory();

}




/*====================================
            MEMORY LIMIT
====================================*/

function manageMemory() {


    if (

        window.chatHistory.length >

        CONFIG.MAX_HISTORY

    ) {

        window.chatHistory =

            window.chatHistory.slice(

                -CONFIG.MAX_HISTORY

            );

    }


}



/*====================================
            GET HISTORY
====================================*/

function getChatMemory() {

    initializeMemory();


    return window.chatHistory;

}




/*====================================
            MEMORY SIZE
====================================*/

function getMemorySize() {

    return window.chatHistory.length;

}




/*====================================
            LAST MESSAGE
====================================*/

function getLastMessage() {


    if (

        window.chatHistory.length === 0

    ) {

        return null;

    }


    return window.chatHistory[

        window.chatHistory.length - 1

    ];


}




/*====================================
            CLEAR MEMORY
====================================*/

function clearMemory() {

    window.chatHistory = [];

}




/*====================================
        REMOVE OLD MESSAGES
====================================*/

function removeOldMessages(number) {


    if (

        window.chatHistory.length >

        number

    ) {

        window.chatHistory =

            window.chatHistory.slice(

                -number

            );

    }


}




/*====================================
        CHECK MEMORY STATUS
====================================*/

function isMemoryAvailable() {


    if (

        window.chatHistory.length > 0

    ) {

        return true;

    }


    return false;

}




/*====================================
            EXPORT MEMORY
====================================*/

function exportMemory() {

    return JSON.stringify(

        window.chatHistory

    );

}




/*====================================
            IMPORT MEMORY
====================================*/

function importMemory(data) {


    try {

        window.chatHistory =

            JSON.parse(data);


    }

    catch (error) {


        console.error(

            "Memory Error :",

            error

        );


        window.chatHistory = [];

    }


}




/*====================================
        TOTAL USER QUESTIONS
====================================*/

function totalQuestions() {


    return window.chatHistory.filter(

        item => item.role === "user"

    ).length;

}




/*====================================
        TOTAL AI RESPONSES
====================================*/

function totalResponses() {


    return window.chatHistory.filter(

        item => item.role === "model"

    ).length;

}




/*====================================
            MEMORY RESET
====================================*/

function resetMemory() {


    clearMemory();


    initializeMemory();


}




/*====================================
            MEMORY INFO
====================================*/

function memoryInfo() {


    return {

        totalMessages:

        getMemorySize(),


        totalQuestions:

        totalQuestions(),


        totalResponses:

        totalResponses()


    };


}




/*====================================
            AUTO INITIALIZE
====================================*/

initializeMemory();