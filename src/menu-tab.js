export default function menuPage(){
//---------------------------------Sushi Roll Arrays--------------------
    let bakedRollsArray = [
        {
            name:"Baked Scallop Roll",
            inside:"California roll",
            outside:"Baked scallop mixed w/ crabmeat"
        },
        {
            name: "Caterpillar Roll",
            inside: "California roll w/ eel",
            outside: "Avocado"
        },
        {
            name:"Dragon Roll",
            inside:"California roll",
            outside:"eel, avocado"
        },
        {
            name:"Baked Salmon Roll",
            inside:"California roll",
            outside:"salmon (whole roll baked)"
        },
        {
            name:"Spicy Baked Salmon Roll",
            inside:"california roll",
            outside:"spicy salmon, whole roll baked"
        },
        {
            name:"Snow White Roll",
            inside:"crabmeat, avocado, cream cheese",
            outside:"escolar, whole roll baked"
        },
        {
            name:"Nichelle Roll",
            inside:"crabmeat, tilapia, salmon wrap",
            outside:"scallop"
        },
        {
            name:"Baked Crawfish Roll",
            inside:"California roll",
            outside:"baked crawfish mixed w/ crabmeat"
        },
        {
            name:"Volcano Roll",
            inside:"California roll",
            outside:"baked spicy tuna"
        }
    ];
    let freshRollsArray = [
        {
            name: "Melt in Your Mouth Roll",
            inside: "crabmeat, avocado, cream cheese",
            outside: "seared salmon with house mayo, jalapeno"
        },
        {
            name:"Goldfish Roll",
            inside: "spicy tuna, cucumber",
            outside: "yellowtail, avocado, lemon"
        },
        {
            name:"Candy Cane Roll",
            inside: "no rice, soy paper, cragmeat, spicy tuna, avocado, cucumber",
            outside: "salmon, tuna"
        },
        {
            name:"Washington Roll",
            inside: "california roll",
            outside: "fresh salmon"
        },
        {
            name:"Red Dragon Roll",
            inside: "California roll",
            outside: "spicy tuna, crunch"
        },
        {
            name:"Sunkist Roll",
            inside: "spicy tuna, cucumber",
            outside: "salmon, lemon slice"
        },
        {
            name:"Ninja Roll",
            inside: "spicy tuna, cream cheese",
            outside: "salmon, shrimp, jalapeno"
        },
        {
            name:"Yellowtail Delight Roll",
            inside: "spicy tuna, cucumber",
            outside: "fresh yellowtail, jalapeno"
        },
        {
            name:"Cajun Tuna Roll",
            inside: "spicy tuna, cucumber",
            outside: "seared cajun tuna"
        },
        {
            name:"Sexy Roll",
            inside: "soy paper,spicy scallop,cucumber",
            outside:"tuna, salmon, avocado, jalapeno"
        },
        {
            name:"Seared Escolar Roll",
            inside:"spicy tuna, cucumber",
            outside:"seared escolar, red onion"
        },
        {
            name:"Aloha Roll",
            inside:"spicy tuna, cucumber, cilantro",
            outside:"seared albacore, jalapeno"
        },
        {
            name:"Jessica Albacore Roll",
            inside:"spicy tuna, albacore wrap",
            outside:"crunch"
        },
        {
            name:"Albacore Delight Roll",
            inside:"spicy albacore, cucumber",
            outside:"seared albacore"
        },
        {
            name:"Chatsworth Roll",
            inside:"fresh assorted sashimi w/ soy paper",
            outside:"avocado"
        },
        {
            name:"Fire Roll",
            inside:"spicy tuna, cucumber, cilantro",
            outside:"spicy crabmeat, jalapeno"
        },
        {
            name:"Giant Roll",
            inside:"California roll",
            outside:"salmon, spicy tuna, scallop"
        },
        {
            name:"Judy Special Roll",
            inside:"crabmeat, cucumber, shrimp",
            outside:"avocado"
        },
        {
            name:"Magnolia Roll",
            inside:"spicy crabmeat",
            outside:"salmon wrap"
        },
        {
            name:"Stuffed Tomato Roll",
            inside:"scallop, spicy crabmeat",
            outside:"fresh tuna wrap"
        },
        {
            name:"Hawaiian Roll",
            inside:"California roll",
            outside:"fresh tuna, avocado"
        },
        {
            name:"Honeymoon Roll",
            inside:"shrimp, avocado, cucumber w/ crabmeat wrap",
            outside:"salmon"
        }
    ];
    let tempuraRollsArray = [
        {
            name: "Orange Caramel Roll",
            inside: "spicy crab, avocado, cucumber",
            outside: "salmon, crunch"
        },
        {
            name: "Ex-Boyfriend Roll",
            inside: "no rice, shrimp tempura, avocado, cucumber wrapped in crabmeat",
            outside: "seared cajun tuna, jalapeno"
        },
        {
            name: "Black Widow Roll",
            inside: "spicy tuna, cucumber, shrimp tempura",
            outside: "eel, avocado"
        },
        {
            name: "Mexi-Cali Roll",
            inside: "shrimp, spicy crab, cucumber",
            outside: "avocado, crunch"
        },
        {
            name: "Salmon Nacho",
            inside: "deep friend salmon w/ crabmeat on top, no rice"
        },
        {
            name: "Golden Tiger Roll",
            inside: "creamcheese, avocado, shrimp tempura",
            outside: "spicy crabmeat"
        },
        {
            name: "Las Vegas Roll",
            inside: "spicy salmon, creamcheese",
            outside: "whole fried"
        },
        {
            name: "California Deep Roll",
            inside: "California roll",
            outside: "whole fried"
        },
        {
            name: "Maui Roll",
            inside: "spicy crabmeat, cucumber, shrimp tempura",
            outside: "seared cajun tuna, red onion"
        },
        {
            name: "Ultimate Salmon Roll",
            inside: "spicy tuna, cucumber, shrimp tempura",
            outside: "seared salmon w/ house mayo"
        },
        {
            name: "Spicy Tuna Deep Roll",
            inside: "spicy tuna, avocado",
            outside: "whole fried"
        },
        {
            name: "Crispy Rice Spicy Salmon",
            inside: "tempura rice w/ spicy salmon and jalapeno"
        },
        {
            name: "Hikari Roll",
            inside: "shrimp tempura, spicy tuna, cucumber",
            outside: "white fish, white onion, jalapeno"
        },
        {
            name: "Three Amigo Roll",
            inside: "California roll",
            outside: "seared albacore, spicy tuna, deep fried onion"
        },
        {
            name: "Philly Deep Roll",
            inside: "fresh salmon, avocado, creamcheese",
            outside: "whole fried"
        },
        {
            name: "Popcorn Scallop Roll",
            inside: "California roll",
            outside: "deep fried scallop"
        },
        {
            name: "Special Crunch Roll",
            inside: "crabmeat, cucumber, crunch tempura, assorted fish",
            outside: "albacore"
        },
        {
            name: "Crispy Rice Spicy Tuna",
            inside: "tempura rice w/ spicy tuna"
        },
        {
            name: "Jennifer Roll",
            inside: "spicy crabmeat, cucumber, shrimp tempura",
            outside: "fresh tuna, salmon"
        },
        {
            name: "Black Tiger Roll",
            inside: "cucumber, spicy crabmeat, shrimp tempura",
            outside: "eel, avocado, crunch"
        },
        {
            name: "Escolar Special Roll",
            inside: "crabmeat, cucumber, crunch, tempura, assorted fish",
            outside: "seared escolar"
        },
        {
            name: "Tiger Roll",
            inside: "spicy tuna, shrimp tempura, cucumber, avocado",
            outside: "crunch"
        },
        {
            name: "Crunch Roll",
            inside: "crabmeat, cucumber, avocado, shrimp tempura",
            outside: "crunch"
        },
        {
            name: "Crunch Roll Deep",
            inside: "crabmeat, cucumber, avocado, shrimp tempura",
            outside: "whole roll fried"
        },
        {
            name: "Popcorn Crawfish Roll",
            inside: "California roll",
            outside: "deep fried crawfish"
        },
        {
            name: "Shrimp Boat",
            inside: "shrimp, crabmeat",
            outside: "deep fried"
        },
        {
            name: "Bora Bora Roll",
            inside: "shrimp tempura, cucumber, crabmeat",
            outside: "spicy crabmeat"
        },
        {
            name: "Salmon Lover Roll",
            inside: "shrimp tempura, crabmeat, cucumber",
            outside: "fresh salmon"
        },
        {
            name: "Heart Attack Roll",
            inside: "albacore, spicy tuna, jalapeno, creamcheese",
            outside: "whole fried"
        },
        {
            name: "Fish Chip",
            inside: "deep fried white fish w/ spicy crabmeat"
        },
        {
            name: "In and Out Shrimp Roll",
            inside: "crabmeat, cucumber, shrimp tempura",
            outside: "shrimp, avocado"
        },
        {
            name: "Hot Night Roll",
            inside: "crabmeat, cucumber, shrimp tempura",
            outside: "spicy tuna, crunch"
        },
        {
            name: "John Roll",
            inside: "deep fried wonton skin",
            outside: "assorted fish on top"
        },
        {
            name: "Super Mexican Roll",
            inside: "crabmeat, cucumber, shrimp tempura",
            outside: "avocado"
        },
        {
            name: "Spider Roll",
            inside: "softshell crab, cucumber, avocado, crabmeat, gobo",
            outside: "crunch"
        }
    ];
    let pageContent = document.querySelector("#content");
    let menuPageContainer = document.createElement("div");
        menuPageContainer.className = "menus";
    let menuPageHeader = document.createElement("h1");
        menuPageHeader.innerText = "Menu";
    let subMenusArray = [];
    let subMenuTitlesArray = [];
    let menuContainerArray = [];
    let menuItemContainerArray = [];
    for(let i=0;i<3;i++){
        let subMenu = document.createElement("div");
        let subMenuTitle = document.createElement("div");
        let menuContainer = document.createElement("div");
        subMenu.className = "subMenu";
        subMenuTitle.className = "subMenuTitle";
        menuContainer.className = "menuContainer";

        subMenusArray.push(subMenu);
        subMenuTitlesArray.push(subMenuTitle);
        menuContainerArray.push(menuContainer);
    }
    subMenuTitlesArray[0].innerText = "Baked Rolls";
    subMenuTitlesArray[1].innerText = "Fresh Rolls";
    subMenuTitlesArray[2].innerText = "Tempura Rolls";

    for(let j=0;j<subMenusArray.length;j++){
        subMenusArray[j].appendChild(subMenuTitlesArray[j]);
    }

    for(let k=0;k<(bakedRollsArray.length+freshRollsArray.length+tempuraRollsArray.length);k++){
        let menuItemContainer = document.createElement("div");
            menuItemContainer.className = "menuItemContainer";
        let itemName = document.createElement("h3");
            itemName.classList.add("itemName", "item"+k+"Name");
        let itemPicture = document.createElement("img");
            itemPicture.classList.add("itemPicture", "item"+k+"Picture");
        let itemDescription = document.createElement("div");
            itemDescription.classList.add("itemDescription", "item"+k+"Description");
        menuItemContainer.append(itemName, itemPicture, itemDescription);
        menuItemContainerArray.push(menuItemContainer);
    }
    //append proper number of menuItemContainer's to each menuContainer based on the number of items contained within the sushi roll arrays
    for(let l=0;l<bakedRollsArray.length;l++){
        menuContainerArray[0].appendChild(menuItemContainerArray.shift());
    }
    for(let m=0;m<freshRollsArray.length;m++){
        menuContainerArray[1].appendChild(menuItemContainerArray.shift());
    }
    for(let n=0;n<tempuraRollsArray.length;n++){
        menuContainerArray[2].appendChild(menuItemContainerArray.shift());
    }
    console.log(menuContainerArray);
}


/*
A la carte Menu
let appetizers = ["Edamame", "Garlic Edamame", "Baked Green Mussel", "Gyoza", "Vegetable Tempura", "Shrimp Tempura", "Mix Tempura", "Calamari Tempura", "Shishito Pepper", "Popcorn Shrimp", "Asian Fried Chicken Wings", "Jalapeno Bomb", "Chicken Nuggets", "Yellowtail Collar", "Salmon Collar", "Popcorn Sesame Chicken", "Chicken Teriyaki Bowl", "Beef Teriyaki Bowl", "Miso Soup", "Rice", "Truffle Garlic Parmesan Fries"]
let salads = ["House Salad", "Avocado Salad", "Seaweed Salad", "Salmon Skin Salad", "Mix Sashimi Salad", "Spicy Tuna Salad"]
let noodles = ["Chicken Udon", "Tempura Udon", "Seafood Udon"]
let bentoBox = ["Chicken Teriyaki", "Beef Teriyaki", "Salmon Teriyaki", "Popcorn Sesame Chicken", "Salmon Collar", "Mix Tempura", "Gyoza", "Vegetable Tempura", "Crunch Roll", "Spicy Crunch Roll", "California Roll", "Spicy California Roll", "Spicy Tuna Roll", "Sushi", "Sashimi"]
let sashimiCombo = ["Sashimi Sampler 8pcs", "15 pcs", "25 pcs", "Chirashi", "Unagi Don"]
let sushiCombo = ["Tuna, Salmon, Albacore, Tilapia, Shrimp", "Tuna, Salmon, Albacore", "Tuna, Salmon, Albacore, Yellowtail", "Sushi & Sashimi Combo"]
let sushiSashimi = ["Tuna", "Salmon", "Yellowtail", "Albacore", "Escolar", "Tilapia", "Seared Escolar", "Cajun Tuna", "Seared Salmon", "Halibut", "Raw Shrimp", "Eel", "Shrimp", "Octopus", "Squid", "Mackerel", "Egg/Tamago", "Smelt Egg/Masago", "Salmon Roe/Ikura", "Scallop", "Spicy Scallop", "Crab", "Red Clam"]
let kidsMeal = ["Chicken Teriyaki", "Beef Teriyaki", "Salmon Teriyaki", "Chicken Nuggets", "Popcorn Sesame Chicken"]
let alcohol = ["Beer (Sapporo, Asahi, Kirin, Kirin Light)", "Hot Sake", "Cold Sake", "Soju", "Wine"]
let softDrinks = ["Coke, Diet Coke, Sprite, Fanta Orange", "Iced Tea, Lemonade", "Orange Juice, Apple Juice, Strawberry Lemonade", "Japanese Hot Green Tea, Japanese Iced Green Tea", "Perrier"]
let dessert = ["Japanese Green Tea Ice Cream", "Mochi Ice Cream (Green Tea, Mango, Strawberry)"]

Sushi rolls

    Regular Rolls
        reg/spicy
            tuna
            salmon
            yellowtail
            albacore
            escolar
            shrimp
            california
            scallop
        avocado
        cucumber
        salmon skin
        eel and avocado
        vegetable

AYCE menu

Happy Hour menu
*/

/*
<div class="menuContainer">
            <h1>Menus</h1>
            <h2>A La Carte</h2>
                <div class="menuSection aLaCarteMenu">
                        <div class="menuSubSection">
                            <h3>Appetizers</h3>
                            <div class="item">Edamame</div>
                            <div class="item">Garlic Edamame</div>
                            <div class="item">Baked Green Mussel</div>
                            <div class="item">Gyoza</div>
                            <div class="item">Vegetable Tempura</div>
                            <div class="item">Shrimp Tempura</div>
                            <div class="item">Mix Tempura</div>
                            <div class="item">Calamari Tempura</div>
                            <div class="item">Shishito Pepper</div>
                            <div class="item">Popcorn Shrimp</div>
                            <div class="item">Asian Fried Chicken Wings</div>
                            <div class="item">Jalapeno Bomb</div>
                            <div class="item">Chicken Nuggets</div>
                            <div class="item">Yellowtail Collar</div>
                            <div class="item">Salmon Collar</div>
                            <div class="item">Popcorn Sesame Chicken</div>
                            <div class="item">Chicken Teriyaki Bowl</div>
                            <div class="item">Beef Teriyaki Bowl</div>
                            <div class="item">Miso Soup</div>
                            <div class="item">Rice</div>
                            <div class="item">Truffle Garlic Parmesan Fries</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Salads</h3>
                            <div class="item">House Salad</div>
                            <div class="item">Avocado Salad</div>
                            <div class="item">Seaweed Salad</div>
                            <div class="item">Salmon Skin Salad</div>
                            <div class="item">Mix Sashimi Salad</div>
                            <div class="item">Spicy Tuna Salad</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Noodles</h3>
                            <div class="itemName">
                                <div class="item">Chicken Udon</div>
                                <div class="item">Tempura Udon</div>
                                <div class="item">Seafood Udon</div>
                            </div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Bento Box Special</h3>
                            <div class="item">Chicken Teriyaki</div>
                            <div class="item">Beef Teriyaki</div>
                            <div class="item">Salmon Teriyaki</div>
                            <div class="item">Popcorn Sesame Chicken</div>
                            <div class="item">Salmon Collar</div>
                            <div class="item">Mix Tempura</div>
                            <div class="item">Gyoza</div>
                            <div class="item">Vegetable Tempura</div>
                            <div class="item">Crunch Roll</div>
                            <div class="item">Spicy Crunch Roll</div>
                            <div class="item">California Roll</div>
                            <div class="item">Spicy California Roll</div>
                            <div class="item">Spicy Tuna Roll</div>
                            <div class="item">Sushi</div>
                            <div class="item">Sashimi</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Sashimi Combos</h3>
                            <div class="item">Sashimi Sampler 8pcs</div>
                            <div class="item">15 pcs</div>
                            <div class="item">25 pcs</div>
                            <div class="item">Chirashi</div>
                            <div class="item">Unagi Don</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Sushi Combos</h3>
                            <div class="item">Tuna, Salmon, Albacore, Tilapia, Shrimp</div>
                            <div class="item">Tuna, Salmon, Albacore</div>
                            <div class="item">Tuna, Salmon, Albacore, Yellowtail</div>
                            <div class="item">Sushi & Sashimi Combo</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Sushi & Sashimi</h3>
                            <div class="item">Tuna</div>
                            <div class="item">Salmon</div>
                            <div class="item">Yellowtail</div>
                            <div class="item">Albacore</div>
                            <div class="item">Escolar</div>
                            <div class="item">Tilapia</div>
                            <div class="item">Seared Escolar</div>
                            <div class="item">Cajun Tuna</div>
                            <div class="item">Seared Salmon</div>
                            <div class="item">Halibut</div>
                            <div class="item">Raw Shrimp</div>
                            <div class="item">Eel</div>
                            <div class="item">Shrimp</div>
                            <div class="item">Octopus</div>
                            <div class="item">Squid</div>
                            <div class="item">Mackerel</div>
                            <div class="item">Egg/Tamago</div>
                            <div class="item">Smelt Egg/Masago</div>
                            <div class="item">Salmon Roe/Ikura</div>
                            <div class="item">Scallop</div>
                            <div class="item">Spicy Scallop</div>
                            <div class="item">Crab</div>
                            <div class="item">Red Clam</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Kid's Meal</h3>
                            <div class="item">Chicken Teriyaki</div>
                            <div class="item">Beef Teriyaki</div>
                            <div class="item">Salmon Teriyaki</div>
                            <div class="item">Chicken Nuggets</div>
                            <div class="item">Popcorn Sesame Chicken</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Beverages</h3>
                            <div class="item">Beer (Sapporo, Asahi, Kirin, Kirin Light)</div>
                            <div class="item">Hot Sake</div>
                            <div class="item">Cold Sake</div>
                            <div class="item">Soju</div>
                            <div class="item">Wine</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Soft Drinks</h3>
                            <div class="item">Coke, Diet Coke, Sprite, Fanta Orange</div>
                            <div class="item">Iced Tea, Lemonade</div>
                            <div class="item">Orange Juice, Apple Juice, Strawberry Lemonade</div>
                            <div class="item">Japanese Hot Green Tea, Japanese Iced Green Tea</div>
                            <div class="item">Perrier</div>
                        </div>
                        <div class="menuSubSection">
                            <h3>Desserts</h3>
                            <div class="item">Japanese Green Tea Ice Cream</div>
                            <div class="item">Mochi Ice Cream (Green Tea, Mango, Strawberry)</div>
                        </div>
                </div>
            <h2>Sushi Rolls</h2>
                <div class="menuSection sushiRolls">
                    <div>Fresh Rolls</div>
                    <div>Baked Rolls</div>
                    <div>Tempura Rolls</div>
                </div>
            <h2>All You Can Eat</h2>
                <div class="menuSection ayceMenu"></div>
            <h2>Happy Hour</h2>
                <div class="menuSection happyHourMenu"></div>
        </div>

                .menuContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .menuSection{
            height: auto;
            width: 90%;
            background-color: grey;
            margin-bottom: 10px;
            font-size: 30px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;

        }
        .menuSubSection{
            width: 600px;
            border: 1px solid blue;
            margin: 50px;
            font-size: 35px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .menuSubSection h3{
            align-self: center;
        }
        .item{
            font-size: 25px;
        }
*/