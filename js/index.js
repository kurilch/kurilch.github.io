const openBtnPopup = document.querySelector(".nav-menu__sign");
const popupWrite = document.querySelector(".popup-authorization");
const popupWriteClose = popupWrite.querySelector(".popup-authorization__close");
const loginPopup = popupWrite.querySelector(".form-email__field");

openBtnPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWrite.classList.add("popup-authorization__show");
    loginPopup.focus();
});

popupWriteClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWrite.classList.remove("popup-authorization__show");
});
