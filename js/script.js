var link = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");
var name = document.getElementById("feedback-name");
var email = document.getElementById("feedback-email");
var text = document.getElementById("feedback-text");

var isStorageSupport = true;
var storage = "";
  
  try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }
  
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		modal.classList.add("modal-show");
		if (storage) {
  	name.value = storage;
  	email.value = storage;
  	text.focus();
    } else {
	  name.focus();
    }
	});

	close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
	});

	form.addEventListener("submit", function (evt) {
		if (!name.value || !email.value || !text.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя, электронную почту и текст сообщения");    
    } else {
    	if (isStorageSupport) {
    		localStorage.setItem("name", name.value);
    		localStorage.setItem("email", email.value);
    	}
    }
  });