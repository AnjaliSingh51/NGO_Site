        // Language Switcher
        function switchLanguage(lang) {
            const enElements = document.querySelectorAll('.en');
            const hiElements = document.querySelectorAll('.hi');
            
            if (lang === 'hi') {
                enElements.forEach(el => el.style.display = 'none');
                hiElements.forEach(el => el.style.display = 'block');
            } else {
                enElements.forEach(el => el.style.display = 'block');
                hiElements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
