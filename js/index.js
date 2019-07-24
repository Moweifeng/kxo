window.onload = function(){
    //获取元素
    var banner = document.querySelector('.banner');
    var bannerBtnLeft = document.querySelector('.banner-btn-left');
    var bannerBtnRight = document.querySelector('.banner-btn-right');
    var ul = document.querySelector('.banner-img ul');
    console.log(-ul.offsetWidth);
    var num=0;
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var btn_ul = document.querySelector('.banner-btn ul');
    for(let i=0;i<btn_ul.children.length-2;i++){
        
        btn_ul.children[i+1].addEventListener('click',function(){
            for(let j=0;j<btn_ul.children.length-2;j++){
                btn_ul.children[j+1].className = '';
            }
            this.className = 'current';
            num = i;
            animate(ul,-num*banner.offsetWidth);
        })
    }
    bannerBtnRight.addEventListener('click',function(){
        if(num==ul.children.length-1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num*banner.offsetWidth);
    })
    bannerBtnLeft.addEventListener('click',function(){
        if(num==0){
            ul.style.left = -ul.offsetWidth+'px';
            console.log(ul.style.left);
            num=ul.children.length-1;
        }
        num--;
        animate(ul,-num*banner.offsetWidth);
    })

}