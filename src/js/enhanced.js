/**
 * Aonomy - Enhanced JavaScript
 * Handles interactivity for the enhanced Aonomy website
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
    
    // Service Tabs with Real Images
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceImageContainer = document.getElementById('service-image-container');
    const serviceImage = document.getElementById('service-image');
    const serviceDescription = document.getElementById('service-description');
    
    if (serviceTabs.length > 0 && serviceImage && serviceDescription) {
        const serviceContent = {
            ocean: {
                image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
                image: 'https://images.unsplash.com/photo-1583722276128-fad64d6e0e1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
                image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
                image: 'https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
                image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
                    serviceImage.src = content.image;
                    serviceImage.alt = content.title;
                    
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
    
    // Chevy Chatbot Functionality
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotSend = document.getElementById('chatbot-send');
    const heroChatbotCta = document.getElementById('hero-chatbot-cta');
    
    if (chatbotButton && chatbotContainer && chatbotClose && chatbotMessages && chatbotInput && chatbotSend) {
        // Toggle chatbot visibility
        chatbotButton.addEventListener('click', function() {
            chatbotContainer.style.display = 'flex';
        });
        
        // Hero CTA for chatbot
        if (heroChatbotCta) {
            heroChatbotCta.addEventListener('click', function() {
                chatbotContainer.style.display = 'flex';
            });
        }
        
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
            'hello': 'Hello! I\'m Chevy, your logistics assistant. How can I help you today?',
            'hi': 'Hi there! I\'m Chevy, your logistics assistant. How can I help you today?',
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
            return "I'm Chevy, your logistics assistant. I'm here to help with tracking, quotes, customs clearance, or how to contact us.";
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