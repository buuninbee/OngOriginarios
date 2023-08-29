const btnmenu = $("#menushow");

btnmenu.on("click", () => {
  let menumobile = document.querySelector(".mobile-menu");

  if (menumobile.classList.contains("open")) {
    menumobile.classList.remove("open");
    document.querySelector(".icon").src = "./img/icones/icone-closer.svg";
    menumobile.style.display = "grid";
  } else {
    menumobile.classList.add("open");
    document.querySelector(".icon").src = "./img/icones/icone-open.svg";
    menumobile.style.display = "none";
    menumobile.classList.add("open");
  }
});
