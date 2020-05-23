function switchdark(params) {
  var checkBox = document.getElementById("switch-1");
  if (checkBox.checked == true) {
    document.body.style.cssText =
      "background-image:linear-gradient(180deg,  hsl(232, 19%, 15%) 25%, hsl(230, 17%, 14%) 25%);color:#fff";

    let cards = document.getElementsByClassName("smm-card");
    for (const el of cards) {
      el.style.cssText = "background-color:hsl(228, 28%, 20%)";
    }

    document.getElementsByClassName("heading-secondary")[0].style.cssText =
      "color:#fff";

    let cards_today = document.getElementsByClassName("smm-card-today");

    for (const el of cards_today) {
      el.style.cssText = "background-color:hsl(228, 28%, 20%)";
    }
  } else {
    document.body.style.cssText =
      "background-image:linear-gradient(180deg,  hsl(225, 100%, 98%) 25%, #fff 25%);color:#000";

    let cards = document.getElementsByClassName("smm-card");
    for (const el of cards) {
      el.style.cssText = "background-color:hsl(227, 47%, 96%)";
    }

    document.getElementsByClassName("heading-secondary")[0].style.cssText =
      "color:hsl(228, 12%, 44%)";

    let cards_today = document.getElementsByClassName("smm-card-today");

    for (const el of cards_today) {
      el.style.cssText = "background-color:hsl(227, 47%, 96%)";
    }
  }
}
