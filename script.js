        // Fungsi untuk membuat redirect ke halaman turunan random
        function redirectRandomPost() {
            // Array berisi daftar halaman yang kamu ingin buat
            var pages = [
                "expert-houston-maritime-attorney-navigating-your-legal-waters.html",
                "top-houston-maritime-attorney-protecting-your-rights-at-sea.html"
                // Tambahkan lebih banyak URL di sini
            ];

            // Generate indeks random berdasarkan panjang array pages
            var randomIndex = Math.floor(Math.random() * pages.length);
            // Redirect ke URL turunan yang dipilih secara acak
            window.location.href = "https://zonweb.github.io/the-best/" + pages[randomIndex];
        }

        // Panggil fungsi redirect setelah halaman dimuat
        window.onload = function() {
            redirectRandomPost();
        };
