var menu = $(".menu");
var dropdown = $(".dropdown");
var nomeLista = $(".nomeLista");

// FUNZIONE PER L'APERTURA DEL MENU ALL'HOVER
menu.hover(
  function (){
    var dropMenu = $(this).children(".dropdown");
    if ( !dropMenu.hasClass("activeClick")){
      dropMenu.addClass("active");
      dropdown.removeClass("activeClick");
      nomeLista.removeClass("clear");
    }
  },
  function (){
    var dropMenu = $(this).children(".dropdown");
    dropMenu.removeClass("active");
    }
);


// FUNZIONE PER L'APERTURA DEL MENU AL CLICK
menu.click(
  function (){
    var dropMenu = $(this).children(".dropdown");
    var nameMenu = $(this).children(".nomeLista");

    dropMenu.toggleClass("activeClick");
    nameMenu.toggleClass("clear");

  }
);
