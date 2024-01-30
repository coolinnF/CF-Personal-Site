var mouseX;
let lastExT = 0;

function pageEffect(e) {
    const curT = performance.now(); // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

    if (curT - lastExT >= 20) { // 20+ ms
        const mouseX = e.clientX;

        let carFrame = Math.round(45 * (mouseX / screen.width));
        let vacFrame = Math.round(90 * (mouseX / screen.width));
        // let whichFrame = Math.round(45 * (vacElem.offsetTop / window.screen.height));
        if (carFrame === 0) {
            carFrame = 1;
        }
        if (vacFrame === 0) {
            vacFrame = 1;
        }

        let carUrl = "img/truckPngs/" + carFrame.toString() + ".png";
        let vacUrl = "img/vacPngs/" + vacFrame.toString() + ".png";

        const newCarImg = new Image();
        newCarImg.src = carUrl;
        newCarImg.style.display = 'none';

        const newVacImg = new Image();
        newVacImg.src = vacUrl;
        newVacImg.style.display = 'none';

        newCarImg.onload = function() {
            newVacImg.onload = function() {
                document.getElementById("carAnim").innerHTML = "<img src='" + carUrl + "' />";
                document.getElementById("vacAnim").innerHTML = "<img src='" + vacUrl + "' />";
            };
        };
        
        lastExT = curT;
    }
}

// Add the event listener to the document
document.addEventListener('mousemove', pageEffect);