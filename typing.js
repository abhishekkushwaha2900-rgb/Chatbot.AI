/*====================================
            KISAN MITRA AI
                TYPING
====================================*/


/*====================================
            TYPING ID
====================================*/

const TYPING_ID =

"KISAN_MITRA_TYPING";



/*====================================
            SHOW TYPING
====================================*/

function showTyping() {


    // Prevent Duplicate Typing

    if (

        document.getElementById(

            TYPING_ID

        )

    ) {

        return;

    }


    // Create Typing Box

    const typingBox =

        document.createElement(

            "div"

        );


    typingBox.id =

        TYPING_ID;


    typingBox.className =

        "bot-message";


    typingBox.innerHTML = `

    <img
    src="assets/bot.png"
    class="bot-image">


    <div class="typing">

        <span></span>

        <span></span>

        <span></span>

    </div>

    `;



    // Add to Chat

    chatBody.appendChild(

        typingBox

    );


    // Auto Scroll

    scrollBottom();

}




/*====================================
            REMOVE TYPING
====================================*/

function removeTyping() {


    const typing =

        document.getElementById(

            TYPING_ID

        );


    if (typing) {

        typing.remove();

    }


}




/*====================================
        CHECK TYPING STATUS
====================================*/

function isTyping() {


    return document.getElementById(

        TYPING_ID

    ) !== null;

}




/*====================================
            FORCE REMOVE
====================================*/

function clearTyping() {


    removeTyping();

}




/*====================================
        SAFE REMOVE SYSTEM
====================================*/

function stopTyping() {


    if (

        isTyping()

    ) {

        removeTyping();

    }


}




/*====================================
        SHOW LOADING MESSAGE
====================================*/

function showLoadingMessage() {


    if (

        !CONFIG.SHOW_TYPING

    ) {

        return;

    }


    showTyping();

}




/*====================================
        HIDE LOADING MESSAGE
====================================*/

function hideLoadingMessage() {


    removeTyping();

}




/*====================================
        AUTO CLEANUP
====================================*/

window.addEventListener(

    "beforeunload",

    function () {

        clearTyping();

    }

);




/*====================================
        ERROR CLEANUP
====================================*/

window.addEventListener(

    "error",

    function () {

        stopTyping();

    }

);




/*====================================
        API FAILURE CLEANUP
====================================*/

window.addEventListener(

    "offline",

    function () {

        stopTyping();

    }

);