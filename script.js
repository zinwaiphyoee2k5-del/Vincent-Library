/* =========================================================== */
/* FILE: script.js - JavaScript Functions                     */
/* PURPOSE: Handles form submission on Contact page           */
/* FEATURES: Form validation, success message, form reset     */
/* =========================================================== */

// Wait for the entire page to finish loading before running code
document.addEventListener('DOMContentLoaded', function() {
    // ==================== CONTACT FORM HANDLING ====================
    // This code only runs on the Contact page where the form exists
    
    // Find the contact form by its ID (id="contactForm" in HTML)
    const contactForm = document.getElementById('contactForm');
    
    // Check if the form exists on this page
    if (contactForm) {
        // ========== FORM SUBMISSION EVENT ==========
        // Listen for when user submits the form (clicks "SEND MASSAGE" button)
        contactForm.addEventListener('submit', function(event) {
            
            // Prevent the default form behavior (page refresh)
            event.preventDefault();
            
            // ========== GET FORM DATA ==========
            // Get values from all three form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // ========== FORM VALIDATION ==========
            // Check if any field is empty
            if (!name || !email || !message) {
                // Show error message if any field is empty
                alert('Please fill in all fields.');
                return; // Stop execution here
            }
            
            // ========== FORM SUBMISSION (Simulated) ==========
            // In a real website, you would send data to a server here
            // For this project, we just log it to the console
            console.log('Form submitted:', { 
                name: name, 
                email: email, 
                message: message 
            });
            
            // ========== SUCCESS MESSAGE ==========
            // Show confirmation message to user
            alert('Thank you for your message! We will get back to you soon.');
            
            // ========== FORM RESET ==========
            // Clear all form fields after successful submission
            contactForm.reset();
        });
    }
    
    // ========== NOTE ABOUT NAVIGATION ==========
    // Navigation between pages works automatically with HTML links
    // No JavaScript is needed for basic page navigation
    // The CSS handles active page highlighting with the .active class
    
});