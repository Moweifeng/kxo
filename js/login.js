window.onload = function(){
    var loginbutton1 = document.querySelector('#button1');
    var loginbutton2 = document.querySelector('#button2');
    var loginform1 = document.getElementById('loginForm1');
    var loginform2 = document.getElementById('loginForm2');
    loginbutton1.onclick = function(event){
        event = event || window.event;
        event.preventDefault();
        loginform1.style.display='none';
        loginform2.style.display='block';
    }
    loginbutton2.onclick = function(event){
        event = event || window.event;
        event.preventDefault();
        loginform1.style.display='block';
        loginform2.style.display='none';
    }
    var phone1 = document.querySelector('#input_phone1');
    var phone2 = document.querySelector('#input_phone2');
    var inputcode = document.querySelector('#Input_code1 .loginLow');
    var password = document.querySelector('#Input_code2 .loginLow');
    var dynamicCode = document.querySelector('#dynamic_code');
    console.log(dynamicCode);
    var text1 = document.querySelector('.text1');
    var text2 = document.querySelector('.text2');
    var text3 = document.querySelector('.text3');
    var text4 = document.querySelector('.text4');
    console.log(inputcode.value,password.value);
    var c=0;
    phone1.onblur = function(){
        if(this.value==''){
            text1.innerHTML = '手机号码不能为空';
        }else if(this.value.length!==11){
            text1.innerHTML = '手机号码是11位数字，请重新输入';
        }else{
            text1.innerHTML = '';
            c=11;
        }
        if(phone1.value.length!==11){
            dynamicCode.disabled = true;
        }
        if(phone1.value.length==11){
            dynamicCode.onclick = function(){
            this.value.disabled = false;
            this.style.bakcgroundColor = '#000';
            text1.innerHTML = '请输入短信动态码';
            }
        }   
    } 
    console.log(c); 
    phone2.onblur = function(){
        if(this.value==''){
            text3.innerHTML = '请输入手机号/邮箱';
        }else{
            text3.innerHTML = '';
        }
    }
    inputcode.onblur = function(){
        if(this.value==''){
            text2.innerHTML = '请输入短信动态码';
        }else{
            text2.innerHTML = '';

        }
    }
    password.onblur = function(){
        if(this.value==''){
            text4.innerHTML = '请输入您的密码';
        }else if(this.value.length<6){
            text4.innerHTML = '密码不得少于6位';
        }else if(this.value.length>16){
            text4.innerHTML = '密码不得大于16位';
        }else{
            text4.innerHTML = '';
        }
    }

}
