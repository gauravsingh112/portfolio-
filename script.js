function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



//dark mode
  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');
  
  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
      if(this.classList.toggle('bi-brightness-high-fill')){
          body.style.background = 'white';
          body.style.color = '#818181';
          body.style.transition = '2s';
      }else{
          body.style.background = '#818181';
          body.style.color = 'white';
          body.style.transition = '2s';
      }
  });





