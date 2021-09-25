function showMenu() {
  var menu = document.getElementById("menu");
  var content = document.getElementById("content");
  var menuLabel = document.getElementById("menuLabel");
  var backLabel = document.getElementById("backLabel");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }

  if (content.style.display === "flex") {
    content.style.display = "none";
  } else {
    content.style.display = "flex";
  }

  if (backLabel.style.display === "none") {
    backLabel.style.display = "flex";
  } else {
    backLabel.style.display = "none";
  }

  if (menuLabel.style.display === "flex") {
    menuLabel.style.display = "none";
  } else {
    menuLabel.style.display = "flex";
  }
}

function mobileMenu(destination) {
  var menu = document.getElementById("menu");
  var content = document.getElementById("content");
  var menuLabel = document.getElementById("menuLabel");
  var backLabel = document.getElementById("backLabel");

  if (destination === "home") {
    menu.style.display = "none";
    content.style.display = "flex";
    menuLabel.style.display = "flex";
    backLabel.style.display = "none";
    navToMobile("home");
  } else if (destination === "reset") {
    menu.style.display = "none";
    content.style.display = "flex";
    menuLabel.style.display = "flex";
    backLabel.style.display = "none";
  }
}

function navTo(destination) {
  var home = document.getElementById("homeContent");
  var science = document.getElementById("scienceContent");
  var games = document.getElementById("gamesContent");
  var sports = document.getElementById("sportsContent");
  var homescreen = document.getElementById("homeScreen");
  var team = document.getElementById("row4");
  var subscribe = document.getElementById("row5");

  if (destination === "team") {
    homescreen.style.display = "none";
    subscribe.style.display = "none";
    team.style.display = "flex";
  } else if (destination === "subscribe") {
    homescreen.style.display = "none";
    subscribe.style.display = "flex";
    team.style.display = "none";
  } else if (destination === "home") {
    homescreen.style.display = "block";
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "block";
    science.style.display = "none";
    games.style.display = "none";
    sports.style.display = "none";
  } else if (destination === "science") {
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "block";
    games.style.display = "none";
    sports.style.display = "none";
  } else if (destination === "games") {
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "none";
    games.style.display = "block";
    sports.style.display = "none";
  } else {
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "none";
    games.style.display = "none";
    sports.style.display = "block";
  }
}

function navToMobile(destination) {
  console.log(destination);

  var home = document.getElementById("homeContent2");
  var science = document.getElementById("scienceContent2");
  var games = document.getElementById("gamesContent2");
  var sports = document.getElementById("sportsContent2");
  var homescreen = document.getElementById("homeScreen2");
  var team = document.getElementById("row42");
  var subscribe = document.getElementById("row52");

  if (destination === "team") {
    homescreen.style.display = "none";
    team.style.display = "flex";
    subscribe.style.display = "none";
    mobileMenu("reset");
  } else if (destination === "subscribe") {
    homescreen.style.display = "none";
    team.style.display = "none";
    subscribe.style.display = "flex";
    mobileMenu("reset");
  } else if (destination === "home") {
    homescreen.style.display = "block";
    team.style.display = "none";
    home.style.display = "block";
    science.style.display = "none";
    games.style.display = "none";
    sports.style.display = "none";
    subscribe.style.display = "none";
    mobileMenu("reset");
  } else if (destination === "science") {
    homescreen.style.display = "block";
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "block";
    games.style.display = "none";
    sports.style.display = "none";
  } else if (destination === "games") {
    homescreen.style.display = "block";
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "none";
    games.style.display = "block";
    sports.style.display = "none";
  } else {
    homescreen.style.display = "block";
    team.style.display = "none";
    subscribe.style.display = "none";
    home.style.display = "none";
    science.style.display = "none";
    games.style.display = "none";
    sports.style.display = "block";
  }
}

function openLink(link){
    pass;
}
