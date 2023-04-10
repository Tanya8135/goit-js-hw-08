import throttle from 'lodash/throttle';

const KEY = "feedback-form-state";

// отримує елементи форми та кнопки
const feedbackForm = document.querySelector('.feedback-form'); /* форма */
const emailInput = feedbackForm.elements.email; /* для отримання mail */
const messageTextarea = feedbackForm.elements.message; /* -\- message */
// const submitBtn = feedbackForm.querySelector('button[type="submit"]'); /* кнопка */

// отримує дані, які будуть збережені з localStoradge та заповнення форми
let feedbackFormData; /* перетворення в JS */
try {
    feedbackFormData = JSON.parse(localStorage.getItem(KEY)) || {};
} catch (e) {
    feedbackFormData = {};
};

emailInput.value = feedbackFormData.email || '';
messageTextarea.value = feedbackFormData.message || '';

// if (feedbackFormData && feedbackFormData.email) {
//     emailInput.value = feedbackFormData.email;
// } /* значення mail */
// messageTextarea.value = feedbackFormData ? feedbackFormData.message : ''; /* значення message */

/* зберігає стан форми використовуючі бібліотеку та
оновлення сховища 500ms */
feedbackForm.addEventListener('input', throttle(() => {
    const data = { /* data - містить дані з полів форми */
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(KEY, JSON.stringify(data)); /* перетворює в JSON */
}, 500));

// очищення localStorage та форми при сабміті
feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault(); /* скидання браузерних налаштувань */
    const data = { /* приймає пустий рядок */
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.removeItem(KEY); /* очищення форми */
    emailInput.value = '';
    messageTextarea.value = '';
    console.log(data);
}); 