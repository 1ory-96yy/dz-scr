document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.button-container');
            buttons.forEach(container => {
                const button = container.querySelector('button');
                const tooltip = container.querySelector('.tooltip');
                const buttonRect = button.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();
                if (buttonRect.top - tooltipRect.height < 0) {
                    tooltip.classList.remove('top');
                    tooltip.classList.add('bottom');
                }
            });
        });