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