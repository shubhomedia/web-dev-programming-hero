document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    const paswordField = document.getElementById("user-password");
    const userPass = paswordField.value;

    if(userEmail == 'admin' && userPass == 'pass'){
        window.location.href = 'bank.html';
    }else{
        alert("Enter Valid Email and Password!")
    }
})

