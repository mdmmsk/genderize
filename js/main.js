const serverUrl = 'https://api.genderize.io';
let firstName;
let url;
let input = document.querySelector('input');
const output = document.querySelector('.output__text');
const btn = document.querySelector('a');

// Проверка на наличие цифры в имени
function checkInput() {
	outer: for (let char of input.value) {
		if (isFinite(char)) {
			input.value = '';
			break outer;
		}
	};
}

btn.onclick = checkFemale;
let json;
async function checkFemale() {
	checkInput();
	if (input.value !== '') {
		firstName = input.value;
		url = `${serverUrl}?name=${firstName}`;
		let outputData = await fetch(url);
		json = await outputData.json();
		output.style = ''
		output.innerHTML = `${firstName}-${json.gender}`;
		genders();
	} else {
		output.innerHTML = 'Enter the correct name';
		output.style = 'color: #FF4500'
		document.body.style='';
	};
};

function genders() {
	if (json.gender == 'male') {
		document.body.style = 'background: #1E90FF';
	} else {
		document.body.style = 'background: #FF1493';
	}
}
