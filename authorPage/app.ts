const authorUrl = 'https://zenquotes.io/api/authors/116b01ed99f7230a36d036a31adcc0f796ed6a70'
const userKey = '116b01ed99f7230a36d036a31adcc0f796ed6a70';
const authorList = document.querySelector('.authorList') as HTMLElement;
const body = document.querySelector('#documentFrame') as HTMLElement
const quotes = document.querySelector('.quotes') as HTMLElement;
const authorCard = document.querySelector('.authorCard') as HTMLElement

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

