document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Закрыть меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Плавная прокрутка для всех якорных ссылок
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем высоту фиксированного header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками пород
    const breedCards = document.querySelectorAll('.breed-card');
    breedCards.forEach(card => {
        observer.observe(card);
    });
    
    // Наблюдаем за карточками советов
    const careCards = document.querySelectorAll('.care-card');
    careCards.forEach(card => {
        observer.observe(card);
    });
});
// ========== ДОПОЛНИТЕЛЬНЫЙ КОД ДЛЯ АДАПТИВНОСТИ ==========

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(event.target) && 
        !navToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

// Управление состоянием body при открытии/закрытии меню
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            const isActive = navMenu.classList.contains('active');
            if (isActive) {
                document.body.classList.remove('menu-open');
            } else {
                document.body.classList.add('menu-open');
            }
        }
    });
}

// Плавное появление элементов при скролле
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    const cards = document.querySelectorAll('.breed-card, .care-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Запускаем анимации при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

// Исправление для якорных ссылок на мобильных (закрытие меню)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
