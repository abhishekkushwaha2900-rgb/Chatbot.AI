/*====================================
            HTML ELEMENTS
====================================*/

const chatBody =
document.getElementById("chatBody");


const messageInput =
document.getElementById("message");


const sendButton =
document.querySelector(".send-btn");


const newChatButton =
document.querySelector(".new-chat-btn");


const deleteButton =
document.querySelector(".delete-chat-btn");


const voiceButton =
document.getElementById("voiceButton");


const imageInput =
document.getElementById("imageInput");


const imagePreview =
document.getElementById("imagePreview");



/*====================================
            CHAT HISTORY
====================================*/

if(!window.chatHistory){

    window.chatHistory=[];

}



/*====================================
            ENTER KEY SUPPORT
====================================*/

messageInput.addEventListener(

    "keypress",

    function(event){

        if(event.key==="Enter"){

            sendMessage();

        }

});


/*====================================
            SEND BUTTON
====================================*/

sendButton.addEventListener(

    "click",

    sendMessage

);



/*====================================
            NEW CHAT BUTTON
====================================*/

newChatButton.addEventListener(

    "click",

    newChat

);



/*====================================
            DELETE CHAT
====================================*/

deleteButton.addEventListener(

    "click",

    deleteChat

);



/*====================================
            USER MESSAGE
====================================*/

function createUserMessage(message){


    return `

    <div class="user-message">

        <div class="message">

            <p>

                ${message}

            </p>

        </div>

    </div>

    `;

}



/*====================================
            AI MESSAGE
====================================*/

function createAIMessage(message){


    return `

    <div class="bot-message">

        <img src="assets/bot.png"

        class="bot-image">


        <div class="message">

            <h3>

            ${CONFIG.BOT_NAME}

            </h3>


            <p>

                ${message}

            </p>


        </div>

    </div>

    `;

}



/*====================================
            SCROLL FUNCTION
====================================*/

function scrollBottom(){

    chatBody.scrollTop=

    chatBody.scrollHeight;

}



/*====================================
            USER MESSAGE
====================================*/

function showUserMessage(message){

    chatBody.innerHTML+=

    createUserMessage(message);


    scrollBottom();

}



/*====================================
            AI MESSAGE
====================================*/

function showAIMessage(message){

    chatBody.innerHTML+=

    createAIMessage(message);


    scrollBottom();

}
/*====================================
            SEND MESSAGE
====================================*/

async function sendMessage() {

    const message =

        messageInput.value.trim();


    /*==============================
            EMPTY CHECK
    ==============================*/

    if (!message) {

        return;

    }


    /*==============================
        MAX LENGTH CHECK
    ==============================*/

    if (

        message.length >

        CONFIG.MAX_MESSAGE_LENGTH

    ) {

        alert(

            "Message बहुत बड़ा है।"

        );

        return;

    }


    /*==============================
            SHOW MESSAGE
    ==============================*/

    showUserMessage(message);


    /*==============================
            CLEAR INPUT
    ==============================*/

    messageInput.value = "";


    /*==============================
            SHOW TYPING
    ==============================*/

    if (CONFIG.SHOW_TYPING) {

        showTyping();

    }


    /*==============================
            API RESPONSE
    ==============================*/

    const response =

        await getAIResponse(message);


    /*==============================
            REMOVE TYPING
    ==============================*/

    removeTyping();


    /*==============================
            AI MESSAGE
    ==============================*/
    showAIMessage(response);


// Voice Output

// if (

//     CONFIG.ALLOW_VOICE &&

//     typeof speakMessage === "function"

// ) {

//     speakMessage(response);

// }


    /*==============================
            SAVE CHAT
    ==============================*/

    if (CONFIG.SAVE_CHAT) {

        saveChat();

    }

}



/*====================================
                NEW CHAT
====================================*/

function newChat() {


    const confirmBox =

        confirm(

            "क्या आप नई Chat शुरू करना चाहते हैं ?"

        );


    if (!confirmBox) {

        return;

    }


    /*==============================
            HISTORY CLEAR
    ==============================*/

    window.chatHistory = [];


    /*==============================
            CLEAR SCREEN
    ==============================*/

    chatBody.innerHTML = "";


    /*==============================
        DEFAULT WELCOME MESSAGE
    ==============================*/

    showAIMessage(

        `👋 नमस्ते किसान भाई !

मैं आपकी खेती से जुड़ी समस्याओं
के समाधान के लिए यहाँ हूँ।

आप मुझसे फसल, खाद, कीटनाशक,
रोग पहचान एवं कृषि तकनीक से
संबंधित प्रश्न पूछ सकते हैं।`

    );


}
/*====================================
            DELETE CHAT
====================================*/

function deleteChat() {


    const confirmBox =

        confirm(

            "क्या आप पूरी Chat Delete करना चाहते हैं ?"

        );


    if (!confirmBox) {

        return;

    }



    /*==============================
            CLEAR MEMORY
    ==============================*/

    if (

        typeof clearMemory ===

        "function"

    ) {

        clearMemory();

    }



    /*==============================
            CLEAR IMAGE
    ==============================*/

    if (

        typeof clearImage ===

        "function"

    ) {

        clearImage();

    }



    /*==============================
        DELETE LOCAL STORAGE
    ==============================*/

    if (

        typeof deleteAllStorage ===

        "function"

    ) {

        deleteAllStorage();

    }



    /*==============================
            CHAT CLEAR
    ==============================*/

    window.chatHistory = [];


    chatBody.innerHTML = "";



    /*==============================
        REMOVE TYPING ANIMATION
    ==============================*/

    if (

        typeof removeTyping ===

        "function"

    ) {

        removeTyping();

    }



    /*==============================
            WELCOME MESSAGE
    ==============================*/

    showAIMessage(

        `

आपकी सभी Chats सफलतापूर्वक Delete कर दी गई हैं।

अब आप नई Chat शुरू कर सकते हैं।

`

    );



    /*==============================
            AUTO SAVE
    ==============================*/

    if (

        typeof saveChat ===

        "function"

    ) {

        saveChat();

    }


}