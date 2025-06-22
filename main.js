const openBtn = document.getElementById('openModalBtn');
        const closeBtn = document.getElementById('closeModalBtn');
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlay');
        
        openBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });