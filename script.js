// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Navbar background change on scroll
    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        if (window.scrollY > 50) {
            if (isDarkTheme) {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }
        } else {
            if (isDarkTheme) {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = 'none';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    }
    
    window.addEventListener('scroll', updateNavbarBackground);
    
    // ===== SCROLL ANIMATIONS =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.timeline-item, .skill-item, .contact-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize scroll animations
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.timeline-item, .skill-item, .contact-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    }
    
    initScrollAnimations();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // ===== TYPING EFFECT FOR HERO SUBTITLE =====
    function typeWriter() {
        const subtitle = document.querySelector('.hero-subtitle');
        const text = 'Executive Director - CBGA';
        const speed = 100;
        let i = 0;
        
        subtitle.textContent = '';
        
        function type() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(type, 1000);
    }
    
    // Initialize typing effect
    typeWriter();
    
    // ===== PARALLAX EFFECT FOR HERO SECTION =====
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // ===== THEME TOGGLE ===== 
    function initializeThemeToggle() {
        console.log('Initializing theme toggle button...');
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (!themeToggle) {
            console.error('Theme toggle button not found!');
            return;
        }
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const icon = this.querySelector('i');
            
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
                this.setAttribute('title', 'Switch to light theme');
                localStorage.setItem('theme', 'dark');
                
                // Add a subtle animation
                this.style.transform = 'rotate(180deg) scale(1.1)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            } else {
                icon.className = 'fas fa-moon';
                this.setAttribute('title', 'Switch to dark theme');
                localStorage.setItem('theme', 'light');
                
                // Add a subtle animation
                this.style.transform = 'rotate(-180deg) scale(1.1)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            }
            
            // Update navbar background after theme change
            updateNavbarBackground();
        });
        
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-theme');
            themeToggle.querySelector('i').className = 'fas fa-sun';
            themeToggle.setAttribute('title', 'Switch to light theme');
        }
        
        // Update navbar background after initial theme is set
        setTimeout(() => {
            updateNavbarBackground();
        }, 100);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    document.body.classList.add('dark-theme');
                    themeToggle.querySelector('i').className = 'fas fa-sun';
                    themeToggle.setAttribute('title', 'Switch to light theme');
                } else {
                    document.body.classList.remove('dark-theme');
                    themeToggle.querySelector('i').className = 'fas fa-moon';
                    themeToggle.setAttribute('title', 'Switch to dark theme');
                }
                // Update navbar background after system theme change
                updateNavbarBackground();
            }
        });
        
        console.log('Theme toggle button initialized successfully');
    }
    
    // Initialize theme toggle
    console.log('About to initialize theme toggle...');
    initializeThemeToggle();
    
    // ===== RESUME PDF HANDLING =====
    function handleResumeViewer() {
        const resumeIframe = document.querySelector('.pdf-viewer iframe');
        const downloadBtn = document.querySelector('.resume-header .btn');
        
        // Handle iframe load error
        if (resumeIframe) {
            resumeIframe.addEventListener('error', function() {
                const pdfViewer = document.querySelector('.pdf-viewer');
                pdfViewer.innerHTML = `
                    <div style="padding: 2rem; text-align: center; color: var(--text-light);">
                        <i class="fas fa-file-pdf" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
                        <p>PDF preview is not available in this browser.</p>
                        <p>Please use the download button above to view the resume.</p>
                    </div>
                `;
            });
        }
        
        // Add loading state to download button
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            });
        }
    }
    
    handleResumeViewer();
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        updateNavbarBackground();
        animateOnScroll();
        parallaxEffect();
    }, 10);
    
    // Replace direct scroll listeners with debounced version
    window.removeEventListener('scroll', updateActiveNavLink);
    window.removeEventListener('scroll', updateNavbarBackground);
    window.removeEventListener('scroll', animateOnScroll);
    window.removeEventListener('scroll', parallaxEffect);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // ===== PDF VIEWER ENHANCEMENT =====
    function initializePDFViewer() {
        const pdfIframe = document.querySelector('.pdf-viewer iframe');
        if (pdfIframe) {
            // Handle different browsers and their PDF viewing capabilities
            pdfIframe.onload = function() {
                // Try to set zoom to fit width after load
                try {
                    const iframeDoc = pdfIframe.contentDocument || pdfIframe.contentWindow.document;
                    if (iframeDoc) {
                        // Add some styling to improve PDF display
                        const style = iframeDoc.createElement('style');
                        style.textContent = 'body { margin: 0; padding: 0; }';
                        iframeDoc.head.appendChild(style);
                    }
                } catch (e) {
                    // Cross-origin restrictions prevent access, which is expected
                    console.log('PDF viewer loaded successfully');
                }
            };
            
            // Handle responsive resizing
            window.addEventListener('resize', function() {
                // Trigger iframe reflow
                const currentSrc = pdfIframe.src;
                setTimeout(function() {
                    pdfIframe.src = currentSrc;
                }, 100);
            });
        }
    }
    
    // Initialize PDF viewer
    initializePDFViewer();
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Keyboard navigation for mobile menu
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Focus management for mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.focus();
        }
    });
    
    console.log('Professional portfolio website initialized successfully!');
});
