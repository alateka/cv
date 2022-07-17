
function phone_mode() {

 screemSize = window.screen.availWidth;

  if (screemSize > 833) {
   document.getElementById('header_content-light').style.boxShadow = 'unset';
   document.getElementById('header_content-light').style.marginTop = '0%';
   document.getElementById('header_content-light').style.position = 'absolute';
   document.getElementById('header_img').style.display = 'block';
   document.getElementById('social_footer').style.display = 'none';
  document.getElementById('header_nav-light').style.fontSize = '100%';
  document.getElementById('img_avatar').style.display = 'block';
   document.getElementsByTagName('body')[0].style.fontSize = '100%';
   document.getElementById('header_content-light').style.fontSize = '100%';
   document.getElementById('img_avatar').style.width = '39%';
   for (let e of document.getElementsByClassName('img_content-light')) {
    e.style.width = '100%';
   }
   document.getElementById('header_img').style.height = '511px';
   if ( document.getElementById('dark-mode').innerText == 'Modo Oscuro' ) {
    document.getElementById('social_bar-light').style.display = 'flex';
   } else {
    document.getElementById('social_bar-dark').style.display = 'flex';
   }
   document.getElementById('license_img').style.display = 'block';
   document.getElementById('contact_img').style.display = 'block';
   document.getElementsByTagName('footer')[0].style.fontSize = '100%';
   document.getElementById('header_content-light').style.top = '9%';

  } else if ( screemSize < 833 ) {

   document.getElementById('header_content-light').style.boxShadow = 'unset';
   document.getElementById('header_content-light').style.marginTop = '71px';
   document.getElementById('header_content-light').style.position = 'unset';
   document.getElementById('header_img').style.display = 'none';
   document.getElementById('social_footer').style.display = 'block';
   document.getElementById('header_nav-light').style.fontSize = '71%';
   document.getElementById('img_avatar').style.display = 'none';
   document.getElementsByTagName('body')[0].style.fontSize = '71%';
   document.getElementById('header_content-light').style.fontSize = '55%';
   document.getElementById('img_avatar').style.width = '15%';
   for (let e of document.getElementsByClassName('img_content-light')) {
    e.style.width = '79%';
   }
   document.getElementById('header_img').style.height = '255px';
   if ( document.getElementById('dark-mode').innerText == 'Modo Oscuro' ) {
    document.getElementById('social_bar-light').style.display = 'none';
   } else {
    document.getElementById('social_bar-dark').style.display = 'none';
   }
   document.getElementById('license_img').style.display = 'none';
   document.getElementById('contact_img').style.display = 'none';
   document.getElementsByTagName('footer')[0].style.fontSize = '71%';
   document.getElementById('header_content-light').style.top = '19%';
  }
}