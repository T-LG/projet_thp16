
//Fonctionnalité 1
let footer = document.getElementsByTagName('footer');
let i = 1;

let onFooterClick = function() {
	console.log("clique numéro " + i);
	i+=1;
};

footer[0].addEventListener("click", onFooterClick);


//Fonctionnalité 2
let navbarHeader = document.getElementById('navbarHeader');

let onNavbarHeaderClick = function() {
	console.log(navbarHeader.classList);
	navbarHeader.classList.toggle('collapse');
	console.log(navbarHeader.classList);
};

navbarHeader.addEventListener("click", onNavbarHeaderClick);

//Fonctionnalité 3
let editButton1 = document.getElementsByClassName('btn-outline-secondary')[0];

let onEditButton1Click = function() {
	document.getElementsByClassName('card-text')[0].style.color = "red";
};

editButton1.addEventListener("click", onEditButton1Click);

//Fonctionnalité 4
let card2 = document.getElementsByClassName('card')[1];

let onCard2Edit = function() {
	let card2Text = card2.querySelector('p');
	if (card2Text.style.color == "green") {
		card2Text.style.color = "black";	
	} else {
		card2Text.style.color = "green";
	};
};

card2.getElementsByClassName('btn-outline-secondary')[0].addEventListener("click", onCard2Edit);

//Fonctionnalité 5
let header = document.getElementsByTagName("header")[0];

let onHeaderClick = function() {
	let head = document.getElementsByTagName("head")[0];
	head.removeChild(head.querySelector("link"));
};

// header.addEventListener("click", onHeaderClick);

//Fonctionnalité 6
let cards = document.querySelectorAll(".card");


for (let card of cards) {
	card.querySelector(".btn-success").addEventListener("mouseover", function() {

		let cardImg = card.querySelector(".card-img-top");
		let cardText = card.querySelector("p");

		if (cardImg.height < 300) {
			cardImg.height *= 5 ;
			cardImg.width = cardImg.height;
			cardText.style.display = "inherit";

		} else {
			cardImg.height /= 5 ;
			cardImg.width = cardImg.height;
			cardText.style.display = "none";
		};
	});
};

//Fonctionnalité 7
let arrowRight = document.querySelector('.btn-secondary');

let cardsTurnRight = function() {
	let cardsRow = document.querySelectorAll('.col-md-4');
	cardsRow[0].parentNode.insertBefore(cardsRow[5], cardsRow[0]);
};

arrowRight.addEventListener('click', cardsTurnRight);

//Fonctionnalité 8
let arrowLeft = document.querySelector('a.btn-primary');

let cardsTurnLeft = function(event) {
  event.preventDefault();
	let cardsRow = document.querySelectorAll('.col-md-4');
	cardsRow[0].parentNode.insertBefore(cardsRow[0], cardsRow[5].nextSibling);
};

arrowLeft.addEventListener('click', cardsTurnLeft);

//Fonctionnalité 9
let jsEvents = document.querySelector('div.d-flex');

let JSEventsOptions = function() {

	switch (event.key) {
		case "a":
			document.body.removeAttribute("class");
			document.body.classList.add('col-4');
			break;
		case "y":
			document.body.removeAttribute("class");
			document.body.classList.add('col-4');
			document.body.classList.add('align-content-center');
			break;
		case "p":
			document.body.removeAttribute("class");
			document.body.classList.add('align-self-right', 'col-4');
			break;
		case "b":
			document.body.removeAttribute("class");
			break;
		default:
			alert("Nothing happened");
	};
};

jsEvents.addEventListener('keypress', JSEventsOptions);