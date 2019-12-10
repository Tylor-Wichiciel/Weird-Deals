//JavaScript Document
let header = document.querySelector('header');
let section = document.querySelector('section');
let requestURL = "https://tylor-wichiciel.github.io/Weird-Deals/weird.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  let weirdthings = request.response;
  console.log(weirdthings);
  populateHeader(weirdthings);
  oddStuff(weirdthings);
}

function populateHeader(jsonObj) {
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

function oddStuff(jsonObj){
  let oddStuff = jsonObj['oddStuff'];
  console.log(oddStuff);
  for (let i = 0; i < oddStuff.length; i++){
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    img.setAttribute('src', 'https://tylor-wichiciel.github.io/Weird-Deals/images/' + oddStuff[i].image);
    img.setAttribute('alt', oddStuff[i].image);
    h2.textContent = oddStuff[i].name;
    p1.textContent = 'Price: ' + oddStuff[i].price;
    p2.textContent = 'Description: ' + oddStuff[i].description;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    section.appendChild(article);
    }
  }
