
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    var fullname = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    // E-posta doğrulaması
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var phoneRegex = /^\d{10}$/;

    // İsim kontrolü 
    if (fullname === '') {
        alert('İsim alanı boş bırakılamaz!');
        return;
    }

    // E-posta kontrolü
    if (!emailRegex.test(email)) {
        alert('Geçerli bir e-posta adresi girin!');
        return;
    }

    // Telefon numarası kontrolü
    if (!phoneRegex.test(phone)) {
        alert('Geçerli bir telefon numarası girin!');
        return;
    }

    // Mesaj kontrolü (boş olmamalı)
    if (message === '') {
        alert('Mesaj alanı boş bırakılamaz!');
        return;
    }

      alert('Form başarıyla Asbaşaran Servise gönderildi!');
});
