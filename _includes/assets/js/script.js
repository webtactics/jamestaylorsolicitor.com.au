const toggleButton = document.querySelector('.toggle-nav');
  const offcanvasNav = document.querySelector('.offcanvas');
  const closeNavButton = document.querySelector('.close-nav');
  
  toggleButton.addEventListener('click', function() {
    offcanvasNav.classList.toggle('open');
    toggleButton.classList.toggle('active');
  });
  
  function closeOffcanvasNav() {
    offcanvasNav.classList.remove('open');
    toggleButton.classList.remove('active');
  }
  
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (
      !offcanvasNav.contains(targetElement) &&
      targetElement !== toggleButton &&
      !toggleButton.contains(targetElement) &&
      targetElement !== closeNavButton
    ) {
      closeOffcanvasNav();
    }
  });
  
  closeNavButton.addEventListener('click', function() {
    closeOffcanvasNav();
  });
  

const header = document.querySelector('.topbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
header.classList.toggle('scrolled', !entries[0].isIntersecting)

  }, {rootMargin: "250px 0px 0px 0px"});
navObserver.observe(scrollWatcher)

scrollWatcher.setAttribute('data-scroll-watcher', '');
container.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
container.classList.toggle('scrolled', !entries[0].isIntersecting)
  
    }, {rootMargin: "100px 0px 0px 0px"});
  navObserver.observe(scrollWatcher)

// passive event listener
document.addEventListener('touchstart', onTouchStart, {passive: true});




// Mobile menu toggle



// Accordion



// toggle





