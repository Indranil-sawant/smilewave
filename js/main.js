(function () {
  var header = document.querySelector(".header");
  var menuBtn = document.querySelector(".menu-btn");
  var drawer = document.querySelector(".drawer");
  var year = document.getElementById("year");
  var form = document.getElementById("appointment-form");
  var alertBox = document.getElementById("form-alert");

  if (year) year.textContent = String(new Date().getFullYear());

  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  });

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (drawer) {
    drawer.addEventListener("click", function (event) {
      if (event.target === drawer || event.target.closest("a")) {
        document.body.classList.remove("nav-open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.body.classList.remove("nav-open");
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  function showAlert(ok, message) {
    if (!alertBox) return;
    alertBox.className = "alert show " + (ok ? "ok" : "err");
    alertBox.textContent = message;
  }

  var dateInput = document.getElementById("date");
  if (dateInput) {
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.patientName.value.trim();
      var phone = form.phone.value.trim();
      var date = form.date.value;
      var service = (form.querySelector('input[name="service"]:checked') || {}).value || "General Checkup";

      if (!name || !phone || !date) {
        showAlert(false, "Please add the patient's name, phone number, and a preferred date.");
        return;
      }

      if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
        showAlert(false, "Please enter a valid 10-digit Indian mobile number.");
        return;
      }

      var text = encodeURIComponent(
        "Hello SmileWave, I would like to book an appointment.\n" +
          "Patient: " + name + "\n" +
          "Phone: " + phone + "\n" +
          "Service: " + service + "\n" +
          "Preferred date: " + date +
          (form.time.value ? "\nTime: " + form.time.value : "") +
          (form.message.value ? "\nNotes: " + form.message.value : "")
      );

      showAlert(true, "Request ready. We will open WhatsApp so the clinic can confirm your slot.");
      window.setTimeout(function () {
        window.location.href = "https://wa.me/919769311848?text=" + text;
      }, 700);
    });
  }
})();
