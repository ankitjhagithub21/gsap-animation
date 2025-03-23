var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", (dets) => {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
  });
});

frames.forEach((frame) => {
  frame.addEventListener("mouseenter", function () {
    gsap.to(circle, {
      scale: 6,
    });
    gsap.to(frame.children, {
      color: "white",
      duration: 0.3,
      y: "-5vw",
    });
  });

  frame.addEventListener("mousemove", (dets) => {
    var dims = frame.getBoundingClientRect();

    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(frame.children, {
      x: lerp(-50, 50, zeroone),
      duration: 0.3,
    });
  });

  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "black",
      duration: 0.3,
      y: 0,
      x: 0,
    });
  });
});
