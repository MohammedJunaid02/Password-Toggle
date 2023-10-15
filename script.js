let icon=document.getElementById('showandhide');

let password=document.getElementById('password');

icon.onclick = function(){
    if(password.type=="password"){
        password.type="text";
        icon.src="display.png";
    }
    else{
        password.type="password";
        icon.src="hide.png";
    }
}

