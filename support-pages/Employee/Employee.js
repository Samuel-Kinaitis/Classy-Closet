//This should all be build back-end, but what's secuity on a client only page



//How to not do secuity :)
var userlogin = "UserOne";
var password = "Password";

var storableImg;




//functions

function buildLogIn(){
    document.getElementById("mainElement").innerHTML = "";

    //build log in section
    //login form
    const userwrap = document.createElement("div");
    userwrap.classList = ""
    userwrap.id = "userwrap";
        document.getElementById("mainElement").appendChild(userwrap);

        //user info
    const userinfowrap = document.createElement("div");
    userinfowrap.classList = ""
    userinfowrap.id = "userinfowrap";
        document.getElementById("userwrap").appendChild(userinfowrap);

        const userinfousername = document.createElement("p");
        userinfousername.classList = ""
        userinfousername.id = "userinfousername";
        userinfousername.innerText = "UserName: " + userlogin;
            document.getElementById("userinfowrap").appendChild(userinfousername);

            const userinfoPassword = document.createElement("p");
            userinfoPassword.classList = ""
            userinfoPassword.id = "userinfousername";
            userinfoPassword.innerText = "Password: " + password;
                document.getElementById("userinfowrap").appendChild(userinfoPassword);
    


        //form
    const loginform = document.createElement("form");
    loginform.classList = ""
    loginform.id = "loginform";
    loginform.addEventListener("submit", function(evt){
        evt.preventDefault();
        loginTest(document.getElementById("usersinput").value,document.getElementById("passwordinput").value);
      })
        document.getElementById("userwrap").appendChild(loginform);
    //users loggin in
    const userinput = document.createElement("input");
    userinput.classList = ""
    userinput.id = "usersinput";
    userinput.placeholder = "User";
    userinput.required = true;
        document.getElementById("loginform").appendChild(userinput);

    const passwordInput = document.createElement("input");
    passwordInput.classList = ""
    passwordInput.id = "passwordinput";
    passwordInput.placeholder = "Password";
    passwordInput.type = "password";
    passwordInput.required = true;
        document.getElementById("loginform").appendChild(passwordInput);

    const LoginSumbit = document.createElement("input");
    LoginSumbit.classList = ""
    LoginSumbit.id = "SumbitButton";
    LoginSumbit.placeholder = "Password"
    LoginSumbit.type = "submit";
        document.getElementById("loginform").appendChild(LoginSumbit);

        const LoginStatus = document.createElement("p");
        LoginStatus.classList = ""
        LoginStatus.id = "LoginStatus";
        LoginStatus.innerText = "LogIn";
            document.getElementById("userwrap").appendChild(LoginStatus);
        }
function loginTest(user, password){
    if (user == userlogin && password == password){
        buildEmployeeDashboard();
    } else {
        LoginStatus.innerText = "LogIn Failed, Username and/or Password is incorrect";
    }
}
//main dashboard

function buildEmployeeDashboard(){
    document.getElementById("mainElement").innerHTML = "";

    
    const dashboardWrap = document.createElement("div");
    dashboardWrap.classList = ""
    dashboardWrap.id = "dashboardWrap";
        document.getElementById("mainElement").appendChild(dashboardWrap);

    const MangageProductBtn = document.createElement("button");
    MangageProductBtn.classList = ""
    MangageProductBtn.innerText = "Manage Products";
    MangageProductBtn.onclick = function() {
        BuildManageProductPage();
    }
    MangageProductBtn.id = "dashboardWrap";
        document.getElementById("dashboardWrap").appendChild(MangageProductBtn);

    const AddProductBtn = document.createElement("button");
    AddProductBtn.classList = ""
    AddProductBtn.innerText = "Add Products";
    AddProductBtn.onclick = function(){
        BuildAddProductPage();
    }
    AddProductBtn.id = "dashboardWrap";
        document.getElementById("dashboardWrap").appendChild(AddProductBtn);

}

function BuildManageProductPage(){
    document.getElementById("mainElement").innerHTML = "";

    const ManageProductWrap = document.createElement("div");
    ManageProductWrap.classList = ""
    ManageProductWrap.id = "ManageProductWrap";
        document.getElementById("mainElement").appendChild(ManageProductWrap);

    //Do like Cart, but add a buttons to manage promotions, could also add swap button.
    
    for (let i = 1; i < StoredItems.length; i++) {
      
        const box = document.createElement("div");
        box.classList = "Item__Container"
        box.id = "box"+i;
      document.getElementById("ManageProductWrap").appendChild(box);
    //image
        const img = document.createElement("img");
        img.src = StoredItems[i][4];
        img.classList = "Item__img"
      document.getElementById("box"+i).appendChild(img);
    //info

    const inforwrap = document.createElement("div");
    inforwrap.classList = "Item__Container"
    inforwrap.id = "inforwrap"+i;
    document.getElementById("box"+i).appendChild(inforwrap);

        const name = document.createElement("h3");
        name.innerText = StoredItems[i][1];
        name.classList = "Item__title"
      document.getElementById("inforwrap"+i).appendChild(name);

      const id = document.createElement("h3");
      id.innerText = "ID:" + StoredItems[i][0];
      id.classList = "Item__title"
      document.getElementById("inforwrap"+i).appendChild(id);

      const tag = document.createElement("h3");
      tag.innerText = "Catagory: " + StoredItems[i][2];
      tag.classList = "Item__title"
      document.getElementById("inforwrap"+i).appendChild(tag);
      
        const price = document.createElement("h5");
        price.innerText = StoredItems[i][3];
        price.classList = "Item__price"
      document.getElementById("inforwrap"+i).appendChild(price);

      const summary = document.createElement("p");
      summary.innerText = StoredItems[i][5];
      summary.classList = "Item__price"
    document.getElementById("inforwrap"+i).appendChild(summary);

      //Controls
      const controlWrap = document.createElement("div");
      controlWrap.classList = "Item__Container"
      controlWrap.id = "Controls"+i;
      document.getElementById("box"+i).appendChild(controlWrap);

      const removeBtn = document.createElement("button");
      removeBtn.classList = "Item__Container"
      removeBtn.id = "removeBtn"+i;
      removeBtn.innerText = "Remove";
      removeBtn.onclick = function(){
        RemoveItemFromDB(StoredItems[i][0],i);
      }
      document.getElementById("Controls"+i).appendChild(removeBtn);

      const editBtn = document.createElement("button");
      editBtn.classList = "Item__Container"
      editBtn.id = "editBtn"+i;
      editBtn.innerText = "Edit";
      document.getElementById("Controls"+i).appendChild(editBtn);

      const Treadingbtn = document.createElement("button");
        Treadingbtn.classList = "Item__Container"
        Treadingbtn.id = "Treadingbtn"+i;

        for (let index = 0; index < NominatedtreadingItems.length; index++) {
            if(NominatedtreadingItems[index] == StoredItems[i][0]){
                Treadingbtn.innerText = "Remove Treading";
                break;
            } else {
                Treadingbtn.innerText = "Set Treading";
            }
        }
        Treadingbtn.onclick = function(){
            ProductFromTreading(i);
        }
        document.getElementById("Controls"+i).appendChild(Treadingbtn);

        const Promotionbtn = document.createElement("button");
        Promotionbtn.classList = "Item__Container"
        Promotionbtn.id = "Promotionbtn"+i;
        for (let index = 0; index < StoredFeatureItems.length; index++) {
            if(NominatedFeatureItems[index] == StoredItems[i][0]){
                Promotionbtn.innerText = "Remove Promotion";
                break;
            } else {
                Promotionbtn.innerText = "Set Promotion";
            }
        }
        Promotionbtn.onclick = function(){
            ProductFromFeature(i);
        }
        document.getElementById("Controls"+i).appendChild(Promotionbtn);
        
    }
}

function ProductFromTreading(key){

//new
    document.getElementById("Treadingbtn"+key).disabled = true;
    
    //check if item is already in NominatedtreadingItems

    for (let index = 0; index < NominatedtreadingItems.length; index++) {
        if(NominatedtreadingItems[index] == StoredItems[key][0]){
            //remove
            console.log("remove");
            NominatedtreadingItems.splice(index,1);
            console.log(NominatedtreadingItems);
            document.getElementById("Treadingbtn"+key).innerText = "Add Treading";
            break;
        } else if (index + 1 == NominatedtreadingItems.length){
            //add
            NominatedtreadingItems.push(StoredItems[key][0])
            document.getElementById("Treadingbtn"+key).innerText = "Remove Treading";
            break;
        }   
    }
    localStorage.setItem("NominatedtreadingItems", NominatedtreadingItems.toString());
    NominatedtreadingItems = localStorage.getItem("NominatedtreadingItems");

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
    document.getElementById("Treadingbtn"+key).disabled = false;

}



function ProductFromFeature(key){
    document.getElementById("Promotionbtn"+key).disabled = true;
    
    //check if item is already in NominatedFeatureItems

    for (let index = 0; index < NominatedFeatureItems.length; index++) {
        if(NominatedFeatureItems[index] == StoredItems[key][0]){
            //remove
            console.log("remove");
            NominatedFeatureItems.splice(index,1);
            console.log(NominatedFeatureItems);
            document.getElementById("Promotionbtn"+key).innerText = "Add Promotion";
            break;
        } else if (index + 1 == NominatedFeatureItems.length){
            //add
            NominatedFeatureItems.push(StoredItems[key][0])
            document.getElementById("Promotionbtn"+key).innerText = "Remove Promotion";
            break;
        }   
    }
    localStorage.setItem("NominatedFeatureItems", NominatedFeatureItems.toString());
    NominatedFeatureItems = localStorage.getItem("NominatedFeatureItems");
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
    document.getElementById("Promotionbtn"+key).disabled = false;

}

//Removes request item by It's ID from DB

function RemoveItemFromDB(requested, key){
    document.getElementById("box" + key).style.display='none';

    console.log("Removed", requested);
    //Remove From Treading and Promotion

    //Treading

    for (let index = 0; index < NominatedtreadingItems.length; index++) {
        if(NominatedtreadingItems[index] == requested){
            //remove
            NominatedtreadingItems.splice(index,1);
            break;
        } 
    }
    localStorage.setItem("NominatedtreadingItems", NominatedtreadingItems.toString());

    NominatedtreadingItems = localStorage.getItem("NominatedtreadingItems");

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

    //Promotion

    for (let index = 0; index < NominatedFeatureItems.length; index++) {
        if(NominatedFeatureItems[index] == requested){
            //remove
            NominatedFeatureItems.splice(index,1);
            break;
        }
    }
    localStorage.setItem("NominatedFeatureItems", NominatedFeatureItems.toString());

    NominatedFeatureItems = localStorage.getItem("NominatedFeatureItems");
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
    //Database



    const request = indexedDB.open("CartDatabase", 1);

    request.onsuccess = function (){
  const db = request.result;
  const transaction = db.transaction("items", "readwrite");

  const store = transaction.objectStore("items");

  
  const removale = store.delete((requested) + 1);

  removale.onsuccess = function(){

    //Update db to stored items

    const element = store.getAll();
    element.onsuccess = () => {
    array = element.result;
    StoredItems = []
      for (let index = 0; index < array.length; index++) {
          StoredItems.push([array[index].ProductID,array[index].Name,array[index].Tag,array[index].Price,array[index].Picture,array[index].SummarySection]);
        }
    };
  }

  transaction.oncomplete = function (){
    db.close();
    BuildManageProductPage ();
  }
}
}

//Do not edit till DB delete is figured out 
function BuildAddProductPage(){
    document.getElementById("mainElement").innerHTML = "";

    const controlWrap = document.createElement("div");
      controlWrap.classList = "Item__Container"
      controlWrap.id = "AddFomrWrap";
      document.getElementById("mainElement").appendChild(controlWrap);

    const AddFormBuilder = `
    <form onsubmit="addToDB(event)" id="InputForm">
        <input required type="text" id="Name" placeholder="Name">

        <select required name="" id="Tag" placeholder="Tag">
            <option value="Shirts">Shirts</option>
            <option value="Pants">Pants</option>
            <option value="Dresses">Dresses</option>
            <option value="Ties">Ties</option>
            <option value="Beltes">Beltes</option>
            <option value="Shoes">Shoes</option>
            <option value="Sockes">Sockes</option>
        </select>

        <input required type="text" id="Price" placeholder="Price (ex.$5.00)" pattern="[$][0-9]+\.[0-9]{2}">


        <input required type="file" id="bannerImg"  />
        <img src="" id="tableBanner" />


        <input required type="text" id="Summary" placeholder="Summary Section">
        <input type="submit" >
    </form>
    `

    document.getElementById("AddFomrWrap").innerHTML = AddFormBuilder;


    //Add to DB and also make picture 64based

    // Get all variables
var bannerImage = document.getElementById('bannerImg');
var result = document.getElementById('res');
var img = document.getElementById('tableBanner');



// Add a change listener to the file input to inspect the uploaded file.
bannerImage.addEventListener('change', function() {
    var file = this.files[0];
    // Basic type checking.
    if (file.type.indexOf('image') < 0) {
        res.innerHTML = 'invalid type';
        return;
    }
    
    // Create a file reader
    var fReader = new FileReader();

    // Add complete behavior
    fReader.onload = function() {
        // Show the uploaded image to banner.
        storableImg = fReader.result;
        //console.log(storableImg);
        img.src = storableImg;
    };
    fReader.readAsDataURL(file);
});

}

function addToDB(event){
    //console.log("Adding to DateBase");
    event.preventDefault();

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
    
        store.put({ id: (StoredItems[StoredItems.length -1][0]) + 2,ProductID: (StoredItems[StoredItems.length -1][0]) + 1,Name: document.getElementById("Name").value, Tag: document.getElementById("Tag").value, Price: document.getElementById("Price").value, Picture: storableImg, SummarySection: document.getElementById("Summary").value});

        store.oncomplete = () =>{
            const element = store.getAll();
        element.onsuccess = () => {
        array = element.result;
        };
        }

    


    }
    request.oncomplete = function (){
        db.close();
        StoredItems = []
        for (let index = 0; index < array.length; index++) {
            StoredItems.push([array[index].ProductID,array[index].Name,array[index].Tag,array[index].Price,array[index].Picture,array[index].SummarySection]);
          }
          BuildAddProductPage();
    };
}
