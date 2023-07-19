//This should all be build back-end, but what's secuity on a client only page



//How to not do secuity :)
var userlogin = "UserOne";
var password = "Password";


    buildLogIn();





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
//tsdfmngsfg
buildEmployeeDashboard();
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

    const ManagePromptionsBth = document.createElement("button");
    ManagePromptionsBth.classList = ""
    ManagePromptionsBth.innerText = "Manage Promotions";
    ManagePromptionsBth.onclick = function(){
        BuildPromotionsMangament();
    }
    ManagePromptionsBth.id = "dashboardWrap";
        document.getElementById("dashboardWrap").appendChild(ManagePromptionsBth);    

}

function BuildAddProductPage(){
    document.getElementById("mainElement").innerHTML = "";
}

function BuildManageProductPage(){
    document.getElementById("mainElement").innerHTML = "";
}

function BuildPromotionsMangament(){
    document.getElementById("mainElement").innerHTML = "";
}