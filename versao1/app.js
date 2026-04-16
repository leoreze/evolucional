
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); }});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    document.querySelectorAll('[data-card]').forEach(card=>{
      card.style.display = (value === 'all' || card.dataset.card === value) ? '' : 'none';
    });
  });
});

const root = document.documentElement;
window.addEventListener('mousemove', (e)=>{
  root.style.setProperty('--mx', ((e.clientX / innerWidth) * 100).toFixed(2));
  root.style.setProperty('--my', ((e.clientY / innerHeight) * 100).toFixed(2));
});

const parallax = document.querySelector('.hero-visual');
if(parallax){
  parallax.addEventListener('mousemove', (e)=>{
    const r = parallax.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    parallax.style.transform = `perspective(1200px) rotateY(${x*5}deg) rotateX(${y*-5}deg)`;
  });
  parallax.addEventListener('mouseleave', ()=>{ parallax.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)'; });
}

document.querySelectorAll('.pack-card,.pack-main,.editorial-card,.story-card,.quote-card').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    card.style.transform = `translateY(-8px) rotateY(${x*4}deg) rotateX(${y*-4}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
});

const openers = document.querySelectorAll('[data-open-login]');
const closers = document.querySelectorAll('[data-close-login]');
const modal = document.querySelector('[data-login-modal]');
openers.forEach(btn=>btn.addEventListener('click', e=>{ e.preventDefault(); modal.classList.add('open'); document.body.style.overflow='hidden'; }));
closers.forEach(btn=>btn.addEventListener('click', e=>{ e.preventDefault(); modal.classList.remove('open'); document.body.style.overflow=''; }));
if(modal){
  modal.addEventListener('click', e=>{ if(e.target===modal){ modal.classList.remove('open'); document.body.style.overflow=''; }});
}
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && modal.classList.contains('open')){ modal.classList.remove('open'); document.body.style.overflow=''; }});
