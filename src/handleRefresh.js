var redirectPages = [
    "Insurance.html",
    "the-Insurance.html",
    "lawyer.html",
    "Health.html",
    "car-accident-lawyer.html"
];

// Fungsi untuk menangani refresh halaman
function handlePageRefresh() {
    var refreshCount = parseInt(localStorage.getItem('refreshCount')) || 0;

    refreshCount++;
    localStorage.setItem('refreshCount', refreshCount);

    if (refreshCount >= 3) { // Ubah nilai menjadi lebih dari 1 untuk menghindari redirect otomatis
        // Reset refresh count setelah redirect
        localStorage.removeItem('refreshCount');

        // Pilih halaman redirect secara acak
        var randomRedirectIndex = Math.floor(Math.random() * redirectPages.length);
        var redirectUrl = "https://zonweb.github.io/the-best/" + redirectPages[randomRedirectIndex];

        // Redirect ke halaman yang dipilih
        window.location.href = redirectUrl;
    } 
}

window.onload = function() {
    handlePageRefresh();
};

// Script Countdown Timer
var redirectUrl = 'https://zonweb.github.io/the-best/next1';

var startButton = document.getElementById('startButton');
var timerDisplay = document.getElementById('timer');
var actionMessage = document.getElementById('actionMessage');

function startCountdown() {
    var countdown = 10; 
    timerDisplay.textContent = countdown;
    timerDisplay.style.display = 'block'; 

    startButton.classList.add('hidden'); // Sembunyikan tombol setelah diklik

    var intervalId = setInterval(function() {
        countdown--;
        timerDisplay.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(intervalId);
            timerDisplay.style.display = 'none';
            actionMessage.style.display = 'none';
            
            startButton.textContent = 'Go to Link'; // Ubah teks tombol setelah countdown selesai
            startButton.classList.remove('hidden'); // Tampilkan tombol kembali
            startButton.addEventListener('click', function() {
                window.location.href = redirectUrl;
            });
        }
    }, 1000); // Interval 1000 ms = 1 detik
}

// Event listener untuk memulai countdown saat tombol diklik
startButton.addEventListener('click', function() {
    if (startButton.textContent === 'Start Countdown') {
        startCountdown();
    } else {
        window.location.href = redirectUrl; // Arahkan ke link setelah countdown selesai
    }
});
