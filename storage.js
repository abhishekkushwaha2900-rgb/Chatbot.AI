/*====================================
            KISAN MITRA AI
               STORAGE
====================================*/


/*====================================
            STORAGE KEYS
====================================*/

const STORAGE_KEYS = {

    CHAT: "KISAN_MITRA_CHAT",

    MEMORY: "KISAN_MITRA_MEMORY",

    SETTINGS: "KISAN_MITRA_SETTINGS"

};



/*====================================
            SAVE CHAT
====================================*/

function saveChat() {

    try {

        localStorage.setItem(

            STORAGE_KEYS.CHAT,

            chatBody.innerHTML

        );


    }

    catch (error) {

        console.error(

            "Save Error :",

            error

        );

    }

}



/*====================================
            LOAD CHAT
====================================*/

function loadChat() {

    try {

        const savedChat =

            localStorage.getItem(

                STORAGE_KEYS.CHAT

            );


        if (savedChat) {

            chatBody.innerHTML =

                savedChat;

        }


    }

    catch (error) {

        console.error(

            "Load Error :",

            error

        );

    }

}




/*====================================
            SAVE MEMORY
====================================*/

function saveMemory() {

    try {

        localStorage.setItem(

            STORAGE_KEYS.MEMORY,

            JSON.stringify(

                window.chatHistory

            )

        );


    }

    catch (error) {

        console.error(

            "Memory Error :",

            error

        );

    }

}




/*====================================
            LOAD MEMORY
====================================*/

function loadMemory() {

    try {

        const memory =

            localStorage.getItem(

                STORAGE_KEYS.MEMORY

            );


        if (memory) {

            window.chatHistory =

                JSON.parse(memory);

        }


    }

    catch (error) {


        console.error(

            "Memory Load Error :",

            error

        );


        window.chatHistory = [];


    }

}
/*====================================
            REMOVE CHAT
====================================*/

function removeChat() {


    localStorage.removeItem(

        STORAGE_KEYS.CHAT

    );


}




/*====================================
            REMOVE MEMORY
====================================*/

function removeMemory() {


    localStorage.removeItem(

        STORAGE_KEYS.MEMORY

    );


}




/*====================================
            DELETE ALL DATA
====================================*/

function deleteAllStorage() {


    removeChat();

    removeMemory();

}




/*====================================
            STORAGE STATUS
====================================*/

function isStorageAvailable() {

    try {

        localStorage.setItem(

            "TEST",

            "OK"

        );


        localStorage.removeItem(

            "TEST"

        );


        return true;

    }

    catch (error) {


        return false;

    }

}




/*====================================
            CHAT EXISTS
====================================*/

function hasSavedChat() {


    return localStorage.getItem(

        STORAGE_KEYS.CHAT

    ) !== null;


}




/*====================================
            MEMORY EXISTS
====================================*/

function hasSavedMemory() {


    return localStorage.getItem(

        STORAGE_KEYS.MEMORY

    ) !== null;


}




/*====================================
            AUTO LOAD
====================================*/

window.addEventListener(

    "load",

    function () {


        if (CONFIG.LOCAL_STORAGE) {

            loadChat();

            loadMemory();

        }


    }

);




/*====================================
            AUTO SAVE
====================================*/

window.addEventListener(

    "beforeunload",

    function () {


        if (CONFIG.LOCAL_STORAGE) {

            saveChat();

            saveMemory();

        }


    }

);