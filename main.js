const lights = ['red', 'yellow', 'green'];
        let currentLight = 0;
        const switchBtn = document.getElementById('switchBtn');
        switchBtn.addEventListener('click', function() {
            document.getElementById(lights[currentLight]).classList.remove('active');
            currentLight = (currentLight + 1) % lights.length;
            document.getElementById(lights[currentLight]).classList.add('active');
        });