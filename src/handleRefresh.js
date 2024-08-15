

// Panggil fungsi untuk menangani refresh setelah halaman dimuat
window.onload = function() {
    handlePageRefresh();
};


        // Daftar URL untuk pengalihan
        const redirectUrls = [
            'car-accident-lawyer.html', // Ganti dengan URL tujuan Anda
            'car-accident-lawyer.html',
            'car-accident-lawyer.html',
            'car-accident-lawyer.html',
            'car-accident-lawyer.html'
            // Anda bisa menambahkan lebih banyak URL di sini
        ];

        // Mendapatkan jumlah refresh dari localStorage
        let refreshCount = localStorage.getItem('refreshCount') || 0;

        // Menambah jumlah refresh
        refreshCount++;
        localStorage.setItem('refreshCount', refreshCount);

        // Mengecek apakah refreshCount sudah mencapai 3
        if (refreshCount >= 3) {
            // Mengalihkan ke salah satu URL secara acak
            const randomIndex = Math.floor(Math.random() * redirectUrls.length);
            window.location.href = redirectUrls[randomIndex];
        }