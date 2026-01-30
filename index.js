// Small interactions and progressive enhancement
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  // Placeholder behavior: show success message.
  // Connect to Formspree or Netlify Forms for real submissions.
  status.textContent = 'Merci — message simulé envoyé. Configure un service pour l\'envoi réel.';
  form.reset();
});
