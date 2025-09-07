////loading animation
//
//window.addEventListener('load', () => {
//setTimeout(()=>{
//document.querySelector('.loader-wrapper').style.opacity ='0';
//setTimeout(() =>{
//          document.querySelector('.loader-wrapper').style.opacity= 'none';
//},500);
//},2000);
//});



// Loader fade-out
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  if (!loader) return;
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000); // keep loader for 2s (adjust if you like)
});

// Sticky/glass header on scroll
const header = document.querySelector('.header');
function handleScroll() {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', handleScroll);
handleScroll(); // set initial state
