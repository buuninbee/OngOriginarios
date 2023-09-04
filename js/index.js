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

const drop = document.querySelector(".mobile-li");

drop.addEventListener("click", () => {
  let desceMenu = document.querySelector(".drop-down");

  if (desceMenu.classList.contains("open")) {
    desceMenu.classList.remove("open");
    desceMenu.style.display = "grid";
    let setaicon = document.querySelector(".icon-seta");
    setaicon.style.transform = "rotate(-90deg)";
    setaicon.style.transition = ".5s";
  } else {
    desceMenu.classList.add("open");
    desceMenu.style.display = "none";
    desceMenu.classList.add("open");
    let setaicon = document.querySelector(".icon-seta");
    setaicon.style.transform = "rotate(90deg)";
  }
});
