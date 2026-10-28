(function () {
  const form = document.getElementById("order-page-form");
  const alertBox = document.getElementById("order-alert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.reportValidity();
      return;
    }

    event.preventDefault();

    alertBox.classList.remove("d-none");
    alertBox.classList.add("show");

    alertBox.scrollIntoView({ behavior: "smooth", block: "center" });

    form.reset();

    clearTimeout(window.__orderAlertTimer);
    window.__orderAlertTimer = setTimeout(function () {
      alertBox.classList.remove("show");
      setTimeout(function () {
        alertBox.classList.add("d-none");
      }, 300);
    }, 6000);
  });
})();
