
const urlRandom = 'https://zenquotes.io/api/random/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const urlDaily = 'https://zenquotes.io/api/today/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const randomButton = document.querySelector('.randomize') as HTMLButtonElement;
const saveButton = document.querySelector('.saveButton') as HTMLButtonElement;
const dailyDiv = document.querySelector('.dailyTip') as HTMLElement;
const randomDiv = document.querySelector('.randomTip') as HTMLElement;
const buttonDiv = document.querySelector('.buttons') as HTMLElement;
const savedQuotes = document.querySelector('.savedQuotes') as HTMLElement;
const savedDiv = document.querySelector('#savedDiv') as HTMLDivElement;



//--------------load daily tip with onload event--------------

async function getDailyTip() {
    const response = await fetch(urlDaily);
    const dataDaily = await response.json();
    return dataDaily;
};

function displayDailyTip() {
    getDailyTip().then((data) => {
        const authorImage = document.createElement('img') as HTMLImageElement;
        authorImage.src = data[0].i;
        authorImage.style.height = "60px"
        authorImage.style.width = "60px"
        dailyDiv.innerHTML = `${data[0].q} - ${data[0].a}`;
        dailyDiv.append(authorImage);
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
        const authorImage = document.createElement('img') as HTMLImageElement;
        authorImage.src = data[0].i;
        authorImage.style.height = "60px"
        authorImage.style.width = "60px"
        randomDiv.innerHTML =  `${data[0].q} - ${data[0].a}`;
        saveButton.style.display = "inline";
        randomDiv.append(authorImage);
    });
};

saveButton.addEventListener('click', function() {
    const likedQuote = document.createElement('p') as HTMLParagraphElement;
    likedQuote.innerHTML = randomDiv.innerHTML;
    savedDiv.append(likedQuote);
    saveButton.style.display = "none";
});


randomButton.addEventListener('click', function() {
    displayRandomTip();
});

