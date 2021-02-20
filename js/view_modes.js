function switchModes(mode)
{
 if ( mode.innerText == 'Modo Oscuro' ) {
  mode.innerText = 'Modo Claro';
  document.body.className = 'dark_mode';

  for ( let i=1; i<11; i++ ) {
   document.getElementsByTagName('a')[i].className = 'dark-nav_link';
  }
  document.getElementById('dark-mode').id = 'light-mode';
  document.getElementById('light_footer').id = 'dark_footer';
  for ( let i=0; i<1; i++ ) {
   document.getElementsByClassName("img_content-light")[0].className = "img_content-dark";
  }
  for ( let i=0; i<6; i++) {
   document.getElementsByClassName("container-light")[0].className = "container-dark";
  }
  document.getElementById("social_bar-light").id = "social_bar-dark";
  document.getElementById("nav_header-light").id = "nav_header-dark";
  document.getElementById("header_content-light").id = "header_content-dark";

  if ( screemSize > 833 ) {
   document.getElementById('header_content-light').style.background = '#e2e2e2c9';
  } else {
   document.getElementById('header_content-light').style.background = '#3d3d3dc9';
  }
 } else {

  mode.innerText = 'Modo Oscuro';
  document.body.className = 'light_mode';
  for ( let i=1; i<11; i++ ) {
   document.getElementsByTagName('a')[i].className = 'light-nav_link';
  }
  document.getElementById('light-mode').id = 'dark-mode';
  document.getElementById('dark_footer').id = 'light_footer';
  for ( let i=0; i<1; i++ ) {
   document.getElementsByClassName("img_content-dark")[0].className = "img_content-light";
  }
  for ( let i=0; i<6; i++) {
   document.getElementsByClassName("container-dark")[0].className = "container-light";
  }
  document.getElementById("social_bar-dark").id = "social_bar-light";
  document.getElementById("nav_header-dark").id = "nav_header-light";
  document.getElementById("header_content-dark").id = "header_content-light";
 }
}