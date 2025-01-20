const swiper = new Swiper('.swiper-container', {
    loop: true, // Sonsuz döngü
    effect: 'fade', // Fading efekti
    autoplay: {
        delay: 3000, // 3 saniyede bir otomatik geçiş
        disableOnInteraction: false, // Kullanıcı müdahalesinden sonra da devam eder
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Kullanıcının sayfalara tıklayabilmesini sağlar
    }
});

// Başlığı alma
const text = "İSTANBUL GENELİ BOYA BADANA";
const titleElement = document.getElementById("animated-title");
const numberElement = document.getElementById("number");

// "İSTANBUL GENELİ BOYA BADANA" yazısını span'lere ayırma
titleElement.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");

// Sayfa yüklendiğinde animasyonları başlat
window.onload = () => {
    // Body animasyonu
    gsap.to("body", {
        opacity: 1,              // Görünür hale getir
        y: 0,                    // Yukarıdan aşağı in
        duration: 1.5,           // Animasyon süresi
        ease: "power2.out"       // Smooth animasyon
    });

    // Başlık animasyonu
    gsap.from("#animated-title span", {
        opacity: 0,          // Başlangıçta harfler görünmez
        y: -50,              // Başlangıçta yukarıda
        stagger: 0.05,       // Her harfe 0.05 saniye arayla animasyon uygula
        duration: 1,         // Animasyon süresi 1 saniye
        ease: "power2.out",  // Animasyon tipi
        onComplete: () => {  // Animasyon tamamlandığında numara yazısını göster
            showNumber();
        }
    });


};

// Numara yazısını animasyonla gösterme
function showNumber() {
    numberElement.innerHTML = "0555 999 99 99";  // Burada istediğiniz numarayı yazabilirsiniz.
    gsap.from("#number", {
        opacity: 0,           // Başlangıçta görünmez
        y: -50,               // Başlangıçta yukarıda
        duration: 1,          // Animasyon süresi
        ease: "power2.out"    // Animasyon tipi
    });
}







