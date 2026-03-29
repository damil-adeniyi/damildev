
function handleSubmit(e){
  e.preventDefault();
  const btn=e.target.querySelector('button[type="submit"]');
  const orig=btn.textContent;
  btn.textContent='Sent! ✓';btn.style.background='#2a6b44';
  setTimeout(()=>{btn.textContent=orig;btn.style.background=''},3000);
}
