function contactPage(){
    let divArray = [];
    let sectionArray = [];
    let subTitleArray = [];

    for (let i=0;i<6;i++){
        divArray.push(document.createElement("div"));
    }
    for (let j=0;j<4;j++){
        sectionArray.push(document.createElement("section"));
    }   
    for (let k=0;k<3;k++){
        subTitleArray.push(document.createElement("h2"));
    }

    divArray[0].className = "infoPage";
    divArray[1].className = "bannerPhotoSection";
    divArray[2].className = "infoSectionContainer";
    divArray[3].classList.add("locationAndDirections", "infoSection");
    divArray[4].classList.add("contactUs", "infoSection");
    divArray[5].classList.add("businessHours", "infoSection");

    sectionArray[0].classList.add("location", "info");
        sectionArray[0].innerHTML = "21230 Devonshire St <br> Chatsworth, CA 91311";
    sectionArray[1].classList.add("directions", "info");
        sectionArray[1].innerHTML = '<a href="https://g.page/hikarisushichatsworth?share" target="_blank"><img width="100" src="../src/directions-icon.png" alt="direction arrow icon"></a>';
    sectionArray[2].classList.add("phoneNumber", "info");
        sectionArray[2].innerText = "818-998-8080";
    sectionArray[3].classList.add("hours", "info");
        sectionArray[3].innerText = "Sun-Wed: 11:30-9:30 <br> Thu-Sat: 11:30-10:00";

    subTitleArray[0].className = "infoSubTitle";
        subTitleArray[0].innerText = "Location"
    subTitleArray[1].className = "infoSubTitle";
        subTitleArray[1].innerText = "Contact Us";
    subTitleArray[2].className = "infoSubTitle";
        subTitleArray[2].innerText = "Business Hours";

        //-------------------------------------------APPEND EVERYTHING HERE------------------------------------
}

<div class="infoPage">
<div class="bannerPhotoSection"></div>
<div class="infoSectionContainer">
    <div class="locationAndDirections infoSection">
        <section class="location info">
            <h2 class="infoSubTitle">Location</h2>
            21230 Devonshire St <br>
            Chatsworth, CA 91311
        </section>
        <section class="directions info">
            <a href="https://g.page/hikarisushichatsworth?share" target="_blank"><img width="100" src="../src/directions-icon.png" alt="direction arrow icon"></a>
        </section>
    </div>
    <div class="contactUs infoSection">
        <section class="phoneNumber info">
            <h2 class="infoSubTitle">Contact Us</h2>
            818-998-8080
        </section>
    </div>
    <div class="businessHours infoSection">
        <h2 class="infoSubTitle">Business Hours</h2>
        <section class="hours info">
            Sun-Wed: 11:30-9:30 <br>
            Thu-Sat: 11:30-10:00
        </section>
    </div>
</div>
</div>  