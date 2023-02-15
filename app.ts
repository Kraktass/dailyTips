
const urlRandom = 'https://zenquotes.io/api/random/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const urlDaily = 'https://zenquotes.io/api/today/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const authorUrl = 'https://zenquotes.io/api/authors/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const userKey = '116b01ed99f7230a36d036a31adcc0f796ed6a70';
const randomButton = document.querySelector('.randomizeButton') as HTMLButtonElement;
const saveButton = document.querySelector('.saveButton') as HTMLButtonElement;
const saveDaily = document.querySelector('.saveDaily') as HTMLButtonElement;
const exitButton = document.querySelector('.exitButton') as HTMLButtonElement;
const dailyDiv = document.querySelector('.dailyTip') as HTMLElement;
const randomDiv = document.querySelector('.randomTip') as HTMLElement;
const buttonDiv = document.querySelector('.buttons') as HTMLElement;
const savedQuotes = document.querySelector('.savedQuotes') as HTMLElement;
const savedDiv = document.querySelector('.savedDiv') as HTMLDivElement;
const authorList = document.querySelector('.authorList') as HTMLElement;
const body = document.querySelector('body') as HTMLElement;
const quotes = document.querySelector('.quotes') as HTMLElement;
const authorCard = document.querySelector('.authorCard') as HTMLElement;



//--------------load daily tip with onload event--------------

async function getDailyTip() {
    const response = await fetch(urlDaily);
    const dataDaily = await response.json();
    return dataDaily;
};

saveDaily.addEventListener('click', function () {
    const likedQuote = document.createElement('p') as HTMLParagraphElement;
    likedQuote.innerHTML = dailyDiv.innerHTML;
    savedDiv.append(likedQuote);
    saveDaily.style.display = "none";
})

function displayDailyTip() {
    getDailyTip().then((data) => {
        const authorImage = document.createElement('img') as HTMLImageElement;
        authorImage.src = data[0].i;
        authorImage.style.height = "60px"
        authorImage.style.width = "60px"
        dailyDiv.innerHTML = `${data[0].q} - ${data[0].a}`;
        dailyDiv.append(authorImage);
        authorImage.addEventListener('click', function () {
            console.log(data[0]);
        })
    });
};




window.addEventListener("load", () => {
    displayDailyTip();
    displayRandomTip();
    saveButton.style.display = "none";
  //  saveDaily.style.display = "inline";
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


async function getAuthors() {
    const response = await fetch(authorUrl);
    const authors = await response.json();
    return authors;
}

function displayAuthors () {
    getAuthors().then((data) => {
        console.log(data);
        let arrLength = data.length;
        console.log(arrLength);
        for (let i = 0; i < arrLength; i++) {
            const authorInfo = document.createElement('div') as HTMLElement;
            authorInfo.className = "authors";
            const authorImage = document.createElement('img') as HTMLImageElement;
            authorImage.src = data[i].i;
            authorInfo.innerHTML = data[i].a;
            authorList.appendChild(authorInfo);
            authorInfo.appendChild(authorImage);


            authorImage.addEventListener('click', function () {
                body.style.overflow = 'hidden';
                authorCard.style.display = "flex"
                quotes.innerHTML = "";
                console.log(data[i]);
                const cardImage = document.createElement('img') as HTMLImageElement;
                cardImage.src = data[i].i;
                console.log(cardImage);
                quotes.appendChild(cardImage);
                displayOneAuthor();
                async function getLink() {
                    const response = await fetch(data[i].l + userKey);
                    const links = await response.json();
                    return links;
                };
            exitButton.addEventListener('click', function () {
                authorCard.style.display = "none";
                body.style.overflow = 'auto';
            })    

            function displayOneAuthor () {
                getLink().then((data) => {
                    console.log(data);
                    const quoteListLength = data.length;
                    for (let i = 0; i < quoteListLength; i++) {
                        const quoteList = document.createElement('li') as HTMLElement;
                        quoteList.innerHTML = data[i].q;
                        quotes.append(quoteList);
                    }
                })
            }  

            })
        };
    });
};

displayAuthors();