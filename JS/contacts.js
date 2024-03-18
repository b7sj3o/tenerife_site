const formBtn = document.getElementById('submit_form');

formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const token ='6822471357:AAHneYj_Z1Ff4KQgXZtuhvUlCdmCcimfCew';
    const chatID = '928132950';

    const name = document.getElementById('submit-name').value;    
    const phoneNumber = document.getElementById('submit-phone-number').value;
    const emailField = document.getElementById('submit-email');
    const email = emailField.value ? emailField.value : '-';

    const message = `Ім'я: ${name}%0AE-mail: ${email}%0AНомер телефону: ${phoneNumber}`;

    const bot = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`

    const api = new XMLHttpRequest();

    api.open('GET', bot, true);
    api.send();

    setTimeout(function() {
        location.reload();
    }, 1000);
})
    


