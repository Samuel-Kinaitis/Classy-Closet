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

function BuildAddProductPage(){
    document.getElementById("mainElement").innerHTML = "";

    
}