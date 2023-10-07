[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}
 // Get all submenu links
 const submenuLinks = document.querySelectorAll('.submenu-link');

 // Iterate through each submenu link and add click event listener
 submenuLinks.forEach(link => {
   link.addEventListener('click', function(event) {
     // Prevent default behavior (opening dropdown menu)
     event.preventDefault();
     
     // Get the href attribute of the clicked link
     const href = this.getAttribute('href');
     
     // Navigate to the clicked link
     window.location.href = href;
   });
 });