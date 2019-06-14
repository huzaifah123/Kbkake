function closeMenu() {
  document.getElementById("navbar").style.height = "0%";
}
function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}
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

baguetteBox.run(".tz-gallery");
