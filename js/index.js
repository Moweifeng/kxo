window.onload = function(){
    //获取元素
    var banner = document.querySelector('.banner');
    var bannerBtnLeft = document.querySelector('.banner-btn-left');
    var bannerBtnRight = document.querySelector('.banner-btn-right');
    var ul = document.querySelector('.banner-img ul');
    console.log(-ul.offsetWidth);
    var num=0;
    var flag = true;
    var first = ul.children[0].cloneNode(true);//克隆第一张图片
    
    ul.appendChild(first);//在ul最后插入first
    var btn_ul = document.querySelector('.banner-btn ul');
    for(let i=0;i<btn_ul.children.length-2;i++){
        btn_ul.children[i].addEventListener('click',function(){
            for(let j=0;j<btn_ul.children.length;j++){
                btn_ul.children[j].className = '';
            }
            this.className = 'current';
            num = i;
            console.log(i);
            animate(ul,-num*banner.offsetWidth);
        })
    }
        bannerBtnRight.addEventListener('click',function(){
            console.log(flag)
            if(flag){
                flag = false;//关闭节流阀
                if(num==ul.children.length-2){
                    ul.style.left = 0;
                    num = 0;
                }
                for(let j=0;j<btn_ul.children.length;j++){
                     btn_ul.children[j].className = '';
                }
                num++;
                btn_ul.children[num].className = 'current';
                // console.log(num);
                animate(ul,-num*banner.offsetWidth,function(){
                    flag = true;//打开节流阀

                });
            }
        })
        bannerBtnLeft.addEventListener('click',function(){
            if(num==0){
                ul.style.left = -ul.offsetWidth+'px';
                console.log(ul.style.left);
                num=ul.children.length-1;
            }
            for(let j=0;j<btn_ul.children.length;j++){
                btn_ul.children[j].className = '';
            }
            num--;
            btn_ul.children[num].className = 'current';
            console.log(num);
            animate(ul,-num*banner.offsetWidth);
        })
}