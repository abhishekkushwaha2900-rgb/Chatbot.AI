/*====================================
            GEMINI API URL
====================================*/

const API_URL =

`https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.MODEL}:generateContent?key=${CONFIG.API_KEY}`;
/*====================================
        CHAT HISTORY MANAGER
====================================*/

function prepareChatHistory() {

    if (!window.chatHistory) {

        window.chatHistory = [];

    }


    if (

        window.chatHistory.length >

        CONFIG.MAX_HISTORY

    ) {

        window.chatHistory =

        window.chatHistory.slice(

            -CONFIG.MAX_HISTORY

        );

    }


    return window.chatHistory;

}



/*====================================
            AI HISTORY
====================================*/

function addAIHistory(message) {

    prepareChatHistory();


    window.chatHistory.push({

        role: "model",

        parts: [

            {

                text: message

            }

        ]

    });

}
/*====================================
            API FUNCTION
====================================*/

async function getAIResponse(message) {

    try {

        /*==============================
            API KEY CHECK
        ==============================*/

        if (!CONFIG.API_KEY) {

            return `

API KEY उपलब्ध नहीं है।

कृपया config.js File में
अपनी Gemini API KEY जोड़ें।

`;

        }


        /*==============================
                USER PARTS
        ==============================*/

        let parts = [];


        // USER MESSAGE

        parts.push({

            text: message

        });
        /*==============================
            SAVE USER HISTORY
        ==============================*/

        prepareChatHistory();


        window.chatHistory.push({

            role: "user",

            parts: parts

        });



        /*==============================
            MAX HISTORY LIMIT
        ==============================*/

        if (

            window.chatHistory.length >

            CONFIG.MAX_HISTORY

        ) {

            window.chatHistory =

                window.chatHistory.slice(

                    -CONFIG.MAX_HISTORY

                );

        }



        /*==============================
                SYSTEM PROMPT
        ==============================*/

        const contents = [

            {

                role: "user",

                parts: [

                    {

                        text:

                        SYSTEM_PROMPT

                    }

                ]

            },


            ...prepareChatHistory()

        ];




        /*==============================
                API REQUEST
        ==============================*/

        const response = await fetch(

            API_URL,

            {

                method: "POST",

                headers: {

                    "Content-Type":

                    "application/json"

                },


                body: JSON.stringify({

                    contents: contents,

                    generationConfig: {

                        temperature: 0.7,

                        topP: 0.95,

                        topK: 40,

                        maxOutputTokens: 2048

                    }

                })

            }

        );




        /*==============================
                RESPONSE CHECK
        ==============================*/

        if (!response.ok) {

    const error = await response.json();

    console.log(error);

    alert(JSON.stringify(error, null, 2));

    throw new Error(JSON.stringify(error));

}




        /*==============================
                JSON DATA
        ==============================*/

        const data =

            await response.json();




        /*==============================
            EMPTY RESPONSE CHECK
        ==============================*/

        if (

            !data.candidates ||

            !data.candidates.length

        ) {

            throw new Error(

                "Response उपलब्ध नहीं है।"

            );

        }




        /*==============================
                AI RESPONSE
        ==============================*/

        const result =

            data.candidates[0]

            .content.parts[0]

            .text;




        /*==============================
                SAVE AI HISTORY
        ==============================*/

        addAIHistory(result);
        /*==============================
                RETURN RESULT
        ==============================*/

        return result;


    }


    /*================================
            ERROR HANDLING
    =================================*/

    catch (error) {

    console.error(

        "Gemini Error :",

        error

    );


    alert(

        error.message

    );


    return `

ERROR :

${error.message}

`;

}

}