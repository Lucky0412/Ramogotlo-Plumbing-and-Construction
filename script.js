// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Update copyright year automatically
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// WhatsApp Quote Form (0782605900 -> 27782605900)
const WHATSAPP_NUMBER = '27782605900';
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
  // Pre-select service if passed via URL (?service=Plumbing or ?service=Construction)
  const params = new URLSearchParams(window.location.search);
  const preselectedService = params.get('service');
  const serviceSelect = document.getElementById('service');
  if (preselectedService && serviceSelect) {
    serviceSelect.value = preselectedService;
  }

  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);

    const message = encodeURIComponent(
      `*New Quote Request - Ramogotlo Plumbing & Construction*\n\n` +
      `*Name:* ${data.get('name')}\n` +
      `*Phone:* ${data.get('phone')}\n` +
      `*Email:* ${data.get('email') || 'Not provided'}\n` +
      `*Service:* ${data.get('service')}\n\n` +
      `*Project Details:*\n${data.get('details')}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  });
}