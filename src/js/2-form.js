const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const loadFormData = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
};

const saveFormData = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormData();
};

const handleSubmit = (event) => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', formData);

  formData = { email: '', message: '' };
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormData);







const style = document.createElement('style');
style.innerHTML = `
  .feedback-form {
    width: 360px;
    padding: 24px;
    background-color: #fff;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
  }

  .form-label {
    display: block;
    margin-bottom: 16px;
    font-size: 16px;
    color: #333;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    height: 40px;
    margin-top: 8px;
    padding: 8px 12px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-textarea {
    height: auto;
  }

  .form-btn {
    width: 86px;
    height: 40px;
    margin-top: 16px;
    background-color: #4e75ff;
    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    border: none;
    border-radius: 4px;
    cursor: pointer; 
  }
`;

document.head.appendChild(style);


