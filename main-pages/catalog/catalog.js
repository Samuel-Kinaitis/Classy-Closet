

catalogBuilder();


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