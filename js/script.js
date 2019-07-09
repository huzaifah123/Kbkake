// MENU
function closeMenu() {
  document.getElementById("navbar").style.height = "0%";
}
function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}

// light box
$(function() {
  $("#portfolio").magnificPopup({
    delegate: "a",
    type: "image",
    image: {
      cursor: null,
      titleSrc: "title"
    },
    gallery: {
      enabled: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });
});

// MDB Lightbox Init
$(function() {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// lighbox gallery
baguetteBox.run(".tz-gallery");

// Read more icon
function toggleText(btn, id) {
  var e = document.getElementById(id);
  if (e.style.display == "block") {
    e.style.display = "none";
    btn.innerHTML = "Read More";
  } else {
    e.style.display = "block";
    btn.innerHTML = "Show Less";
  }
}

//scroll animation
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "fade-in",
    reverse: false
  })

    .setClassToggle(".fade-in", "show")
    .addTo(Controller);
});
