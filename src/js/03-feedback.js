var throttle = require('lodash.throttle'); //! из документации throttle


const formRef = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const data = {email:"", message: ""};

formRef.addEventListener('submit', submitFunc );
formRef.addEventListener('input', throttle(inputFunc, 500));

resumeInput();


function submitFunc(evt) { //! После submit обнуляет currentTarget и поле ввода, и убрали действие по умолчанию,выведет dataParced
    evt.preventDefault();
    const parceSaved = localStorage.getItem(KEY);
    const dataParced = JSON.parse(parceSaved);
    if (dataParced) {
        console.log(dataParced);
    }
    else {
        console.log(data);
    }

    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
    data.email = '';
    data.message = '';
}

function inputFunc(evt) { //! Приведение значений к записи в объект
    data[evt.target.name] = evt.target.value;
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(KEY, dataJSON);
}

function resumeInput(evt) { //! Востановление значений из localStorage
    const savedInput = localStorage.getItem(KEY);
    const ParsesavedInput = JSON.parse(savedInput);

    if (ParsesavedInput) {
        const inputRef = formRef.querySelector('input');
        const textareaRef = formRef.querySelector('textarea');
        inputRef.value = ParsesavedInput.email ? ParsesavedInput.email : '';
        textareaRef.value = ParsesavedInput.message ? ParsesavedInput.message : '';
        data.email = ParsesavedInput.email;
        data.message = ParsesavedInput.message;
    }
}