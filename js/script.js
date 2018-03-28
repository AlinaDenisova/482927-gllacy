var link = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-close");
var form = document.querySelector(".feedback-form");
var username = document.getElementById("feedback-name");
var email = document.getElementById("feedback-email");
var text = document.getElementById("feedback-text");


var isStorageSupport = true;
var storage = "";
  
  try {
    storage = localStorage.getItem("username");
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }
  
  if (link) {
    link.addEventListener ("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      overlay.classList.add("overlay-show");
      if (storage) {
        username.value = storage;
        email.value = storage;
        text.focus();
      } else {
        username.focus();
      }
    })
  };

  if (close) {
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function(event) {
      event.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    });
  }

  if (form) {
    form.addEventListener("submit", function (evt) {
      if (!username.value || !email.value || !text.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("username", username.value);
          localStorage.setItem("email", email.value);
        }
      }
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
      }
    }
  });

var searchLink = document.querySelector(".search-link-trigger");
var searchPopup = document.querySelector(".search-link-tooltip");
var searchForm = searchPopup.querySelector("form");
var search = searchPopup.querySelector("[name=search]");

  searchLink.addEventListener("mouseover", function (evt) {
    search.focus();
  });

 searchForm.addEventListener("submit", function (evt) {
  if (!search.value) {
    evt.preventDefault();
    searchPopup.classList.remove("popup-error");
    searchPopup.offsetWidth = modal.offsetWidth;
    searchPopup.classList.add("popup-error");
    }
  });

var loginLink = document.querySelector(".login-link-trigger");
var loginPopup = document.querySelector(".login-link-tooltip");
var loginForm = loginPopup.querySelector("form");
var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password]");

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  
  loginLink.addEventListener("mouseover", function (evt) {
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }
  });

  loginForm.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      loginPopup.classList.remove("popup-error");
      loginPopup.offsetWidth = modal.offsetWidth;
      loginPopup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

var select = document.querySelector(".filter-select");
var selectArrow = document.querySelector(".select-arrow");

  if (select) {
    select.addEventListener("focus", function (evt) {
      select.classList.add("select-active");
      selectArrow.classList.add("arrow-active");
    });
    select.addEventListener("blur", function (evt) {
      select.classList.remove("select-active");
      selectArrow.classList.remove("arrow-active");
    });
  }

function initMap() {
  var centerLatLng = new google.maps.LatLng(59.939367, 30.329416);
  var mapOptions = {
        center: centerLatLng, 
        zoom: 16
  };
  var map = new google.maps.Map(document.querySelector(".map"), mapOptions);
  var addressLatLng = new google.maps.LatLng(59.938961, 30.323105);

  var marker = new google.maps.Marker({
    position: addressLatLng,
    map: map,
    title: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
    icon: "img/pin.png"
  });
}

google.maps.event.addDomListener(window, "load", initMap);