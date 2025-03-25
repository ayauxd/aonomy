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
    
    // Service Tabs
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceImage = document.getElementById('service-image');
    const serviceDescription = document.getElementById('service-description');
    
    if (serviceTabs.length > 0 && serviceImage && serviceDescription) {
        const serviceContent = {
            ocean: {
                image: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <rect width="800" height="400" fill="#003366" />
                    <path d="M0 300 Q 200 250 400 300 T 800 250" stroke="#FFFFFF" stroke-width="5" fill="none" opacity="0.3" />
                    <path d="M0 320 Q 200 280 400 320 T 800 280" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.2" />
                    <path d="M0 340 Q 200 310 400 340 T 800 310" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.1" />
                    <rect x="500" y="150" width="200" height="100" fill="#FFB81C" />
                    <rect x="550" y="100" width="100" height="50" fill="#FFB81C" />
                    <rect x="525" y="80" width="20" height="70" fill="#00A19A" />
                    <rect x="605" y="80" width="20" height="70" fill="#00A19A" />
                    <rect x="655" y="80" width="20" height="70" fill="#00A19A" />
                </svg>`,
                title: 'Ocean Freight',
                description: 'Our ocean freight services offer reliable and cost-effective solutions for shipping your cargo across the world\'s major shipping lanes. We provide FCL (Full Container Load) and LCL (Less than Container Load) options to meet your specific needs.',
                features: [
                    'Global coverage with competitive rates',
                    'FCL and LCL shipping options',
                    'Regular sailings on major trade lanes',
                    'End-to-end visibility and tracking'
                ]
            },
            air: {
                image: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <rect width="800" height="400" fill="#00A19A" />
                    <circle cx="150" cy="100" r="50" fill="#FFFFFF" opacity="0.2" />
                    <circle cx="650" cy="80" r="30" fill="#FFFFFF" opacity="0.1" />
                    <circle cx="400" cy="150" r="40" fill="#FFFFFF" opacity="0.15" />
                    <path d="M300 250 L500 250 L450 200 L350 200 Z" fill="#FFB81C" />
                    <path d="M350 200 L450 200 L400 150 Z" fill="#003366" />
                    <rect x="390" y="250" width="20" height="50" fill="#003366" />
                    <path d="M300 250 L350 300 L450 300 L500 250" fill="#FFB81C" />
                </svg>`,
                title: 'Air Freight',
                description: 'When time is of the essence, our air freight services provide the speed and reliability you need. We offer competitive rates and flexible solutions for all your air cargo requirements.',
                features: [
                    'Express and standard air freight options',
                    'Door-to-door and airport-to-airport services',
                    'Dangerous goods handling capabilities',
                    'Priority handling for urgent shipments'
                ]
            },
            road: {
                image: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <rect width="800" height="400" fill="#003366" />
                    <rect x="0" y="300" width="800" height="100" fill="#333333" />
                    <rect x="50" y="290" width="100" height="10" fill="#FFFFFF" />
                    <rect x="250" y="290" width="100" height="10" fill="#FFFFFF" />
                    <rect x="450" y="290" width="100" height="10" fill="#FFFFFF" />
                    <rect x="650" y="290" width="100" height="10" fill="#FFFFFF" />
                    <rect x="200" y="200" width="300" height="90" fill="#FFB81C" />
                    <rect x="500" y="220" width="100" height="70" fill="#FFB81C" />
                    <rect x="150" y="220" width="50" height="70" fill="#00A19A" />
                    <circle cx="200" cy="310" r="20" fill="#333333" />
                    <circle cx="500" cy="310" r="20" fill="#333333" />
                    <circle cx="550" cy="310" r="20" fill="#333333" />
                </svg>`,
                title: 'Road Freight',
                description: 'Our road freight services provide efficient and reliable transportation solutions within Nigeria and neighboring countries. We offer flexible options to meet your specific requirements.',
                features: [
                    'Full truckload (FTL) and less than truckload (LTL) options',
                    'Express delivery services',
                    'GPS tracking for real-time visibility',
                    'Specialized vehicles for different cargo types'
                ]
            },
            customs: {
                image: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <rect width="800" height="400" fill="#003366" />
                    <rect x="200" y="100" width="400" height="250" fill="#FFFFFF" opacity="0.9" />
                    <rect x="250" y="150" width="300" height="40" fill="#E5E5E5" />
                    <rect x="250" y="210" width="300" height="40" fill="#E5E5E5" />
                    <rect x="250" y="270" width="300" height="40" fill="#E5E5E5" />
                    <rect x="250" y="150" width="40" height="40" fill="#FFB81C" />
                    <rect x="250" y="210" width="40" height="40" fill="#FFB81C" />
                    <rect x="250" y="270" width="40" height="40" fill="#FFB81C" />
                    <rect x="500" y="150" width="50" height="40" fill="#00A19A" />
                    <rect x="500" y="210" width="50" height="40" fill="#00A19A" />
                    <rect x="500" y="270" width="50" height="40" fill="#00A19A" />
                </svg>`,
                title: 'Customs Clearance',
                description: 'Our customs clearance services ensure smooth navigation through customs procedures, handling all documentation and regulatory compliance to avoid delays and penalties.',
                features: [
                    'Import and export customs clearance',
                    'Documentation preparation and verification',
                    'Customs duty and tax calculation',
                    'Regulatory compliance management'
                ]
            },
            warehousing: {
                image: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <rect width="800" height="400" fill="#003366" />
                    <rect x="100" y="150" width="600" height="200" fill="#333333" />
                    <rect x="150" y="250" width="100" height="100" fill="#FFB81C" />
                    <rect x="350" y="250" width="100" height="100" fill="#FFB81C" />
                    <rect x="550" y="250" width="100" height="100" fill="#FFB81C" />
                    <rect x="150" y="200" width="100" height="50" fill="#00A19A" />
                    <rect x="350" y="200" width="100" height="50" fill="#00A19A" />
                    <rect x="550" y="200" width="100" height="50" fill="#00A19A" />
                    <rect x="150" y="150" width="100" height="50" fill="#FFB81C" />
                    <rect x="350" y="150" width="100" height="50" fill="#FFB81C" />
                    <rect x="550" y="150" width="100" height="50" fill="#FFB81C" />
                    <path d="M100 150 L400 50 L700 150" fill="#333333" />
                </svg>`,
                title: 'Warehousing & Contract Logistics',
                description: 'Our warehousing and contract logistics services provide flexible storage solutions and value-added services to optimize your supply chain operations.',
                features: [
                    'Short and long-term storage options',
                    'Inventory management',
                    'Pick and pack services',
                    'Distribution and fulfillment'
                ]
            }
        };
        
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                serviceTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get service type from data attribute
                const serviceType = this.getAttribute('data-service');
                
                // Update content based on service type
                if (serviceContent[serviceType]) {
                    const content = serviceContent[serviceType];
                    
                    // Update image
                    if (content.image.startsWith('<svg')) {
                        // For inline SVG
                        serviceImage.outerHTML = content.image;
                        // Re-assign serviceImage to the new SVG element
                        serviceImage = document.getElementById('service-image');
                    } else {
                        // For regular image src
                        serviceImage.src = content.image;
                        serviceImage.alt = content.title;
                    }
                    
                    // Update description
                    let featuresHTML = '<ul>';
                    content.features.forEach(feature => {
                        featuresHTML += `<li>${feature}</li>`;
                    });
                    featuresHTML += '</ul>';
                    
                    serviceDescription.innerHTML = `
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                        ${featuresHTML}
                        <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
                    `;
                }
            });
        });
    }
    
    // Quick Action Tabs
    const actionTabs = document.querySelectorAll('.tab');
    
    if (actionTabs.length > 0) {
        actionTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                actionTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Additional functionality can be added here
                // For example, showing different forms based on the selected tab
            });
        });
    }
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    if (testimonialSlides.length > 0 && testimonialDots.length > 0) {
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active class from all dots
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the selected slide
            testimonialSlides[index].classList.add('active');
            testimonialDots[index].classList.add('active');
            
            // Update current slide index
            currentSlide = index;
        }
        
        // Add click event to dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-rotate slides every 5 seconds
        setInterval(() => {
            let nextSlide = currentSlide + 1;
            if (nextSlide >= testimonialSlides.length) {
                nextSlide = 0;
            }
            showSlide(nextSlide);
        }, 5000);
    }
    
    // Chatbot Functionality
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotSend = document.getElementById('chatbot-send');
    
    if (chatbotButton && chatbotContainer && chatbotClose && chatbotMessages && chatbotInput && chatbotSend) {
        // Toggle chatbot visibility
        chatbotButton.addEventListener('click', function() {
            chatbotContainer.style.display = 'flex';
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
        });
        
        // Function to add a message to the chat
        function addMessage(message, isUser = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(isUser ? 'user' : 'bot');
            
            const messageText = document.createElement('p');
            messageText.textContent = message;
            
            messageElement.appendChild(messageText);
            chatbotMessages.appendChild(messageElement);
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        // Sample responses based on keywords
        const botResponses = {
            'track': 'To track your shipment, please enter your tracking number on our tracking page or provide it here and I can help you check the status.',
            'quote': 'To get a quote for your shipment, please provide details such as origin, destination, and type of goods. You can also use our quote form on the website.',
            'customs': 'Our customs clearance services ensure smooth navigation through customs procedures. We handle all documentation and regulatory compliance to avoid delays and penalties.',
            'verification': 'Our custom duty verification service helps you verify the genuineness of your custom papers in the shortest possible time. Please fill out the verification form on our website.',
            'contact': 'You can contact us via email at aonomyltd@gmail.com or call us at +2348061115769. Our offices are located in Lagos and Abuja.',
            'hello': 'Hello! How can I assist you with your logistics needs today?',
            'hi': 'Hi there! How can I help you today?',
            'thanks': 'You\'re welcome! Is there anything else I can help you with?',
            'thank you': 'You\'re welcome! Is there anything else I can help you with?'
        };
        
        // Function to get bot response
        function getBotResponse(userMessage) {
            userMessage = userMessage.toLowerCase();
            
            // Check for keywords in the user message
            for (const keyword in botResponses) {
                if (userMessage.includes(keyword)) {
                    return botResponses[keyword];
                }
            }
            
            // Default response if no keyword matches
            return "I'm here to help with your logistics needs. You can ask me about tracking, quotes, customs clearance, or how to contact us.";
        }
        
        // Send message when clicking the send button
        chatbotSend.addEventListener('click', function() {
            sendMessage();
        });
        
        // Send message when pressing Enter
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Function to send a message
        function sendMessage() {
            const message = chatbotInput.value.trim();
            
            if (message) {
                // Add user message
                addMessage(message, true);
                
                // Clear input
                chatbotInput.value = '';
                
                // Simulate bot thinking
                setTimeout(() => {
                    // Get and add bot response
                    const botResponse = getBotResponse(message);
                    addMessage(botResponse);
                }, 500);
            }
        }
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
});