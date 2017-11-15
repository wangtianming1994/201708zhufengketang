export function upRefresh(element,callback){
    let body = document.body||document.documentElement;
    body.addEventListener('touchstart',touchStart);
    let startY;
    let distance;
    function touchStart(event){
        startY = event.targetTouches[0].pageY;
        distance = 0;
        console.log(element.offsetTop,element.scrollTop);
        if(element.offsetTop ==56 && element.scrollTop ==0){
            body.addEventListener('touchmove',touchMove);
            body.addEventListener('touchend',touchEnd);
        }
        function touchMove(e){
            let pageY = e.targetTouches[0].pageY;
            distance = e.targetTouches[0].pageY - startY;
            if(pageY > startY){
                element.style.top = 56+(pageY - startY)+'px';
            }else{
                body.removeEventListener('touchmove',touchMove);
                body.removeEventListener('touchend',touchEnd);
            }
        }
        function touchEnd(e){
            body.removeEventListener('touchmove',touchMove);
            body.removeEventListener('touchend',touchEnd);
            let timeId = setInterval(function(){
                if(element.offsetTop>56){
                    element.style.top = element.offsetTop-1+'px';
                }else{
                    element.style.top = '56px';
                    clearInterval(timeId);
                }
            },5);

            if(distance>50)
                callback();

        }
    }
}