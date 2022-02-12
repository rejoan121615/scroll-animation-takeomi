gsap.registerPlugin(ScrollTrigger);
const masterTl = gsap.timeline();

ScrollTrigger.create({
    trigger: ".top_right",
    animation: masterTl,
    pin: ".container",
    scrub: true,
    end: "+=5000",
});

function hideAll() {
    const tl = gsap.timeline();
    tl.set(".left_left img, .line, .icon_text, .icon", {
        opacity: 0,
    });
    return tl;
}

function resE(target, prop = [0, 0]) {
    return gsap.set(target, {
        translateX: prop[0],
        translateY: prop[1],
    });
}

// reset animation
function anmRes(target, prop = [0, 0]) {
    const tl = gsap.timeline();
    tl.to(target, {
        translateX: `${prop[0]}px`,
        translateY: `${prop[1]}px`,
        duration: 2,
        delay: 0.1,
    });

    return tl;
}

// fade in animation
function fadeIn(target) {
    const tl = gsap.timeline();
    tl.to(target, {
        opacity: 1,
        duration: 3,
        delay: 0.1,
    });

    return tl;
}

// reset all element
function resetAllXl() {
    const tl = gsap.timeline();
    tl.add(resE(".top_right .main_img", ["-290px", 0]))
        .add(resE(".bottom_right .main_img", ["-300px", 0]))
        .add(resE(".bottom_left .main_img", ["-225px", "-65px"]));

    return tl;
}
function resetAllXxl() {
    const tl = gsap.timeline();
    tl.add(resE(".top_right .main_img", ["-250px", 0]))
        .add(resE(".bottom_right .main_img", ["-300px", 0]))
        .add(resE(".bottom_left .main_img", ["-195px", "-60px"]));

    return tl;
}

// move aside
function moveAsideXl() {
    const tl = gsap.timeline();
    tl.add(anmRes(".top_left .main_img", [310, 0]), "+=1")
        .add(anmRes(".top_right .main_img", [0, 0]), "<")
        .add(anmRes(".bottom_right .main_img", [0, 0]), "-=2.1")
        .add(anmRes(".bottom_left .main_img", [100, -65]), "-=2.1");

    return tl;
}
function moveAsideXxl() {
    const tl = gsap.timeline();
    tl.add(anmRes(".top_left .main_img", [245, 0]), "+=1")
        .add(anmRes(".top_right .main_img", [0, 0]), "<")
        .add(anmRes(".bottom_right .main_img", [0, 0]), "-=2.1")
        .add(anmRes(".bottom_left .main_img", [100, -65]), "-=2.1");

    return tl;
}

// reset the place
function getInPlaceAndZoomOut() {
    const tl = gsap.timeline();
    tl.add(anmRes(".top_left .main_img", [0, 0])).add(
        anmRes(".bottom_left .main_img", [0, 0]),
        "<"
    );
    return tl;
}

// reset all sm
function resetAllSm() {
    const tl = gsap.timeline();
    tl.set(".top_right .main_img, .top_left .main_img", {
        translateY: "125px",
    })
        .set(".bottom_right .main_img", {
            translateY: "-165px",
        })
        .set(" .bottom_left .main_img", {
            translateY: "-210px",
        });
    return tl;
}

// decorate all sm
function reverseAllSm() {
    const tl = gsap.timeline();
    tl.to(
        ".top_right .main_img, .top_left .main_img, .bottom_right .main_img, .bottom_left .main_img",
        {
            translateY: "0px",
            duration: 2,
            delay: 1,
        }
    );
    return tl;
}

// master timeline

ScrollTrigger.matchMedia({
    "(min-width: 1400px)": function () {
        masterTl
            .add(hideAll())
            .add(resetAllXxl())
            .add(moveAsideXxl())
            .add(fadeIn(".left_left img"))
            .add(getInPlaceAndZoomOut())
            .set(".line", {
                opacity: 1,
            })
            .from(".line", {
                width: 0,
                duration: 2,
                delay: 0.1,
            })
            .to(".icon, .icon_text", {
                opacity: 1,
                duration: 3,
                delay: 0.1,
            });
    },
    "(min-width: 1200px) and (max-width: 1399px)": function () {
        masterTl
            .add(hideAll())
            .add(resetAllXl())
            .add(moveAsideXl())
            .add(fadeIn(".left_left img"))
            .add(getInPlaceAndZoomOut())
            .set(".line", {
                opacity: 1,
            })
            .from(".line", {
                width: 0,
                duration: 2,
                delay: 0.1,
            })
            .to(".icon, .icon_text", {
                opacity: 1,
                duration: 3,
                delay: 0.1,
            });
    },

    "(max-width: 1199px)": function () {
        masterTl
            .add(hideAll())
            .add(resetAllSm())
            .add(reverseAllSm())
            .add(fadeIn(".left_left img"))

            .set(".line", {
                opacity: 1,
            })
            .from(".line", {
                height: 0,
                duration: 2,
                delay: 0.1,
            })
            .to(".icon, .icon_text", {
                opacity: 1,
                duration: 3,
                delay: 0.1,
            });
    },
});
