//try{
const buttonContainer = document.getElementById("button-container");
const buttons = buttonContainer.children;

const texts = [
	"Click me",
	"Don't click me",
	"Maybe click me",
	"hello",
	"hi",
	"hi 2",
	"hi 3",
];

function randomNumber(lower, higher) {
	return lower + Math.floor(Math.random() * (higher - lower));
}

const menuNames = [];

//top button functionality
///*
//try{
const defaultmenu = "main";

for (const button of buttons) {
	const buttonId = button.id.substring(7);
	const buttonTab = document.getElementById("tab-" + buttonId);
	if (buttonId != defaultmenu) {
		buttonTab.style.display = "none";
	}
	menuNames.push(buttonId);
	button.addEventListener("click", () => {
		for (const id of menuNames) {
			document.getElementById("tab-" + id).style.display = "none";
		}
		buttonTab.style.display = "grid";
		buttonTab.style.placeItems = "center";
	});
}
//}catch(error){mainButton.textContent = error;}
//*/

//main
const mainButton = document.getElementById("main-button");
const clickCounter = document.getElementById("click-counter");

let clickAmt = 0;

mainButton.addEventListener("click", () => {
	clickAmt++;
	clickCounter.textContent = "You have clicked this button " + clickAmt + " times.";
	mainButton.textContent = texts[randomNumber(0, texts.length)];
	if (clickAmt == 100) {
		awardSecret("click the button a hundred times");
	}
});

//rsw
const secretList = document.getElementById("secret-list");

const secrets = {
	"click the button a hundred times": 1,
	"free secret": 1,
	"feodoric self insert": 3,
	"broken": 4,
	"i hate you kadan im making a secret game in this": 5,
}

function awardSecret(secret) {
	const div = document.getElementById("secret-" + secret);
	div.style.background = "#50ec37";
}

for (const [secret, diff] of Object.entries(secrets)) {
	const div = document.createElement("div");
	div.id = "secret-" + secret;
	div.classList.add("secret");
	div.style.width = "150%";
	div.style.display = "flex";
	div.style.justifyContent = "space-between";

	const name = document.createElement("span");
	name.id = "secret-" + secret + "-name";
	name.style.alignSelf = "left";
	name.style.width = "160%";
	name.style.display = "block";
	name.style.textAlign = "left";
	name.textContent = secret;
	div.appendChild(name);
	
	const difficulty = document.createElement("span");;
	difficulty.id = "secret-" + secret + "-difficulty";
	difficulty.style.alignSelf = "right";
	difficulty.style.width = "40%";
	difficulty.style.display = "block";
	difficulty.style.textAlign = "right";
	difficulty.textContent = diff;
	div.appendChild(difficulty);

	secretList.appendChild(div);
}

const buttonFreeSecret = document.getElementById("button-free-secret");

buttonFreeSecret.addEventListener("click", () => {
	awardSecret("free secret");
});

//about-me
const buttonEnter = document.getElementById("button-enter");
const buttonNonfunctional = document.getElementById("button-nonfunctional");
const codeInput = document.getElementById("code-input");
let ihykCounter = -1;

buttonEnter.addEventListener("click", () => {
	ihykCounter++;
	const ihyk = "i hate you kadan im making a secret game in this";
	const letter = "hydromagnetics".charAt(ihykCounter % "hydromagnetics".length);
	const name = document.getElementById("secret-" + ihyk + "-name");
	name.textContent = ihyk.substring(0, ihyk.indexOf(letter));
	let span = document.createElement("span");
	span.textContent = letter;
	span.style.color = "#e0e0e0"
	name.appendChild(span);
	let span2 = document.createElement("span");
	span2.textContent += ihyk.substring(ihyk.indexOf(letter) + 1, ihyk.length);
	name.appendChild(span2);
	const entry = codeInput.value;
	if (entry.toLowerCase() == "throzyckd") {
		awardSecret("feodoric self insert");
		return;
	}
	if (entry.toLowerCase() == "hydromagnetics") {
		awardSecret("i hate you kadan im making a secret game in this");
		return;
	}
	if (entry.toLowerCase() == "abstracton") {
		awardSecret("broken");
		return;
	}
});

const bString = "01100001011000100111001101110100011100100110000101100011011101000110111101101110";
let bStringIndex = -1;

buttonNonfunctional.addEventListener("click", () => {
	bStringIndex++;
	if (bString.charAt(bStringIndex % bString.length) == "0") {
		buttonNonfunctional.textContent = "the nonfunctional button"
	} else {
		buttonNonfunctional.textContent = "the nonfunctionaI button"
	}
});

//}catch(error){document.getElementById("button-main").textContent = error;}
