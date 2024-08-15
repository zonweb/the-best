
var redirectPages = [
    "Insurance.html",
    "the-Insurance.html",
    "lawyer.html",
    "Health.html",
    "car-accident-lawyer.html"
];

function handlePageRefresh() {
    var refreshCount = parseInt(localStorage.getItem('refreshCount')) || 0;


    refreshCount++;
    localStorage.setItem('refreshCount', refreshCount);
	
    if (refreshCount >= 1) {
        // Reset refresh count
        localStorage.removeItem('refreshCount');

        var randomRedirectIndex = Math.floor(Math.random() * redirectPages.length);
        var redirectUrl = "https://zonweb.github.io/the-best/" + redirectPages[randomRedirectIndex];

        window.location.href = redirectUrl;
    } else {
        redirectRandomPost();
    }
}

window.onload = function() {
    handlePageRefresh();
};


var redirectUrl = 'https://zonweb.github.io/the-best/next1';

        var startButton = document.getElementById('startButton');
        var timerDisplay = document.getElementById('timer');
        var actionMessage = document.getElementById('actionMessage');

        function startCountdown() {
            var countdown = 10; 
            timerDisplay.textContent = countdown;
            timerDisplay.style.display = 'block'; 

            startButton.classList.add('hidden');

            var intervalId = setInterval(function() {
                countdown--;
                timerDisplay.textContent = countdown;

                if (countdown <= 0) {
                    clearInterval(intervalId);
                    timerDisplay.style.display = 'none';
                    actionMessage.style.display = 'none';
                    
                    startButton.textContent = 'Go to Link';
                    startButton.classList.remove('hidden');
                    startButton.addEventListener('click', function() {
                        window.location.href = redirectUrl;
                    });
                }
            }, 1000); // Interval 1000 ms = 1 detik
        }
        startButton.addEventListener('click', function() {
            if (startButton.textContent === 'Start Countdown') {
                startCountdown();
            } else {
                window.location.href = redirectUrl;
            }
        });