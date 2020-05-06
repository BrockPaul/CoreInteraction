const maps = [
    'assets\\Hong Kong Map Base-01.jpg',
    'assets\\Hong Kong Map Population-01.jpg',
    'assets\\Hong Kong Map Rural V Urban-01.jpg',
    'assets\\Hong Kong Map Text-01.jpg',
    'assets\\Hong Kong Map True Size-01.jpg',
];

const maps = document.querySelectorAll('.map');
// iterate over all 29 titles grabbed from the HTML above. Add a click handler on each one
maps.forEach((map, i) => {
    const imgKey = i + 1;
    title.addEventListener('click', () => {
        // replace the content of the .iframe-container and .video-container based on the index (i value) of each title clicked
        $('.map').html(
            `<img src="${imgKey}">`
        );
    });
});
// responsive 

// var breakPoint = 768;

// var boxes = document.querySelectorAll('.box');

// if (window.innerWidth < breakPoint) {
//     window.addEventListener('scroll', () => {
//         boxes.forEach(box => {
//             var showItemAt = window.innerHeight + window.scrollY - box.offsetHeight / 2;
//             if (showItemAt > box.offsetTop) {
//                 box.classList.add('appear');
//             } else {
//                 box.classList.remove('appear');
//             }
//         });
//     });
// } else {
//     console.log('big screen');
//     boxes.forEach(box => {
//         box.classList.add('fade-in');
//     });
// }

// Scrollmagic
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);




AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});