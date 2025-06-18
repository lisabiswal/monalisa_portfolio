function sideBar() {
  let open = document.querySelector(".open");
  let close = document.querySelector(".close");

  open.addEventListener("click", () => {
    gsap.to(".side-bar", {
      right: "0rem",
      visibility: "visible",
      duration: 0.3,

    })
  })
  close.addEventListener("click", () => {
    gsap.to(".side-bar", {
      right: "-29rem",
      duration: 0.3,
      onComplete: () => {
        document.querySelector(".side-bar").style.visibility = "hidden";
      }
    })
  })
}
sideBar()


function circleMove(){

  gsap.to(".circle", {
    rotate: 360,
    duration: 3,
    repeat: -1,
    ease: "linear"
  });
}
circleMove()

function certificateView(){

  let certis = document.querySelectorAll(".certi");
  
  certis.forEach((certi) => {
    let overlay = certi.querySelector(".overlay");
  
    certi.addEventListener("mouseenter", () => {
      gsap.to(overlay, {
        height: "10rem",
        duration: 0.3
      });
    });
  
    certi.addEventListener("mouseleave", () => {
      gsap.to(overlay, {
        height: "0rem",
        duration: 0.3
      });
    });
  });
}  
certificateView()

function footer(){
  gsap.to("footer a",{
    y: 30,
    repeat: -1,
    yoyo: true
  })
}
footer()