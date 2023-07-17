cartPageBuilder();
function endOfProductDisply(){
    alert("This is the end of the website display");
    console.log("Outbound request: " + shoppingCart);
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

