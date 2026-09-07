
window.addEventListener('load', function(){
  const intro = document.getElementById('intro');
  const welcome = document.getElementById('welcome-wrap');
  if(!intro || !welcome) return;

  document.body.style.overflow = 'hidden'; 

  setTimeout(() => { welcome.classList.add('slide'); }, 500);   
  setTimeout(() => { intro.classList.add('opening'); }, 2000);  
  setTimeout(() => {
    intro.style.display = 'none';
    document.body.style.overflow = '';
  }, 4000); 
});

let currentItems = [];
let currentIndex = 0;
function switchTab(name, btn){
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}


function openGallery(items, title, type){
  currentItems = items;
  const grid = document.getElementById('lightbox-grid');
  grid.className = 'lightbox-grid ' + (type === 'web' ? 'web-grid' : 'mobile-grid');
  grid.innerHTML = '';
  items.forEach((item, i) => {
    let el;
    if(item.type === 'video'){
      el = document.createElement('video');
      el.src = item.src;
      el.controls = true;
    } else {
      el = document.createElement('img');
      el.src = item.src;
      el.alt = title;
      el.onclick = () => openViewer(i);
    }
    grid.appendChild(el);
  });
  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox').classList.add('active');
}
function closeGallery(){
  document.getElementById('lightbox').classList.remove('active');
  document.querySelectorAll('#lightbox-grid video').forEach(v => v.pause());
}
document.getElementById('lightbox').addEventListener('click', function(e){ if(e.target === this) closeGallery(); });

function openViewer(index){
  currentIndex = index;
  renderViewer();
  document.getElementById('viewer').classList.add('active');
}
function renderViewer(){
  const item = currentItems[currentIndex];
  const content = document.getElementById('viewer-content');
  content.innerHTML = '';
  let el;
  if(item.type === 'video'){
    el = document.createElement('video');
    el.src = item.src; el.controls = true; el.autoplay = true;
  } else {
    el = document.createElement('img');
    el.src = item.src;
  }
  content.appendChild(el);
  document.getElementById('viewer-counter').textContent = (currentIndex+1) + ' / ' + currentItems.length;
}
function showViewer(direction){
  currentIndex = (currentIndex + direction + currentItems.length) % currentItems.length;
  renderViewer();
}
function closeViewer(){ document.getElementById('viewer').classList.remove('active'); }
document.getElementById('viewer').addEventListener('click', function(e){ if(e.target === this) closeViewer(); });
document.addEventListener('keydown', function(e){
  if(!document.getElementById('viewer').classList.contains('active')) return;
  if(e.key === 'ArrowRight') showViewer(1);
  if(e.key === 'ArrowLeft') showViewer(-1);
  if(e.key === 'Escape') closeViewer();
});
document.addEventListener('DOMContentLoaded', function(){
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
});