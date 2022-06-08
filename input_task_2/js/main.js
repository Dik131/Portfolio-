btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result"); 
radioButtons = document.querySelectorAll('[name="choice"]'); 
btnElement.addEventListener("click", function(){  
    let total=0;
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            total+=parseInt(radioButton.value);
        }
    }
    resultElement.textContent=`${total} руб`
});