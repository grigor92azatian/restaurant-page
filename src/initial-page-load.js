export default function initialPageLoad(){
    let pageContent = document.querySelector("#content");
    let bannerContainer = document.createElement("div");
    let bannerPic = document.createElement("img");
    let restaurantName = document.createElement("h1");
    let restaurantInfo = document.createElement("p");

    bannerContainer.className = "bannerPicContainer";

    bannerPic.setAttribute("src", "https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/10/best-ayce-sushi-los-angeles-county-Nattapol-Poonpiriya-EyeEm-getty-images-1-1068x712.jpg");
    bannerPic.setAttribute("alt", "sushi-roll-photo");
    bannerPic.setAttribute("class", "homePageBannerPic");
    
    restaurantName.className = "restaurantName";
    restaurantName.innerHTML = "<span class='hikari'>Hikari</span> Sushi";

    restaurantInfo.className = "initialPageText";
    restaurantInfo.innerHTML = "Come on in and enjoy some of the best sushi in the valley! We have a large selection of hand rolls, nigiri, and specialty rolls to choose from! " +
                                "A lot of our guests love our all you can eat option but we also offer a la carte and takeout. If what you're looking for is fresh and tasty " +
                                "sushi, look no further!";
    bannerContainer.appendChild(bannerPic);
    pageContent.appendChild(bannerContainer);
    pageContent.appendChild(restaurantName);
    pageContent.appendChild(restaurantInfo);
}