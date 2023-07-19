
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
  
      const treadingprice = document.createElement("h4");
      treadingprice.innerText = StoredTrendItems[i][3];
      treadingprice.classList = "Item__price"
    document.getElementById("treadingItems--index"+i).appendChild(treadingprice);
  }
  }