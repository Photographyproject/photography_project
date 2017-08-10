/* DROPDOWN MENU JS
/* when user clicks on button, show the dropdown content*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
/* close dropdown when user clicks out*/
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
    }
  }
}
