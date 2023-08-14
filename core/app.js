

//sketchy item storage here
/*This is my work around for a local database, might work, might not*/
var item_value = localStorage.getItem("item_value");
var catalogSettings = localStorage.getItem("catalogSettings");
var shoppingCart = localStorage.getItem("shoppingCart");
var localShoppingCart = [[]];
var cartNewItemsCount = localStorage.getItem("cartNewItemsCount");
const catalogPageSize = 12;
var ItemAmount = 1;

var StoredFeatureItems = [];
var StoredTrendItems = [];

const productLink = "/Classy-Closet/main-pages/product/product.html";

var NominatedtreadingItems = localStorage.getItem("NominatedtreadingItems");
if(NominatedtreadingItems == null){
  localStorage.setItem("NominatedtreadingItems", "2,3,15,13,9,12,14");
  NominatedtreadingItems = localStorage.getItem("NominatedtreadingItems");
}

DeFrementTreadingItemsStacked();
function DeFrementTreadingItemsStacked (){
  var ArriedNTI = [];
var SubNTI = "";
for (let index = 0; index < NominatedtreadingItems.length + 1; index++) {
  
  if(NominatedtreadingItems.substring(index,index-1) == ","){
    ArriedNTI.push(SubNTI);
    SubNTI = "";
  } else {
    SubNTI =  SubNTI.concat(NominatedtreadingItems.substring(index,index-1));
  }
}
ArriedNTI.push(SubNTI);
NominatedtreadingItems = ArriedNTI;
}


var NominatedFeatureItems = localStorage.getItem("NominatedFeatureItems");
if(NominatedFeatureItems == null){
  localStorage.setItem("NominatedFeatureItems", "2,3,15,13,9,12,14");
  NominatedFeatureItems = localStorage.getItem("NominatedFeatureItems");
}
DeFrementFeatureItemsStacked();
function DeFrementFeatureItemsStacked(){
  var ArriedNFI = [];
  var SubNFI = "";
  for (let index = 0; index < NominatedFeatureItems.length + 1; index++) {
    
    if(NominatedFeatureItems.substring(index,index-1) == ","){
      ArriedNFI.push(SubNFI);
      SubNFI = "";
    } else {
      SubNFI =  SubNFI.concat(NominatedFeatureItems.substring(index,index-1));
    }
  }
  ArriedNFI.push(SubNFI);
  NominatedFeatureItems = ArriedNFI;
}


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
var StoredItems= []; 

//Indexed Database for stored Items

var array = [];
var DBsize;

var restoreDB = true;

const indexedDB = 
window.indexedDB ||
window.mozIndexedDB ||
window.webkitIndexedDB ||
window.msIndexedDB ||
window.shimIndexDB;

const request = indexedDB.open("CartDatabase", 1);


request.onerror = function (event) {
    console.error("An error ocurred with IndexedDB");
    console.error(event);
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("items", { keyPath: "id" });

};



request.onsuccess = function (){
    
    const db = request.result;
    const transaction = db.transaction("items", "readwrite");

    const store = transaction.objectStore("items");

    

    const countlength =  store.count();

    

    

    countlength.onsuccess = function(){

        DBsize = countlength.result;
        // database is cleared, on reload
        if( DBsize == 0){
            store.put({ id: 1, ProductID: 0, Name: "Name", Tag: "Tag", Price: "Price", Picture: "Picture", SummarySection: "Summary Section"});
            store.put({ id: 2, ProductID: 1, Name: "Regular Straight-Fit Jeans", Tag: "Pants", Price: "$23.80", Picture: "/Classy-Closet/Pictures/Items/item1.jpg", SummarySection: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis suscipit ipsa, ad tempora omnis! Quaerat maxime ratione eligendi voluptas hic omnis quam consequuntur. Laudantium enim libero maxime nisi velit."});
            store.put({ id: 3, ProductID: 2, Name: "Forest Green Cotton Crew Neck Hiking T-Shirt", Tag: "Shirts", Price: "$15.00", Picture: "/Classy-Closet/Pictures/Items/item2.jpg", SummarySection: "Summary Section"});
            store.put({ id: 4, ProductID: 3, Name: "Short Sleeve Solid Blue Skater Casual Twirly Dress with Pockets", Tag: "Dresses", Price: "$22.97", Picture: "/Classy-Closet/Pictures/Items/item3.jpg", SummarySection: ""});
            store.put({ id: 5, ProductID: 4, Name: "Umo Lorenzo Clip on Tie Solid Neck Tie", Tag: "Ties", Price: "$10.99", Picture: "/Classy-Closet/Pictures/Items/item4.jpg", SummarySection: "Summary Section"});
            store.put({ id: 6, ProductID: 5, Name: "XUECHEN Striped Tie", Tag: "Ties", Price: "$7.99", Picture: "/Classy-Closet/Pictures/Items/item5.jpg", SummarySection: "Summary Section"});
            store.put({ id: 7, ProductID: 6, Name: "AWAYTR Bow tie", Tag: "Ties", Price: "$7.99", Picture: "/Classy-Closet/Pictures/Items/item6.jpg", SummarySection: "Summary Section"});
            store.put({ id: 8, ProductID: 7, Name: "CHAOREN Ratchet Belt", Tag: "Beltes", Price: "$17.99", Picture: "/Classy-Closet/Pictures/Items/item7.jpg", SummarySection: "Summary Section"});
            store.put({ id: 9, ProductID: 8, Name: "Columbia Unisex-Adult Military Web Belt", Tag: "Beltes", Price: "$11.98", Picture: "/Classy-Closet/Pictures/Items/item8.jpg", SummarySection: "Summary Section"});
            store.put({ id: 10, ProductID: 9, Name: "BULLIANT Leather Woven Braided", Tag: "Beltes", Price: "$29.99", Picture: "/Classy-Closet/Pictures/Items/item9.jpg", SummarySection: "Summary Section"});
            store.put({ id: 11, ProductID: 10, Name: "Naturalizer Women's Anna Pump", Tag: "Shoes", Price: "$119.99", Picture: "/Classy-Closet/Pictures/Items/item10.jpg", SummarySection: "Yes, the shoe does come as a pair"});
            store.put({ id: 12, ProductID: 11, Name: "Giniros Running Shoes", Tag: "Shoes", Price: "$36.99", Picture: "/Classy-Closet/Pictures/Items/item11.jpg", SummarySection: "Yes, the shoe does come as a pair"});
            store.put({ id: 13, ProductID: 12, Name: "ASICS Gel-Venture 8 Running Shoes", Tag: "Shoes", Price: "$54.95", Picture: "/Classy-Closet/Pictures/Items/item12.jpg", SummarySection: "Yes, the shoe does come as a pair"});
            store.put({ id: 14, ProductID: 13, Name: "Rockport Eureka Walking Shoe", Tag: "Shoes", Price: "$69.95", Picture: "/Classy-Closet/Pictures/Items/item13.jpg", SummarySection: "Yes, the shoe does come as a pair"});
            store.put({ id: 15, ProductID: 14, Name: "Crew Socks 12-Pack Black", Tag: "Sockes", Price: "$24.99", Picture: "/Classy-Closet/Pictures/Items/item14.jpg", SummarySection: "Summary Section"});
            store.put({ id: 16, ProductID: 15, Name: "Crew Socks 12-Pack White", Tag: "Sockes", Price: "$24.99", Picture: "/Classy-Closet/Pictures/Items/item15.jpg", SummarySection: "Summary Section"});
        }



const element = store.getAll();
element.onsuccess = () => {
  array = element.result;
};
     
        
    }
    
   

    transaction.oncomplete = function (){
        db.close(); 
        //StoredItems = array

        for (let index = 0; index < array.length; index++) {
          StoredItems.push([array[index].ProductID,array[index].Name,array[index].Tag,array[index].Price,array[index].Picture,array[index].SummarySection]);
        }

        databaseComplete();
        
        if (document.URL.includes(indexLink)){
          featuredItemsBuilder();
          treadingPageBuidlerIndex();
          
        } else if (document.URL.includes(catalogLink)){
          catalogBuilder();
        } else if (document.URL.includes("/Classy-Closet/main-pages/product/product.html")){
          buildProduct();
          treadingPageBuidlerIndex();
        } else if (document.URL.includes(cartLink)){
          cartPageBuilder();
        } else if (document.URL.includes("/Classy-Closet/support-pages/Employee/Employee.html")){
          buildLogIn();
        }
    };
};






function databaseComplete(){


DeFrementTreadingItems();
function DeFrementTreadingItems(){
  NominatedtreadingItems = localStorage.getItem("NominatedtreadingItems");

  DeFrementTreadingItemsStacked();

//Storage
StoredTrendItems = [];
  for (let i = 0; i < NominatedtreadingItems.length; i++) {
    for (let index = 0; index < StoredItems.length; index++) {
      if (StoredItems[index][0] == NominatedtreadingItems[i]){
        StoredTrendItems.push([StoredItems[index][0], StoredItems[index][1],StoredItems[index][2],StoredItems[index][3],StoredItems[index][4]]);
        break;
      }
    }
  }
}





DeFrementFeatureItems();
function DeFrementFeatureItems (){

  NominatedFeatureItems = localStorage.getItem("NominatedFeatureItems");

  DeFrementFeatureItemsStacked();

  for (let i = 0; i < NominatedFeatureItems.length; i++) {
    StoredFeatureItems[i] = [];
    //columns
    for (let j = 0; j < StoredItems[0].length; j++) {
  
      for (let index = 0; index < StoredItems.length; index++) {
        if(NominatedFeatureItems[i] == StoredItems[index][0]){
          StoredFeatureItems[i][j] = StoredItems[index][j];
          break;
        } 
      }
    }
  }
}

}




//Construct basic page elements
headerBuilder();
footerBuilder();




// needs to be replace by a real indexedDB instead
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
        <li class="navbar__btn">
          <a id="indexLink" class="button">Home</a>
        </li>
        <li class="navbar__btn">
          <a id="catalogLink" class="button" onclick="categorySort('All')">Catalog</a>
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

const cartLink = document.getElementById('cartLink');
cartLink.href = "/Classy-Closet/main-pages/cart/cart.html"

  //highlight current page in navbar
  if(document.URL.includes(catalogLink)){
    document.getElementById("catalogLink").className = "navbar__links__active"
  }else if(document.URL.includes(cartLink)){
    document.getElementById("cartLink").className = "button__active"
  } else if(document.URL.includes(indexLink)){
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
                  <a href="/Classy-Closet/support-pages/Employee/Employee.html">Employee</a>
                  <a href="/Classy-Closet/support-pages/tos/terms-of-service.html">Terms of Service</a>
              </div>
              <div class="footer__link--items">
                <h2>Contact Us</h2>
                <a href="/Classy-Closet/support-pages/contact/contact.html">Contact</a> 
                <a href="/Classy-Closet/support-pages/support/support.html">Support</a>
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
                <a href="/Classy-Closet/main-pages/home/home.html" id="footer__logo"></i>Classy Closet</a>
              </div>
              <div class="website__rights--wrap">
              <a href="/home/" target="_blank" class="website__credits"><p class="website__rights">Designed and Owned by Samuel Kinaitis</p></a>
                  <p id="website__copyright" class="website__rights">© Classy Closet 2023. All rights reserved</p>
                  <p class="website__rights">eCommerce mock-up for demonstration purposes only</p>
              </div>
            </div>
          </section>
        </div>
  `
  document.getElementById("footer").innerHTML = footerBuilderStructure;
  document.getElementById("website__copyright").innerHTML = "© Classy Closet 2023-" + new Date().getFullYear() +". All rights reserved";
}
