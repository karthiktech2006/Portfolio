// ========================================
// KARTHIK PORTFOLIO - SMOOTH SCRIPTS
// Optimized for Mobile/GPU • Clean UX
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Particles (Lightweight config with brand colors)
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: window.innerWidth < 768 ? 30 : 60 },
                color: { value: ["#8f9c8f", "#6b5850", "#ebdcd0"] },
                shape: { type: "circle" },
                opacity: { value: 0.25 },
                size: { value: 3 },
                move: { speed: 1.2 }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: false }
                }
            },
            retina_detect: true
        });
    }

    // 2. Typing Animation
    const roles = [
        "Full-Stack Developer",
        "Python / Django Specialist",
        "AI / ML Enthusiast",
        "Flutter Mobile Developer"
    ];
    let i = 0, j = 0;
    const typingEl = document.getElementById('typing');
    
    if (typingEl) {
        function typeWriter() {
            if (j < roles[i].length) {
                typingEl.textContent += roles[i][j++];
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(deleteWriter, 2000);
            }
        }
        
        function deleteWriter() {
            if (j > 0) {
                typingEl.textContent = roles[i].substring(0, j-1);
                j--;
                setTimeout(deleteWriter, 40);
            } else {
                i = (i + 1) % roles.length;
                setTimeout(typeWriter, 400);
            }
        }
        typeWriter();
    }

    // 3. Smooth Scroll for Anchor Links & Sidebar Close on Mobile
    document.querySelectorAll('a[href^="#"], .sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle internal scrolling on current page
            if (href.startsWith('#') || href.includes('index.html#')) {
                const targetId = href.substring(href.indexOf('#'));
                const target = document.querySelector(targetId);
                
                if (target) {
                    e.preventDefault();
                    // Close sidebar if open on mobile
                    const sidebar = document.querySelector('.sidebar');
                    if (sidebar && sidebar.classList.contains('active')) {
                        sidebar.classList.remove('active');
                    }
                    
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // 4. Mobile Drawer Toggler (Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
        
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
            });
        }

        // Close sidebar on document clicks outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }

    // 5. Active Link Highlight on Scroll (Home Page only)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar a[href^="#"], .sidebar a[href^="index.html#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollPos = window.scrollY + 120; // offset for nav trigger

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                const cleanHref = href.substring(href.indexOf('#'));
                if (cleanHref === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // 6. Contact Form Submission via EmailJS (Unified Handler - Fixes form reset race condition)
    const contactForm = document.getElementById('contact-form');
    if (contactForm && typeof emailjs !== 'undefined') {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i class="bi bi-hourglass-split"></i>`;
            
            emailjs.sendForm(
                "service_zgpgruq",
                "template_extkx18",
                this
            ).then(function() {
                alert("Thank you! Message sent successfully ✅");
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                contactForm.reset();
            }, function(error) {
                alert("Oops! Failed to send message. Please try again ❌");
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                console.error("EmailJS Error:", error);
            });
        });
    }

    // 7. Skill Progress Animation (Visual Entry Effect)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target); // animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .cert-card, .project-card').forEach(el => {
        el.style.transform = 'translateY(25px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

});
