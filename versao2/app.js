
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-filter]').forEach(btn=>{btn.addEventListener('click', ()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const value=btn.dataset.filter;document.querySelectorAll('[data-card]').forEach(card=>{card.style.display=(value==='all'||card.dataset.card===value)?'':'none';});});});
const root=document.documentElement;
window.addEventListener('mousemove',(e)=>{root.style.setProperty('--mx',((e.clientX/innerWidth)*100).toFixed(2));root.style.setProperty('--my',((e.clientY/innerHeight)*100).toFixed(2));});
const parallax=document.querySelector('.hero-visual');
if(parallax){parallax.addEventListener('mousemove',(e)=>{const r=parallax.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/r.width;const y=(e.clientY-r.top-r.height/2)/r.height;parallax.style.transform=`perspective(1200px) rotateY(${x*5}deg) rotateX(${y*-5}deg)`;});parallax.addEventListener('mouseleave',()=>{parallax.style.transform='perspective(1200px) rotateY(0) rotateX(0)';});}
document.querySelectorAll('.pack-card,.pack-main,.editorial-card,.story-card,.quote-card').forEach(card=>{card.addEventListener('mousemove',(e)=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/r.width;const y=(e.clientY-r.top-r.height/2)/r.height;card.style.transform=`translateY(-8px) rotateY(${x*4}deg) rotateX(${y*-4}deg)`;});card.addEventListener('mouseleave',()=>{card.style.transform='';});});
const openers=document.querySelectorAll('[data-open-login]'); const closers=document.querySelectorAll('[data-close-login]'); const modal=document.querySelector('[data-login-modal]');
openers.forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();modal.classList.add('open');document.body.style.overflow='hidden';}));
closers.forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();modal.classList.remove('open');document.body.style.overflow='';}));
if(modal){modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');document.body.style.overflow='';}});}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal&&modal.classList.contains('open')){modal.classList.remove('open');document.body.style.overflow='';}});




function initHeroBannerRotator(){
  const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
  const prev = document.querySelector('.hero-banner-prev');
  const next = document.querySelector('.hero-banner-next');
  if (!slides.length || !prev || !next) return;

  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current < 0) current = 0;

  function showHeroSlide(index){
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  prev.addEventListener('click', () => showHeroSlide(current - 1));
  next.addEventListener('click', () => showHeroSlide(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showHeroSlide(i)));
}
window.addEventListener('load', initHeroBannerRotator);




/* Hero banner com transição sutil */
(function(){
  const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
  const prev = document.querySelector('.hero-banner-prev');
  const next = document.querySelector('.hero-banner-next');
  if (!slides.length || !prev || !next) return;

  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current < 0) current = 0;
  let animating = false;

  function syncHero(idx){
    if (animating) return;
    animating = true;
    current = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    setTimeout(()=>{ animating = false; }, 520);
  }

  prev.addEventListener('click', () => syncHero(current - 1));
  next.addEventListener('click', () => syncHero(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => syncHero(i)));
})();
