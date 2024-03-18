const form = document.getElementById('contacts_form')
const formBtn = document.getElementById('submit_form');
const token ='6822471357:AAHneYj_Z1Ff4KQgXZtuhvUlCdmCcimfCew';
const chatID = '928132950';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('submit-name').value;    
    const phoneNumber = document.getElementById('submit-phone-number').value;
    const emailField = document.getElementById('submit-email');
    const email = emailField.value ? emailField.value : '-';

    const message = `Ім'я: ${name}%0AE-mail: ${email}%0AНомер телефону: ${phoneNumber}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`
    fetch(url, {
        method: 'POST',
    }).then((response) => {
        if (response.status == 404) {
            formBtn.textContent = 'Трапилася помилка!'
        } else if (response.status == 200) {
            formBtn.textContent = 'Дані надіслано успішно!'
        }
    }).catch((error) => {
        formBtn.textContent = 'Трапилася помилка!'
    });
})
    


