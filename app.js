

//sketchy item storage here
/*This is my work around for a local database, might work, might not*/
var item_value = localStorage.getItem("item_value");
var catalogSettings = localStorage.getItem("catalogSettings");
var shoppingCart = localStorage.getItem("shoppingCart");
var localShoppingCart = [[]];
var cartNewItemsCount = localStorage.getItem("cartNewItemsCount");

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
  ["1","Regular Straight-Fit Jeans", "Pants", "$23.80", "Pictures/Items/item1.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis suscipit ipsa, ad tempora omnis! Quaerat maxime ratione eligendi voluptas hic omnis quam consequuntur. Laudantium enim libero maxime nisi velit."],
  ["2","Forest Green Cotton Crew Neck Hiking T-Shirt", "Shirts", "$15.00", "Pictures/Items/item2.jpg", "Summary Section"],
  ["3","Short Sleeve Solid Blue Skater Casual Twirly Dress with Pockets", "Dresses", "$22.97", "Pictures/Items/item3.jpg", "Summary Section"],
  ["4","Umo Lorenzo Clip on Tie Solid Neck Tie", "Ties", "$10.99", "Pictures/Items/item4.jpg", "Summary Section"],
  ["5","XUECHEN Striped Tie", "Ties", "$7.99", "Pictures/Items/item5.jpg", "Summary Section"],
  ["6","AWAYTR Bow tie", "Ties", "$7.99", "Pictures/Items/item6.jpg", "Summary Section"],
  ["7","CHAOREN Ratchet Belt", "Beltes", "$17.99", "Pictures/Items/item7.jpg", "Summary Section"],
  ["8","Columbia Unisex-Adult Military Web Belt", "Beltes", "$11.98", "Pictures/Items/item8.jpg", "Summary Section"],
  ["9","BULLIANT Leather Woven Braided", "Beltes", "$29.99", "Pictures/Items/item9.jpg", "Summary Section"],
  ["10","Naturalizer Women's Anna Pump", "Shoes", "$119.99", "Pictures/Items/item10.jpg", "Yes, the shoe does come as a pair"],
  ["11","Giniros Running Shoes", "Shoes", "$36.99", "Pictures/Items/item11.jpg", "Yes, the shoe does come as a pair"],
  ["12","ASICS Gel-Venture 8 Running Shoes", "Shoes", "$54.95", "Pictures/Items/item12.jpg", "Yes, the shoe does come as a pair"],
  ["14","Crew Socks 12-Pack Black", "Sockes", "$24.99", "Pictures/Items/item14.jpg", "Summary Section"],
  ["13","Rockport Eureka Walking Shoe", "Shoes", "$69.95", "Pictures/Items/item13.jpg", "Yes, the shoe does come as a pair"],
  ["15","Crew Socks 12-Pack White", "Sockes", "$24.99", "Pictures/Items/item15.jpg", "Summary Section"]
]; 

//Tread Items - Input by Item Location/Product ID/Key/ Tag [0] - order inputted will display outputted
const NominatedtreadingItems = [2,3,5,15,13,7,9,12,14];

//feature__items - Input by Item Location/Product ID/Key/ Tag [0] - order inputted will display outputted
const NominatedFeatureItems = [12,7,2,14,10,9,6,11,15,13,5,3];

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


//Header builder
function headerBuilder(){

  const headerBuilderStructure = `
  <nav class="navbar">
    <div class="navbar__container">
      <a href="index.html" id="navbar__logo"><img id="navbar__img" src="Pictures/image (5).png">Classy Closet</a>
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
indexLink.href = "index.html"

const catalogLink = document.getElementById('catalogLink');
catalogLink.href = "catalog.html"

const productLink = document.getElementById('productLink');
productLink.href = "product.html"

const cartLink = document.getElementById('cartLink');
cartLink.href = "cart.html"

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

//Product page builder
  buildProduct();


// Builds product page if on product page,
  function buildProduct(){
    if(document.URL.includes(productLink)){
      document.getElementById("ThisItem").innerText = StoredItems[item_value][1];
      document.getElementById("Item__Product__Image").src = StoredItems[item_value][4];
      document.getElementById("Item__Price").innerText = StoredItems[item_value][3];
      document.getElementById("product__Summary").innerText = StoredItems[item_value][5];

      //Size orderer, if shirt, pant, or dress use xs, s, m, l, xl. If else use numbers kind of like how the price works
      if (
      StoredItems[item_value][2] == "Pants" 
      ||
      StoredItems[item_value][2] == "Shirts" 
      ||
      StoredItems[item_value][2] == "Dresses"){

        const productLetterSizeBuilderStructure = `
        <h3>Size: </h3>
        <form class="product__formItem"> 
          <label for="XS">XS</label>
          <input type="radio" id="XS" value="XS" name="productsize">

          <label for="S">S</label>
          <input type="radio" id="S" value="S" name="productsize">

          <label for="M">M</label>
          <input type="radio" id="M" value="M" name="productsize">

          <label for="L">L</label>
          <input type="radio" id="L" value="L" name="productsize">
          
          <label for="XL">XL</label>
          <input type="radio" id="XL" value="XL" name="productsize">
        </form>
        
        `
        document.getElementById("Item__SizeInputControl").innerHTML = productLetterSizeBuilderStructure;
      } else if(
      StoredItems[item_value][2] == "Sockes" 
      || 
      StoredItems[item_value][2] =="Shoes" 
      ||
      StoredItems[item_value][2] == "Beltes"){

        const ItemSizeNumberForm = document.createElement("form");
        ItemSizeNumberForm.autocomplete = "off";
        ItemSizeNumberForm.addEventListener("submit", function(evt){
          evt.preventDefault();
        })
        ItemSizeNumberForm.id = "ItemSizeNumberForm";
        document.getElementById("Item__SizeInputControl").appendChild(ItemSizeNumberForm);
        
        const ItemSizeNumberFormLable = document.createElement("label");
        ItemSizeNumberFormLable.id = "ItemSizeNumberFormLable";
        ItemSizeNumberFormLable.innerText = "Size:"
        document.getElementById("ItemSizeNumberForm").appendChild(ItemSizeNumberFormLable);

        const ItemSizeNumberFormInput = document.createElement("input");
        ItemSizeNumberFormInput.type ="number";
        ItemSizeNumberFormInput.id = "ItemSizeNumberFormInput";
        if (
        StoredItems[item_value][2] == "Sockes" 
        || 
        StoredItems[item_value][2] =="Shoes"){
        ItemSizeNumberFormInput.min = "1";
        ItemSizeNumberFormInput.max = "15";
        ItemSizeNumberFormInput.value = "1";
        } else {
        ItemSizeNumberFormInput.min = "25";
        ItemSizeNumberFormInput.max = "50";
        ItemSizeNumberFormInput.value = "35";
        }
        
        document.getElementById("ItemSizeNumberForm").appendChild(ItemSizeNumberFormInput);
      }
    
  }  

}


//product price and amount
var ItemAmount = 1;
function ItemAmountAdd(){
  ItemAmount++;
  updateItemAmountCounter();
}
function ItemAmountRemove(){
  if(ItemAmount > 1){
    ItemAmount--;
    updateItemAmountCounter();
  }
}

function totalItemPrice(){
  let priceItemRounder = Math.round((ItemAmount * StoredItems[item_value][3].substring(1)) * 100) / 100;
  
  if(priceItemRounder.toString().slice(-3, -2) != "."){
    if(priceItemRounder.toString().slice(-2,-1) == "."){
      priceItemRounder = priceItemRounder.toString().concat("0");
    } else{
      priceItemRounder = priceItemRounder.toString().concat(".00");
    }
  }
  return priceItemRounder;
} 


function updateItemAmountCounter(){
  document.getElementById("Item__Amount").innerText = ItemAmount;
  document.getElementById("Item__Price").innerText = ("$"+ totalItemPrice());
}



/* When a item is clicked on, set the item and load the product page to display item */
function goToProduct(requested__item){
  
  let j = 0;
  while (requested__item != StoredItems[j][0]){
    j++;
  }
  item_value = [j]
  localStorage.setItem("item_value", item_value);
  document.location.href = productLink;
}

//Footer builder
function footerBuilder(){
  const footerBuilderStructure = `
  <!-- Footer Section -->
      <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
              <div class="footer__link--items">
                <h2>About Us</h2>
                  <a href="">How it works</a>
                  <a href="">Testimonials</a>
                  <a href="">Terms of Service</a>
              </div>
              <div class="footer__link--items">
                <h2>Contact Us</h2>
                <a href="">Contact</a> 
                <a href="">Support</a>
                <a href="">Careers</a>
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
              <!--
              <div class="social__icons">
                <a
                  class="social__icon--link"
                  href=""
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  class="social__icon--link"
                  href=""
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="social__icon--link"
                  href=""
                  target="_blank"
                  aria-label="Youtube"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="social__icon--link"
                  href=""
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="social__icon--link"
                  href=""
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              -->
            </div>
          </section>
        </div>
  `
  document.getElementById("footer").innerHTML = footerBuilderStructure;
  document.getElementById("website__copyright").innerHTML = "© Classy Closet 2023-" + new Date().getFullYear() +". All rights reserved";
}



//catalog builder when on page
if(document.URL.includes(catalogLink)){
  catalogBuilder();
}
function catalogBuilder(){
  document.getElementById("Item__Container").innerHTML = "";
  for (let i = 1; i < StoredItems.length; i++) {
    if ((StoredItems[i][2] == catalogSettings) || (catalogSettings == "All")){
    const box = document.createElement("div");
    box.classList = "Item__Container"
    box.id = "box"+i;
    box.onclick = function() {goToProduct(StoredItems[i][0]);};
  document.getElementById("Item__Container").appendChild(box);

    const img = document.createElement("img");
    img.src = StoredItems[i][4];
    img.classList = "Item__img"
  document.getElementById("box"+i).appendChild(img);

    const name = document.createElement("h3");
    name.innerText = StoredItems[i][1];
    name.classList = "Item__title"
  document.getElementById("box"+i).appendChild(name);

    const price = document.createElement("h5");
    price.innerText = StoredItems[i][3];
    price.classList = "Item__price"
  document.getElementById("box"+i).appendChild(price);
    }
}
document.getElementById("categoryHeader").innerHTML = catalogSettings;
}

//category sorter
function categorySort(category){
  if (!document.URL.includes(catalogLink)){
    localStorage.setItem("catalogSettings", category);
    document.location.href = catalogLink;
  } else {
    catalogSettings = category;
  }
document.getElementById("categoryHeader").innerHTML = catalogSettings;
catalogBuilder();
}

//catalog search by name of either product and tag
function searchfor(){
    document.getElementById("Item__Container").innerHTML = "";
    document.getElementById("categoryHeader").innerHTML = catalogSettings;

  for (let i = 1; i < StoredItems.length + 1; i++) {
    if (
      StoredItems[i][1].toLowerCase().includes((document.getElementById('searchTextBox').value).toLowerCase())
      &&
      ((StoredItems[i][2].toLowerCase()) == (catalogSettings.toLowerCase()) || catalogSettings == "All")
      ){

    const box = document.createElement("div");
    box.classList = "Item__Container"
    box.id = "box"+i;
    box.onclick = function() {goToProduct(StoredItems[i][0]);};
  document.getElementById("Item__Container").appendChild(box);

    const img = document.createElement("img");
    img.src = StoredItems[i][4];
    img.classList = "Item__img"
  document.getElementById("box"+i).appendChild(img);

    const name = document.createElement("h3");
    name.innerText = StoredItems[i][1];
    name.classList = "Item__title"
  document.getElementById("box"+i).appendChild(name);

    const price = document.createElement("h5");
    price.innerText = StoredItems[i][3];
    price.classList = "Item__price"
  document.getElementById("box"+i).appendChild(price);
    }
  }
}


//Treading section builder only if the treading items div index is present on the page
if(document.getElementById("Treading__items--index")){
  treadingPageBuidlerIndex();
}


function treadingPageBuidlerIndex(){
  const treadingPageWrap = `
  <h2 id="Trending__itemsHeader">Trending Items</h2>
  `
  document.getElementById("Treading__items--index").innerHTML = treadingPageWrap;

  const Treading__itemsindexwrap = document.createElement("div");
  Treading__itemsindexwrap.id = "Treading__items--index--wrap";
  Treading__itemsindexwrap.classList = "treading";
  Treading__itemsindexwrap.style.gridTemplateColumns = "repeat("+ StoredTrendItems.length +", 1fr)";
  document.getElementById("Treading__items--index").appendChild(Treading__itemsindexwrap);

  for (let i = 0; i < StoredTrendItems.length; i++) {
    const treadingItems = document.createElement("div");
    
    treadingItems.classList = "Item__Container"
    treadingItems.id = "treadingItems--index"+i;
    treadingItems.classList = "items__treading";    
    treadingItems.onclick = function() {goToProduct(StoredTrendItems[i][0]);};

  document.getElementById("Treading__items--index--wrap").appendChild(treadingItems);

  
    const treadingItemsimg = document.createElement("img");
    treadingItemsimg.src = StoredTrendItems[i][4];
    treadingItemsimg.classList = "Item__img"
  document.getElementById("treadingItems--index"+i).appendChild(treadingItemsimg);

    const treadingname = document.createElement("h3");
    treadingname.innerText = StoredTrendItems[i][1];
    treadingname.classList = "Item__title"
  document.getElementById("treadingItems--index"+i).appendChild(treadingname);

    const treadingprice = document.createElement("h5");
    treadingprice.innerText = StoredTrendItems[i][3];
    treadingprice.classList = "Item__price"
  document.getElementById("treadingItems--index"+i).appendChild(treadingprice);
}
}

//Feature Items builder

if(document.getElementById("feature__items")){
  featuredItemsBuilder();
}

function featuredItemsBuilder(){
  for (let i = 1; i < StoredFeatureItems.length; i++) {

    const box = document.createElement("div");
    box.classList = "FeatureItem__Container"
    box.id = "FeaturedItem_Box"+i;
    box.onclick = function() {goToProduct(StoredFeatureItems[i][0]);};
  document.getElementById("feature__items").appendChild(box);

    const img = document.createElement("img");
    img.src = StoredFeatureItems[i][4];
    img.classList = "FeatureItem__img"
  document.getElementById("FeaturedItem_Box"+i).appendChild(img);

    const name = document.createElement("h3");
    name.innerText = StoredFeatureItems[i][1];
    name.classList = "FeatureItem__title"
  document.getElementById("FeaturedItem_Box"+i).appendChild(name);

    const price = document.createElement("h5");
    price.innerText = StoredFeatureItems[i][3];
    price.classList = "FeatureItem__price"
  document.getElementById("FeaturedItem_Box"+i).appendChild(price);
  }
}

//Buy product

function getProductInfo(distionRequest){
  //disable buttons
  document.getElementById("cartButton").disabled = true;
  document.getElementById("buyButton").disabled = true;
  if(StoredItems[item_value][2] == "Shirts" || StoredItems[item_value][2] ==  "Pants" || StoredItems[item_value][2] ==  "Dresses"){
      //stop if size isn't selected 
      if(document.querySelector('input[name="productsize"]:checked') == null){
        alert("Size Needs to be selected");
        document.getElementById("cartButton").disabled = false;
        document.getElementById("buyButton").disabled = false;
        //Stop em errors 
        return;
      }
  }
  if (distionRequest == "cart"){
    document.getElementById("NoteAlert").style.display='block';
    document.getElementById("cartLink").className = "button__active"
    cartNewItemsCount++;
    localStorage.setItem("cartNewItemsCount", cartNewItemsCount);
    document.getElementById("cartLink").innerText = "Cart (" + cartNewItemsCount + ")";
  }
  
  var productinfomation = [
      item_value,
      document.getElementById("Item__Amount").innerText,
    ];
    if(StoredItems[item_value][2] == "Sockes" 
    ||
    StoredItems[item_value][2] ==  "Shoes"
    ||
    StoredItems[item_value][2] ==  "Beltes"){
      productinfomation.push(document.getElementById("ItemSizeNumberFormInput").value)
    } else if(
    StoredItems[item_value][2] == "Shirts" 
    ||
    StoredItems[item_value][2] ==  "Pants"
    ||
    StoredItems[item_value][2] ==  "Dresses"){
      productinfomation.push(document.querySelector('input[name="productsize"]:checked').value)
    } else {
      productinfomation.push("empty");
    }


    localStorage.setItem("shoppingCart", shoppingCart + "/" + productinfomation);
    shoppingCart = localStorage.getItem("shoppingCart"); 


    if (distionRequest == "cart"){
      //Enable after 3 seconds
      setTimeout(() => {
        document.getElementById("NoteAlert").style.display='none';
        document.getElementById("cartButton").disabled = false;
        document.getElementById("buyButton").disabled = false;
        document.getElementById("cartLink").className = "button";
        
      }, 3000);
    } else {
      document.location.href = cartLink;
    }
}

//When on cart
if(document.URL.includes(cartLink)){
  
  cartPageBuilder();
}

function cartPageBuilder(){

  cartStorageDefragmenting();

  let totalCartPrice = 0;
  //build list
  
  for (let i = 1; i < localShoppingCart.length; i++) {
      const shoppingItembox = document.createElement("div");
      shoppingItembox.classList = "Item__ContainerShoppingItembox"
      shoppingItembox.id = "shoppingItembox"+i;
    document.getElementById("cart--wrap--index").appendChild(shoppingItembox);
    //div
    const imageconterbuttonWrap = document.createElement("div");
    imageconterbuttonWrap.classList = "imageconterbuttonWrap"
    imageconterbuttonWrap.id = "imageconterbuttonWrap"+i;
    document.getElementById("shoppingItembox"+i).appendChild(imageconterbuttonWrap);
      //div(X) only for phone
      const shoppingItemboxRemoveMobile = document.createElement("button");
      shoppingItemboxRemoveMobile.classList = "Item__ContainerShoppingItemboxRemoveMobile"
      shoppingItemboxRemoveMobile.id = "shoppingItemboxRemoveMobile"+i;
      shoppingItemboxRemoveMobile.innerText = "X"
      shoppingItemboxRemoveMobile.onclick = function() {removeItemFromCart(localShoppingCart[i][0], localShoppingCart[i][1], localShoppingCart[i][2]);};
          document.getElementById("imageconterbuttonWrap"+i).appendChild(shoppingItemboxRemoveMobile);
      //img
      const img = document.createElement("img");
      img.src = StoredItems[localShoppingCart[i][0]][4];
      img.classList = "Item__imgShoppingItembox"
      document.getElementById("imageconterbuttonWrap"+i).appendChild(img);
    //div
    const shoppingItemboxContent = document.createElement("div");
    shoppingItemboxContent.classList = "Item__ContainershoppingItemboxContent"
    shoppingItemboxContent.id = "shoppingItemboxContent"+i;
    document.getElementById("shoppingItembox"+i).appendChild(shoppingItemboxContent);
      //div
      const shoppingItemboxTitle = document.createElement("div");
      shoppingItemboxTitle.classList = "Item__ContainerShoppingItemboxTitle"
      shoppingItemboxTitle.id = "shoppingItemboxTitle"+i;
      document.getElementById("shoppingItemboxContent"+i).appendChild(shoppingItemboxTitle);
        //h2 (title)
        const shoppingItemboxMainTitle = document.createElement("h2");
        shoppingItemboxMainTitle.classList = "Item__ContainerShoppingItemboxMainTitle"
        shoppingItemboxMainTitle.id = "shoppingItemboxMainTitle"+i;
        shoppingItemboxMainTitle.innerText = StoredItems[localShoppingCart[i][0]][1]
        document.getElementById("shoppingItemboxTitle"+i).appendChild(shoppingItemboxMainTitle);
        //div(X) only for pc
        const shoppingItemboxRemove = document.createElement("button");
        shoppingItemboxRemove.classList = "Item__ContainerShoppingItemboxRemovePC"
        shoppingItemboxRemove.id = "shoppingItemboxRemove"+i;
        shoppingItemboxRemove.innerText = "X"
        shoppingItemboxRemove.onclick = function() {removeItemFromCart(localShoppingCart[i][0], localShoppingCart[i][1], localShoppingCart[i][2]);};
        document.getElementById("shoppingItemboxTitle"+i).appendChild(shoppingItemboxRemove);
      //div
      const shoppingItemboxInfo = document.createElement("div");
      shoppingItemboxInfo.classList = "Item__ContainerShoppingItemboxInfo"
      shoppingItemboxInfo.id = "shoppingItemboxInfo"+i;
      document.getElementById("shoppingItemboxContent"+i).appendChild(shoppingItemboxInfo);
        //h3 (#)
        const shoppingItemboxAmount = document.createElement("h3");
        shoppingItemboxAmount.classList = "Item__ContainerShoppingItemboxAmount"
        shoppingItemboxAmount.id = "shoppingItemboxAmount"+i;
        shoppingItemboxAmount.innerText = "Quantity:"+ localShoppingCart[i][1];
        document.getElementById("shoppingItemboxInfo"+i).appendChild(shoppingItemboxAmount);
        //h3 ($)
        const shoppingItemboxCost = document.createElement("h3");
        shoppingItemboxCost.classList = "Item__ContainerShoppingItemboxCost"
        shoppingItemboxCost.id = "shoppingItemboxCost"+i;

        
        ItemAmount =  localShoppingCart[i][1]
        item_value =  localShoppingCart[i][0]
        shoppingItemboxCost.innerText =("Price $" + totalItemPrice());

        //rats - crazy
        totalCartPrice = ((Math.round((parseFloat(totalItemPrice() + parseFloat(totalCartPrice))) * 100) / 100));
        if(totalCartPrice.toString().slice(-3, -2) != "."){
          if(totalCartPrice.toString().slice(-2,-1) == "."){
            totalCartPrice = totalCartPrice.toString().concat("0");
          } else{
            totalCartPrice = totalCartPrice.toString().concat(".00");
          }
        }
        document.getElementById("shoppingItemboxInfo"+i).appendChild(shoppingItemboxCost);

        //h3 (size)
        const shoppingItemboxSize = document.createElement("h3");
        shoppingItemboxSize.classList = "Item__ContainerShoppingItemboxSize"
        shoppingItemboxSize.id = "shoppingItemboxSize"+i;
        shoppingItemboxSize.innerText = "Size:" + localShoppingCart[i][2];
        document.getElementById("shoppingItemboxInfo"+i).appendChild(shoppingItemboxSize);
        if (localShoppingCart[i][2] == "empty"){
          document.getElementById("shoppingItemboxSize"+i).style.display='none';
        }
        
        document.getElementById("CheckoutButton").disabled = false;
        document.getElementById("AllInTotalPrice").innerHTML = "Total $" + totalCartPrice;
  }
  if (totalCartPrice == 0){
    document.getElementById("AllInTotalPrice").innerHTML = "No Items in Cart";
    document.getElementById("CheckoutButton").disabled = true;
  }

  // Forgot why this was importent again, going to keep until something breaks
  // if (localShoppingCart.length <= 1){
  //   console.log("Items added to the cart will display here")
  // }
  
}


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


function removeItemFromCart(RemovedItemID, RemovedItemAmount, RemovedItemSize){
  let newLocalShoppingCart = [];


  for (let j = 0; j < localShoppingCart.length; j++) {
    let tempNewLocalShoppingCart =
      localShoppingCart[j];
      
    if (localShoppingCart[j][0] == RemovedItemID && localShoppingCart[j][1] == RemovedItemAmount && RemovedItemID && localShoppingCart[j][2] == RemovedItemSize){
    //Does nothing, easier to read

    for (let i = j + 1; i < localShoppingCart.length; i++){
      let tempNewLocalShoppingCartFished =
      localShoppingCart[i];
      if(newLocalShoppingCart.length < 1){
        localStorage.setItem("shoppingCart", tempNewLocalShoppingCartFished);
      
      } else {
        localStorage.setItem("shoppingCart", newLocalShoppingCart + "/" + tempNewLocalShoppingCartFished);
      }
      newLocalShoppingCart = localStorage.getItem("shoppingCart");
      shoppingCart = localStorage.getItem("shoppingCart");  

    }
    if (localShoppingCart.length > 2){
      localStorage.setItem("shoppingCart", "/" + shoppingCart);
      newLocalShoppingCart = localStorage.getItem("shoppingCart");
      shoppingCart = localStorage.getItem("shoppingCart");
    }
    document.location.href = cartLink;

    return 
    } else {
      if(newLocalShoppingCart.length < 1){
        localStorage.setItem("shoppingCart", tempNewLocalShoppingCart);
      
      } else {
        localStorage.setItem("shoppingCart", newLocalShoppingCart + "/" + tempNewLocalShoppingCart);
      }
      newLocalShoppingCart = localStorage.getItem("shoppingCart");
      shoppingCart = localStorage.getItem("shoppingCart");  
    }
  }
      if (localShoppingCart.length > 2){
        localStorage.setItem("shoppingCart", "/" + shoppingCart);
        newLocalShoppingCart = localStorage.getItem("shoppingCart");
        shoppingCart = localStorage.getItem("shoppingCart");
      }
      //document.getElementById("cart--wrap--index").innerHTML = "";
      //cartPageBuilder();
      document.location.href = cartLink;
}

function endOfProductDisply(){
  alert("This is the end of the website display");
}