let lastExT = 0;
let scrollTop = 0;

let carElement = document.getElementById("carAnim");
let vacElement = document.getElementById("vacAnim");

let carOffset = carElement.offsetTop;
let vacOffset = vacElement.offsetTop;

let carH = carElement.offsetHeight;
let vacH = vacElement.offsetHeight;

let carMT = carElement.duration;
let vacMT = vacElement.duration;

function Scroll() {
  var windowHeight = jQuery(document).height();
  var currentPosition = jQuery(document).scrollTop();
  var windowViewingArea = jQuery(window).height();
  var bottomScrollPosition = currentPosition + windowViewingArea;

  var percentScrolled = parseInt((bottomScrollPosition / windowHeight * 100).toFixed(3));
  console.log(percentScrolled)

  if ((carMT * (percentScrolled / 100)) && (vacMT * (percentScrolled / 100))){
    carElement.currentTime = (carMT * (percentScrolled / 100)).toPrecision(5);
    vacElement.currentTime = (vacMT * (percentScrolled / 100)).toPrecision(5);
  }
}


// function pageEffect(e) {
//     const curT = performance.now(); // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    
//     if (curT - lastExT >= 33 || (jQuery(document).scrollTop() - jQuery(window).height()) > 20) { // 33+ ms
//         scrollTop = window.scrollY;

//         let carT = (carMT * ((jQuery(document).scrollTop() - carOffset) / (carOffset + carH))).toPrecision(5);
//         let vacT = (vacMT * ((jQuery(document).scrollTop() - vacOffset) / (vacOffset + vacH))).toPrecision(5);

//         console.log(carT);
//         console.log(vacT);

//         if (carT < 0) {
//             carT = 0;
//         }
//         else if (carT > carMT) {
//             carT = carMT;
//         }
//         if (vacT < 0) {
//             vacT = 0;
//         }
//         else if (vacT > vacMT) {
//             vacT = vacMT;
//         }
//         if (Number.isFinite(carT)){
//             miniTrck.currentTime = carT.toPrecision(5);
//         }
//         if (Number.isFinite(vacT)){
//             vacElem.currentTime = vacT.toPrecision(5);
//         }
//     }
// }

window.addEventListener("touchmove", Scroll, false);
window.addEventListener("scroll", Scroll, false);