/**
 * SmileWave Dental Clinic Website JS
 * vanilla JS, accessible, performance-oriented.
 */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initFAQAccordion();
    initTestimonialSlider();
    initScrollAnimations();
    initAppointmentForm();
    initBackToTop();
});

/**
 * 1. Sticky Header scroll behavior
 */
function initStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky-scrolled');
        } else {
            header.classList.remove('sticky-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/**
 * 2. Mobile Hamburger Drawer Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;

    const getFocusableElements = () => {
        return [menuToggle, ...navLinks.querySelectorAll('a, button, [tabindex="0"]')].filter(el => {
            return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
        });
    };

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        
        // Toggle body scroll to prevent background scrolling when menu is open
        document.body.style.overflow = isExpanded ? '' : 'hidden';

        if (!isExpanded) {
            // When opening, focus the first item inside nav links (or toggle button)
            const focusables = getFocusableElements();
            if (focusables.length > 1) {
                focusables[1].focus(); // Focus the first nav link
            }
        } else {
            menuToggle.focus();
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking navigation links
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside the menu container
    document.addEventListener('click', (e) => {
        const isOpen = navLinks.classList.contains('active');
        if (isOpen && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Handle accessibility keyboard navigation inside mobile drawer
    document.addEventListener('keydown', (e) => {
        const isOpen = navLinks.classList.contains('active');
        if (!isOpen) return;

        if (e.key === 'Escape') {
            toggleMenu();
            return;
        }

        if (e.key === 'Tab') {
            const focusables = getFocusableElements();
            if (focusables.length === 0) return;

            const firstEl = focusables[0];
            const lastEl = focusables[focusables.length - 1];

            if (e.shiftKey) {
                // Shift + Tab -> loop backwards
                if (document.activeElement === firstEl) {
                    lastEl.focus();
                    e.preventDefault();
                }
            } else {
                // Tab -> loop forwards
                if (document.activeElement === lastEl) {
                    firstEl.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/**
 * 3. Accessible FAQ Accordion
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');

        if (!trigger || !content) return;

        // Ensure proper ARIA defaults
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items first (optional, but standard for accordions)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherTrigger = otherItem.querySelector('.faq-trigger');
                    const otherContent = otherItem.querySelector('.faq-content');
                    if (otherTrigger && otherContent) {
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        otherContent.setAttribute('aria-hidden', 'true');
                        otherContent.style.maxHeight = null;
                    }
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

/**
 * 4. Lightweight Testimonial Slider
 */
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
    const nextBtn = document.querySelector('.testimonial-nav-btn.next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    const updateSlider = (index) => {
        currentIndex = index;
        
        // Keep bounds
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));
    }

    // Optional autoplay
    let interval = setInterval(() => updateSlider(currentIndex + 1), 6000);

    const resetAutoplay = () => {
        clearInterval(interval);
        interval = setInterval(() => updateSlider(currentIndex + 1), 6000);
    };

    [prevBtn, nextBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', resetAutoplay);
    });
}

/**
 * 5. Scroll Animations with Intersection Observer
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    // Check for reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * 6. Appointment Enquiry Form Validation
 */
function initAppointmentForm() {
    const form = document.querySelector('#appointmentForm');
    if (!form) return;

    const nameInput = form.querySelector('#fullName');
    const phoneInput = form.querySelector('#phone');
    const emailInput = form.querySelector('#email');
    const serviceSelect = form.querySelector('#service');
    const dateInput = form.querySelector('#prefDate');
    const consentCheck = form.querySelector('#consent');
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');

    // Prevent past dates in preferred date picker
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Helper functions for validating fields
    const setError = (input, message) => {
        input.classList.add('input-error');
        let errorSpan = input.parentNode.querySelector('.error-text');
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-text';
            input.parentNode.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
    };

    const clearError = (input) => {
        input.classList.remove('input-error');
        const errorSpan = input.parentNode.querySelector('.error-text');
        if (errorSpan) {
            errorSpan.remove();
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // 1. Full name validation
        if (!nameInput.value.trim()) {
            setError(nameInput, 'Full name is required');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // 2. Indian Phone number validation (+91/0 and 10 digits starting with 6-9)
        const phoneVal = phoneInput.value.trim().replace(/\s+/g, '');
        const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
        if (!phoneVal) {
            setError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!phoneRegex.test(phoneVal)) {
            setError(phoneInput, 'Please enter a valid 10-digit Indian phone number');
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        // 3. Email validation (optional but format checks if supplied)
        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailVal && !emailRegex.test(emailVal)) {
            setError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // 4. Service validation
        if (!serviceSelect.value) {
            setError(serviceSelect, 'Please select a service');
            isValid = false;
        } else {
            clearError(serviceSelect);
        }

        // 5. Preferred date validation
        if (!dateInput.value) {
            setError(dateInput, 'Preferred date is required');
            isValid = false;
        } else {
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                setError(dateInput, 'Preferred date cannot be in the past');
                isValid = false;
            } else {
                clearError(dateInput);
            }
        }

        // 6. Consent validation
        if (!consentCheck.checked) {
            setError(consentCheck, 'You must consent to be contacted');
            isValid = false;
        } else {
            clearError(consentCheck);
        }

        // Show result feedback
        if (isValid) {
            // Hide error feedback banner
            if (errorMsg) errorMsg.style.display = 'none';

            // Gather data for extension/analytics hook
            const formData = {
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput.value.trim(),
                patientType: form.querySelector('#patientType') ? form.querySelector('#patientType').value : '',
                service: serviceSelect.value,
                date: dateInput.value,
                time: form.querySelector('#prefTime') ? form.querySelector('#prefTime').value : '',
                message: form.querySelector('#message') ? form.querySelector('#message').value : '',
                timestamp: new Date().toISOString()
            };

            if (successMsg) {
                successMsg.textContent = 'Thank you. Opening WhatsApp so the clinic can confirm your slot.';
                successMsg.style.display = 'block';
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            var waText = encodeURIComponent(
                'Hello SmileWave, I would like to book an appointment.\n' +
                'Name: ' + formData.name + '\n' +
                'Phone: ' + formData.phone + '\n' +
                (formData.email ? 'Email: ' + formData.email + '\n' : '') +
                (formData.patientType ? 'Patient: ' + formData.patientType + '\n' : '') +
                'Service: ' + formData.service + '\n' +
                'Preferred date: ' + formData.date +
                (formData.time ? '\nTime: ' + formData.time : '') +
                (formData.message ? '\nNotes: ' + formData.message : '')
            );

            window.setTimeout(function () {
                window.open('https://wa.me/919769311848?text=' + waText, '_blank', 'noopener');
            }, 600);

            form.reset();
        } else {
            if (errorMsg) {
                errorMsg.textContent = 'Please check the form for errors and try again.';
                errorMsg.style.display = 'block';
                errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            if (successMsg) successMsg.style.display = 'none';
        }
    });

    // Real-time input error clearing on interaction
    [nameInput, phoneInput, emailInput, serviceSelect, dateInput, consentCheck].forEach(input => {
        if (input) {
            input.addEventListener('input', () => clearError(input));
            input.addEventListener('change', () => clearError(input));
        }
    });
}

/**
 * 7. Scroll to Top button behavior
 */
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
