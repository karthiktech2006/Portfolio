// ========================================
// KARTHIK PORTFOLIO - SMOOTH SCRIPTS
// Optimized for Mobile/GPU • No Lag
// ========================================

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Particles (Lightweight config)
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: window.innerWidth < 768 ? 40 : 60 },
                color: { value: ["#ff6b9d","#4ecdc4","#a8e6cf"] },
                shape: { type: "circle" },
                opacity: { value: 0.4 },
                size: { value: 3 },
                move: { speed: 1 }
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
        "Full Stack Developer",
        "AI/ML Enthusiast",
        "Flutter Developer", 
        "Open Source Contributor"
    ];
    let i = 0, j = 0;
    const typingEl = document.getElementById('typing');
    
    function typeWriter() {
        if (j < roles[i].length) {
            typingEl.textContent += roles[i][j++];
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(deleteWriter, 1500);
        }
    }
    
    function deleteWriter() {
        if (j > 0) {
            typingEl.textContent = roles[i].substring(0, j-1);
            j--;
            setTimeout(deleteWriter, 50);
        } else {
            i = (i + 1) % roles.length;
            setTimeout(typeWriter, 500);
        }
    }
    typeWriter();

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 4. Form Submit
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form handler here
            alert('Thank you! Message sent successfully 🚀');
            form.reset();
        });
    }

    // 5. Skill Progress Animation (On Scroll)
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe skill cards and certs
    document.querySelectorAll('.skill-card, .cert-card').forEach(el => {
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // 6. Mobile Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 900) {
        sidebar.style.width = '70px';
    }
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 900) {
            sidebar.style.width = '70px';
        } else {
            sidebar.style.width = '90px';
        }
    });

});


document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_zgpgruq",
        "template_extkx18",
        this
    ).then(function() {
        alert("Message sent successfully ✅");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message ❌");
        console.error(error);
    });
});


  // Disable right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
   
  });

  // Disable key shortcuts
  document.addEventListener('keydown', function (e) {

    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
      e.preventDefault();
      return false;
    }

    // Ctrl + U (view source)
    if (e.ctrlKey && e.key.toUpperCase() === 'U') {
      e.preventDefault();
      return false;
    }
  });


