// =====================================================
// INTERACTIVE WEB PAGES WITH JAVASCRIPT ASSIGNMENT
// =====================================================

// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PART 1: JAVASCRIPT EVENT HANDLING =====
    
    /**
     * CLICK EVENT HANDLING
     * Demonstrates basic click event listener and DOM manipulation
     */
    function setupClickEvents() {
        const clickBtn = document.getElementById('click-btn');
        const clickMessage = document.getElementById('click-message');
        let clickCount = 0;
        
        clickBtn.addEventListener('click', function() {
            clickCount++;
            clickMessage.classList.remove('hidden');
            clickMessage.textContent = `🎉 Button clicked ${clickCount} time(s)! Great job!`;
            
            // Add animation effect
            clickBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                clickBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    /**
     * MOUSE EVENT HANDLING
     * Demonstrates mouseover and mouseout events
     */
    function setupMouseEvents() {
        const hoverBox = document.getElementById('hover-box');
        const hoverMessage = document.getElementById('hover-message');
        
        hoverBox.addEventListener('mouseenter', function() {
            hoverMessage.classList.remove('hidden');
            hoverMessage.textContent = '👋 Mouse entered! Welcome!';
            hoverBox.textContent = 'Thanks for hovering! 😊';
        });
        
        hoverBox.addEventListener('mouseleave', function() {
            hoverMessage.textContent = '👋 Mouse left! Come back soon!';
            hoverBox.textContent = 'Hover over me!';
            
            // Hide message after 2 seconds
            setTimeout(() => {
                hoverMessage.classList.add('hidden');
            }, 2000);
        });
    }
    
    /**
     * KEYBOARD EVENT HANDLING
     * Demonstrates input and keyup events for real-time typing feedback
     */
    function setupKeyboardEvents() {
        const keyInput = document.getElementById('key-input');
        const keyMessage = document.getElementById('key-message');
        const typedText = document.getElementById('typed-text');
        
        keyInput.addEventListener('input', function() {
            const inputValue = keyInput.value;
            
            if (inputValue.length > 0) {
                keyMessage.classList.remove('hidden');
                typedText.textContent = inputValue;
                
                // Change message based on input length
                if (inputValue.length > 20) {
                    keyMessage.innerHTML = `⌨️ Wow! You've typed <strong>${inputValue.length}</strong> characters: <span id="typed-text">${inputValue}</span>`;
                }
            } else {
                keyMessage.classList.add('hidden');
            }
        });
        
        // Add keydown event for special keys
        keyInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                alert(`You pressed Enter! Your text: "${keyInput.value}"`);
            }
        });
    }
    
    
    // ===== PART 2: INTERACTIVE ELEMENTS =====
    
    /**
     * DARK/LIGHT MODE TOGGLE
     * Interactive theme switcher using event handling and DOM manipulation
     */
    function setupThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const toggleIcon = themeToggleBtn.querySelector('.toggle-icon');
        const toggleText = themeToggleBtn.querySelector('.toggle-text');
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            toggleIcon.textContent = '☀️';
            toggleText.textContent = 'Light Mode';
        }
        
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                toggleIcon.textContent = '☀️';
                toggleText.textContent = 'Light Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                toggleIcon.textContent = '🌙';
                toggleText.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    /**
     * COUNTER GAME
     * Interactive counter with increase, decrease, and reset functionality
     */
    function setupCounterGame() {
        const increaseBtn = document.getElementById('increase-btn');
        const decreaseBtn = document.getElementById('decrease-btn');
        const resetBtn = document.getElementById('reset-btn');
        const counterDisplay = document.getElementById('counter-display');
        const counterMessage = document.getElementById('counter-message');
        
        let count = 0;
        
        function updateCounter() {
            counterDisplay.textContent = count;
            
            // Add color coding and messages based on count
            if (count === 0) {
                counterMessage.textContent = '';
                counterDisplay.style.color = 'var(--primary-color)';
            } else if (count > 0) {
                counterMessage.textContent = count >= 10 ? '🔥 You\'re on fire!' : '📈 Going up!';
                counterDisplay.style.color = 'green';
            } else {
                counterMessage.textContent = count <= -10 ? '❄️ Chill out!' : '📉 Going down!';
                counterDisplay.style.color = 'red';
            }
        }

        increaseBtn.addEventListener('click', function() {
            count++;
            updateCounter();
        });

        decreaseBtn.addEventListener('click', function() {
            count--;
            updateCounter();
        });

        resetBtn.addEventListener('click', function() {
            count = 0;
            updateCounter();
        });

        // Initialize display
        updateCounter();
    }
    
    // ===== INITIALIZE ALL EVENT HANDLERS =====
    setupClickEvents();
    setupMouseEvents();
    setupKeyboardEvents();
    setupThemeToggle();
    setupCounterGame();
});