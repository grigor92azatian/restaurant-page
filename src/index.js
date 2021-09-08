import "./styles.css";
import initialPageLoad from "./initial-page-load.js";
import loadNavBar from "./nav-bar.js";
import contactPage from "./info-tab.js";
import menuPage from "./menu-tab.js";

loadNavBar();
initialPageLoad();



//------------------------------------------------------------------Navbar Tab Click Event Listeners-------------------------------------------


let homeButton = document.querySelector(".homeButton");
    homeButton.addEventListener("click", function(){
        //function that loads home page
        let documentContentDiv = document.querySelector("#content");
        documentContentDiv.innerHTML = "";
        initialPageLoad();
    });
let menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener("click", function(){
        //function that loads menu page
        menuPage();
    });
let infoButton = document.querySelector(".infoButton");
    infoButton.addEventListener("click", function(){
        //function that loads info page
        contactPage();
    });
//Home

//Menu

//Info - address, phone number, business hours, links to: google maps, yelp, facebook, instagram

//Order Now


