(function () {
  if (!new URLSearchParams(location.search).has("subscribed")) {
    return;
  }
  var note = document.getElementById("newsletter-success");
  var form = document.getElementById("newsletter-form");
  if (note) {
    note.hidden = false;
  }
  if (form) {
    form.hidden = true;
  }
})();
