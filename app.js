var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var urlRandom = 'https://zenquotes.io/api/random/116b01ed99f7230a36d036a31adcc0f796ed6a70';
var urlDaily = 'https://zenquotes.io/api/today/116b01ed99f7230a36d036a31adcc0f796ed6a70';
var authorUrl = 'https://zenquotes.io/api/authors/116b01ed99f7230a36d036a31adcc0f796ed6a70';
var userKey = '116b01ed99f7230a36d036a31adcc0f796ed6a70';
var randomButton = document.querySelector('.randomizeButton');
var saveButton = document.querySelector('.saveButton');
var saveDaily = document.querySelector('.saveDaily');
var dailyDiv = document.querySelector('.dailyTip');
var randomDiv = document.querySelector('.randomTip');
var buttonDiv = document.querySelector('.buttons');
var savedQuotes = document.querySelector('.savedQuotes');
var savedDiv = document.querySelector('.savedDiv');
var authorList = document.querySelector('.authorList');
var body = document.querySelector('.documentFrame');
var quotes = document.querySelector('.quotes');
var authorCard = document.querySelector('.authorCard');
//--------------load daily tip with onload event--------------
function getDailyTip() {
    return __awaiter(this, void 0, void 0, function () {
        var response, dataDaily;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(urlDaily)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    dataDaily = _a.sent();
                    return [2 /*return*/, dataDaily];
            }
        });
    });
}
;
saveDaily.addEventListener('click', function () {
    var likedQuote = document.createElement('p');
    likedQuote.innerHTML = dailyDiv.innerHTML;
    savedDiv.append(likedQuote);
    saveDaily.style.display = "none";
});
function displayDailyTip() {
    getDailyTip().then(function (data) {
        var authorImage = document.createElement('img');
        authorImage.src = data[0].i;
        authorImage.style.height = "60px";
        authorImage.style.width = "60px";
        dailyDiv.innerHTML = "".concat(data[0].q, " - ").concat(data[0].a);
        dailyDiv.append(authorImage);
        authorImage.addEventListener('click', function () {
            console.log(data[0]);
        });
    });
}
;
window.addEventListener("load", function () {
    displayDailyTip();
    displayRandomTip();
    saveButton.style.display = "none";
    //  saveDaily.style.display = "inline";
});
//--------------load random tip--------------
function getRandomTip() {
    return __awaiter(this, void 0, void 0, function () {
        var response, dataRandom;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(urlRandom)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    dataRandom = _a.sent();
                    return [2 /*return*/, dataRandom];
            }
        });
    });
}
;
function displayRandomTip() {
    getRandomTip().then(function (data) {
        var authorImage = document.createElement('img');
        authorImage.src = data[0].i;
        authorImage.style.height = "60px";
        authorImage.style.width = "60px";
        randomDiv.innerHTML = "".concat(data[0].q, " - ").concat(data[0].a);
        saveButton.style.display = "inline";
        randomDiv.append(authorImage);
    });
}
;
saveButton.addEventListener('click', function () {
    var likedQuote = document.createElement('p');
    likedQuote.innerHTML = randomDiv.innerHTML;
    savedDiv.append(likedQuote);
    saveButton.style.display = "none";
});
randomButton.addEventListener('click', function () {
    displayRandomTip();
});
function getAuthors() {
    return __awaiter(this, void 0, void 0, function () {
        var response, authors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(authorUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    authors = _a.sent();
                    return [2 /*return*/, authors];
            }
        });
    });
}
function displayAuthors() {
    getAuthors().then(function (data) {
        console.log(data);
        var arrLength = data.length;
        console.log(arrLength);
        var _loop_1 = function (i) {
            var authorInfo = document.createElement('div');
            authorInfo.className = "authors";
            var authorImage = document.createElement('img');
            authorImage.src = data[i].i;
            authorInfo.innerHTML = data[i].a;
            authorList.appendChild(authorInfo);
            authorInfo.appendChild(authorImage);
            authorImage.addEventListener('click', function () {
                quotes.innerHTML = "";
                console.log(data[i]);
                var cardImage = document.createElement('img');
                cardImage.src = data[i].i;
                console.log(cardImage);
                quotes.appendChild(cardImage);
                displayOneAuthor();
                function getLink() {
                    return __awaiter(this, void 0, void 0, function () {
                        var response, links;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fetch(data[i].l + userKey)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.json()];
                                case 2:
                                    links = _a.sent();
                                    return [2 /*return*/, links];
                            }
                        });
                    });
                }
                ;
                function displayOneAuthor() {
                    getLink().then(function (data) {
                        console.log(data);
                        var quoteListLength = data.length;
                        for (var i_1 = 0; i_1 < quoteListLength; i_1++) {
                            var quoteList = document.createElement('li');
                            quoteList.innerHTML = data[i_1].q;
                            quotes.append(quoteList);
                        }
                    });
                }
            });
        };
        for (var i = 0; i < arrLength; i++) {
            _loop_1(i);
        }
        ;
    });
}
;
displayAuthors();
