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
