let firstName = 'artem';
const serverUrl = 'https://api.genderize.io';
let url = `${serverUrl}?name=${firstName}`;

const UI = {
	FORM: document.querySelector("form"),
	INPUT_AREA: document.querySelector(".form__input-name"),
	RESULT_AREA: document.querySelector(".output__text"),
	SUBMIT_BTN: document.querySelector(".form__submit-btn"),
}

UI.FORM.onsubmit = async function(){
	firstName = UI.INPUT_AREA.value;
	url = `${serverUrl}?name=${firstName}`;
	await request(url);
	return false;
}

async function request(url){
	const response = await fetch(url);
	let obj = await response.json();
	if(response.ok){
		responseTreatment(obj)
	}else{
		responseTreatment(null, obj.error)
	}
}

function responseTreatment(inutData, error){
	if(inutData){
		UI.RESULT_AREA.innerHTML = `${firstName} - ${inutData.gender}`;
	}else{
		alert(error);
	}
}