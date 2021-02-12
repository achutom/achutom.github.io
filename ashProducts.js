function checkLogin() {
    var username = "achu";
    var password = "achu";
    var gmail = "achu@gmail.com";

    var loggedUser = document.getElementById("txtName").value;
    var loggedPwd = document.getElementById("txtPwd").value;
    var loggedEmail = document.getElementById("txtEmail").value;

    if (username == loggedUser && password == loggedPwd && gmail == loggedEmail) {
        alert("Welcome " + loggedUser);
    }

}