//This should all be build back-end, but what's secuity on a client only page



//How to not do secuity :)
var userlogin = "UserOne";
var password = "Password";






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


//Remove after done testing
buildEmployeeDashboard();
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
      document.getElementById("Controls"+i).appendChild(removeBtn);

      const editBtn = document.createElement("button");
      editBtn.classList = "Item__Container"
      editBtn.id = "editBtn"+i;
      editBtn.innerText = "Edit";
      document.getElementById("Controls"+i).appendChild(editBtn);

      const Treadingbtn = document.createElement("button");
        Treadingbtn.classList = "Item__Container"
        Treadingbtn.id = "Treadingbtn"+i;

        for (let index = 0; index < StoredTrendItems.length; index++) {
            if(StoredTrendItems[index][0] == i){
                Treadingbtn.innerText = "Remove Treading";
                break;
            } else {
                Treadingbtn.innerText = "Set Treading";
            }
            Treadingbtn.onclick = function(){
                ProductFromTreading(i);
            }
        }
        
        document.getElementById("Controls"+i).appendChild(Treadingbtn);

        const Promotionbtn = document.createElement("button");
        Promotionbtn.classList = "Item__Container"
        Promotionbtn.id = "Promotionbtn"+i;
        for (let index = 0; index < StoredFeatureItems.length; index++) {
            if(StoredFeatureItems[index][0] == i){
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
        
        //Don't really need this for now
    //   const SwapBtn = document.createElement("button");
    //   SwapBtn.classList = "Item__Container"
    //   SwapBtn.id = "SwapBtn"+i;
    //   SwapBtn.innerText = "SwapBtn";
    //   document.getElementById("Controls"+i).appendChild(SwapBtn);
    }
}

function ProductFromTreading(key){
    for (let index = 0; index < StoredTrendItems.length; index++) {
        //If Item is found in the treading, remove it and stop
        if(StoredTrendItems[index][0] == key){

            document.getElementById("Treadingbtn"+key).innerText = "Add Treading";
            return;
        } else if(index + 1 == StoredTrendItems.length){
                //If not found, add to treading
            
            NominatedtreadingItems.push(key.toString());
            document.getElementById("Treadingbtn"+key).innerText = "Remove Treading";
        }
    }

    localStorage.setItem("NominatedtreadingItems", NominatedtreadingItems.toString());

    for (let i = 0; i < NominatedtreadingItems.length; i++) {
        StoredTrendItems[i] = [];
        //columns
        for (let j = 0; j < StoredItems[0].length; j++) {
          StoredTrendItems[i][j] = StoredItems[NominatedtreadingItems[i]][j];
        }
      }

}


function ProductFromFeature(key){
    for (let index = 0; index < StoredFeatureItems.length; index++) {
        //If Item is found in the featured, remove it and stop
        if(StoredFeatureItems[index][0] == key){
            NominatedFeatureItems.splice(index, 1,);
            document.getElementById("Promotionbtn"+key).innerText = "Add Promotion";
            break;
        } else if (index + 1 == StoredFeatureItems.length){
                //If not found, add to featured
        NominatedFeatureItems.push(key);
        document.getElementById("Promotionbtn"+key).innerText = "Remove Promotion";
        }
    }
    localStorage.setItem("NominatedFeatureItems", NominatedFeatureItems.toString());
    
    for (let i = 0; i < NominatedFeatureItems.length; i++) {
        StoredFeatureItems[i] = [];
        //columns
        for (let j = 0; j < StoredItems[0].length; j++) {
          StoredFeatureItems[i][j] = StoredItems[NominatedFeatureItems[i]][j];
        }
      }
}

//Removes request item by It's ID from DB

function RemoveItemFromDB(requested){

    const request = indexedDB.open("CartDatabase", 1);
    
    request.onsuccess = function (){
  const db = request.result;
  const transaction = db.transaction("items", "readwrite");

  const store = transaction.objectStore("items");


  store.delete(requested-1);

  transaction.oncomplete = function (){
    db.close(); 
  }
}
}

/*
Do not edit till DB delete is figured out 
function BuildAddProductPage(){
    document.getElementById("mainElement").innerHTML = "";

    const controlWrap = document.createElement("div");
      controlWrap.classList = "Item__Container"
      controlWrap.id = "AddFomrWrap";
      document.getElementById("mainElement").appendChild(controlWrap);

    const AddFormBuilder = `
    <form onsubmit="addToDB(event)">
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

var storableImg;

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
        console.log(storableImg);
        img.src = storableImg;
    };
    fReader.readAsDataURL(file);
});

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
    
        

        //Some More Magic Man,
        let LostItems = 0;
        for (let i = 1; i < DBsize + 1; i++) {
          let elementTest = store.get(i);

              //First one just goes through and see if it can get an element
              elementTest.onsuccess = function(){
                try{
                  ([elementTest.result.ProductID]);
                } catch {
                  LostItems++; //If not added to not found
                }

                //Only when on the very last one
                if (DBsize == i){

                  //Not found added to adress that adition cycles that are needed
                  for(let j = 1; j < DBsize + 1 + LostItems; j++){
                    let element = store.get(j);
                element.onsuccess = function(){
                  try{
                    array.push([element.result.ProductID,element.result.Name,element.result.Tag,element.result.Price,element.result.Picture,element.result.SummarySection]);
                  } catch {

                  }
                  }
                }
              }
          }
        }


    
        const countlength =  store.count();
    
        
    
        countlength.onsuccess = function(){
    
            DBsize = countlength.result;




            console.log("udpate", DBsize + 1, document.getElementById("Name").value, document.getElementById("Tag").value, document.getElementById("Price").value, "Img", document.getElementById("Summary").value)
            store.put({ id: DBsize + 1, Name: document.getElementById("Name").value, Tag: document.getElementById("Tag").value, Price: document.getElementById("Price").value, Picture: storableImg, SummarySection: document.getElementById("Summary").value});

        }
    }

    transaction.oncomplete = function (){
        db.close();
    };
}
}
*/