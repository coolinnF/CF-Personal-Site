var mouseX;
let lastExT = 0;
let miniTrck = document.getElementById("carAnim");
// let vacElem = document.getElementById("vacAnim");


function pageEffect(e) {
    //const curT = performance.now(); // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

    //if (curT - lastExT >= 20) { // 20+ ms
        const mouseX = e.clientX;

        var carL = miniTrck.duration;
        var carT = ((mouseX / screen.width) * carL);

        // var vacL = vacElem.duration;
        // var vacT = ((mouseX / screen.width) * vacL);
        
        if (carT < 0) {
            carT = 0;
            // vacT = 0;
        }
        else if (carT > carL) {
            carT = carL; 
            // vacT = vacL;
        }
        if (Number.isFinite(carT)){
            miniTrck.currentTime = Number(carT.toFixed(2));
        }
        // if (Number.isFinite(vacT)){
        //     vacElem.currentTime = vacT.toPrecision(5);
        // }
        
        //lastExT = curT;
    //}
}

// Add the event listener to the document
document.addEventListener('mousemove', pageEffect);