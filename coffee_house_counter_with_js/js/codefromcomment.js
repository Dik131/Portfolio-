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