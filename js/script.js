var link = document.querySelector(".login-form-show");
var popupLogin = document.querySelector (".modal-login");
var loginClose = popupLogin.querySelector(".modal-close");
var form = popupLogin.querySelector("form");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");
var loginstorage = localStorage.getItem ("login");
var mapBtn = document.querySelector(".contact-info-button-location");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-show");
  popupLogin.classList.remove("modal-hide");
  if (loginstorage) {
    login.value = loginstorage;
    password.focus();
  }
});

mapBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  popupMap.classList.remove("modal-hide");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popupLogin.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupLogin.classList.contains("modal-show")) {
      popupLogin.classList.remove("modal-show");
      popupLogin.classList.add("modal-hide");
      popupLogin.classList.remove("modal-error");
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
      popupMap.classList.add("modal-hide");
    }
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-hide");
  popupLogin.classList.remove("modal-show");
  popupLogin.classList.remove("modal-error");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-hide");
  popupMap.classList.remove("modal-show");
  popupMap.classList.remove("modal-error");
});
