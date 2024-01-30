let lastExT = 0;
let scrollTop = 0;

let carElement = document.getElementById("carAnim");
let vacElement = document.getElementById("vacAnim");

let carOffset = carElement.offsetTop;
let vacOffset = vacElement.offsetTop;

let carDist = carOffset + carElement.offsetHeight; // Use offsetHeight to get the height as a number
let vacDist = vacOffset + vacElement.offsetHeight;

let carH = carElement.offsetHeight;
let vacH = vacElement.offsetHeight;

function pageEffect(e) {
    const curT = performance.now(); // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    
    if (curT - lastExT >= 33 || (scrollTop - window.scrollY) > 20) { // 33+ ms
        scrollTop = window.scrollY;

        let carFrame = Math.round(45 * ((scrollTop + 100 - carOffset) / (carH * 1.4)));
        let vacFrame = Math.round(90 * ((scrollTop + 100 - vacOffset) / (vacH * 0.8)));

        if (carFrame <= 0) {
            carFrame = 1;
        }
        else if (carFrame > 45) {
            carFrame = 45;
        }
        if (vacFrame <= 0) {
            vacFrame = 1;
        }
        else if (vacFrame > 90) {
            vacFrame = 90;
        }
        
        let carUrl = "../CF-Personal-Site/img/truckPngs/" + carFrame.toString() + ".png";
        let vacUrl = "../CF-Personal-Site/img/vacPngs/" + vacFrame.toString() + ".png";

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

document.addEventListener('scroll', pageEffect);