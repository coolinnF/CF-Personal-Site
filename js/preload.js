function preloadImages() {
    for (let i = 1; i <= 45; i++) {
        const img = new Image();
        img.src = 'img/truckPngs/' + i.toString() + '.png';
    }
    for (let i = 1; i <= 90; i++) {
        const img = new Image();
        img.src = 'img/vacPngs/' + i.toString() + '.png';
    }
}

preloadImages();