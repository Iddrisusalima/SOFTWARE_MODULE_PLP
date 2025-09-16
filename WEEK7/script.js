// =====================================================
// BRINGING WEB PAGES TO LIFE - JAVASCRIPT FUNCTIONS
// Demonstrating Scope, Parameters, Return Values & CSS Animation Integration
// =====================================================

// ===== GLOBAL VARIABLES (DEMONSTRATING GLOBAL SCOPE) =====
let globalCounter = 0;
let isModalOpen = false;
let loadingTimeoutId = null;
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98', '#F4A460'];

// ===== PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES =====

/**
 * MATHEMATICAL CALCULATION FUNCTIONS
 * Demonstrates functions with parameters and return values
 */

// Function that takes parameters and returns a calculated value
function calculateSum(num1, num2) {
    const localResult = num1 + num2; // LOCAL SCOPE variable
    return localResult;
}

// Function with multiple parameters demonstrating different operations
function performCalculations(a, b) {
    const results = {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: b !== 0 ? (a / b).toFixed(2) : 'Cannot divide by zero',
        power: Math.pow(a, b)
    };
    return results; // RETURNING AN OBJECT
}

// Function demonstrating parameter validation and return values
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { error: 'Invalid input: Please provide a non-empty array' };
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    
    return {
        sum: sum,
        count: numbers.length,
        average: average.toFixed(2)
    };
}

/**
 * TEXT PROCESSING FUNCTIONS
 * Demonstrates string manipulation with parameters and returns
 */

// Function that processes text and returns multiple results
function analyzeText(text) {
    if (typeof text !== 'string') {
        return { error: 'Input must be a string' };
    }
    
    const wordCount = text.trim().split(/\s+/).length;
    const characterCount = text.length;
    const characterCountNoSpaces = text.replace(/\s/g, '').length;
    const reversed = text.split('').reverse().join('');
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    
    return {
        original: text,
        wordCount: wordCount,
        characterCount: characterCount,
        characterCountNoSpaces: characterCountNoSpaces,
        reversed: reversed,
        uppercase: uppercase,
        lowercase: lowercase
    };
}

// Function demonstrating text transformation with parameters
function transformText(text, transformation = 'capitalize') {
    switch (transformation) {
        case 'capitalize':
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        case 'title':
            return text.replace(/\w\S*/g, (txt) => 
                txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            );
        case 'alternate':
            return text.split('').map((char, index) => 
                index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
            ).join('');
        case 'reverse':
            return text.split('').reverse().join('');
        default:
            return text;
    }
}

/**
 * SCOPE DEMONSTRATION FUNCTIONS
 * Shows the difference between local and global scope
 */

function demonstrateLocalScope() {
    const localVariable = 'This is LOCAL to this function'; // LOCAL SCOPE
    let localCounter = 100; // LOCAL SCOPE
    
    // This function can access global variables
    globalCounter++; // ACCESSING GLOBAL SCOPE
    
    // Nested function demonstrating closure and scope
    function innerFunction() {
        const innerLocal = 'Inner function variable'; // INNER LOCAL SCOPE
        return `Inner: ${innerLocal}, Outer Local: ${localVariable}, Global Counter: ${globalCounter}`;
    }
    
    return {
        localVariable: localVariable,
        localCounter: localCounter,
        globalCounter: globalCounter,
        innerResult: innerFunction()
    };
}

// Function demonstrating parameter scope
function parameterScopeDemo(paramValue) {
    paramValue = paramValue + ' (modified in function)'; // PARAMETER IS LOCAL
    const functionLocal = 'Local to this function';
    
    return {
        modifiedParam: paramValue,
        localVar: functionLocal,
        globalAccess: `Global counter is: ${globalCounter}`
    };
}

/**
 * COLOR UTILITY FUNCTIONS
 * Reusable functions for color generation and manipulation
 */

// Function generating random color with parameters for format
function generateRandomColor(format = 'hex') {
    const randomValue = () => Math.floor(Math.random() * 256);
    
    switch (format) {
        case 'hex':
            return '#' + [randomValue(), randomValue(), randomValue()]
                .map(x => x.toString(16).padStart(2, '0')).join('');
        case 'rgb':
            return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
        case 'hsl':
            const h = Math.floor(Math.random() * 360);
            const s = Math.floor(Math.random() * 100);
            const l = Math.floor(Math.random() * 50) + 25; // Keep it readable
            return `hsl(${h}, ${s}%, ${l}%)`;
        default:
            return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
}

// Function that returns an array of colors
function createColorPalette(count = 5, format = 'hex') {
    const palette = [];
    for (let i = 0; i < count; i++) {
        palette.push(generateRandomColor(format));
    }
    return palette; // RETURNING AN ARRAY
}

// Function with color manipulation logic
function getContrastColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return contrasting color
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

// ===== EVENT HANDLER FUNCTIONS FOR PART 2 DEMONSTRATIONS =====

/**
 * Function to demonstrate calculations with user input
 */
function demonstrateCalculations() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const resultsDiv = document.getElementById('calculation-results');
    
    // Using our functions with parameters and return values
    const basicSum = calculateSum(num1, num2);
    const allCalculations = performCalculations(num1, num2);
    const averageResult = calculateAverage([num1, num2, (num1 + num2) / 2]);
    
    // Display results
    resultsDiv.innerHTML = `
        <strong>📊 Calculation Results:</strong><br>
        Basic Sum: ${basicSum}<br>
        All Operations: ${JSON.stringify(allCalculations, null, 2)}<br>
        Average Analysis: ${JSON.stringify(averageResult, null, 2)}
    `;
}

/**
 * Function to demonstrate text processing
 */
function demonstrateTextFunctions() {
    const text = document.getElementById('user-text').value || 'Hello World';
    const resultsDiv = document.getElementById('text-results');
    
    // Using our text processing functions
    const analysis = analyzeText(text);
    const transformed = {
        capitalize: transformText(text, 'capitalize'),
        title: transformText(text, 'title'),
        alternate: transformText(text, 'alternate'),
        reverse: transformText(text, 'reverse')
    };
    
    // Display results
    resultsDiv.innerHTML = `
        <strong>📝 Text Analysis:</strong><br>
        ${JSON.stringify(analysis, null, 2)}<br>
        <strong>🔄 Transformations:</strong><br>
        ${JSON.stringify(transformed, null, 2)}
    `;
}

/**
 * Function to demonstrate variable scope
 */
function demonstrateScope() {
    const resultsDiv = document.getElementById('scope-results');
    
    // Call functions that demonstrate scope
    const localScopeResult = demonstrateLocalScope();
    const paramScopeResult = parameterScopeDemo('Original parameter value');
    
    // Display scope demonstration
    resultsDiv.innerHTML = `
        <strong>🔍 Scope Demonstration:</strong><br>
        <strong>Local Scope Result:</strong><br>
        ${JSON.stringify(localScopeResult, null, 2)}<br>
        <strong>Parameter Scope Result:</strong><br>
        ${JSON.stringify(paramScopeResult, null, 2)}<br>
        <strong>Global Counter After Function Calls:</strong> ${globalCounter}
    `;
}

/**
 * Function to demonstrate color generation functions
 */
function generateRandomColors() {
    const paletteDiv = document.getElementById('color-palette');
    
    // Using our color functions
    const colorPalette = createColorPalette(6, 'hex');
    
    // Clear previous colors
    paletteDiv.innerHTML = '';
    
    // Create color swatches using returned values
    colorPalette.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color;
        swatch.style.color = getContrastColor(color);
        swatch.textContent = color;
        paletteDiv.appendChild(swatch);
        
        // Add hover animation
        swatch.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        swatch.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// ===== PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT =====

/**
 * ANIMATION TRIGGER FUNCTIONS
 * JavaScript functions that trigger CSS animations by manipulating classes
 */

// Function to trigger different animations on the animated box
function triggerAnimation(animationType) {
    const animatedBox = document.getElementById('animated-box');
    
    // Remove any existing animation classes
    resetAnimations();
    
    // Add the requested animation class after a small delay
    setTimeout(() => {
        animatedBox.classList.add(animationType);
    }, 50);
    
    // Remove animation class after animation completes
    setTimeout(() => {
        animatedBox.classList.remove(animationType);
    }, 1000);
}

// Function to reset all animations
function resetAnimations() {
    const animatedBox = document.getElementById('animated-box');
    animatedBox.classList.remove('bounce', 'shake', 'flip', 'glow');
}

/**
 * CARD FLIP ANIMATION CONTROLLER
 * Function that toggles CSS classes to trigger flip animation
 */
function flipCard() {
    const flipCard = document.getElementById('flip-card');
    flipCard.classList.toggle('flipped');
    
    // Optional: Change card content based on flip state
    const isFlipped = flipCard.classList.contains('flipped');
    console.log(`Card is now: ${isFlipped ? 'flipped' : 'normal'}`);
}

/**
 * MODAL ANIMATION SYSTEM
 * Functions that show/hide modals with different CSS animations
 */

// Function with parameters to show modal with different animation types
function showModal(animationType = 'fadeIn') {
    const modal = document.getElementById('animated-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    // Update modal content based on animation type
    modalTitle.textContent = `${animationType} Animation Modal`;
    modalText.textContent = `This modal appeared using the "${animationType}" animation effect! The animation is triggered by JavaScript adding CSS classes.`;
    
    // Remove any existing animation classes
    modal.classList.remove('slideIn', 'fadeIn', 'zoomIn');
    
    // Show modal and add animation class
    modal.classList.add('show', animationType);
    isModalOpen = true;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to hide modal with animation
function hideModal() {
    const modal = document.getElementById('animated-modal');
    
    // Remove show class to trigger hide animation
    modal.classList.remove('show');
    isModalOpen = false;
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    // Remove animation classes after transition
    setTimeout(() => {
        modal.classList.remove('slideIn', 'fadeIn', 'zoomIn');
    }, 300);
}

/**
 * LOADING ANIMATION CONTROLLERS
 * Functions that start/stop CSS animations dynamically
 */

// Function to start loading animation
function startLoading() {
    const spinner = document.getElementById('loading-spinner');
    const text = document.getElementById('loading-text');
    
    // Add CSS classes to trigger animations
    spinner.classList.add('active');
    text.classList.remove('complete');
    text.classList.add('loading');
    text.textContent = 'Loading... Please wait';
    
    // Store timeout ID in global scope for stopping
    loadingTimeoutId = setTimeout(() => {
        simulateComplete();
    }, 5000); // Auto complete after 5 seconds
}

// Function to stop loading animation
function stopLoading() {
    const spinner = document.getElementById('loading-spinner');
    const text = document.getElementById('loading-text');
    
    // Remove animation classes
    spinner.classList.remove('active');
    text.classList.remove('loading');
    text.textContent = 'Loading stopped by user';
    
    // Clear timeout if it exists
    if (loadingTimeoutId) {
        clearTimeout(loadingTimeoutId);
        loadingTimeoutId = null;
    }
}

// Function to simulate loading completion
function simulateComplete() {
    const spinner = document.getElementById('loading-spinner');
    const text = document.getElementById('loading-text');
    
    // Remove loading classes and add complete class
    spinner.classList.remove('active');
    text.classList.remove('loading');
    text.classList.add('complete');
    text.textContent = '✅ Loading Complete!';
    
    // Clear timeout
    if (loadingTimeoutId) {
        clearTimeout(loadingTimeoutId);
        loadingTimeoutId = null;
    }
    
    // Remove complete class after 3 seconds
    setTimeout(() => {
        text.classList.remove('complete');
        text.textContent = 'Ready to load again...';
    }, 3000);
}

/**
 * PARTICLE ANIMATION SYSTEM
 * Functions that create dynamic particles with CSS animations
 */

// Function that creates particles at specific coordinates
function createParticleBurst(x, y) {
    const container = document.getElementById('particle-container');
    const rect = container.getBoundingClientRect();
    
    // Create multiple particles
    for (let i = 0; i < 15; i++) {
        createParticle(x, y, container);
    }
}

// Helper function to create individual particle
function createParticle(x, y, container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position variation
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;
    
    particle.style.left = (x + offsetX) + 'px';
    particle.style.top = (y + offsetY) + 'px';
    
    // Random color
    particle.style.background = generateRandomColor('hex');
    
    // Add to container
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

// Function to clear all particles
function clearParticles() {
    const container = document.getElementById('particle-container');
    const particles = container.querySelectorAll('.particle');
    particles.forEach(particle => particle.remove());
}

// ===== EVENT LISTENERS AND INITIALIZATION =====

/**
 * Initialize all event listeners when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Particle container click event
    const particleContainer = document.getElementById('particle-container');
    particleContainer.addEventListener('click', function(event) {
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        createParticleBurst(x, y);
    });
    
    // Close modal when clicking outside
    const modal = document.getElementById('animated-modal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });
    
    // Keyboard event listeners
    document.addEventListener('keydown', function(event) {
        // Close modal with Escape key
        if (event.key === 'Escape' && isModalOpen) {
            hideModal();
        }
        
        // Trigger animations with number keys
        if (event.key >= '1' && event.key <= '4') {
            const animations = ['bounce', 'shake', 'flip', 'glow'];
            triggerAnimation(animations[parseInt(event.key) - 1]);
        }
    });
    
    // Initialize with some demo content
    console.log('🎉 Interactive animations loaded! Try the following:');
    console.log('- Press 1-4 keys to trigger box animations');
    console.log('- Press Escape to close modals');
    console.log('- Click in the particle area to create effects');
    
    // Demonstrate global scope by incrementing counter
    globalCounter = 42;
    console.log(`Global counter initialized to: ${globalCounter}`);
});

/**
 * UTILITY FUNCTIONS FOR ANIMATION MANAGEMENT
 * Reusable functions that can be called from multiple places
 */

// Function to check if element has specific class
function hasAnimationClass(elementId, className) {
    const element = document.getElementById(elementId);
    return element ? element.classList.contains(className) : false;
}

// Function to add multiple classes with delay
function addClassesWithDelay(elementId, classes, delay = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    classes.forEach((className, index) => {
        setTimeout(() => {
            element.classList.add(className);
        }, index * delay);
    });
}

// Function to remove multiple classes
function removeMultipleClasses(elementId, classes) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    classes.forEach(className => {
        element.classList.remove(className);
    });
}

// Function that returns animation duration based on animation type
function getAnimationDuration(animationType) {
    const durations = {
        'bounce': 600,
        'shake': 500,
        'flip': 800,
        'glow': 1000,
        'slideIn': 500,
        'fadeIn': 500,
        'zoomIn': 600
    };
    
    return durations[animationType] || 500;
}

// Show modal
document.getElementById('animated-modal').classList.add('active');

// Hide modal with fade
const modal = document.getElementById('animated-modal');
modal.classList.remove('active');
modal.classList.add('fade-out');
setTimeout(() => {
  modal.classList.remove('fade-out');
  modal.style.display = 'none';
}, 400); // Match transition duration

function showModal(animationType) {
    const modal = document.getElementById('animated-modal');
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'flex'; // Show modal overlay

    // Remove previous animation classes
    modalContent.classList.remove('slide-in', 'fade-in', 'zoom-in');

    // Add the requested animation class
    if (animationType === 'slideIn') {
        modalContent.classList.add('slide-in');
    } else if (animationType === 'fadeIn') {
        modalContent.classList.add('fade-in');
    } else if (animationType === 'zoomIn') {
        modalContent.classList.add('zoom-in');
    }
}

function hideModal() {
    const modal = document.getElementById('animated-modal');
    modal.style.display = 'none';
}


// Event listener for closing modal when clicking outside content
document.getElementById('animated-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        hideModal();
    }
});