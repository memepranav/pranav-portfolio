document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to tech cards
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 100);
            
            // Show language info
            const language = this.querySelector('h3').textContent;
            showLanguageInfo(language);
        });
    });
    
    // Add hover effects to container
    const container = document.querySelector('.container');
    
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

function showMessage() {
    const languages = ['Python', 'HTML', 'CSS', 'C', 'C++'];
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    
    alert(`🚀 Proficient in ${randomLang} and ${languages.length - 1} other languages!\n\nClick on any language card to learn more!`);
}

function showLanguageInfo(language) {
    const info = {
        'Python': '🐍 Used for data science, web development, automation, and AI/ML projects.',
        'HTML': '🌐 The foundation of web development - structuring content and creating semantic markup.',
        'CSS': '🎨 Bringing designs to life with animations, responsive layouts, and modern styling.',
        'C': '⚡ Low-level programming for system development, embedded systems, and performance-critical applications.',
        'C++': '🔧 Object-oriented programming for game development, desktop applications, and competitive programming.'
    };
    
    const message = info[language] || 'Programming language expertise!';
    
    // Create a custom notification
    showNotification(`${language}: ${message}`);
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 300px;
        font-size: 0.9rem;
        line-height: 1.4;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 4000);
}