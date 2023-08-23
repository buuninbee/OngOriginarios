function menushow() {
    let menumobile = document.querySelector(".mobile-menu");
    if (menumobile.classList.contains("open")) {
      menumobile.classList.remove("open");
      document.querySelector(".icon").src = "./img/icones/icone-closer.svg";
    } else {
      menumobile.classList.add("open");
      document.querySelector(".icon").src = "./img/icones/icone-open.svg";
    }
  }