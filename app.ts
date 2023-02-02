
const urlRandom = 'https://zenquotes.io/api/random/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const urlDaily = 'https://zenquotes.io/api/today/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const randomButton = document.querySelector('.randomize') as HTMLButtonElement;
const saveButton = document.querySelector('.saveButton') as HTMLButtonElement;
const dailyDiv = document.querySelector('.dailyTip') as HTMLElement;
const randomDiv = document.querySelector('.randomTip') as HTMLElement;
const buttonDiv = document.querySelector('.buttons') as HTMLElement;
const savedQuotes = document.querySelector('.savedQuotes') as HTMLElement;
const likedQHolder = document.querySelector('#likedDiv') as HTMLDivElement;


//--------------load daily tip with onload event--------------

async function getDailyTip() {
    const response = await fetch(urlDaily);
    const dataDaily = await response.json();
    return dataDaily;
};

function displayDailyTip() {
    getDailyTip().then((data) => {
        dailyDiv.innerHTML = `${data[0].q} - ${data[0].a}`;
    });
};

window.addEventListener("load", () => {
    displayDailyTip();
    saveButton.style.display = "none";
});


//--------------load random tip--------------

async function getRandomTip() {
    const response = await fetch(urlRandom);
    const dataRandom = await response.json();
    return dataRandom;
};

function displayRandomTip() {
    getRandomTip().then((data) => {
        randomDiv.innerHTML = "";
        randomDiv.innerHTML =  `${data[0].q} - ${data[0].a}`;
        saveButton.style.display = "inline"; 
        saveButton.addEventListener('click', function() {
            const likedQuote = document.createElement("p");
            likedQuote.innerHTML = `${data.q} - ${data.a}`;
            console.log(likedQuote);
            likedQHolder.append(likedQuote);
        });
    });
};


randomButton.addEventListener('click', function() {
    displayRandomTip();
});















                
/* let arr = [];
let quoteObj = {
    quotes: [
        {
            quote: data[0].q, 
            author: data[0].a, 
        },
        
    ]
}
saveButton.style.display = "none";
const arrLength = quoteObj.quotes.length;
for(let i = 0; i < arrLength; i++) {
    arr.push(quoteObj.quotes[0]);
    console.log(arr);
} */
