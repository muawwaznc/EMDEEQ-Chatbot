let newCreated = 0;
let selecedChatId;
const serverUrl = '//https://coral-app-nflgp.ondigitalocean.app/api/chats';
const newConversationUrl = '//https://b286-64-23-174-216.ngrok-free.app/api/conversation';
const zipCode = "";
let Question1 = "Could you guide me with relevant questions, one at a time, to prepare for my medical consultation? Additionally, please provide tips on effective communication with my healthcare provider."
let Question2 = "Can we conduct a thorough review of my needs by addressing my symptoms one by one? Let's start with the main symptoms I'm experiencing, including their onset and frequency."
let Question3 = "Can you help me critically evaluate my provider's plan of care? Please ask any relevant questions you need, one at a time."
let Question4 = "Can you provide imaging insights and analysis to ensure nothing is overlooked in my care? I need to upload my images for review"
let Question5 = "Can you provide insights to help me navigate medical bureaucracy and billing strategically, including guidance on contesting charges? Please ask me questions one by one to guide the process."
let Question6 = "Could you help me discuss my medical issues while ensuring privacy, support, and dignity? Please ask if there are specific concerns or topics I should address, and guide me with questions one by one"

let questionHasToSend = 0;

const mediaQuery = window.matchMedia('(max-width: 424px)');
mediaQuery.addEventListener('change', applyResponsiveStylesForBuiltInQuestions);

let builtInMessageHtml = ``;

let isDefaultMessageSend = false;

let chatCreatedBy = localStorage.getItem('userId');
if (!chatCreatedBy) {
    chatCreatedBy = Math.floor(Math.random() * 99999999).toString();
    localStorage.setItem('userId', chatCreatedBy);
}

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('userInput');
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            OnSendButtonClick();
        }
    });

    // Load the saved language from local storage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    // Initialize the button label and content
    updateButtonLabel(savedLanguage);
    updateContent(savedLanguage);

    // Add event listener to the button to handle language toggle
    document.getElementById('language-toggle').addEventListener('click', () => {
        const currentLanguage = localStorage.getItem('language') || 'en';
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        localStorage.setItem('language', newLanguage);
        updateButtonLabel(newLanguage);
        updateContent(newLanguage);
    });
});

document.onkeydown = function (e) {
    // if (event.keyCode == 123) {
    //     return false;
    // }
    // if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    //     return false;
    // }
    // if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    //     return false;
    // }
    // if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    //     return false;
    // }
    // if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    //     return false;
    // }
    // // prevent from click on right click on mouse 
    // console.log(e);
    // if (e.button == 2) {
    //     return false;
    // }
}

// Disable right-click
document.addEventListener('contextmenu', function (event) {
    //event.preventDefault();
});

// if devtools is open then redirect to google
// (function () {
//     let devtoolsOpen = false;

//     const detectDevTools = () => {
//         if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
//             if (!devtoolsOpen) {
//                 devtoolsOpen = true;
//                 setTimeout(() => {
//                     window.location.href = "https://www.google.co.uk/"; // Redirect to a blank page or close the tab
//                 }, 2000); // Close the tab after 3 seconds
//                 alert("Please close the developer tools then return back to the website.");
//             }
//         } else {
//             devtoolsOpen = false;
//         }
//     };

//     window.addEventListener('resize', detectDevTools);
//     window.addEventListener('mousemove', detectDevTools);
// })();

async function LoadChats() {
    try {
        const chatList = document.getElementById('chatList');
        const response = await axios.get(serverUrl + '/get-chats-of-user/' + localStorage.getItem('userId'));

        const chats = response.data;


        chatList.innerHTML = '';

        chats.forEach(chat => {

            let timeAgo;
            const chatCreatedTime = new Date(chat.chatCreatedTime);
            const now = new Date();
            const diffInMs = now - chatCreatedTime;
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            timeAgo = diffInDays;
            if (diffInDays == 0) {
                timeAgo = "Today"
            }
            const li = document.createElement('li');
            li.classList.add('clearfix');
            li.id = `${chat._id}`;
            if (timeAgo == "Today") {
                li.innerHTML = `
                    <div class="about">
                        <div class="name">${chat.chatName}</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> ${timeAgo}</div>
                    </div>
                `;
            }
            else if (timeAgo == "1") {
                li.innerHTML = `
                    <div class="about">
                        <div class="name">${chat.chatName}</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> Yesterday</div>
                    </div>
                `;
            }
            else {
                li.innerHTML = `
                    <div class="about">
                        <div class="name">${chat.chatName}</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> ${timeAgo} Days Ago.. </div>
                    </div>
                `;
            }
            li.addEventListener('click', () => {
                SelectChat(chat._id);
            });

            chatList.appendChild(li);
        });

        document.getElementById('spinner').style.display = 'none';
        chatList.style.display = 'block';
    }
    catch (error) {
        document.getElementById('spinner').style.display = 'none';
        console.error('Error loading chats:', error);
    }
}

async function SelectChat(chatId) {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) hideSidebar();
    console.log(screenWidth)
    newCreated = 0;
    RemoveActiveClassesFromChats();
    selecedChatId = chatId;
    await LoadChatsMessages();
    document.getElementById(chatId).classList.add('active');
}

function CreateChat() {
    selecedChatId = "";
    const screenWidth = window.screen.width;
    if (screenWidth < 768) hideSidebar();

    if (newCreated == 0) {
        const messageList = document.getElementById('messageList');
        messageList.innerHTML = builtInMessageHtml;
        const savedLanguage = localStorage.getItem('language') || 'en';
        updateButtonLabel(savedLanguage);
        updateContent(savedLanguage);
        RemoveActiveClassesFromChats();
        newCreated = 1;
    }
}

async function LoadChatsMessages() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = ``;
    try {
        const response = await axios.get(serverUrl + '/get-messages/' + selecedChatId);
        const messages = response.data;
        messages.forEach(message => {
            const li1 = document.createElement('li');
            const formattedDate = new Date(message.messageTime).toLocaleString() || '';
            li1.classList.add('clearfix');
            console.log(formattedDate);
            li1.innerHTML = `
                <div class="message-data">
                    <span class="message-data-time">${formattedDate}</span>
                </div>
                    <div class="message my-message">${message.message}</div>
            `;
            const li2 = document.createElement('li');
            li2.classList.add('clearfix');
            const botMessage = this.formatResponse(message.response)
            li2.innerHTML = `
                <div class="d-flex justify-content-right">
                <div class="message other-message float-right">${botMessage}</div>
                <img src="./images/angel-logo.png" alt="avatar" class="img-bot">
                </div>
                <hr>
            `;

            messageList.appendChild(li1);
            messageList.appendChild(li2);
        });
    }
    catch (error) {
        messageList.innerHTML = `<p>Somthing went wrong. Please try again...</p>`
    }
}

function RemoveActiveClassesFromChats() {
    const chatList = document.getElementById('chatList');
    const listItems = chatList.getElementsByTagName('li');
    Array.from(listItems).forEach(li => {
        li.classList.remove('active');
    });
}

async function OnSendButtonClick() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';
    if (userInput == null || userInput == "" || !userInput) {
        return;
    }
    if (selecedChatId === null || selecedChatId === "") {
        const messageList = document.getElementById('messageList');
        messageList.innerHTML = ``;
    }
    if (isDefaultMessageSend == false) {
        appendMessage("User", userInput);
    }

    try {
        //const response = await axios.post(serverUrl + '/get-response', { message: userInput });
        let id = localStorage.getItem('id');
        if (!localStorage.getItem('id'))
            id = Math.floor(Math.random() * 99999999).toString();
        localStorage.setItem('id', id);
        const response = await axios.post(newConversationUrl, { message: userInput, id: id });
        const data = response.data;
        appendMessage("AI", data.message);
        await AddMessageToDataBase(userInput, data.message);
    }
    catch (error) {
        appendMessage("AI", "Something Went wrong");
        await AddMessageToDataBase(userInput, "Something Went wrong");
    }
}

function appendMessage(sender, message) {
    const now = new Date();
    const formattedDateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

    const messageList = document.getElementById('messageList');
    const li = document.createElement('li');
    li.classList.add('clearfix');
    if (sender == "User") {
        li.innerHTML = `
            <div class="message-data">
                <span class="message-data-time">${formattedDateTime}</span>
            </div>
            <div class="message my-message">${message}</div>
        `;
    }
    else {
        const botMessage = this.formatResponse(message)
        li.innerHTML = `
            <div class="d-flex justify-content-right">
              <div class="message other-message float-right">${botMessage}</div>
              <img src="./images/angel-logo.png" alt="avatar" class="img-bot">
            </div>
            <hr>
        `;
    }
    messageList.appendChild(li);
    var chatHistory = document.querySelector('.chat-history');
    scrollToBottom(chatHistory);
    scrollToBottom(messageList);
}

async function AddMessageToDataBase(message, response) {
    if (!message || message == "") {
        // alert('Please enter a message.');
        return;
    }

    if (selecedChatId === null || selecedChatId === "") {
        const messageList = document.getElementById('messageList');
        await AddChatToDatabase(message);
    }

    const messageData = {
        message: message,
        response: response,
        chatId: selecedChatId
    };

    try {
        const response = await axios.post(serverUrl + '/add-message', messageData);
        if (response.status === 201) {
            const messageList = document.getElementById('messageList').querySelector('ul');
            const li = document.createElement('li');
            li.classList.add('clearfix');
            li.innerHTML = `
                <div class="message-data text-right">
                    <span class="message-data-time">${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="message my-message float-right">${message}</div>
            `;
            messageList.appendChild(li);
        }
    }
    catch (error) {
        console.error('Error sending message: ', error);
    }
}

async function AddChatToDatabase(message) {
    const chatName = message.slice(0, 30);
    const chatData = {
        chatName: chatName,
        chatCreatedBy: chatCreatedBy
    }
    try {
        const response = await axios.post(serverUrl + '/add-chat', chatData);
        if (response.status === 201) {
            await LoadChats();
            newCreated = 0;
            const chatId = response.data.chatId;
            localStorage.setItem('chatId', chatId);
            selecedChatId = chatId;
        }
    }
    catch (error) {
        console.error('Error creating chat:', error);
    }
}

function SetBuiltInQuestion(questionNumber) {
    questionHasToSend = questionNumber;
    SendBuiltInQuestion();
}

function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}

function applyResponsiveStylesForBuiltInQuestions() {
    if (mediaQuery.matches) {
        builtInMessageHtml = `
            <div class="row col-12 image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(1)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/diagnosis.png" alt="Diagnostic Analysis" srcset="">
                        </div>
                        <div id="DiagnosticAnalysisText" class="card-footer m-0 p-0 text-muted">
                            Diagnostic Analysis
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(2)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/symptoms.png" alt="Symptom Review" srcset="">
                        </div>
                        <div id="SymptomReviewText" class="card-footer m-0 p-0 text-muted">
                            Symptom Review
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-12 image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(3)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/care.png" alt="Care Insights" srcset="">
                        </div>
                        <div id="CareInsightsText" class="card-footer m-0 p-0  text-muted">
                            Care Insights
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="handleImageUpload()">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/upload.png" alt="Imaging Upload" srcset="">
                        </div>
                        <div id="ImagingUploadText" class="card-footer m-0 p-0 text-muted">
                            Imaging Upload
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-12 image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(5)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/billing.png" alt="Billing Guidance" srcset="">
                        </div>
                        <div id="BillingGuidanceText" class="card-footer m-0 p-0 text-muted">
                            Billing Guidance
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(6)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/chat.png" alt="Open Chat" srcset="">
                        </div>
                        <div id="OpenChatText" class="card-footer m-0 p-0  text-muted">
                            Open Chat
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else {
        builtInMessageHtml = `
           <div class="row image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(1)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/diagnosis.png" alt="Diagnostic Analysis" srcset="">
                        </div>
                        <div id="DiagnosticAnalysisText" class="card-footer text-muted">
                            Diagnostic Analysis
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(2)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/symptoms.png" alt="Symptom Review" srcset="">
                        </div>
                        <div id="SymptomReviewText" class="card-footer text-muted">
                            Symptom Review
                        </div>
                    </div>
                </div>  
            </div>
            <div class="row image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(3)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/care.png" alt="Care Insights" srcset="">
                        </div>
                        <div id="CareInsightsText" class="card-footer text-muted">
                            Care Insights
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="handleImageUpload()">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/upload.png" alt="Imaging Upload" srcset="">
                        </div>
                        <div id="ImagingUploadText" class="card-footer text-muted">
                            Imaging Upload
                        </div>
                    </div>
                </div>
            </div>
            <div class="row image-container">
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(5)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/billing.png" alt="Billing Guidance" srcset="">
                        </div>
                        <div id="BillingGuidanceText" class="card-footer text-muted">
                            Billing Guidance
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="btn card-btn text-center card border-secondary mb-3" onclick="SetBuiltInQuestion(6)">
                        <div class="image-container">
                            <img class="card-img" src="./img/clickIcons/chat.png" alt="Open Chat" srcset="">
                        </div>
                        <div id="OpenChatText" class="card-footer text-muted">
                            Open Chat
                        </div>
                    </div>
                </div>
            </div>

        `;
    }
    if (newCreated == 1) {
        const messageList = document.getElementById('messageList');
        messageList.innerHTML = builtInMessageHtml;
        const savedLanguage = localStorage.getItem('language') || 'en';
        updateButtonLabel(savedLanguage);
        updateContent(savedLanguage);

    }
}

// Define translations for each language
const translations = {
    en: {
        headerTitle: "Social Services with privacy, dignity and care",
        userInputPlaceholder: "Find the help you need here...",
        angelText: "EMDEEQ",
        newChatText: "New Chat",
        DiagnosticAnalysisText: "Diagnostic Analysis",
        SymptomReviewText: "Symptom Review",
        CareInsightsText: "Care Insights",
        ImagingUploadText: "Imaging Upload",
        BillingGuidanceText: "Billing Guidance",
        OpenChatText: "Open Chat",
        Question1: "Could you guide me with relevant questions, one at a time, to prepare for my medical consultation? Additionally, please provide tips on effective communication with my healthcare provider.",
        Question2: "Can we conduct a thorough review of my needs by addressing my symptoms one by one? Let's start with the main symptoms I'm experiencing, including their onset and frequency.",
        Question3: "Can you help me critically evaluate my provider's plan of care? Please ask any relevant questions you need, one at a time.",
        Question4: "Can you provide imaging insights and analysis to ensure nothing is overlooked in my care? I need to upload my images for review",
        Question5: "Could you help me discuss my medical issues while ensuring privacy, support, and dignity? Please ask if there are specific concerns or topics I should address, and guide me with",
        Question6: "Could you help me discuss my medical issues while ensuring privacy, support, and dignity? Please ask if there are specific concerns or topics I should address, and guide me with questions one by one"
    },
    es: {
        headerTitle: "Servicios sociales con privacidad, dignidad y cuidado",
        userInputPlaceholder: "Encuentra la ayuda que necesitas aquí...",
        angelText: "EMDEEQ",
        newChatText: "Nuevo Chat",
        DiagnosticAnalysisText: "",
        SymptomReviewText: "",
        CareInsightsText: "",
        ImagingUploadText: "",
        BillingGuidanceText: "",
        OpenChatText: "",
        Question1: "",
        Question2: "",
        Question3: "",
        Question4: "",
        Question5: "",
        Question6: ""
    }
};

// Function to update the content based on the selected language
function updateContent(language) {
    Question1 = translations[language].Question1;
    Question2 = translations[language].Question2;
    Question3 = translations[language].Question3;
    Question4 = translations[language].Question4;
    Question5 = translations[language].Question5;
    Question6 = translations[language].Question6;
    document.getElementById('userInput').placeholder = translations[language].userInputPlaceholder;
    // document.getElementById('angelText').textContent = translations[language].angelText;
    document.getElementById('newChatText').textContent = translations[language].newChatText;
    document.getElementById('headerTitle').textContent = translations[language].headerTitle;
    if (document.getElementById('DiagnosticAnalysisText')) {

        document.getElementById('DiagnosticAnalysisText').textContent = translations[language].DiagnosticAnalysisText;
        document.getElementById('SymptomReviewText').textContent = translations[language].SymptomReviewText;
        document.getElementById('CareInsightsText').textContent = translations[language].CareInsightsText;
        document.getElementById('ImagingUploadText').textContent = translations[language].ImagingUploadText;
        document.getElementById('BillingGuidanceText').textContent = translations[language].BillingGuidanceText;
        document.getElementById('OpenChatText').textContent = translations[language].OpenChatText;
    }
}

// Function to update the button label based on the current language
function updateButtonLabel(language) {
    const languageButton = document.getElementById('language-toggle');
    if (language === 'en') {
        languageButton.textContent = 'Español';
    } else {
        languageButton.textContent = 'English';
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

window.onload = function () {
    if (!localStorage.getItem('cookiesDeleted')) {
        deleteAllCookies();
        localStorage.setItem('cookiesDeleted', 'true');
        window.location.reload(true);
    }
}

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const coords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(coords);
            }, error => {
                if (error.code === error.PERMISSION_DENIED) {
                    alert("User denied the request for Geolocation.");
                }
                reject(error);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
}

async function getUserLocation() {
    const currentLocationRadio = document.getElementById('currentLocation');
    const postalCodeInput = document.getElementById('postalCode').value;
    if (currentLocationRadio.checked) {
        try {
            const currentLocation = await getCurrentLocation();
            console.log(currentLocation);
            return currentLocation;
        }
        catch (error) {
            console.error("Error getting current location:", error);
            throw new Error("Failed to get current location.");
        }
    }
    else if (postalCodeInput) {
        try {
            const response = await axios.get(serverUrl + '/get-location-from-postal-code/' + postalCodeInput);
            const data = response.data;
            console.log(data);
            return data;
        }
        catch (error) {
            console.error("Error getting location from postal code:", error);
            throw new Error("Failed to get location from postal code.");
        }
    }
    else {
        throw new Error("No location input provided.");
    }
}

async function getPlaces(service, location) {
    try {
        const response = await axios.get(serverUrl + '/get-nearby-places', {
            params: {
                latitude: location.latitude,
                longitude: location.longitude,
                service: service
            }
        });
        const places = response.data;
        return places;
    }
    catch (error) {
        console.error("Error getting nearby places:", error);
        throw new Error("Failed to get nearby places.");
    }
}

async function SendBuiltInQuestion() {
    // const postalCodeInput = document.getElementById('postalCode').value;
    // const currentLocationRadio = document.getElementById('currentLocation');
    // if ((!postalCodeInput || postalCodeInput == "" || postalCodeInput == null) && !currentLocationRadio.checked) {
    //     return;
    // }
    if (questionHasToSend == 1) {
        document.getElementById('userInput').value = Question1;
    }
    else if (questionHasToSend == 2) {
        document.getElementById('userInput').value = Question2;
    }
    else if (questionHasToSend == 3) {
        document.getElementById('userInput').value = Question3;
    }
    else if (questionHasToSend == 4) {
        document.getElementById('userInput').value = Question4;
    }
    else if (questionHasToSend == 5) {
        document.getElementById('userInput').value = Question5;
    }
    else if (questionHasToSend == 6) {
        document.getElementById('userInput').value = Question6;
    }

    isDefaultMessageSend = true;

    const serviceMap =
    {
        1: 'food/nutrition support',
        2: 'housing support',
        3: 'transportation support',
        4: 'caregiver support',
        5: 'mental health services',
        6: 'health plan details and products'
    };

    // const service = serviceMap[questionHasToSend];

    try {
        const userInput = document.getElementById('userInput').value;
        isDefaultMessageSend = false;
        let id = localStorage.getItem('id');
        if (!localStorage.getItem('id'))
            id = Math.floor(Math.random() * 99999999).toString();
        else localStorage.setItem('id', id);
        // appendMessage("User", userInput);
        document.getElementById('userInput').value = "";
        const response = await axios.post(newConversationUrl, { message: userInput, id: id });
        const data = response.data;
        appendMessage("AI", data.message);
        await AddMessageToDataBase(userInput, data.message);
    }
    catch (error) {
        appendMessage("AI", "Unable to retrieve the information at the moment. Please try again later.");
        await AddMessageToDataBase(document.getElementById('userInput').value, "Unable to retrieve the information at the moment.");
    }
    document.getElementById('userInput').value = "";
    // var myModalEl = document.getElementById('exampleModal');
    // var modal = bootstrap.Modal.getInstance(myModalEl);
    // modal.hide();
}

document.addEventListener('DOMContentLoaded', async function () {
    const currentLocationRadio = document.getElementById('currentLocation');
    const enterPostalCodeRadio = document.getElementById('enterPostalCode');
    const postalCodeContainer = document.getElementById('postalCodeContainer');

    function togglePostalCodeInput() {
        if (enterPostalCodeRadio.checked) {
            postalCodeContainer.style.display = 'block';
        } else {
            postalCodeContainer.style.display = 'none';
        }
    }

    currentLocationRadio.addEventListener('change', togglePostalCodeInput);
    enterPostalCodeRadio.addEventListener('change', togglePostalCodeInput);

    togglePostalCodeInput();
    applyResponsiveStylesForBuiltInQuestions();
    CreateChat();
    await LoadChats();
});


function showSidebar() {
    document.getElementById('plist').style.display = 'block';
    document.getElementById('closePeopleList').style.display = 'block';
    document.getElementById('plist').style.left = '0';
    document.getElementById('chat-container').style.display = 'none';
}

function hideSidebar() {
    document.getElementById('plist').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'none';
}

function convertLinksToHyperlinks(text) {
    const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
    const formattedText = text
        .replace(markdownLinkPattern, '<a href="$2" target="_blank">$1</a>')
        .replace(/(\*\*)(.*?)\1/g, '<b>$2</b>')  // Bold formatting
        .replace(/\n/g, '<br>');  // Line breaks

    return formattedText;
}

function formatResponse(response) {
    let formattedResponse = response;

    // Convert headings to <h5> and include the colon
    formattedResponse = formattedResponse.replace(/(\d+)\.\s\*\*(.*?)\*\*:/g, '<h5>$2:</h5>');

    // Convert sub-sections and details
    formattedResponse = formattedResponse.replace(/-\s\*\*(.*?)\*\*:\s(.*?)(\n|$)/g, '<p><b>$1:</b> $2</p>');

    // Convert links
    formattedResponse = convertLinksToHyperlinks(formattedResponse);
    // Replace multiple consecutive <br> with a single <br>
    formattedResponse = formattedResponse.replace(/<br\s*\/?>\s*<br\s*\/?>/g, '<br>');

    return formattedResponse;
}

async function handleImageUpload() {
    // Create an input element for file selection
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = false;

    // Trigger file selection dialog
    input.click();

    input.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Read the image file
        const reader = new FileReader();
        reader.onload = async (e) => {
            const image = e.target.result;

            const { createWorker } = Tesseract;
            const worker = createWorker();

            try {
                await worker.load();
                await worker.loadLanguage('eng');
                await worker.initialize('eng');
                const { data: { text } } = await worker.recognize(image);

                console.log('Extracted Text:', text);

                // Use ChatGPT to correct the extracted text
                const correctedText = await correctTextUsingChatGPT(text);

                console.log('Corrected Text:', correctedText);

                //SetBuiltInQuestion(correctedText);
            } 
            catch (error) {
                console.error('Error processing image:', error);
            } 
            finally {
                await worker.terminate();
            }
        };

        reader.readAsDataURL(file);
    };
}

async function correctTextUsingChatGPT(inputText) {
    // Mocked ChatGPT integration
    // Replace this with your actual ChatGPT API or integration
    const correctedText = `Corrected: ${inputText.trim()}`;
    return correctedText;
}