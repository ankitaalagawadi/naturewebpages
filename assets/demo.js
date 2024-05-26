document.addEventListener('DOMContentLoaded', function() {
    function animateCounter(id, start, end, duration) {
        const element = document.getElementById(id);
        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const count = Math.min(Math.floor(progress / duration * (end - start) + start), end);
            element.textContent = count;
            if (count < end) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    animateCounter('counter1', 0, 100, 5000); // 5000ms = 5s
    animateCounter('counter2', 0, 100, 5000); // 5000ms = 5s
    animateCounter('counter3', 0, 100, 5000); // 5000ms = 5s
});

var i = 0;
var txt = 'TOMORROW.';
var speed = 300
function typertommorow() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typertommorow, speed);
    }
  }
  setInterval(() => {
    typertommorow()
    
  }, 1000);


  
