'use strict';

const cardholder = document.getElementById('card-name');
const form = document.querySelector('form');
const cardNumber = document.getElementById('card-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const submitBtn = document.getElementById('btn-submit');
const inputControl = document.querySelectorAll('.form-control')



form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs()
    if (inputControl[0].classList.contains('success') && inputControl[1].classList.contains('success') && inputControl[2].classList.contains('success') && inputControl[3].classList.contains('success')) {
        sumbitForm()
    }
    
})

/*===========================
        Set Error Message()
 ==========================*/

const setError = (element, message) => {
    const formControl = element.parentElement.parentElement;
    const errorDisplayed = formControl.querySelector('.empty-field')
    errorDisplayed.textContent = message;
    formControl.classList.add("error")
    formControl.classList.remove("succes")
    // setTimeout(() => {
    //     formControl.classList.remove("error")
    // }, 4000);
    
}
/*==========================
        set success message
 =========================*/
const setSuccess = element => {
    const formControl = element.parentElement.parentElement;
    const errorDisplayed = formControl.querySelector('.empty-field');
    errorDisplayed.textContent = "";
    formControl.classList.remove("error")
    formControl.classList.add("success")
    

}
/*============================
    form Number Pattern
 ============================*/
const isCardNumberValid = (cardNumber)  => {
    const re = RegExp(/^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})/)
    return re.test(cardNumber);
}

/*============================
    form month Pattern
 ============================*/
 const isFormMonthValid = (month)  => {
    const re = /^[0-9]+$/
    return re.test(month);
}

/*============================
    form year Pattern
 ============================*/
 const isFormYearValid = (year)  => {
    const re = /^[0-9]+$/
    return re.test(year);
}
/*============================
    form cvc Pattern
 ============================*/
const isCvcValid = (cvc)  => {
    const re = /^[0-9]+$/
    return re.test(cvc);
}

/*=================================
    Validate Inputs 
 =================================*/

const validateInputs = () => {
    const cardholderValue = cardholder.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const cvcValue = cvc.value.trim();

    cardholderValue !== "" ? setSuccess(cardholder) : setError(cardholder, `Can't be blank`)

    // if(cardholderValue !== "") {
    //     setSuccess(cardholder)
        
    // } else {
    //     setError(cardholder, `Can't be blank`)
    // };

    if(cardNumberValue === "") {
        setError(cardNumber, `Can't be blank`);
    }else if (!isCardNumberValid(cardNumberValue)) {
        setError(cardNumber, `Wrong format, numbers only`)
    }else {
        setSuccess(cardNumber)
    };

     if(monthValue === "" || yearValue === "") {
        setError(month, `Can't be blank`)
    }else if(!isFormMonthValid(monthValue) || !isFormYearValid(yearValue)) {
        setError(month, `Wrong format, numbers only`)
    }else {
        setSuccess(month && year);
    };
     if(cvcValue === "") {
        setError(cvc, `Can't be blank`)
     } else  {
        setSuccess(cvc)
     }
    
};


/*==========================
        Thank you Page
 ==========================*/ 

const sumbitForm = () => {
    const myForm = document.querySelector('.my-form');
    myForm.classList.add('hide-page');
    const successPage = document.querySelector('.success-page');
    successPage.classList.add('show-page')

}
/*================================
            Credit card
 ================================*/
function creditCard() {
    cardNumber.addEventListener('keydown', e => {
        e.target.value = e.target.value.replace(/([0-9a-zA-Z]{4})([0-9a-zA-Z]+$)/g, '$1 $2')
    })
    cardholder.addEventListener('input', () => {
        const ccHolder = document.querySelector('#cc-name');
        ccHolder.textContent = cardholder.value;
        
    });
    cardNumber.addEventListener('input', () => {
        const ccNumber = document.querySelector('#cc-number');
        ccNumber.textContent = cardNumber.value;
    });
    month.addEventListener('input', () => {
        const ccMonth = document.querySelector('#cc-mm');
        ccMonth.textContent = month.value;
    });
    year.addEventListener('input', () => {
        const ccYear = document.querySelector('#cc-yy');
        ccYear.textContent = year.value;
    });
    cvc.addEventListener('input', () => {
        const ccCvc = document.querySelector('#back-cvc');
        ccCvc.textContent = cvc.value;
    });


}

creditCard()