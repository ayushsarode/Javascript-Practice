// once invoked from main thread, execute the function performing the task
self.onmessage = function (msg) {
    console.log(msg.data); //hey worker

    let sum = 0;
    for (let i = 0; i < 2000_000_000; i++) {
        sum += i;
    }
    // post the message to main thread
    postMessage(sum);
};