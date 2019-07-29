    function animate(obj,target,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var step = (target-obj.offsetLeft)/10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(obj.offsetLeft == target){
                //设置定时器结束条件
                clearInterval(obj.timer);
            }
            //设置回调函数
            if(callback){
                callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        },15);
    }