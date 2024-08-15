
handleRefresh.js

// Daftar URL untuk dialihkan setelah 3 refresh berturut-turut
var redirectPages = [
    "Insurance.html",
    "the-Insurance.html",
    "lawyer.html",
    "Health.html",
    "car-accident-lawyer.html"
];

function handlePageRefresh() {
    // Mendapatkan jumlah refresh dari localStorage
    var refreshCount = parseInt(localStorage.getItem('refreshCount')) || 0;

    // Menambah jumlah refresh
    refreshCount++;
    localStorage.setItem('refreshCount', refreshCount);

    // Jika jumlah refresh sudah mencapai 3
    if (refreshCount >= 3) {
        // Reset refresh count
        localStorage.removeItem('refreshCount');

        // Pilih URL random dari daftar redirectPages
        var randomRedirectIndex = Math.floor(Math.random() * redirectPages.length);
        var redirectUrl = "https://zonweb.github.io/the-best/" + redirectPages[randomRedirectIndex];

        // Redirect ke URL random
        window.location.href = redirectUrl;
    } else {
        // Jika belum mencapai 3 refresh, arahkan ke halaman random
        redirectRandomPost();
    }
}

// Panggil fungsi untuk menangani refresh setelah halaman dimuat
window.onload = function() {
    handlePageRefresh();
};
