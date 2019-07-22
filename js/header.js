window.onload = function () {
    var header_list_a = document.querySelectorAll(".header-list-a");
    var header_list = document.querySelectorAll(".header-list");
    // for (let i = 0; i < header_list_a.length; i++) {
    //     var element = header_list_a[i];
    //     var content=  header_list[i];   
    //     }
    //     header_list_a[1].onmouseover=function(){
    //         header_list[1].style.display='block';
    // }
    for (let i = 0; i < header_list_a.length; i++) {
        header_list_a[i].onmouseenter = function () {
            // for (let item of header_list) {
            //     item.style.display = "none";
            // }
            for (let j = 0; j < header_list.length; j++) {
                header_list[j].style.display = 'none';
            }
            header_list[i].style.display = "block";
        }
        header_list[i].onmouseenter = function () {
            this.style.display = "block";
        }
        header_list[i].onmouseleave = function () {
            this.style.display = "none";
        }
    }
    var text = document.querySelector('input');
    text.onfocus=function(){
        if(text.value=='search'){
            text.value='';
        }
    }
    text.onblur=function(){
        if(text.value==''){
            text.value='search';
        }
    }
}



