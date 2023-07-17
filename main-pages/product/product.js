buildProduct();


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