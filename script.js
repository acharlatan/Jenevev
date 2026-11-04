const form = document.querySelector('#plan');
const service = document.querySelector('#service');
const dialog = document.querySelector('#draft');
const result = document.querySelector('#result');
const copyStatus = document.querySelector('#copy-status');
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  service.value = button.dataset.service;
  document.querySelector('#booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
  service.focus({ preventScroll: true });
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const items = [['Service','service'], ['Length','length'], ['Shape','shape'], ['Design','design'], ['Removal','removal'], ['Preferred date','date'], ['Preferred time','time'], ['Ideas','notes']];
  result.value = ['JENEVEV — MY VISIT DRAFT', ...items.filter(([,key]) => data.get(key)).map(([label,key]) => `${label}: ${data.get(key)}`), '', 'Planning only. No request sent or appointment booked.'].join('\n');
  copyStatus.textContent = 'Keep it handy for when booking opens.';
  dialog.showModal();
});
document.querySelector('#close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(result.value); copyStatus.textContent = 'Copied. This draft has not been sent or booked.'; }
  catch { result.focus(); result.select(); copyStatus.textContent = 'Select and copy the draft above.'; }
});
