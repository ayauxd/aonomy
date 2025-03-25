/**
 * Aonomy - Main JavaScript
 * Handles interactivity for the Aonomy website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Form Validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredInputs = form.querySelectorAll('input[required]');
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    showError(input, 'This field is required');
                } else {
                    clearError(input);
                    
                    // Email validation
                    if (input.type === 'email' && !isValidEmail(input.value)) {
                        isValid = false;
                        showError(input, 'Please enter a valid email address');
                    }
                    
                    // Confirm email validation
                    if (input.id === 'confirmEmail') {
                        const emailInput = document.getElementById('email');
                        if (emailInput && input.value !== emailInput.value) {
                            isValid = false;
                            showError(input, 'Email addresses do not match');
                        }
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            } else {
                // For demo purposes, prevent actual form submission and show success message
                e.preventDefault();
                showSuccessMessage(form);
            }
        });
    });
    
    // Tracking Form Functionality
    const trackingForm = document.querySelector('.tracking-form');
    
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const trackingInput = this.querySelector('input');
            
            if (trackingInput && trackingInput.value.trim()) {
                // For demo purposes, show a mock tracking result
                showTrackingResult(trackingInput.value);
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Helper Functions

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Shows error message for an input
 * @param {HTMLElement} input - The input element
 * @param {string} message - The error message
 */
function showError(input, message) {
    // Clear any existing error
    clearError(input);
    
    // Create error element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--error)';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    // Add error styling to input
    input.style.borderColor = 'var(--error)';
    
    // Insert error message after input
    input.parentNode.insertBefore(errorElement, input.nextSibling);
}

/**
 * Clears error message for an input
 * @param {HTMLElement} input - The input element
 */
function clearError(input) {
    // Remove error styling
    input.style.borderColor = '';
    
    // Remove error message if exists
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.className === 'error-message') {
        errorElement.remove();
    }
}

/**
 * Shows success message after form submission
 * @param {HTMLElement} form - The form element
 */
function showSuccessMessage(form) {
    // Clear form
    form.reset();
    
    // Create success message
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = 'Form submitted successfully! We will get back to you soon.';
    successElement.style.backgroundColor = 'var(--success)';
    successElement.style.color = 'white';
    successElement.style.padding = '1rem';
    successElement.style.borderRadius = 'var(--border-radius-md)';
    successElement.style.marginTop = '1rem';
    
    // Add success message to form
    form.appendChild(successElement);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

/**
 * Shows mock tracking result
 * @param {string} trackingNumber - The tracking number
 */
function showTrackingResult(trackingNumber) {
    // Create mock tracking data
    const trackingData = {
        number: trackingNumber,
        status: 'In Transit',
        origin: 'Lagos, Nigeria',
        destination: 'Abuja, Nigeria',
        estimatedDelivery: '2025-03-26',
        updates: [
            { date: '2025-03-24', time: '08:30', location: 'Lagos', status: 'Package received' },
            { date: '2025-03-24', time: '14:45', location: 'Lagos', status: 'Package processed' },
            { date: '2025-03-24', time: '18:20', location: 'Lagos', status: 'In transit to destination' }
        ]
    };
    
    // Create tracking result element
    const trackingResultElement = document.createElement('div');
    trackingResultElement.className = 'tracking-result';
    trackingResultElement.style.backgroundColor = 'white';
    trackingResultElement.style.padding = '1.5rem';
    trackingResultElement.style.borderRadius = 'var(--border-radius-lg)';
    trackingResultElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    trackingResultElement.style.marginTop = '1.5rem';
    
    // Create tracking result content
    trackingResultElement.innerHTML = `
        <h3>Tracking Information</h3>
        <p><strong>Tracking Number:</strong> ${trackingData.number}</p>
        <p><strong>Status:</strong> <span style="color: var(--accent-color); font-weight: bold;">${trackingData.status}</span></p>
        <p><strong>Origin:</strong> ${trackingData.origin}</p>
        <p><strong>Destination:</strong> ${trackingData.destination}</p>
        <p><strong>Estimated Delivery:</strong> ${formatDate(trackingData.estimatedDelivery)}</p>
        
        <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Shipment Progress</h4>
        <div class="shipment-timeline">
            ${trackingData.updates.map(update => `
                <div class="timeline-item" style="padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--medium-gray);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-weight: bold;">${update.date} ${update.time}</span>
                        <span>${update.location}</span>
                    </div>
                    <div>${update.status}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Find hero tracking section
    const heroTracking = document.querySelector('.hero-tracking');
    
    // Remove any existing tracking result
    const existingResult = document.querySelector('.tracking-result');
    if (existingResult) {
        existingResult.remove();
    }
    
    // Add tracking result to hero tracking section
    if (heroTracking) {
        heroTracking.appendChild(trackingResultElement);
    }
}

/**
 * Formats date string to readable format
 * @param {string} dateString - The date string in YYYY-MM-DD format
 * @returns {string} - Formatted date string
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add mobile menu styles that will be toggled with JavaScript
document.head.insertAdjacentHTML('beforeend', `
<style>
    @media (max-width: 991px) {
        .main-nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--white);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            display: none;
        }
        
        .main-nav.active {
            display: block;
        }
        
        .nav-list {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding: 0.5rem 0 0.5rem 1rem;
            display: none;
        }
        
        .dropdown.active .dropdown-menu {
            display: block;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    }
</style>
`);