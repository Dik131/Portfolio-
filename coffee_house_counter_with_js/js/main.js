const userSurname = document.querySelector('[name=surname]');//получите элемент input с фамилией(*)
const userName =  document.querySelector('[name=name]');//получите элемент input с именем(*)

const checkboxes = document.querySelectorAll('[name="goods"]');//получите элементы checkbox с товарами goods(*)
const numbers = document.querySelectorAll('[type="number"]'); //получите элементы input с кол-вом(*)

const btn = document.querySelector(".btn");//получите элемент button(*)
const total = document.querySelector(".sum");//получите элемент span для итоговой суммы




btn.addEventListener('click', function(){
    if (userName.value !== '' || userSurname.value !== ''){ //при вводе имени и(или) фамилии, будет выводить введёное
        alert("Заказчик: "+ userName.value + " " + userSurname.value + `\nИтого: ${sum} р.`);
    }
    else {
        alert("Заказчик: Таинственный Незнакомец" + `\nИтого: ${sum} р.`);
    }

});


let sum=0;
checkboxes.forEach((item, i) => {

    item.onchange = () => {
        let currentsItems = +numbers[i].value;
        let currentValue = currentsItems * item.value;
        if(item.checked) {
            if(!currentsItems) {
                numbers[i].value = 1;
                sum += +item.value;
            } else {
                sum += currentValue;
            }
        } else {
            numbers[i].value = 0;
            sum -= currentValue;
        }
        
        total.innerHTML = `Итого: ${sum} р.`;
    }
});

numbers.forEach((item, i) => {
    item.onfocus = () => {
        let currentValue = +item.value * checkboxes[i].value;

        item.onblur = () => {
            if(/^0\d+|^$|[^\d]/.test(item.value)) {
                alert('ВНИМАНИЕ! ДАННЫЕ ВВЕДЕНЫ НЕКОРРЕКТНО!');
                item.value = 0;
                item.focus();
            }

            if (checkboxes[i].checked) {
                let nextValue = item.value * checkboxes[i].value;
                sum += nextValue - currentValue;
                total.innerHTML = `Итого: ${sum} р.`;
            }
        }
    }  
});