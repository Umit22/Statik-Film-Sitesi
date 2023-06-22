window.addEventListener("load", function() {  
    var selectors = document.querySelectorAll(".reveal");
    for (var el of selectors) {
        el.classList.add('loaded');
        el.style.height = el.querySelector(".reveal__content > *").scrollHeight + "px";
    }
}, false);
// Bu fonksiyon movie sayfasında ki animasyonu sağlayan fonksiyondur.
//Sadece ilk satıra konulmuştur performans sebeplerinden dolayı