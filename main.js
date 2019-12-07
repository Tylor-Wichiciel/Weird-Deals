//JavaScript Document


//step one -- create variables that store a reference to header and section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//step two -- create a variable to store request URL
let requestURL = "https://tylor-wichiciel.github.io/Weird-Deals/weird.json";

//step three - create a new XHR Object

let request = new XMLHttpRequest();

//step four -- open a new request, using the open method
request.open('GET', requestURL);

//Step Five -- set up the request to accept JSON
request.responseType = 'json';

//Step Six -- send the request using send method
request.send();

//Step Seven -- adding an event hanlder that listens for onload event of the JSON file/object
request.onload = function() {
  let weirdThings = request.response;
  console.log(weirdThings);
  populateHeader(weirdThings);
  topFlavours(weirdThings);
}

//Step Eight -- set up populateHeader function
function populateHeader(jsonObj) {
  //grab the company name fro JSON object and then create a new element, adding text and appending to the header.
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

  let headerPara = document.createElement('p');
  headerPara.textContent = jsonObj['headOffice'] + ' ' + jsonObj['established'];
  header.appendChild(headerPara);
}

function Weirdthings(jsonObj){
  //bind top flavours object to a variable
  let weirdThings = jsonObj['weirdthings'];

  for (let i = 0; i < weirdThings.length; i++){
    //create a few different elements
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');

    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://tylor-wichiciel.github.io/Weird-Deals/images/' + weirdthings[i].image);
    img.setAttribute('alt', weirdthings[i].image);
    h2.textContent = weirdthings[i].name;
    p1.textContent = 'Price: ' + weirdthings[i].price;
    p2.textContent = 'Description: ' + weirdthings[i].description;

    }

    //Append each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    section.appendChild(article);

  }
}
