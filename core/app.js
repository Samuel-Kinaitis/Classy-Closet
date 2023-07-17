

//sketchy item storage here
/*This is my work around for a local database, might work, might not*/
var item_value = localStorage.getItem("item_value");
var catalogSettings = localStorage.getItem("catalogSettings");
var shoppingCart = localStorage.getItem("shoppingCart");
var localShoppingCart = [[]];
var cartNewItemsCount = localStorage.getItem("cartNewItemsCount");
const catalogPageSize = 12;
var ItemAmount = 1;

//needs removable after testing
// localStorage.removeItem("shoppingCart");
// const thingus = ["5","1","$7.99","empty"];
// localStorage.setItem("shoppingCart", thingus);

if(shoppingCart == null){
  localStorage.setItem("shoppingCart", []);
}

if(item_value == null){
  localStorage.setItem("item_value", 1);
}

if(cartNewItemsCount == null){
  localStorage.setItem("cartNewItemsCount", 0);
}

if(catalogSettings == null){
  localStorage.setItem("catalogSettings", "All");
}

//All Items -- Listed order only changes how items are displayed in catalog -- If access to DB could put and set from there to array?
const StoredItems= [
  ["0 - Item Location/Product ID/Key","1 - Name", "2 - Tag", "3 - Price", " 4 - Picture", "5- Summary Section"], //required for operation as of now (also looks nice as a guide), if you want to remove, amend the for loop in the catalog builder. love u, SK 
  ["1","Regular Straight-Fit Jeans", "Pants", "$23.80", "/Classy-Closet/Pictures/Items/item1.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis suscipit ipsa, ad tempora omnis! Quaerat maxime ratione eligendi voluptas hic omnis quam consequuntur. Laudantium enim libero maxime nisi velit."],
  ["2","Forest Green Cotton Crew Neck Hiking T-Shirt", "Shirts", "$15.00", "/Classy-Closet/Pictures/Items/item2.jpg", "Summary Section"],
  ["3","Short Sleeve Solid Blue Skater Casual Twirly Dress with Pockets", "Dresses", "$22.97", "/Classy-Closet/Pictures/Items/item3.jpg", "Summary Section"],
  ["4","Umo Lorenzo Clip on Tie Solid Neck Tie", "Ties", "$10.99", "/Classy-Closet/Pictures/Items/item4.jpg", "Summary Section"],
  ["5","XUECHEN Striped Tie", "Ties", "$7.99", "/Classy-Closet/Pictures/Items/item5.jpg", "Summary Section"],
  ["6","AWAYTR Bow tie", "Ties", "$7.99", "/Classy-Closet/Pictures/Items/item6.jpg", "Summary Section"],
  ["7","CHAOREN Ratchet Belt", "Beltes", "$17.99", "/Classy-Closet/Pictures/Items/item7.jpg", "Summary Section"],
  ["8","Columbia Unisex-Adult Military Web Belt", "Beltes", "$11.98", "/Classy-Closet/Pictures/Items/item8.jpg", "Summary Section"],
  ["9","BULLIANT Leather Woven Braided", "Beltes", "$29.99", "/Classy-Closet/Pictures/Items/item9.jpg", "Summary Section"],
  ["10","Naturalizer Women's Anna Pump", "Shoes", "$119.99", "/Classy-Closet/Pictures/Items/item10.jpg", "Yes, the shoe does come as a pair"],
  ["11","Giniros Running Shoes", "Shoes", "$36.99", "/Classy-Closet/Pictures/Items/item11.jpg", "Yes, the shoe does come as a pair"],
  ["12","ASICS Gel-Venture 8 Running Shoes", "Shoes", "$54.95", "/Classy-Closet/Pictures/Items/item12.jpg", "Yes, the shoe does come as a pair"],
  ["14","Crew Socks 12-Pack Black", "Sockes", "$24.99", "/Classy-Closet/Pictures/Items/item14.jpg", "Summary Section"],
  ["13","Rockport Eureka Walking Shoe", "Shoes", "$69.95", "/Classy-Closet/Pictures/Items/item13.jpg", "Yes, the shoe does come as a pair"],
  ["15","Crew Socks 12-Pack White", "Sockes", "$24.99", "/Classy-Closet/Pictures/Items/item15.jpg", "Summary Section"]
]; 

//Tread Items - Input by Item Location/Product ID/Key/ Tag [0] - order inputted will display outputted
const NominatedtreadingItems = [2,3,5,15,13,7,9,12,14];

//feature__items - Input by Item Location/Product ID/Key/ Tag [0] - order inputted will display outputted
const NominatedFeatureItems = [12,7,2,14,10,9,6,11,15,13,5,3,8];

//Finds the nomintated treading items, and gets there true position in the 2d array of stored items
let FindNominatedTreadingItems= [];
for (let i = 0; i < NominatedtreadingItems.length; i++) {
  let j = 0;
  while (NominatedtreadingItems[i] != StoredItems[j][0]){
    j++;
  }
  FindNominatedTreadingItems[i] = [j]
}

let StoredTrendItems = [];

// creating two-dimensional array
//rows
for (let i = 0; i < FindNominatedTreadingItems.length; i++) {
  StoredTrendItems[i] = [];
  //columns
  for (let j = 0; j < StoredItems[0].length; j++) {
    StoredTrendItems[i][j] = StoredItems[FindNominatedTreadingItems[i]][j];
  }
}


//Finds the nomintated featured items, and gets there true position in the 2d array of stored items
let FindNominatedFeatureItems= [];
for (let i = 0; i < NominatedFeatureItems.length; i++) {
  let j = 0;
  while (NominatedFeatureItems[i] != StoredItems[j][0]){
    j++;
  }
  NominatedFeatureItems[i] = [j]
}


let StoredFeatureItems = [];

// creating two-dimensional array
//rows
for (let i = 0; i < NominatedFeatureItems.length; i++) {
  StoredFeatureItems[i] = [];
  //columns
  for (let j = 0; j < StoredItems[0].length; j++) {
    StoredFeatureItems[i][j] = StoredItems[NominatedFeatureItems[i]][j];
  }
}


//Construct basic page elements
headerBuilder();
footerBuilder();




//rat magic, needs to be replace by a real indexedDB instead of this banjo playing fucntion (I took way too much ducttap, but it can surive a nuke? maybe)
function cartStorageDefragmenting(){
  let row = 0;
  let comule = 0;
  let tempComuleCart = "";
  for (let j = 1; j < shoppingCart.length + 1; j++) {
    if(shoppingCart.substring(j,j-1) == ","){
      //new comule
      localShoppingCart[row] = localShoppingCart[row].concat(tempComuleCart);
      tempComuleCart = "";
    } else if (shoppingCart.substring(j,j-1) == "/"){
      //push final comule for that row.
      localShoppingCart[row] = localShoppingCart[row].concat(tempComuleCart);
      tempComuleCart = "";
      //new row
      row++;
      localShoppingCart[row] = []
      tempComuleCart = "";
    } else {
      //put at end of comule
      tempComuleCart = tempComuleCart.concat(shoppingCart.substring(j,j-1));
    }
  }
    //push final comule.
      localShoppingCart[row] = localShoppingCart[row].concat(tempComuleCart);
      tempComuleCart = "";



}



//main content, do not remove from app

function headerBuilder(){

  const headerBuilderStructure = `
  <nav class="navbar">
    <div class="navbar__container">
      <a href="/Classy-Closet/main-pages/home/home.html" id="navbar__logo"><img id="navbar__img" src="/Classy-Closet/Pictures/image (5).png">Classy Closet</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span> 
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a id="indexLink" class="navbar__links">Home</a>
        </li>
        <li class="navbar__item">
          <a id="catalogLink" class="navbar__links" onclick="categorySort('All')">Catalog</a>
        </li>
        <li class="navbar__item">
            <a id="productLink" class="navbar__links">Product</a>
          </li>
        <li class="navbar__btn" id="cartBtn" ><a id="cartLink" href="/" class="button">Cart</a></li>
      </ul> 
    </div>
  </nav>
  `
  document.getElementById("header").innerHTML = headerBuilderStructure;

  //Animation Menu magic
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

//Link path controller
const indexLink = document.getElementById('indexLink');
indexLink.href = "/Classy-Closet/main-pages/home/home.html"

const catalogLink = document.getElementById('catalogLink');
catalogLink.href = "/Classy-Closet/main-pages/catalog/catalog.html"

const productLink = document.getElementById('productLink');
productLink.href = "/Classy-Closet/main-pages/product/product.html"

const cartLink = document.getElementById('cartLink');
cartLink.href = "/Classy-Closet/main-pages/cart/cart.html"

  //highlight current page in navbar
  if(document.URL.includes(catalogLink)){
    document.getElementById("catalogLink").className = "navbar__links__active"
  }else if(document.URL.includes(productLink)){
    document.getElementById("productLink").className = "navbar__links__active"
  } else if(document.URL.includes(cartLink)){
    document.getElementById("cartLink").className = "button__active"
  } else if(document.URL.includes(indexLink) || document.URL.includes("")){
    document.getElementById("indexLink").className = "navbar__links__active"
  }

    //Update cart notications
    if(document.URL.includes(cartLink)){
      localStorage.setItem("cartNewItemsCount", 0);
    } else if (cartNewItemsCount > 0) {
      document.getElementById("cartLink").innerText = "Cart (" + cartNewItemsCount + ")";
    }
}
function footerBuilder(){
  const footerBuilderStructure = `
  <!-- Footer Section -->
      <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
              <div class="footer__link--items">
                <h2>About Us</h2>
                  <a href="/Classy-Closet/support-pages/how-it-works/how-it-works.html">How it works</a>
                  <a href="">Testimonials</a>
                  <a href="/Classy-Closet/support-pages/tos/terms-of-service.html">Terms of Service</a>
              </div>
              <div class="footer__link--items">
                <h2>Contact Us</h2>
                <a href="/Classy-Closet/support-pages/contact/contact.html">Contact</a> 
                <a href="">Support</a>
                <a href="/Classy-Closet/support-pages/careers/careers.html">Careers</a>
              </div>
              <div class="footer__link--items">
                <h2>Social Media</h2>
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a href="https://www.youtube.com/" target="_blank">Youtube</a> 
                <a href="https://twitter.com/" target="_blank">Twitter</a>
              </div>
            </div>
          </div>
          <section class="social__media">
            <div class="social__media--wrap">
              <div class="footer__logo">
                <a href="" id="footer__logo"></i>Classy Closet</a>
              </div>
              <div class="website__rights--wrap">
                  <p class="website__rights">Designed and Owned by Samuel Kinaitis</p>
                  <p id="website__copyright" class="website__rights">© Classy Closet 2023. All rights reserved</p>
              </div>
            </div>
          </section>
        </div>
  `
  document.getElementById("footer").innerHTML = footerBuilderStructure;
  document.getElementById("website__copyright").innerHTML = "© Classy Closet 2023-" + new Date().getFullYear() +". All rights reserved";
}
