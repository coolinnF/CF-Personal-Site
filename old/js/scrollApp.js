const carAnim = document.querySelector('#carAnim');
const video = carAnim.querySelector('video');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: carAnim,
    triggerHook: 0
})
    .addIndicators()
    .setPin(carAnim)
    .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update" , e => {
    scrollpos = e.scrollpos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 33.3);