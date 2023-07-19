
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