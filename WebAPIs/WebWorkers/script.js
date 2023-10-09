const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

/**
 * btn-1 upon cliking, performs some computation heavy task
 * btn-2 just chnages the background color
 * Perform these tasks and observe:
 *  1. Click btn-2 and it should change the color
 *  2. Click btn-1 and after 4-5 sec delay, is should alert the sum
 *  3. Now Click btn-1 button first and right after that click btn-2
 *  4. You will see that btn-2 has become un responsive and not changing the background color
 * 
 * Conclusion:
 *  Since btn-1 performs a time taking task which blocks the main thread and 
 *  does not allow any other actions to perform. So we can not run any task when
 *  the main thread is blocked.
 */
btn1.addEventListener("click", () => {
    let sum = 0;
    for (let i = 0; i < 2000_000_000; i++) {
        sum += i;
    }
    window.alert(`Main thread computed sum: ${sum}`);
});

btn2.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "green") {
        document.body.style.backgroundColor = "turquoise";
    } else {
        document.body.style.backgroundColor = "green";
    }
});


/**
 * --- SOLUTION ---
 * We can use a web api which is provided by the browser called "Worker API".
 * This can be used to hand over the tasks which are blocking in nature i.e. blocks the main thread.
 * Now lets repeat the same process but use btn-3 instead of btn-1:
 *  1. Click btn-2 and check the background change.
 *  2. Click on btn-3 to perform a heavy computation and just then click btn-2 again.
 *  3. You will see that btn-2 is now changing the background while Worker API is computing sum
 * 
 * Conclusion:
 * So using Worker API, we delegated the computing task to a separate process and made our code non-blocking!!
 */
const btn3 = document.getElementById("btn-3");

// pass the script file that performs heavy task to create worker instance, here its "worker.js"
const worker = new Worker("worker.js");

btn3.addEventListener("click", () => {
    // invoke the worker
    worker.postMessage("hey worker");
});

// listen the response from worker once task is finished
worker.onmessage = function (msg) {
    window.alert(`Worker API computed sum ${msg.data}`);
};