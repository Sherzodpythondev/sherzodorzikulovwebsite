document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const fullMessage = `Isim: ${name}\nTelefon Raqam: ${phone}\nEmail: ${email}\nXabar: ${message}`;

    const botToken = '7658473260:AAHXBFLjia5ksz589yurX1atWLRgwxI8gbA';
    const chatId = '@xabarnomaaa'; // Kanal username yoki chat_id
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: fullMessage
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Xabar yuborildi:', data);
        alert("Men bilan bog'langaningiz uchun rahmat!");
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
        alert('Xabar yuborishda xatolik yuz berdi.');
    });
});