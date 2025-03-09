window.addEventListener('scroll', function() {
    const banner = document.getElementById('banner');
    if (window.scrollY > 50) {
        banner.classList.add('hidden');
    } else {
        banner.classList.remove('hidden');
    }
});

function showEmail(event) {
    event.preventDefault(); // Ngăn chặn mở email client
    document.getElementById('email-text').classList.toggle('emailhidden');
}
const backgrounds = [
    "src/banner.jpg",
    "src/banner2.jpg",
    "src/banner3.jpg",
];

let currentIndex = 0;
let autoSlide; // Biến lưu interval để tự động chuyển ảnh

function updateBackground() {
    const banner = document.querySelector(".banner");
    banner.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
}

// Chuyển ảnh sang trái
document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateBackground();
    resetAutoSlide();
});

// Chuyển ảnh sang phải
document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    updateBackground();
    resetAutoSlide();
});

// Bắt đầu tự động chuyển ảnh mỗi 5 giây
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        updateBackground();
    }, 3000);
}

// Khi người dùng nhấn nút, reset lại thời gian auto slide
function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Gán ảnh ban đầu và bắt đầu auto slide
updateBackground();
startAutoSlide();
