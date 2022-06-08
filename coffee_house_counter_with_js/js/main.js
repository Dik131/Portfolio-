const userSurname = document.querySelector('[name=surname]');//получите элемент input с фамилией(*)
const userName =  document.querySelector('[name=name]');//получите элемент input с именем(*)

const checkboxes = document.querySelectorAll('[name="goods"]');//получите элементы checkbox с товарами goods(*)
const numbers = document.querySelectorAll('[type="number"]'); //получите элементы input с кол-вом(*)

const btn = document.querySelector(".btn");//получите элемент button(*)
const total = document.querySelector(".sum");//получите элемент span для итоговой суммы




btn.addEventListener('click', function(){
    if (userName.value !== '' || userSurname.value !== ''){ //при вводе имени и(или) фамилии, будет выводить введёное
        alert(`Заказчик: ${userName.value} ${userSurname.value} 

Ваш заказ:
Эспрессо ${numbers[0].value} шт. - ${checkboxes[0].value*numbers[0].value} р.
Американо ${numbers[1].value} шт. - ${checkboxes[1].value*numbers[1].value} р.
Латте ${numbers[2].value} шт. - ${checkboxes[2].value*numbers[2].value} р.
Капучино ${numbers[3].value} шт. - ${checkboxes[3].value*numbers[3].value} р.
Шоколадный кекс ${numbers[4].value} шт. - ${checkboxes[4].value*numbers[4].value} р.
Черничный кекс ${numbers[5].value} шт. - ${checkboxes[5].value*numbers[5].value} р.
Яблочный тарт ${numbers[6].value} шт. - ${checkboxes[6].value*numbers[6].value} р. 

Итого: ${sum} р.`);
    }
    if (userName.value == "" || userSecondName.value == ""){
        alert("Пожалуйста, укажите ваши данные")
    }
    else {
        alert(`Заказчик: Таинственный незнакомец

Ваш заказ:
Эспрессо ${numbers[0].value} шт. - ${checkboxes[0].value*numbers[0].value} р.
Американо ${numbers[1].value} шт. - ${checkboxes[1].value*numbers[1].value} р.
Латте ${numbers[2].value} шт. - ${checkboxes[2].value*numbers[2].value} р.
Капучино ${numbers[3].value} шт. - ${checkboxes[3].value*numbers[3].value} р.
Шоколадный кекс ${numbers[4].value} шт. - ${checkboxes[4].value*numbers[4].value} р.
Черничный кекс ${numbers[5].value} шт. - ${checkboxes[5].value*numbers[5].value} р.
Яблочный тарт ${numbers[6].value} шт. - ${checkboxes[6].value*numbers[6].value} р. 

Итого: ${sum} р.`);
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
        
        total.innerHTML = `${sum} р.`;
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
                total.innerHTML = `${sum} р.`;
            }
        }
    }  
});