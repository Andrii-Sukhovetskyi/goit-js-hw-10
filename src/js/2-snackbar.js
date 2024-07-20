import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    
    const delay = Number(form.querySelector('input[name="delay"]').value);
    const state = form.querySelector('input[name="state"]:checked').value;

    createHandlePromise(delay, state);
    form.reset();
}

function createHandlePromise(delay, state) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay)
    });

    promise
        .then(result => {
            iziToast.success({
                position: 'topRight',
                message: `✅ Fulfilled promise in ${result}ms`,
            });
        })
        .catch(error => {
            iziToast.error({
                position: 'topRight',
                message: `❌ Rejected promise in ${error}ms`,
            });
        });
}