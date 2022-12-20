const myForm = document.querySelector('#my-form');
const date1 = document.querySelector('#date1');
const date2 = document.querySelector('#date2');
const days = document.querySelector('#days');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(date1.value === '' && date2.value === ''){
        msg.innerHTML = 'Please fill in both date fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const dateOne = new Date(date1.value);
        const dateTwo = new Date(date2.value);

        // Formated Date for printing purposes Only
        let formatedDate1 = dateOne.toDateString();
        let formatedDate2 = dateTwo.toDateString();

        if(dateOne < dateTwo){
            const diffinTime = dateOne.getTime() - dateTwo.getTime();
            const diffinDays = Math.abs(diffinTime / (1000 * 3600 * 24));
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`The duration between ${formatedDate1} and ${formatedDate2} is: ${diffinDays} days`));
            days.appendChild(li);
        } else {
            const diffinTime = dateOne.getTime() - dateTwo.getTime();
            const diffinDays = diffinTime / (1000 * 3600 * 24);
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`The duration between ${formatedDate1} and ${formatedDate2} is: ${diffinDays} days`));
            days.appendChild(li);
        }
        
        //const days = months / 30;
        
       

        date1.value = '';
        date2.value = '';
    }
}
