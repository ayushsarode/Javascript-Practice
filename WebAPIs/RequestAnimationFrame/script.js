const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const box = document.getElementById("box");

/**
 * Method-1: Animate with setInterval
 * here we give 10ms interval and animate the box to move from left to right
 */
let pxCount = 0, stopId, timer;
const windowWidth = document.body.clientWidth;;

btn1.addEventListener("click", () => {
    const text = btn1.innerText;
    if(text === 'Animate with setInterval - Start') {
        btn1.innerText = 'Animate with setInterval - Reset';
        timer = setInterval(()=> {
            pxCount += 10;
            box.style.marginLeft = `${pxCount}px`;

            if(pxCount > windowWidth-100) {
                clearInterval(timer);
            }
        }, 10);
    } else {
        btn1.innerText = 'Animate with setInterval - Start';
        clearInterval(timer);
        box.style.marginLeft = 0;
        pxCount = 0;
    }
});


/**
 * Method-2: Animate with requestAnimationFrame
 * requestAnimationFrame does not re-run its callback function at a certain interval,
 * Instead it waits for the last animation to be finished and re-run only when 
 * browser is ready for next re-paint.
 *
 * This method has these benifits:
 *  a. Since this method is browser optimized hence animation looks smoother.
 *  b. Animations(recursive calls to requestAnimationFrame() func) stop when browser tab is inactive, 
 *     This can be observed by starting the animatino and then switch to other browser tab.
 *  c. CPU efficient since it stops when not in use
 */
function animate(timestamp) {
    pxCount += 10;
    box.style.marginLeft = `${pxCount}px`;

    if(pxCount < windowWidth - 100) {
        // recursively call for next re-paint
        stopId = requestAnimationFrame(animate);
    }
};

btn2.addEventListener("click", () => {
    const text = btn2.innerText;
    if(text === 'Animate with requestAnimationFrame - Start') {
        btn2.innerText = 'Animate with requestAnimationFrame - Reset';
        requestAnimationFrame(animate);
    } else {
        btn2.innerText = 'Animate with requestAnimationFrame - Start';
        cancelAnimationFrame(stopId);
        box.style.marginLeft = 0;
        pxCount = 0;
    }
});