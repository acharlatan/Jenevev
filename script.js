const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
const service = document.querySelector('#service');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const draftDialog = document.querySelector('#draft-dialog');
const faqDialog = document.querySelector('#faq-dialog');
const draftText = document.querySelector('#draft-text');
const copyStatus = document.querySelector('#copy-status');

function closeMenu() {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    service.value = button.dataset.service;
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
    service.focus({ preventScroll: true });
  });
});

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const lines = ['ORBIT NAIL STUDIO — VISIT DRAFT', `Service: ${service.value}`];
  if (date.value) {
    const [year, month, day] = date.value.split('-').map(Number);
    lines.push(`Preferred date: ${new Date(year, month - 1, day).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`);
  }
  if (time.value) lines.push(`Preferred time: ${time.value}`);
  lines.push('', 'Draft only. This is not a booking or a sent request.');
  draftText.value = lines.join('\n');
  copyStatus.textContent = 'A booking contact has not been set up yet.';
  draftDialog.showModal();
});

document.querySelector('#copy-draft').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(draftText.value);
    copyStatus.textContent = 'Draft copied. It has not been sent or booked.';
  } catch {
    draftText.focus();
    draftText.select();
    copyStatus.textContent = 'Select and copy the draft above. It has not been sent or booked.';
  }
});
document.querySelectorAll('[data-open-faq]').forEach(button => button.addEventListener('click', () => { closeMenu(); faqDialog.showModal(); }));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));
