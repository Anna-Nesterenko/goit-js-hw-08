import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const FORM_STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateFormInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(addFormInput, 500));

function addFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    return alert('Будь ласка заповнити усі поля');
  }

  console.log(formData);

  refs.form.reset();

  localStorage.removeItem(FORM_STORAGE_KEY);
}

function populateFormInput() {
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
