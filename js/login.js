window.onload = function(){
    var loginbutton = document.querySelectorAll('.login_login');
    var loginform1 = document.getElementById('loginForm1');
    var loginform2 = document.getElementById('loginForm2');
    console.log(loginbutton,loginform1,loginform2);
    loginbutton[0].onclick = function(event){
        console.log(0)
        event = event || window.event;
        event.preventDefault();
        loginform1.style.display='none';
        loginform2.style.display='block';
    }
    loginbutton[1].onclick = function(event){
        console.log(3)
        event = event || window.event;
        event.preventDefault();
        loginform1.style.display='block';
        loginform2.style.display='none';
    }
}
