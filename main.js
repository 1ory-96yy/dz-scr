const ball = document.getElementById('ball'); 
        field.addEventListener('click', function(e) {
            const clickX = e.clientX;
            const clickY = e.clientY;
            const ballWidth = ball.offsetWidth;
            const ballHeight = ball.offsetHeight;
            const maxX = field.offsetWidth - ballWidth;
            const maxY = field.offsetHeight - ballHeight;
            let newX = clickX - ballWidth / 2;
            let newY = clickY - ballHeight / 2;
            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
            ball.style.left = newX + 'px';
            ball.style.top = newY + 'px';
        });