export default function contactPage(){
    let docContentDiv = document.querySelector("#content");
    let divArray = [];
    let sectionArray = [];
    let subTitleArray = [];

    for (let i=0;i<6;i++){
        divArray.push(document.createElement("div"));
    }
    for (let j=0;j<6;j++){
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

    subTitleArray[0].className = "infoSubTitle";
        subTitleArray[0].innerText = "Location"
    subTitleArray[1].className = "infoSubTitle";
        subTitleArray[1].innerText = "Contact Us";
    subTitleArray[2].className = "infoSubTitle";
        subTitleArray[2].innerText = "Business Hours";

    sectionArray[0].classList.add("location", "info");
    sectionArray[1].classList.add("phoneNumber", "info");
    sectionArray[2].classList.add("hours", "info");

    sectionArray[3].className = "text";
    sectionArray[3].innerHTML = '21230 Devonshire St <br>'+
                                'Chatsworth, CA 91311'+
                                '<a class="directions info" href="https://g.page/hikarisushichatsworth?share" target="_blank"><img width="100" src="../src/directions-icon.png" alt="direction arrow icon"></a>';
    sectionArray[4].className = "text";
    sectionArray[4].innerHTML = "818-998-8080";
    sectionArray[5].className = "text";
    sectionArray[5].innerHTML = "Sun-Wed: 11:30-9:30 <br>"+
                                "Thu-Sat: 11:30-10:00"

        //-------------------------------------------APPEND EVERYTHING HERE------------------------------------
    sectionArray[0].append(subTitleArray[0], sectionArray[3]);
    sectionArray[1].append(subTitleArray[1], sectionArray[4]);
    sectionArray[2].append(subTitleArray[2], sectionArray[5]);

    divArray[3].appendChild(sectionArray[0]);
    divArray[4].appendChild(sectionArray[1]);
    divArray[5].appendChild(sectionArray[2]);

    divArray[2].append(divArray[3], divArray[4], divArray[5]);

    divArray[0].append(divArray[1], divArray[2]);

    docContentDiv.innerHTML = "";
    docContentDiv.appendChild(divArray[0]);
}

