gsap.registerPlugin(ScrollTrigger);
// const masterTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container",
//         markers: true,

//     }
// });

// reset all style
function resetAll() {
    const tl = gsap.timeline();
    tl.set(".icon_text, .left_left .img_wrap", {
        display: "none",
    }).set(".container", {
        gridTemplateRows: "150px 0px 150px",
    });
}

// mobile space

function mobileSpace(width) {
    return gsap.timeline().to(".container", {
        gridTemplateRows: width,
        duration: 2,
    });
}

// phone fade in effect
function phoneFadeIn() {
    const tl = gsap.timeline();
    tl.to(".left_left .img_wrap", {
        display: "block",
    }).from(".left_left .img_wrap", {
        opacity: 0,
        duration: 1,
        translateY: "25px",
    });
    return tl;
}

// icon fade in effect
function iconFadeIn() {
    const tl = gsap.timeline();

    tl.to(".icon_text", {
        display: "flex",
    })
        .from(".icon_text", {
            duration: 1,
            width: 0,
            height: 0,
        })
        .fromTo(
            ".icon_text img",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
            }
        );

    return tl;
}

// gsap.set(".container", {
//   gridTemplateRows: "1fr 1fr",
// })

// function fadeIn(target) {
//   return gsap.timeline().fromTo(target, {
//     opacity: 0,
//   }, {
//     opacity: 1,
//   })
// }

// masterTl
//     .add(resetAll)
//     .add(mobileSpace("150px 250px 150px"), "+=1")
//     .add(phoneFadeIn())
//     .add(iconFadeIn());
