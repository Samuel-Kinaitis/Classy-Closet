function goToProduct(requested__item){
    /* When a item is clicked on, set the item and load the product page to display item */
    let j = 0;
    while (requested__item != StoredItems[j][0]){
      j++;
    }
    item_value = [j]
    localStorage.setItem("item_value", item_value);
    document.location.href = productLink;
  }
  function updateItemAmountCounter(){
    document.getElementById("Item__Amount").innerText = ItemAmount;
    document.getElementById("Item__Price").innerText = ("$"+ totalItemPrice());
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