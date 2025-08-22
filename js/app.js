// sticky navbar 
window.addEventListener('scroll', function(){
    let cardhidde = this.document.querySelector('.card_hidden__');
    let nav = document.querySelector('nav');
    let main_logo____ = this.document.querySelector('.main_logo____');
    nav.classList.toggle('sticky', this.window.scrollY > 700);
    main_logo____.classList.toggle('main_logo____2', this.window.scrollY > 700 );
    cardhidde.classList.toggle('block', this.window.scrollY > 700);
});

// responsive menu 
let barmain = document.querySelector('.bar__main');
let menuOpen = false;
let navscreen = document.querySelector('.nav__list_sort_screen');
barmain.addEventListener('click', function(){
    
    if(!menuOpen){
        barmain.classList.add('open');
        menuOpen = true;
        navscreen.style.display = 'block';
    }else{
        barmain.classList.remove('open');
        menuOpen = false;
        navscreen.style.display = 'none';
    }
});