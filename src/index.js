import "./styles.css";
import initialPageLoad from "./initial-page-load.js";
import loadNavBar from "./nav-bar.js";

loadNavBar();
// initialPageLoad();

//------------------------------------------------------------------Navbar Tab Click Event Listeners-------------------------------------------
let homeButton = document.querySelector(".homeButton");
    homeButton.addEventListener("click", function(){
        //function that loads home page
    });
let menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener("click", function(){
        //function that loads menu page
    });
let infoButton = document.querySelector(".infoButton");
    infoButton.addEventListener("click", function(){
        //function that loads info page
    });
let orderNowButton = document.querySelector(".orderNowButton");
    orderNowButton.addEventListener("click", function(){
        //function that loads order now page
    });
//Home

//Menu

//Info - address, phone number, business hours, links to: google maps, yelp, facebook, instagram

//Order Now


