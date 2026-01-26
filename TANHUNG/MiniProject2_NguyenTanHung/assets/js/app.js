// 1. Reveal Animation (Bài 3)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Custom Cursor
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = outline.style.left = e.clientX + 'px';
    dot.style.top = outline.style.top = e.clientY + 'px';
});

// 3. Header Scroll Effect (Bài 1)
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});

// 4. Form Local Storage (Bài 4)
const contactForm = document.getElementById('mainForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            msg: document.getElementById('msg').value,
            date: new Date().toLocaleString()
        };
        localStorage.setItem('lead_contact', JSON.stringify(data));
        alert('Đã lưu thông tin của ' + data.name + ' vào bộ nhớ!');
        contactForm.reset();
    });
}