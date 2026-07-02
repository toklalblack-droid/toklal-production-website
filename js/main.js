// ============================================
// TOK LAL PRODUCTION - MAIN JAVASCRIPT
// ============================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // ---------- 1. CARD CLICK ANIMATION ----------
    const cards = document.querySelectorAll('.gate-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add a "clicked" animation
            this.style.transform = 'scale(0.97)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // ---------- 2. HOVER GLOW EFFECT ----------
    const visitorCard = document.querySelector('.visitor-card');
    const userCard = document.querySelector('.user-card');
    const adminCard = document.querySelector('.admin-card');

    // Visitor card glow
    if (visitorCard) {
        visitorCard.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(212, 168, 67, 0.2)';
        });
        visitorCard.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    }

    // User card glow
    if (userCard) {
        userCard.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(52, 152, 219, 0.15)';
        });
        userCard.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    }

    // Admin card glow
    if (adminCard) {
        adminCard.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.05)';
        });
        adminCard.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    }

    // ---------- 3. KEYBOARD NAVIGATION ----------
    document.addEventListener('keydown', function(e) {
        // Press '1' for Visitor
        if (e.key === '1' && visitorCard) {
            visitorCard.click();
        }
        // Press '2' for User
        if (e.key === '2' && userCard) {
            userCard.click();
        }
        // Press '3' for Admin
        if (e.key === '3' && adminCard) {
            adminCard.click();
        }
    });

    // ---------- 4. FADE IN ANIMATION ----------
    const content = document.querySelector('.gate-content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'all 0.8s ease';

        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 300);
    }

    // ---------- 5. CONSOLE WELCOME ----------
    console.log('%c🎵 TOK LAL PRODUCTION', 'font-size: 24px; font-weight: bold; color: #d4a843;');
    console.log('%c"Melestarikan Warisan, Memodenkan Muzik"', 'font-size: 14px; color: #c4c4d4;');
    console.log('%cSelamat Datang!', 'font-size: 16px; color: #ffffff;');

});