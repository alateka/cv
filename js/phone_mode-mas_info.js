
function phone_mode() {

 let screemSize = window.screen.availWidth;

  if (screemSize > 833) {

    document.getElementById('header_nav-light').style.fontSize = '100%';
    document.getElementById('img_avatar').style.display = 'block';
   document.getElementsByTagName('body')[0].style.fontSize = '100%';
   document.getElementById('header_content-light').style.fontSize = '100%';
   document.getElementById('img_avatar').style.width = '39%';
   for (let e of document.getElementsByClassName('img_content-light')) {
    e.style.width = '100%';
   }
   document.getElementById('header_img').style.height = '511px';
   document.getElementById('social_bar-light').style.display = 'flex';
   document.getElementById('license_img').style.width = '33%';
   document.getElementById('contact_img').style.width = '33%';
   document.getElementsByTagName('footer')[0].style.fontSize = '100%';
   document.getElementById('header_content-light').style.top = '9%';

  } else if ( screemSize < 833 ) {

   document.getElementById('header_nav-light').style.fontSize = '71%';
   document.getElementById('img_avatar').style.display = 'none';
   document.getElementsByTagName('body')[0].style.fontSize = '71%';
   document.getElementById('header_content-light').style.fontSize = '55%';
   document.getElementById('img_avatar').style.width = '15%';
   for (let e of document.getElementsByClassName('img_content-light')) {
    e.style.width = '79%';
   }
   document.getElementById('header_img').style.height = '255px';
   document.getElementById('social_bar-light').style.display = 'none';
   document.getElementById('license_img').style.width = '19%';
   document.getElementById('contact_img').style.width = '19%';
   document.getElementsByTagName('footer')[0].style.fontSize = '71%';
   document.getElementById('header_content-light').style.top = '19%';

  }
}