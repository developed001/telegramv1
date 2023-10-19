let lang = document.querySelector(".translator");
let headTitle = document.querySelector(".head__title");
let firText = document.querySelector(".fir__p");
let secText = document.querySelector(".sec__p");
let thiText = document.querySelector(".thi__p");
let link = document.querySelector(".link");

lang.addEventListener("change", (e) => {
  let value = e.target.value;

  if (value == "eng") {
    headTitle.textContent = "Log in to Telegram by QR code";
    firText.textContent = "Open Telegram on your phone";
    secText.textContent = "Go to Settings > Devices > Link Desktop Device";
    thiText.textContent = "Point your phone at this screen to confirm login";
    link.textContent = "LOG IN BY PHONE NUMBER";
  } else {
    headTitle.textContent = "Быстрый вход по QR-коду";
    firText.textContent = "Откройте Telegram с телефона";
    secText.textContent = "Перейдите в Настройки > Устройства > Подключить устройство";
    thiText.textContent = "Для потверждения направьте камеру телефона на этот экран";
    link.textContent = "ВХОД ПО НОМЕРУ ТЕЛЕФОНА";
  }
});
