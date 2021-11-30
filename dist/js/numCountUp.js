// 数字动态
const count = document.querySelectorAll('.count');
countUp(count)
function countUp( domList, totalTime = 2, delay = 10 ) {
    Array.prototype.forEach.call(domList, (dom) => {
        const count = +dom.innerHTML
        let initial = 0
        const increment = Math.ceil(count / totalTime / 1000 * delay)
        const timer = setInterval( () => {
            if ( initial <= count ){
                dom.innerHTML = initial += increment
            } else {
                dom.innerHTML = count
                clearInterval(timer)
            }
        }, delay)
    })
}
/*
    function countUp(domList, delay = 0) {
        Array.prototype.forEach.call( domList, function (count) {
            const conutText = +count.innerHTML;
            let i = 1;
            const timer = setInterval(() => {
                if (i <= conutText && conutText > 90000) {
                    i = i + 501;
                    count.innerHTML = i;
                    if (i > conutText){
                        count.innerHTML = conutText;
                    }
                } else if( i < conutText && conutText > 4500 && conutText < 90000 ){
                    i = i + 31;
                    count.innerHTML = i;
                    if (i > conutText){
                        count.innerHTML = conutText;
                    }
                }
                else if (i < conutText && conutText < 4500){
                    i = i + 2;
                    count.innerHTML = i;
                    if (i > conutText){
                        count.innerHTML = conutText;
                    }
                }
                else {
                    clearInterval(timer);
                }
            },delay)
        })
    }
*/
// 数字动态结束 end end end