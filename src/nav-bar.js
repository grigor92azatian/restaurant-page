export default function loadNavBar(){
    let navBar = document.querySelector("#navBar");
    let logo = document.createElement("img");
        logo.setAttribute("src", "http://www.besthikarisushi.com/wp-content/uploads/2020/05/logo-revised-2018.png");
        logo.setAttribute("alt", "Company Logo");
        logo.setAttribute("width", "400");
    let navBarLinks = document.createElement("div");
        navBarLinks.setAttribute("class", "navBarLinks");

    let navBarButtons = [];
    for(let i=0;i<4;i++){
        let button = document.createElement("div");
        button.className = "navBarButton";
        navBarButtons.push(button);
    }

    navBarButtons[0].classList.add("homeButton");
    navBarButtons[0].innerText = "Home";
    navBarButtons[1].classList.add("menuButton");
    navBarButtons[1].innerText = "Menu";
    navBarButtons[2].classList.add("contactButton");
    navBarButtons[2].innerText = "Contact";
    navBarButtons[3].classList.add("orderNowButton");
    navBarButtons[3].innerText = "Order Now";

    navBarButtons.forEach(button => {
        navBarLinks.appendChild(button);
    });

    navBar.appendChild(logo);
    navBar.appendChild(navBarLinks);
}




