btnElement = document.querySelector("#button");
resultElement = document.querySelector(".answer");
nameElement = document.querySelector('[name=name]');
familyElement = document.querySelector('[name=familyName]');

btnElement.addEventListener("click", function(){
	resultElement.textContent = "Здравствуйте, " + nameElement.value + " " + familyElement.value + "!";
});