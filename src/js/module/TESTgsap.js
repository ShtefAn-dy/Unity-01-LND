import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin);


// const gsapTest = [
//   gsap.to(".test-gsap-box-1", {
//     duration: 5,
//     rotation: 3600,
//     xPercent: 2000,
//     yPercent: 50,
//     backgroundColor: '#ff0000'
//   }),
//   gsap.from(".test-gsap-box-2", {
//     duration: 5,
//     rotation: -1200,
//     xPercent: 2000,
//     yPercent: 50,
//     delay: 0.5,
//     backgroundColor: '#00ff00'
//   })
// ]
let tl = gsap.timeline({
  repeat: 2,
  repeatDelay: 1
});

const gsapTest = [
tl.to(".test-gsap-box-1", {
    duration: 5,
    rotation: 3600,
    xPercent: 2000,
    yPercent: 50,
    backgroundColor: '#ff0000'
  }),
  tl.from(".test-gsap-box-2", {
    duration: 5,
    rotation: -1200,
    xPercent: 2000,
    yPercent: 50,
    delay: 0.5,
    backgroundColor: '#00ff00'
  })
]

export default gsapTest;
