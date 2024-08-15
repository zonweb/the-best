        // Fungsi untuk membuat redirect ke halaman turunan random
        function redirectRandomPost() {
            // Array berisi daftar halaman yang kamu ingin buat
            var pages = [
                "expert-houston-maritime-attorney-navigating-your-legal-waters.html",
                "top-houston-maritime-attorney-protecting-your-rights-at-sea.html",
                "houston-maritime-attorney-services-your-trusted-legal-partner.html",
                "experienced-houston-maritime-attorney-advocating-for-seafarers-rights.html",
                "houston-maritime-attorney-comprehensive-legal-solutions-for-maritime-cases.html",
                "your-guide-to-choosing-the-right-houston-maritime-attorney.html",
                "houston-maritime-attorney-ensuring-justice-for-maritime-workers.html",
                "navigating-maritime-law-insights-from-a-houston-maritime-attorney.html",
                "houston-maritime-attorney-dedicated-to-your-maritime-legal-needs.html",
                "protect-your-interests-with-a-leading-houston-maritime-attorney.html"
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
