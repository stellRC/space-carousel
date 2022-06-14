const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

const triggerParent = document.querySelector('.trigger-drop')
const trigger = document.querySelector('.trigger-drop > li');
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

const slideImages = document.querySelectorAll('.slide-image')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})


let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);




function handleEnter() {
    this.classList.add('trigger-enter');
   
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); 

    background.classList.add('open');

  
    const dropdown = this.querySelector('.dropdown');


    const dropdownCoords = dropdown.getBoundingClientRect();

    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left 
    };

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open');
}

trigger.addEventListener('mouseenter', handleEnter);
trigger.addEventListener('mouseleave', handleLeave);

