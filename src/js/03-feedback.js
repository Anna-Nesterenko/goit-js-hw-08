import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const FORM_STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateFormFields();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(addFormFields, 500));

function addFormFields(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    return console.log('Будь ласка заповнити усі поля');
  }

  console.log(formData);

  e.currentTarget.reset();

  //   const obj = localStorage.getItem(FORM_STORAGE_KEY);
  localStorage.removeItem(FORM_STORAGE_KEY);
  //   validation();
  //   JSON.parse(obj);
}

function populateFormFields() {
  const formStringValue = localStorage.getItem(FORM_STORAGE_KEY);

  if (formStringValue) {
    const formObjectValue = JSON.parse(formStringValue);

    for (const key in formObjectValue) {
      formData[key] = formObjectValue[key];
    }

    refs.form.elements.email.value = formData.email ? formData['email'] : '';

    refs.form.elements.message.value = formData.message
      ? formData['message']
      : '';
  }
}

// function validation() {
//   if (!formData['email'] || !formData['message']) {
//     return alert('Будь ласка, заповніть форму');
//   }
//   return console.log(formData);
// }

// function getStorageData() {
//   const parcedData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
//   if (parcedData) {
//     console.log(parcedData);
//     setFormFields(parcedData);
//   }
// }

// function setFormFields(obj) {
//   for (const key in obj) {
//     refs.form[key].value = obj[key];
//   }
// }

// window.addEventListener('load', getStorageData);
