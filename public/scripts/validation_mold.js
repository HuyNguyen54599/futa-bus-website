const mainFom = document.querySelector('.form-validation');
const submitButton = document.querySelector('.form-submit-validation');
const errorBox = document.querySelector('.error-list');
const formGroup = [...mainFom.querySelectorAll('.form-group')];

const errors = [];

submitButton.onclick = () => {
    onFormSubmit();
}

function onFormSubmit() {
    clearErrors(errors);

    formGroup.forEach(field => {
        let inputField = field.querySelector('input') || field.querySelector('select');
        checkError(inputField, errors);
    });

    alertError(errors);
}

function checkError(input, errors) {
    for (const rule in validateRules) {
        let error = validateRules[rule](input);

        if (error) {
            errors.push(error);
        }
    }
}

function clearErrors(errors) {
    errors.splice(0, errors.length);
}

function alertError(errors) {
    if (errors.length > 0) {
        errorBox.innerHTML = errors.map(err => {
            return `<li class="error-item">${err}</li>`
        }).join('');

        errorBox.parentElement.classList.add('error-validation-active');

        let timeAdd = setTimeout(() => {
            errorBox.parentElement.classList.remove('error-validation-active');
        }, 5000);
    }
}

// Rules
var validateRules = {
    isRequired: function (input) {
        let value = input.value;
        let name = input.getAttribute('name');

        if (input.dataset.type === 'terms') {
            return (input.checked === false) ? `Chưa đồng ý điều khoản ${name}` : undefined;
        }

        return (value.trim() === '') ? `Chưa nhập thông tin ${name}` : undefined;
    },

    name: function (input) {
        if (input.dataset.type !== 'name') return;

        let value = input.value;
        let name = input.getAttribute('name');

        return value.trim().length <= 5 ? `Thông tin ${name} chưa đúng` : undefined;
    },

    // phone: function (input) {
    //     if (input.dataset.type !== 'phone') return;

    //     let value = input.value;
    //     let name = input.getAttribute('name');
    // },

    // email: function (input) {
    //     if (input.dataset.type !== 'email') return;

    //     let value = input.value;
    //     let name = input.getAttribute('name');
    // },

    // password: function (input) {
    //     if (input.dataset.type !== 'password') return;

    //     let value = input.value;
    //     let name = input.getAttribute('name');
    // },

    // select: function (input) {
    //     if (input.dataset.type !== 'select-city' || input.dataset.type !== 'select-district') return;

    //     let value = input.value;
    //     let name = input.getAttribute('name');
    // },

    // checkbox: function (input) {
    //     if (input.dataset.type !== 'terms') return;

    //     let value = input.value;
    //     let name = input.getAttribute('name');
    // }
}