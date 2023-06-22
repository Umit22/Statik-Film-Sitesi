document.addEventListener('DOMContentLoaded', function() {
    var likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', function() {
        window.lb = likeButton;
        likeButton.classList.toggle('selected');
    });
}, false);
//Beğenme butonunu tıklama animasyonu eklemeye yarayan fonksiyondur.