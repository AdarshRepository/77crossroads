function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabactive";
}
document.getElementById("defaultOpen").click();




function openGallery(evt, cityName) {
  var i, gallerytabcontent, gallerytablinks;
  gallerytabcontent = document.getElementsByClassName("gallerytabcontent");
  for (i = 0; i < gallerytabcontent.length; i++) {
    gallerytabcontent[i].style.display = "none";
  }
  gallerytablinks = document.getElementsByClassName("gallerytablinks");
  for (i = 0; i < gallerytablinks.length; i++) {
    gallerytablinks[i].className = gallerytablinks[i].className.replace(" gallerytabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " gallerytabactive";
}
document.getElementById("defaultGalleryOpen").click();