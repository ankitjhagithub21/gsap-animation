const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function page1Animation() {
  var imageContainer = document.getElementById("pageOneImage");
  var play = document.getElementById("play");

  imageContainer.addEventListener("mouseenter", () => {
    gsap.to(play, {
      scale: 1,
      opacity: 1,
    });
  });

  imageContainer.addEventListener("mouseleave", () => {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });

  imageContainer.addEventListener("mousemove", function (dets) {
    gsap.to(play, {
      x: dets.clientX,
      y: dets.clientY,
    });
  });

  const t1 = gsap.timeline();
  t1.to("#page1 h1 span", {
    y: 0,
    stagger: 0.2,
    delay: 0.2,
    duration: 0.5,
  }).from("#page1 img", {
    y: 50,
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
  });
}


page1Animation();
