// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $body = $("body");
  var $container = $(".container");
  var $scramble = $(".scramble");
  var $input = $(".input");
  var $notice = $(".notice");
  var $buttons = $(".button");
  var $options = $(".options-box");

  // OTHER GLOBALS
  var optionsOpen = false;

  // DEMO SCRAMBLE
  $scramble.scramble(3000, 20, "alphabet", true);

  // HELPERS
  var toBoolean = function (input) {
    return input === "true" ? true : false;
  };

  var scrambleDemo = function () {
    input = $input.val() === "" ? "Text deScrambler" : $input.val();
    duration = Number($(".duration").eq(0).val());
    interval = Number($(".interval").eq(0).val());
    uppercase = toBoolean($("input[name=uppercase]:checked").val());
    characterSet = $("input[name=character-set]:checked").val();
    $scramble.text(input);
    $scramble.scramble(duration, interval, characterSet, uppercase);
  };

  // LISTENERS
  // button click (scramble or options)
  $buttons.on("click", function () {
    // SCRAMBLE button
    if ($(this).attr("value") === "scramble") {
      scrambleDemo();
      // OPTIONS button
    } else if ($(this).attr("value") === "options") {
      if (!optionsOpen) {
        $options.animate({
          top: "-90px",
        });
      } else {
        $options.animate({
          top: "-400px",
        });
      }
      optionsOpen = !optionsOpen;
    }
  });

  // enter keydown
  $input.on("keydown", function (e) {
    if (e.keyCode === 13) {
      $notice.fadeOut(500, function () {
        $notice.text("");
      });
      scrambleDemo();
    } else {
      if ($input.val().length > 18) {
        $notice.text("Just press enter, already.");
        $notice.fadeIn();
      }
    }
  });
});

// ----------scrambleEnd--------------

// ---loader up -----
var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    "#v0",
    {
      // height: "0%",
      opacity: 0,
      // duration: -1,
      delay: -2,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      // duration:0.1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      // duration:0.1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  .from(
    "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  )

  .from(
    "#shape-1,#hotel, #table, #scooter",
    {
      opacity: 0,
      duration: 1,
      // delay:0
      // scale:0,
      // top:"40%",
      // left:"47%"
    },
    "u"
  );

// document.querySelector("#explore")
// .addEventListener("click", function(){
//     document.querySelectorAll("#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i").style.top = "100%"
//     // document.querySelector(".svgwaala").style.marginTop = "-51%"
//     // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
// })

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    // document.querySelector("#kothik-k").style.left = "-10%";
    // document.querySelector("#vwclr").style.display = "initial";
    // document.querySelector("#vw").style.display = "initial";
    // document.querySelector("#vwclr").style.mixBlendMode = "difference";
    // document.querySelector("#main").style.backgroundColor = dets.target.dataset.color;
    // document.querySelectorAll(".insidebottom h3, .insidebottom p").forEach(function (val) {
    //     val.style.color = "white";
    // });
    tl2
      .to(
        "#kothik-k",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-o",
        {
          // left:"-15%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-t",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-h",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-i",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-k2",
        {
          left: "-15%",
          top: "80%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        // scale:2,
        width: "80vw",
        top: "-10%",
        // left:"10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#table",
        {
          left: "15%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#scooter",
        {
          left: "75%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#hotel",
        {
          left: "115%",
          top: "30%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#shape-1",
        {
          left: "75%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          opacity: 0,
          duration: 1,
        },
        "sw"
      )
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        // y:"-100%",
        // transform: "skew(50deg)",
        opacity: 0,
      })
      // .to("#main", {
      //   marginTop:"-51.5%",
      //   // transform: "skew(50deg)",
      //   // opacity: 0,
      // })
  });
});

// first-txt animation --------------------

// const scroller = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// })


function dom(){
  const canvas = document.querySelector("#home>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images/scene00154.jpg
  images/scene00155.jpg
  images/scene00156.jpg
  images/scene00157.jpg
  images/scene00158.jpg
  images/scene00159.jpg
  images/scene00160.jpg
  images/scene00161.jpg
  images/scene00162.jpg
  images/scene00163.jpg
  images/scene00164.jpg
  images/scene00165.jpg
  images/scene00166.jpg
  images/scene00167.jpg
  images/scene00168.jpg
  images/scene00169.jpg
  images/scene00170.jpg
  images/scene00171.jpg
  images/scene00172.jpg
  images/scene00173.jpg
  images/scene00174.jpg
  images/scene00175.jpg
  images/scene00176.jpg
  images/scene00177.jpg
  images/scene00178.jpg
  images/scene00179.jpg
  images/scene00180.jpg
  images/scene00181.jpg
  images/scene00182.jpg
  images/scene00183.jpg
  images/scene00184.jpg
  images/scene00185.jpg
  images/scene00186.jpg
  images/scene00187.jpg
  images/scene00188.jpg
  images/scene00189.jpg
  images/scene00190.jpg
  images/scene00191.jpg
  images/scene00192.jpg
  images/scene00193.jpg
  images/scene00194.jpg
  images/scene00195.jpg
  images/scene00196.jpg
  images/scene00197.jpg
  images/scene00198.jpg
  images/scene00199.jpg
  images/scene00200.jpg
  images/scene00201.jpg
  images/scene00202.jpg
  images/scene00203.jpg
  images/scene00204.jpg
  images/scene00205.jpg
  images/scene00206.jpg
  images/scene00207.jpg
  images/scene00208.jpg
  images/scene00209.jpg
  images/scene00210.jpg
  images/scene00211.jpg
  images/scene00212.jpg
  images/scene00213.jpg
  images/scene00214.jpg
  images/scene00215.jpg
  images/scene00216.jpg
  images/scene00217.jpg
  images/scene00218.jpg
  images/scene00219.jpg
  images/scene00220.jpg
  images/scene00221.jpg
  images/scene00222.jpg
  images/scene00223.jpg
  images/scene00224.jpg
  images/scene00225.jpg
  images/scene00226.jpg
  images/scene00227.jpg
  images/scene00228.jpg
  images/scene00229.jpg
  images/scene00230.jpg
  images/scene00231.jpg
  images/scene00232.jpg
  images/scene00233.jpg
  images/scene00234.jpg
  images/scene00235.jpg
  images/scene00236.jpg
  images/scene00237.jpg
  images/scene00238.jpg
  images/scene00239.jpg
  images/scene00240.jpg
  images/scene00241.jpg
  images/scene00242.jpg
  images/scene00243.jpg
  images/scene00244.jpg
  images/scene00245.jpg
  images/scene00246.jpg
  images/scene00247.jpg
  images/scene00248.jpg
  images/scene00249.jpg
  images/scene00250.jpg
  images/scene00251.jpg
  images/scene00252.jpg
  images/scene00253.jpg
  images/scene00254.jpg
  images/scene00255.jpg
  images/scene00256.jpg
  images/scene00257.jpg
  images/scene00258.jpg
  images/scene00259.jpg
  images/scene00260.jpg
  images/scene00261.jpg
  images/scene00262.jpg
  images/scene00263.jpg
  images/scene00264.jpg
  images/scene00265.jpg
  images/scene00266.jpg
  images/scene00267.jpg
  images/scene00268.jpg
  images/scene00269.jpg
  images/scene00270.jpg
  images/scene00271.jpg
  images/scene00272.jpg
  images/scene00273.jpg
  images/scene00274.jpg
  images/scene00275.jpg
  images/scene00276.jpg
  images/scene00277.jpg
  images/scene00278.jpg
  images/scene00279.jpg
  images/scene00280.jpg
  images/scene00281.jpg
  images/scene00282.jpg
  images/scene00283.jpg
  images/scene00284.jpg
  images/scene00285.jpg
  images/scene00286.jpg
  images/scene00287.jpg
  images/scene00288.jpg
  images/scene00289.jpg
  images/scene00290.jpg
  images/scene00291.jpg
  images/scene00292.jpg
  images/scene00293.jpg
  images/scene00294.jpg
  images/scene00295.jpg
  images/scene00296.jpg
  images/scene00297.jpg
  images/scene00298.jpg
  images/scene00299.jpg
  images/scene00300.jpg
  images/scene00301.jpg
  images/scene00302.jpg
  images/scene00303.jpg
  images/scene00304.jpg
  images/scene00305.jpg
  images/scene00306.jpg
  images/scene00307.jpg
  images/scene00308.jpg
  images/scene00309.jpg
  images/scene00310.jpg
  images/scene00311.jpg
  images/scene00312.jpg
  images/scene00313.jpg
  images/scene00314.jpg
  images/scene00315.jpg
  images/scene00316.jpg
  images/scene00317.jpg
  images/scene00318.jpg
  images/scene00319.jpg
  images/scene00320.jpg
  images/scene00321.jpg
  images/scene00322.jpg
  images/scene00323.jpg
  images/scene00324.jpg
  images/scene00325.jpg
  images/scene00326.jpg
  images/scene00327.jpg
  images/scene00328.jpg
  images/scene00329.jpg
  images/scene00330.jpg
  images/scene00331.jpg
  images/scene00332.jpg
  images/scene00333.jpg
  images/scene00334.jpg
  images/scene00335.jpg
  images/scene00336.jpg
  images/scene00337.jpg
  images/scene00338.jpg
  images/scene00339.jpg
  images/scene00340.jpg
  images/scene00341.jpg
  images/scene00342.jpg
  images/scene00343.jpg
  images/scene00344.jpg
  images/scene00345.jpg
  images/scene00346.jpg
  images/scene00347.jpg
  images/scene00348.jpg
  images/scene00349.jpg
  images/scene00350.jpg
  images/scene00351.jpg
  images/scene00352.jpg
  images/scene00353.jpg
  images/scene00354.jpg
  images/scene00355.jpg
  images/scene00356.jpg
  images/scene00357.jpg
  images/scene00358.jpg
  images/scene00359.jpg
  images/scene00360.jpg
  images/scene00361.jpg
  images/scene00362.jpg
  images/scene00363.jpg
  images/scene00364.jpg
  images/scene00365.jpg
  images/scene00366.jpg
  images/scene00367.jpg
  images/scene00368.jpg
  images/scene00369.jpg
  images/scene00370.jpg
  images/scene00371.jpg
  images/scene00372.jpg
  images/scene00373.jpg
  images/scene00374.jpg
  images/scene00375.jpg
  images/scene00376.jpg
  images/scene00377.jpg
  images/scene00378.jpg
  images/scene00379.jpg
  images/scene00380.jpg
  images/scene00381.jpg
  images/scene00382.jpg
  images/scene00383.jpg
  images/scene00384.jpg
  images/scene00385.jpg
  images/scene00386.jpg
  images/scene00387.jpg
  images/scene00388.jpg
  images/scene00389.jpg
  images/scene00390.jpg
  images/scene00391.jpg
  images/scene00392.jpg
  images/scene00393.jpg
  images/scene00394.jpg
  images/scene00395.jpg
  images/scene00396.jpg
  images/scene00397.jpg
  images/scene00398.jpg
  images/scene00399.jpg
  images/scene00400.jpg
  images/scene00401.jpg
  images/scene00402.jpg
  images/scene00403.jpg
  images/scene00404.jpg
  images/scene00405.jpg
  images/scene00406.jpg
  images/scene00407.jpg
  images/scene00408.jpg
  images/scene00409.jpg
  images/scene00410.jpg
  images/scene00411.jpg
  images/scene00412.jpg
  images/scene00413.jpg
  images/scene00414.jpg
  images/scene00415.jpg
  images/scene00416.jpg
  images/scene00417.jpg
  images/scene00418.jpg
  images/scene00419.jpg
  images/scene00420.jpg
  images/scene00421.jpg
  images/scene00422.jpg
  images/scene00423.jpg
  images/scene00424.jpg
  images/scene00425.jpg
  images/scene00426.jpg
  images/scene00427.jpg
  images/scene00428.jpg
  images/scene00429.jpg
  images/scene00430.jpg
  images/scene00431.jpg
  images/scene00432.jpg
  images/scene00433.jpg
  images/scene00434.jpg
  images/scene00435.jpg
  images/scene00436.jpg
  images/scene00437.jpg
  images/scene00438.jpg
  images/scene00439.jpg
  images/scene00440.jpg
  images/scene00441.jpg
  images/scene00442.jpg
  images/scene00443.jpg
  images/scene00444.jpg
  images/scene00445.jpg
  images/scene00446.jpg
  images/scene00447.jpg
  images/scene00448.jpg
  images/scene00449.jpg
  images/scene00450.jpg
  images/scene00451.jpg
  images/scene00452.jpg
  images/scene00453.jpg
  images/scene00454.jpg
  images/scene00455.jpg
  images/scene00456.jpg
  images/scene00457.jpg
  images/scene00458.jpg
  images/scene00459.jpg
  images/scene00460.jpg
  images/scene00461.jpg
  images/scene00462.jpg
  images/scene00463.jpg
  images/scene00464.jpg
  images/scene00465.jpg
  images/scene00466.jpg
  images/scene00467.jpg
  images/scene00468.jpg
  images/scene00469.jpg
  images/scene00470.jpg
  images/scene00471.jpg
  images/scene00472.jpg
  images/scene00473.jpg
  images/scene00474.jpg
  images/scene00475.jpg
  images/scene00476.jpg
  images/scene00477.jpg
  images/scene00478.jpg
  images/scene00479.jpg
  images/scene00480.jpg
  images/scene00481.jpg
  images/scene00482.jpg
  images/scene00483.jpg
  images/scene00484.jpg
  images/scene00485.jpg
  images/scene00486.jpg
  images/scene00487.jpg
  images/scene00488.jpg
  images/scene00489.jpg
  images/scene00490.jpg
  images/scene00491.jpg
  images/scene00492.jpg
  images/scene00493.jpg
  images/scene00494.jpg
  images/scene00495.jpg
  images/scene00496.jpg
  images/scene00497.jpg
  images/scene00498.jpg
  images/scene00499.jpg
  images/scene00500.jpg
  images/scene00501.jpg
  images/scene00502.jpg
  images/scene00503.jpg
  images/scene00504.jpg
  images/scene00505.jpg
  images/scene00506.jpg
  images/scene00507.jpg
  images/scene00508.jpg
  images/scene00509.jpg
  images/scene00510.jpg
  images/scene00511.jpg
  images/scene00512.jpg
  images/scene00513.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 358;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:.1,
      trigger:"#home",
      start:"bottom 100%",
      // markers:true,
      // end:"bottom 120%"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home",
  pin:true,
  start:"bottom 100%",
  
})

}

dom()


function dom2(){
  const canvas = document.querySelector("#home2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images1/scene00121.jpg
  images1/scene00122.jpg
  images1/scene00123.jpg
  images1/scene00124.jpg
  images1/scene00125.jpg
  images1/scene00126.jpg
  images1/scene00127.jpg
  images1/scene00128.jpg
  images1/scene00129.jpg
  images1/scene00130.jpg
  images1/scene00131.jpg
  images1/scene00132.jpg
  images1/scene00133.jpg
  images1/scene00134.jpg
  images1/scene00135.jpg
  images1/scene00136.jpg
  images1/scene00137.jpg
  images1/scene00138.jpg
  images1/scene00139.jpg
  images1/scene00140.jpg
  images1/scene00141.jpg
  images1/scene00142.jpg
  images1/scene00143.jpg
  images1/scene00144.jpg
  images1/scene00145.jpg
  images1/scene00146.jpg
  images1/scene00147.jpg
  images1/scene00148.jpg
  images1/scene00149.jpg
  images1/scene00150.jpg
  images1/scene00151.jpg
  images1/scene00152.jpg
  images1/scene00153.jpg
  images1/scene00154.jpg
  images1/scene00155.jpg
  images1/scene00156.jpg
  images1/scene00157.jpg
  images1/scene00158.jpg
  images1/scene00159.jpg
  images1/scene00160.jpg
  images1/scene00161.jpg
  images1/scene00162.jpg
  images1/scene00163.jpg
  images1/scene00164.jpg
  images1/scene00165.jpg
  images1/scene00166.jpg
  images1/scene00167.jpg
  images1/scene00168.jpg
  images1/scene00169.jpg
  images1/scene00170.jpg
  images1/scene00171.jpg
  images1/scene00172.jpg
  images1/scene00173.jpg
  images1/scene00174.jpg
  images1/scene00175.jpg
  images1/scene00176.jpg
  images1/scene00177.jpg
  images1/scene00178.jpg
  images1/scene00179.jpg
  images1/scene00180.jpg
  images1/scene00181.jpg
  images1/scene00182.jpg
  images1/scene00183.jpg
  images1/scene00184.jpg
  images1/scene00185.jpg
  images1/scene00186.jpg
  images1/scene00187.jpg
  images1/scene00188.jpg
  images1/scene00189.jpg
  images1/scene00190.jpg
  images1/scene00191.jpg
  images1/scene00192.jpg
  images1/scene00193.jpg
  images1/scene00194.jpg
  images1/scene00195.jpg
  images1/scene00196.jpg
  images1/scene00197.jpg
  images1/scene00198.jpg
  images1/scene00199.jpg
  images1/scene00200.jpg
  images1/scene00201.jpg
  images1/scene00202.jpg
  images1/scene00203.jpg
  images1/scene00204.jpg
  images1/scene00205.jpg
  images1/scene00206.jpg
  images1/scene00207.jpg
  images1/scene00208.jpg
  images1/scene00209.jpg
  images1/scene00210.jpg
  images1/scene00211.jpg
  images1/scene00212.jpg
  images1/scene00213.jpg
  images1/scene00214.jpg
  images1/scene00215.jpg
  images1/scene00216.jpg
  images1/scene00217.jpg
  images1/scene00218.jpg
  images1/scene00219.jpg
  images1/scene00220.jpg
  images1/scene00221.jpg
  images1/scene00222.jpg
  images1/scene00223.jpg
  images1/scene00224.jpg
  images1/scene00225.jpg
  images1/scene00226.jpg
  images1/scene00227.jpg
  images1/scene00228.jpg
  images1/scene00229.jpg
  images1/scene00230.jpg
  images1/scene00231.jpg
  images1/scene00232.jpg
  images1/scene00233.jpg
  images1/scene00234.jpg
  images1/scene00235.jpg
  images1/scene00236.jpg
  images1/scene00237.jpg
  images1/scene00238.jpg
  images1/scene00239.jpg
  images1/scene00240.jpg
  images1/scene00241.jpg
  images1/scene00242.jpg
  images1/scene00243.jpg
  images1/scene00244.jpg
  images1/scene00245.jpg
  images1/scene00246.jpg
  images1/scene00247.jpg
  images1/scene00248.jpg
  images1/scene00249.jpg
  images1/scene00250.jpg
  images1/scene00251.jpg
  images1/scene00252.jpg
  images1/scene00253.jpg
  images1/scene00254.jpg
  images1/scene00255.jpg
  images1/scene00256.jpg
  images1/scene00257.jpg
  images1/scene00258.jpg
  images1/scene00259.jpg
  images1/scene00260.jpg
  images1/scene00261.jpg
  images1/scene00262.jpg
  images1/scene00263.jpg
  images1/scene00264.jpg
  images1/scene00265.jpg
  images1/scene00266.jpg
  images1/scene00267.jpg
  images1/scene00268.jpg
  images1/scene00269.jpg
  images1/scene00270.jpg
  images1/scene00271.jpg
  images1/scene00272.jpg
  images1/scene00273.jpg
  images1/scene00274.jpg
  images1/scene00275.jpg
  images1/scene00276.jpg
  images1/scene00277.jpg
  images1/scene00278.jpg
  images1/scene00279.jpg
  images1/scene00280.jpg
  images1/scene00281.jpg
  images1/scene00282.jpg
  images1/scene00283.jpg
  images1/scene00284.jpg
  images1/scene00285.jpg
  images1/scene00286.jpg
  images1/scene00287.jpg
  images1/scene00288.jpg
  images1/scene00289.jpg
  images1/scene00290.jpg
  images1/scene00291.jpg
  images1/scene00292.jpg
  images1/scene00293.jpg
  images1/scene00294.jpg
  images1/scene00295.jpg
  images1/scene00296.jpg
  images1/scene00297.jpg
  images1/scene00298.jpg
  images1/scene00299.jpg
  images1/scene00300.jpg
  images1/scene00301.jpg
  images1/scene00302.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 181;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home2>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home2",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home2",
  pin:true,
  start:"bottom 100%",

  
})

}

dom2()


function dom3(){
  const canvas = document.querySelector("#home3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images3/scene00157.jpg
  images3/scene00158.jpg
  images3/scene00159.jpg
  images3/scene00160.jpg
  images3/scene00161.jpg
  images3/scene00162.jpg
  images3/scene00163.jpg
  images3/scene00164.jpg
  images3/scene00165.jpg
  images3/scene00166.jpg
  images3/scene00167.jpg
  images3/scene00168.jpg
  images3/scene00169.jpg
  images3/scene00170.jpg
  images3/scene00171.jpg
  images3/scene00172.jpg
  images3scene00173.jpg
  images3/scene00174.jpg
  images3/scene00175.jpg
  images3/scene00176.jpg
  images3/scene00177.jpg
  images3/scene00178.jpg
  images3/scene00179.jpg
  images3/scene00180.jpg
  images3/scene00181.jpg
  images3/scene00182.jpg
  images3/scene00183.jpg
  images3/scene00184.jpg
  images3/scene00185.jpg
  images3/scene00186.jpg
  images3/scene00187.jpg
  images3/scene00188.jpg
  images3/scene00189.jpg
  images3/scene00190.jpg
  images3/scene00191.jpg
  images3/scene00192.jpg
  images3/scene00193.jpg
  images3/scene00194.jpg
  images3/scene00195.jpg
  images3/scene00196.jpg
  images3/scene00197.jpg
  images3/scene00198.jpg
  images3/scene00199.jpg
  images3/scene00200.jpg
  images3/scene00201.jpg
  images3/scene00202.jpg
  images3/scene00203.jpg
  images3/scene00204.jpg
  images3/scene00205.jpg
  images3/scene00206.jpg
  images3/scene00207.jpg
  images3/scene00208.jpg
  images3/scene00209.jpg
  images3/scene00210.jpg
  images3/scene00211.jpg
  images3/scene00212.jpg
  images3/scene00213.jpg
  images3/scene00214.jpg
  images3/scene00215.jpg
  images3/scene00216.jpg
  images3/scene00217.jpg
  images3/scene00218.jpg
  images3/scene00219.jpg
  images3/scene00220.jpg
  images3/scene00221.jpg
  images3/scene00222.jpg
  images3/scene00223.jpg
  images3/scene00224.jpg
  images3/scene00225.jpg
  images3/scene00226.jpg
  images3/scene00227.jpg
  images3/scene00228.jpg
  images3/scene00229.jpg
  images3/scene00230.jpg
  images3/scene00231.jpg
  images3/scene00232.jpg
  images3/scene00233.jpg
  images3/scene00234.jpg
  images3/scene00235.jpg
  images3/scene00236.jpg
  images3/scene00237.jpg
  images3/scene00238.jpg
  images3/scene00239.jpg
  images3/scene00240.jpg
  images3/scene00241.jpg
  images3/scene00242.jpg
  images3/scene00243.jpg
  images3/scene00244.jpg
  images3/scene00245.jpg
  images3/scene00246.jpg
  images3/scene00247.jpg
  images3/scene00248.jpg
  images3/scene00249.jpg
  images3/scene00250.jpg
  images3/scene00251.jpg
  images3/scene00252.jpg
  images3/scene00253.jpg
  images3/scene00254.jpg
  images3/scene00154.jpg
  images3/scene00155.jpg
  images3/scene00156.jpg
  images3/scene00157.jpg
  images3/scene00158.jpg
  images3/scene00159.jpg
  images3/scene00160.jpg
  images3/scene00161.jpg
  images3/scene00162.jpg
  images3/scene00163.jpg
  images3/scene00164.jpg
  images3/scene00165.jpg
  images3/scene00166.jpg
  images3/scene00167.jpg
  images3/scene00168.jpg
  images3/scene00169.jpg
  images3/scene00170.jpg
  images3/scene00171.jpg
  images3/scene00172.jpg
  images3/scene00173.jpg
  images3/scene00174.jpg
  images3/scene00175.jpg
  images3/scene00176.jpg
  images3/scene00177.jpg
  images3/scene00178.jpg
  images3/scene00179.jpg
  images3/scene00180.jpg
  images3/scene00181.jpg
  images3/scene00182.jpg
  images3/scene00183.jpg
  images3/scene00184.jpg
  images3/scene00185.jpg
  images3/scene00186.jpg
  images3/scene00187.jpg
  images3/scene00188.jpg
  images3/scene00189.jpg
  images3/scene00190.jpg
  images3/scene00191.jpg
  images3/scene00192.jpg
  images3/scene00193.jpg
  images3/scene00194.jpg
  images3/scene00195.jpg
  images3/scene00196.jpg
  images3/scene00197.jpg
  images3/scene00198.jpg
  images3/scene00199.jpg
  images3/scene00200.jpg
  images3/scene00201.jpg
  images3/scene00202.jpg
  images3/scene00203.jpg
  images3/scene00204.jpg
  images3/scene00205.jpg
  images3/scene00206.jpg
  images3/scene00207.jpg
  images3/scene00208.jpg
  images3/scene00209.jpg
  images3/scene00210.jpg
  images3/scene00211.jpg
  images3/scene00212.jpg
  images3/scene00213.jpg
  images3/scene00214.jpg
  images3/scene00215.jpg
  images3/scene00216.jpg
  images3/scene00217.jpg
  images3/scene00218.jpg
  images3/scene00219.jpg
  images3/scene00220.jpg
  images3/scene00221.jpg
  images3/scene00222.jpg
  images3/scene00223.jpg
  images3/scene00224.jpg
  images3/scene00225.jpg
  images3/scene00226.jpg
  images3/scene00227.jpg
  images3/scene00228.jpg
  images3/scene00229.jpg
  images3/scene00230.jpg
  images3/scene00231.jpg
  images3/scene00232.jpg
  images3/scene00233.jpg
  images3/scene00234.jpg
  images3/scene00235.jpg
  images3/scene00236.jpg
  images3/scene00237.jpg
  images3/scene00238.jpg
  images3/scene00239.jpg
  images3/scene00240.jpg
  images3/scene00241.jpg
  images3/scene00242.jpg
  images3/scene00243.jpg
  images3/scene00244.jpg
  images3/scene00245.jpg
  images3/scene00246.jpg
  images3/scene00247.jpg
  images3/scene00248.jpg
  images3/scene00249.jpg
  images3/scene00250.jpg
  images3/scene00251.jpg
  images3/scene00252.jpg
  images3/scene00253.jpg
  images3/scene00254.jpg
  images3/scene00255.jpg
  images3/scene00256.jpg
  images3/scene00257.jpg
  images3/scene00258.jpg
  images3/scene00259.jpg
  images3/scene00260.jpg
  images3/scene00261.jpg
  images3/scene00262.jpg
  images3/scene00263.jpg
  images3/scene00264.jpg
  images3/scene00265.jpg
  images3/scene00266.jpg
  images3/scene00267.jpg
  images3/scene00268.jpg
  images3/scene00269.jpg
  images3/scene00270.jpg
  images3/scene00271.jpg
  images3/scene00272.jpg
  images3/scene00273.jpg
  images3/scene00274.jpg
  images3/scene00275.jpg
  images3/scene00276.jpg
  images3/scene00277.jpg
  images3/scene00278.jpg
  images3/scene00279.jpg
  images3/scene00280.jpg
  images3/scene00281.jpg
  images3/scene00282.jpg
  images3/scene00283.jpg
  images3/scene00284.jpg
  images3/scene00285.jpg
  images3/scene00286.jpg
  images3/scene00287.jpg
  images3/scene00288.jpg
  images3/scene00289.jpg
  images3/scene00290.jpg
  images3/scene00291.jpg
  images3/scene00292.jpg
  images3/scene00293.jpg
  images3/scene00294.jpg
  images3/scene00295.jpg
  images3/scene00296.jpg
  images3/scene00297.jpg
  images3/scene00298.jpg
  images3/scene00299.jpg
  images3/scene00300.jpg
  images3/scene00301.jpg
  images3/scene00302.jpg
  images3/scene00303.jpg
  images3/scene00304.jpg
  images3/scene00305.jpg
  images3/scene00306.jpg
  images3/scene00307.jpg
  images3/scene00308.jpg
  images3/scene00309.jpg
  images3/scene00310.jpg
  images3/scene00311.jpg
  images3/scene00312.jpg
  images3/scene00313.jpg
  images3/scene00314.jpg
  images3/scene00315.jpg
  images3/scene00316.jpg
  images3/scene00317.jpg
  images3/scene00318.jpg
  images3/scene00319.jpg
  images3/scene00320.jpg
  images3/scene00321.jpg
  images3/scene00322.jpg
  images3/scene00323.jpg
  images3/scene00324.jpg
  images3/scene00325.jpg
  images3/scene00326.jpg
  images3/scene00327.jpg
  images3/scene00328.jpg
  images3/scene00329.jpg
  images3/scene00330.jpg
  images3/scene00331.jpg
  images3/scene00332.jpg
  images3/scene00333.jpg
  images3/scene00334.jpg
  images3/scene00335.jpg
  images3/scene00336.jpg
  images3/scene00337.jpg
  images3/scene00338.jpg
  images3/scene00339.jpg
  images3/scene00340.jpg
  images3/scene00341.jpg
  images3/scene00342.jpg
  images3/scene00343.jpg
  images3/scene00344.jpg
  images3/scene00345.jpg
  images3/scene00346.jpg
  images3/scene00347.jpg
  images3/scene00348.jpg
  images3/scene00349.jpg
  images3/scene00350.jpg
  images3/scene00351.jpg
  images3/scene00352.jpg
  images3/scene00353.jpg
  images3/scene00354.jpg
  images3/scene00355.jpg
  images3/scene00356.jpg
  images3/scene00357.jpg
  images3/scene00358.jpg
  images3/scene00359.jpg
  images3/scene00360.jpg
  images3/scene00361.jpg
  images3/scene00362.jpg
  images3/scene00363.jpg
  images3/scene00364.jpg
  images3/scene00365.jpg
  images3/scene00366.jpg
  images3/scene00367.jpg
  images3/scene00368.jpg
  images3/scene00369.jpg
  images3/scene00370.jpg
  images3/scene00371.jpg
  images3/scene00372.jpg
  images3/scene00373.jpg
  images3/scene00374.jpg
  images3/scene00375.jpg
  images3/scene00376.jpg
  images3/scene00377.jpg
  images3/scene00378.jpg
  images3/scene00379.jpg
  images3/scene00380.jpg
  images3/scene00381.jpg
  images3/scene00382.jpg
  images3/scene00383.jpg
  images3/scene00384.jpg
  images3/scene00385.jpg
  images3/scene00386.jpg
  images3/scene00387.jpg
  images3/scene00388.jpg
  images3/scene00389.jpg
  images3/scene00390.jpg
  images3/scene00391.jpg
  images3/scene00392.jpg
  images3/scene00393.jpg
  images3/scene00394.jpg
  images3/scene00395.jpg
  images3/scene00396.jpg
  images3/scene00397.jpg
  images3/scene00398.jpg
  images3/scene00399.jpg
  images3/scene00400.jpg
  images3/scene00401.jpg
  images3/scene00402.jpg
  images3/scene00403.jpg
  images3/scene00404.jpg
  images3/scene00405.jpg
  images3/scene00406.jpg
  images3/scene00407.jpg
  images3/scene00408.jpg
  images3/scene00409.jpg
  images3/scene00410.jpg
  images3/scene00411.jpg
  images3/scene00412.jpg
  images3/scene00413.jpg
  images3/scene00414.jpg
  images3/scene00415.jpg
  images3/scene00416.jpg
  images3/scene00417.jpg
  images3/scene00418.jpg
  images3/scene00419.jpg
  images3/scene00420.jpg
  images3/scene00421.jpg
  images3/scene00422.jpg
  images3/scene00423.jpg
  images3/scene00424.jpg
  images3/scene00425.jpg
  images3/scene00426.jpg
  images3/scene00427.jpg
  images3/scene00428.jpg
  images3/scene00429.jpg
  images3/scene00430.jpg
  images3/scene00431.jpg
  images3/scene00432.jpg
  images3/scene00433.jpg
  images3/scene00434.jpg
  
  `;
  return data.split("\n")[index];
}

const frameCount = 277;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home3>canvas",
      start:"top 50%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home3",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home3",
  pin:true,
  start:"bottom 100%",

  
})

}

dom3()

function dom4(){
  const canvas = document.querySelector("#home4>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images4/scene00142.jpg
  images4/scene00143.jpg
  images4/scene00144.jpg
  images4/scene00145.jpg
  images4/scene00146.jpg
  images4/scene00147.jpg
  images4/scene00148.jpg
  images4/scene00149.jpg
  images4/scene00150.jpg
  images4/scene00151.jpg
  images4/scene00152.jpg
  images4/scene00153.jpg
  images4/scene00154.jpg
  images4/scene00155.jpg
  images4/scene00156.jpg
  images4/scene00157.jpg
  images4/scene00158.jpg
  images4/scene00159.jpg
  images4/scene00160.jpg
  images4/scene00161.jpg
  images4/scene00162.jpg
  images4/scene00163.jpg
  images4/scene00164.jpg
  images4/scene00165.jpg
  images4/scene00166.jpg
  images4/scene00167.jpg
  images4/scene00168.jpg
  images4/scene00169.jpg
  images4/scene00170.jpg
  images4/scene00171.jpg
  images4/scene00172.jpg
  images4/scene00173.jpg
  images4/scene00174.jpg
  images4/scene00175.jpg
  images4/scene00176.jpg
  images4/scene00177.jpg
  images4/scene00178.jpg
  images4/scene00179.jpg
  images4/scene00180.jpg
  images4/scene00181.jpg
  images4/scene00182.jpg
  images4/scene00183.jpg
  images4/scene00184.jpg
  images4/scene00185.jpg
  images4/scene00186.jpg
  images4/scene00187.jpg
  images4/scene00188.jpg
  images4/scene00189.jpg
  images4/scene00190.jpg
  images4/scene00191.jpg
  images4/scene00192.jpg
  images4/scene00193.jpg
  images4/scene00194.jpg
  images4/scene00195.jpg
  images4/scene00196.jpg
  images4/scene00197.jpg
  images4/scene00198.jpg
  images4/scene00199.jpg
  images4/scene00200.jpg
  images4/scene00201.jpg
  images4/scene00202.jpg
  images4/scene00203.jpg
  images4/scene00204.jpg
  images4/scene00205.jpg
  images4/scene00206.jpg
  images4/scene00207.jpg
  images4/scene00208.jpg
  images4/scene00209.jpg
  images4/scene00210.jpg
  images4/scene00211.jpg
  images4/scene00212.jpg
  images4/scene00213.jpg
  images4/scene00214.jpg
  images4/scene00215.jpg
  images4/scene00216.jpg
  images4/scene00217.jpg
  images4/scene00218.jpg
  images4/scene00219.jpg
  images4/scene00220.jpg
  images4/scene00221.jpg
  images4/scene00222.jpg
  images4/scene00223.jpg
  images4/scene00224.jpg
  images4/scene00225.jpg
  images4/scene00226.jpg
  images4/scene00227.jpg
  images4/scene00228.jpg
  images4/scene00229.jpg
  images4/scene00230.jpg
  images4/scene00231.jpg
  images4/scene00232.jpg
  images4/scene00233.jpg
  images4/scene00234.jpg
  images4/scene00235.jpg
  images4/scene00236.jpg
  images4/scene00237.jpg
  images4/scene00238.jpg
  images4/scene00239.jpg
  images4/scene00240.jpg
  images4/scene00241.jpg
  images4/scene00242.jpg
  images4/scene00243.jpg
  images4/scene00244.jpg
  images4/scene00245.jpg
  images4/scene00246.jpg
  images4/scene00247.jpg
  images4/scene00248.jpg
  images4/scene00249.jpg
  images4/scene00250.jpg
  images4/scene00251.jpg
  images4/scene00252.jpg
  images4/scene00253.jpg
  images4/scene00254.jpg
  images4/scene00154.jpg
  images4/scene00155.jpg
  images4/scene00156.jpg
  images4/scene00157.jpg
  images4/scene00158.jpg
  images4/scene00159.jpg
  images4/scene00160.jpg
  images4/scene00161.jpg
  images4/scene00162.jpg
  images4/scene00163.jpg
  images4/scene00164.jpg
  images4/scene00165.jpg
  images4/scene00166.jpg
  images4/scene00167.jpg
  images4/scene00168.jpg
  images4/scene00169.jpg
  images4/scene00170.jpg
  images4/scene00171.jpg
  images4/scene00172.jpg
  images4/scene00173.jpg
  images4/scene00174.jpg
  images4/scene00175.jpg
  images4/scene00176.jpg
  images4/scene00177.jpg
  images4/scene00178.jpg
  images4/scene00179.jpg
  images4/scene00180.jpg
  images4/scene00181.jpg
  images4/scene00182.jpg
  images4/scene00183.jpg
  images4/scene00184.jpg
  images4/scene00185.jpg
  images4/scene00186.jpg
  images4/scene00187.jpg
  images4/scene00188.jpg
  images4/scene00189.jpg
  images4/scene00190.jpg
  images4/scene00191.jpg
  images4/scene00192.jpg
  images4/scene00193.jpg
  images4/scene00194.jpg
  images4/scene00195.jpg
  images4/scene00196.jpg
  images4/scene00197.jpg
  images4/scene00198.jpg
  images4/scene00199.jpg
  images4/scene00200.jpg
  images4/scene00201.jpg
  images4/scene00202.jpg
  images4/scene00203.jpg
  images4/scene00204.jpg
  images4/scene00205.jpg
  images4/scene00206.jpg
  images4/scene00207.jpg
  images4/scene00208.jpg
  images4/scene00209.jpg
  images4/scene00210.jpg
  images4/scene00211.jpg
  images4/scene00212.jpg
  images4/scene00213.jpg
  images4/scene00214.jpg
  images4/scene00215.jpg
  images4/scene00216.jpg
  images4/scene00217.jpg
  images4/scene00218.jpg
  images4/scene00219.jpg
  images4/scene00220.jpg
  images4/scene00221.jpg
  images4/scene00222.jpg
  images4/scene00223.jpg
  images4/scene00224.jpg
  images4/scene00225.jpg
  images4/scene00226.jpg
  images4/scene00227.jpg
  images4/scene00228.jpg
  images4/scene00229.jpg
  images4/scene00230.jpg
  images4/scene00231.jpg
  images4/scene00232.jpg
  images4/scene00233.jpg
  images4/scene00234.jpg
  images4/scene00235.jpg
  images4/scene00236.jpg
  images4/scene00237.jpg
  images4/scene00238.jpg
  images4/scene00239.jpg
  images4/scene00240.jpg
  images4/scene00241.jpg
  images4/scene00242.jpg
  images4/scene00243.jpg
  images4/scene00244.jpg
  images4/scene00245.jpg
  images4/scene00246.jpg
  images4/scene00247.jpg
  images4/scene00248.jpg
  images4/scene00249.jpg
  images4/scene00250.jpg
  images4/scene00251.jpg
  images4/scene00252.jpg
  images4/scene00253.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 222;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home4>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home4 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home4",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home4",
  pin:true,
  start:"bottom 100%",

  
})

}

dom4()

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".txt-home",
    // markers: true,
    start: "50% 50%",
    end: "121% 50%",
    scrub: 1,
    // duration: 3,
    pin:true
  },
});
tl5
.from(    
  ".modern",
  {
    x:"600",
  duration: 1,
    opacity: "0",
  },
)
  .from(
    "#h-one",
    {
      y:"100",
    duration: 1,
      opacity: "0",
    },
  )
  .from(
    "#h-two",
    {
    duration: 1,
    y:"100",
      opacity: "0",
    },
  )
  .from(
    "#h-three",
    {
    duration: 1,
    y:"100",
      opacity: "0",
    },
  )

  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main2",
      // markers: true,
      start: "top 80%",
      end: "10% 50%",
      scrub: 1,
      // duration: 3,
      // pin:true
    },
  });
  tl6
  .from(    
    "#home",
    {
      opacity: "0",
    },
  )

  // var tl7 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     markers: true,
  //     start: "-25% 50%",
  //     end: "0% 50%",
  //     scrub: 1,
  //     // duration: 3,
  //     pin:true
  //   },
  // });
  // tl7
  // .to(    
  //   "#page1",
  //   {
  //     marginTop:"-50%",
  //   duration: 1,
  //     opacity: "0",
  //   },
  // )

function example(){
  window.location.href="again.html"
}


async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1500)
  node.innerText = ""
  await node.type(' ')
  
  while (true) {
    await node.type('Brother!')
    await sleep(1200)
    await node.delete('Brother!')
    await node.type('Eat!')
    await sleep(1200)
    await node.delete('Eat!')
    await node.type('Healthy!')
    await sleep(1200)
    await node.delete('Healthy!')
    await node.type('Food!')
    await sleep(1200)
    await node.delete('Healthy!')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()

document.querySelector(".gallery-div")
.addEventListener("click", function(){
  document.querySelector("#hover-slideshow").style.top = "400%"
  // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#btnsm")
.addEventListener("click", function(){
  document.querySelector("#hover-slideshow").style.top = "-200%"
  // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  // document.querySelector("#chainn").style.cursor = "pointer"
})



window.addEventListener("mousemove", function(chahcha){
  document.querySelector("#slidephoto").style.top=`${chahcha.clientY}px`
  document.querySelector("#slidephoto").style.left=`${chahcha.clientX}px`
  document.querySelector("#slidephoto").style.transform =`translate(${-chahcha.clientX*0.20}px, ${-chahcha.clientY*0.45}px)`
});

document.querySelector("#chainn")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "0%"
  document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
  document.querySelector("#chainn").style.color = "initial"
})

document.querySelector("#aty")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-120%"
  document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
  document.querySelector("#aty").style.cursor = "pointer"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
  document.querySelector("#aty").style.color = "initial"
})

document.querySelector("#mic")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-240%"
  document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
  document.querySelector("#mic").style.cursor = "pointer"

})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
  document.querySelector("#mic").style.color = "initial"
})

document.querySelector("#tapso")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-360%"
  document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
  document.querySelector("#tapso").style.cursor = "pointer"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
  document.querySelector("#tapso").style.color = "initial"
})

document.querySelector("#eff")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephoto").style.display = "initial"
  document.querySelector("#slidephoto").style.opacity = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
  document.querySelector("#slidephoto").style.display = "none"
  document.querySelector("#slidephoto").style.opacity = 0
})


document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
  document.querySelector("#btnsm").style.backgroundColor = "rgb(255,160,115)"
  document.querySelector("#btnsm").style.cursor = "pointer"
  document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
  document.querySelector("#btnsm").style.backgroundColor = "initial"
  document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

})

document.querySelector("#cntr-nav .ri-menu-line")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "0%"
  document.querySelector(".upar-menu .ri-close-fill").style.display = "initial"
  document.querySelector("#cntr-nav .ri-menu-line").style.display = "none"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector(".upar-menu .ri-close-fill")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "-100%"
  document.querySelector(".upar-menu .ri-close-fill").style.display = "none"
  document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#lft-nav .ri-menu-line")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "0%"
  document.querySelector("#lft-nav .ri-close-fill").style.display = "initial"
  document.querySelector("#lft-nav .ri-menu-line").style.display = "none"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#lft-nav .ri-close-fill")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "-100%"
  document.querySelector("#lft-nav .ri-close-fill").style.display = "none"
  document.querySelector("#lft-nav .ri-menu-line").style.display = "initial"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#abhishek")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "0%"
  document.querySelector("#abhishek").style.cursor = "pointer"
})
document.querySelector("#amarjeet")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-50vh"
  document.querySelector("#amarjeet").style.cursor = "pointer"
})
document.querySelector("#rk")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-100vh"
  document.querySelector("#rk").style.cursor = "pointer"
})
document.querySelector("#ak")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-150vh"
  document.querySelector("#ak").style.cursor = "pointer"
})


var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2 canvas",
    // markers: true,
    start: "100% 50%",
    end: "150% 100%",
    scrub: 1,
    // duration: 3,
    pin:true
  },
});
tl6
.to(    
  ".home2-page",
  {
    y:"-1090",
  duration: 1,
    // opacity: "0",
  },
)

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home2-again",
    // markers: true,
    start: "-100% 50%",
    end: "0% 100%",
    scrub: 1,
    // duration: 3,
    // pin:true
  },
});
tl6
.to(    
  "#home2-again .m-div",
  {
    // backgroundColor: "#fff",
  duration: 1,
   width: 0,
  },
)




var tl7 = gsap.timeline();
tl7.from(".main-abhishek", {
 opacity:"0",
  ease: "expo.inout",
  duration: 1,
  // delay: 2.5,
},'anim3')
tl7.from(".front-page-img", {
  opacity:"0",
   ease: "expo.inout",
   duration: 1,
   // delay: 2.5,
 },'anim3')
.from("#line-effect-3", {
  opacity:"0",
   ease: "expo.inout",
   duration: 1,
   // delay: 2.5,
 },'anim3')
.from("#line-effect-1", {
  height:"0%",
  ease: "expo.inout",
  duration: 2,
  // delay: 2.5,
},'anim1')
  .from("#line-effect-2", {
    height:"0%",
  ease: "expo.inout",
  duration: 1,
  },'anim2')
  .from(".img-one", {
    height:"0%",
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".mandit", {
    width:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".mandit-2", {
    height:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".main-txt-front", {
    // height:"0%",
    opacity: 0,
  ease: "expo.inout",
  delay:-0.5,
  duration: 1,
  },'anim2')
  .from("#circle", {
    // height:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 2,
  },'anim2')
  .from("#nav", {
    // height:"0%",
    top: -50,
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim2')

  var line = gsap.timeline({
    scrollTrigger: {
      trigger: "#home2 canvas",
      // markers: true,
      start: "0% 50%",
      end: "150% 100%",
      scrub: 3,
      // duration: 3,
      // pin:true
    },
  });
line
  .from(    
    "#line-effect-4",
    {
    height: "0vh",
    }, 'timeline-one'
  )

  var line2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#home3 canvas",
      // markers: true,
      start: "0% 50%",
      end: "150% 100%",
      scrub: 3,
      // duration: 3,
      // pin:true
    },
  });
line2
  .from(    
    "#line-effect-5",
    {
    height: "0%",
    }, 'timeline-one'
  )


var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#one",
    // markers: true,
    start: "0% 50%",
    end: "100% 100%",
    scrub: 3,
    // duration: 3,
    // pin:true
  },
});
tl8
.to(    
  "#rght-timeline-img",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-100,
  }, 'timeline-one'
)
.to(    
  ".white-div",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-60,
  },'timeline-one'
)
.to(    
  "#back-div-img",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-20,
  },'timeline-one'
)


var tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".m-div1 ",
    // markers: true,
    start: "0% 50%",
    end: "150% 100%",
    scrub: 3,
    // pin:true
  },
});
tl9
.to(    
  ".m-square-inner",
  {
  y:-30,
  duration: 3,
  }, 'timeline-two'
)
.to(    
  ".another2 p",
  {
  y:-100,
  opacity:1,
  duration: 1,
  },'timeline-two'
)


var tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home3 canvas",
    // markers: true,
    start: "100% 50%",
    end: "150% 100%",
    scrub: 3,
    // pin:true
  },
});
tl10
// .to(    
//   ".another",
//   {
//   left:"50%",
//   duration: 4,
//   opacity:1,
//   },
// )
.to(    
  " .h-wala",
  {
    delay:5,
  y:-100,
  duration: 2,
  opacity:1,
  },
)
.to(    
  "#newsletter",
  {
    delay:7,
  y:-100,
  duration: 2,
  opacity:1,
  },
)




var tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hotel-upper",
    // markers: true,
    start: "50% 50%",
    end: "100% 100%",
    scrub: 3,
    // pin:true
  },
});
tl11
.from(    
  ".hotel-upper-txt",
  {
  y:300,
  duration: 4,
  opacity:0,
  },
)




function domfooter(){
  const canvas = document.querySelector("#home-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/MZjz0cKp/pexels-tima-miroshnichenko-7033923-000.jpg
  https://i.postimg.cc/kX3qTnBF/pexels-tima-miroshnichenko-7033923-001.jpg
  https://i.postimg.cc/zGq510wy/pexels-tima-miroshnichenko-7033923-002.jpg
  https://i.postimg.cc/3x9hrm9n/pexels-tima-miroshnichenko-7033923-003.jpg
  https://i.postimg.cc/nLzJXrPZ/pexels-tima-miroshnichenko-7033923-004.jpg
  https://i.postimg.cc/8PRD3qv8/pexels-tima-miroshnichenko-7033923-005.jpg
  https://i.postimg.cc/FKBQ3vMS/pexels-tima-miroshnichenko-7033923-006.jpg
  https://i.postimg.cc/XqMS1877/pexels-tima-miroshnichenko-7033923-007.jpg
  https://i.postimg.cc/JnHCQg82/pexels-tima-miroshnichenko-7033923-008.jpg
  https://i.postimg.cc/FFcQd2Df/pexels-tima-miroshnichenko-7033923-009.jpg
  https://i.postimg.cc/KjnX6MR7/pexels-tima-miroshnichenko-7033923-010.jpg
  https://i.postimg.cc/15Q1pJjv/pexels-tima-miroshnichenko-7033923-011.jpg
  https://i.postimg.cc/zXFZpTm8/pexels-tima-miroshnichenko-7033923-012.jpg
  https://i.postimg.cc/T328shGm/pexels-tima-miroshnichenko-7033923-013.jpg
  https://i.postimg.cc/253szJ1S/pexels-tima-miroshnichenko-7033923-014.jpg
  https://i.postimg.cc/Ls7rhTPB/pexels-tima-miroshnichenko-7033923-015.jpg
  https://i.postimg.cc/L8ydFR6W/pexels-tima-miroshnichenko-7033923-016.jpg
  https://i.postimg.cc/NMHZXH7h/pexels-tima-miroshnichenko-7033923-017.jpg
  https://i.postimg.cc/KjhwD8J1/pexels-tima-miroshnichenko-7033923-018.jpg
  https://i.postimg.cc/Hn0KZ1hB/pexels-tima-miroshnichenko-7033923-019.jpg
  https://i.postimg.cc/MZ1hK1pV/pexels-tima-miroshnichenko-7033923-020.jpg
  https://i.postimg.cc/SNqHXjn5/pexels-tima-miroshnichenko-7033923-021.jpg
  https://i.postimg.cc/3JBV27pw/pexels-tima-miroshnichenko-7033923-022.jpg
  https://i.postimg.cc/4xxM5MbQ/pexels-tima-miroshnichenko-7033923-023.jpg
  https://i.postimg.cc/sgHL0cTd/pexels-tima-miroshnichenko-7033923-024.jpg
  https://i.postimg.cc/jjW1V71W/pexels-tima-miroshnichenko-7033923-025.jpg
  https://i.postimg.cc/5tZRftcs/pexels-tima-miroshnichenko-7033923-026.jpg
  https://i.postimg.cc/KzBsjyxx/pexels-tima-miroshnichenko-7033923-027.jpg
  https://i.postimg.cc/SR41ztx8/pexels-tima-miroshnichenko-7033923-028.jpg
  https://i.postimg.cc/SRGTL7nP/pexels-tima-miroshnichenko-7033923-029.jpg
  https://i.postimg.cc/J732WmpQ/pexels-tima-miroshnichenko-7033923-030.jpg
  https://i.postimg.cc/BQqwSyyf/pexels-tima-miroshnichenko-7033923-031.jpg
  https://i.postimg.cc/rFQZKjX0/pexels-tima-miroshnichenko-7033923-032.jpg
  https://i.postimg.cc/mgkXM9Bd/pexels-tima-miroshnichenko-7033923-033.jpg
  https://i.postimg.cc/vZKPvmmG/pexels-tima-miroshnichenko-7033923-034.jpg
  https://i.postimg.cc/jjJM3rWP/pexels-tima-miroshnichenko-7033923-035.jpg
  https://i.postimg.cc/hjWpH3xw/pexels-tima-miroshnichenko-7033923-036.jpg
  https://i.postimg.cc/fLcBZjfb/pexels-tima-miroshnichenko-7033923-037.jpg
  https://i.postimg.cc/RhvG06gL/pexels-tima-miroshnichenko-7033923-038.jpg
  https://i.postimg.cc/fWvBrCb2/pexels-tima-miroshnichenko-7033923-039.jpg
  https://i.postimg.cc/j2vcnx90/pexels-tima-miroshnichenko-7033923-040.jpg
  https://i.postimg.cc/fTTBndtw/pexels-tima-miroshnichenko-7033923-041.jpg
  https://i.postimg.cc/bNCLzvk1/pexels-tima-miroshnichenko-7033923-042.jpg
  https://i.postimg.cc/DwS6mKPH/pexels-tima-miroshnichenko-7033923-043.jpg
  https://i.postimg.cc/SxHrMtZs/pexels-tima-miroshnichenko-7033923-044.jpg
  https://i.postimg.cc/rpW9CCb9/pexels-tima-miroshnichenko-7033923-045.jpg
  https://i.postimg.cc/Jn5cS7RD/pexels-tima-miroshnichenko-7033923-046.jpg
  https://i.postimg.cc/FzFgvtKP/pexels-tima-miroshnichenko-7033923-047.jpg
  https://i.postimg.cc/MHs0KsMz/pexels-tima-miroshnichenko-7033923-048.jpg
  https://i.postimg.cc/3r9FBwLz/pexels-tima-miroshnichenko-7033923-049.jpg
  https://i.postimg.cc/X7JcD0mq/pexels-tima-miroshnichenko-7033923-050.jpg
  https://i.postimg.cc/5NR5hRW3/pexels-tima-miroshnichenko-7033923-051.jpg
  https://i.postimg.cc/0yKGP08q/pexels-tima-miroshnichenko-7033923-052.jpg
  https://i.postimg.cc/bvXxJSJS/pexels-tima-miroshnichenko-7033923-053.jpg
  https://i.postimg.cc/Pqmm8fp3/pexels-tima-miroshnichenko-7033923-054.jpg
  https://i.postimg.cc/Kzxt7XtZ/pexels-tima-miroshnichenko-7033923-055.jpg
  https://i.postimg.cc/Tw0gCkcn/pexels-tima-miroshnichenko-7033923-056.jpg
  https://i.postimg.cc/8cCW3hy9/pexels-tima-miroshnichenko-7033923-057.jpg
  https://i.postimg.cc/qqZndzSR/pexels-tima-miroshnichenko-7033923-058.jpg
  https://i.postimg.cc/wxWDNGMp/pexels-tima-miroshnichenko-7033923-059.jpg
  https://i.postimg.cc/hPfT11Q7/pexels-tima-miroshnichenko-7033923-060.jpg
  https://i.postimg.cc/7Yd7sJSt/pexels-tima-miroshnichenko-7033923-061.jpg
  https://i.postimg.cc/6pZZD60W/pexels-tima-miroshnichenko-7033923-062.jpg
  https://i.postimg.cc/cJN3Zq9Q/pexels-tima-miroshnichenko-7033923-063.jpg
  https://i.postimg.cc/wBcmjWZn/pexels-tima-miroshnichenko-7033923-064.jpg
  https://i.postimg.cc/TwdWLVX1/pexels-tima-miroshnichenko-7033923-065.jpg
  https://i.postimg.cc/Y9dL1vp3/pexels-tima-miroshnichenko-7033923-066.jpg
  https://i.postimg.cc/Hnjc3TnC/pexels-tima-miroshnichenko-7033923-067.jpg
  https://i.postimg.cc/8c3F0xff/pexels-tima-miroshnichenko-7033923-068.jpg
  https://i.postimg.cc/CM6f5nrM/pexels-tima-miroshnichenko-7033923-069.jpg
  https://i.postimg.cc/gkCXqFPf/pexels-tima-miroshnichenko-7033923-070.jpg
  https://i.postimg.cc/8PJf6kxR/pexels-tima-miroshnichenko-7033923-071.jpg
  https://i.postimg.cc/fbZVpcyC/pexels-tima-miroshnichenko-7033923-072.jpg
  https://i.postimg.cc/vmz4s46s/pexels-tima-miroshnichenko-7033923-073.jpg
  https://i.postimg.cc/Px5Prdm8/pexels-tima-miroshnichenko-7033923-074.jpg  
  https://i.postimg.cc/jjN5W8kx/video-again-026.jpg
  https://i.postimg.cc/NjZFjhDC/video-again-027.jpg
  https://i.postimg.cc/Y9HSQ1J1/video-again-028.jpg
  https://i.postimg.cc/mDygjPsK/video-again-029.jpg
  https://i.postimg.cc/BbZQVJZb/video-again-030.jpg
  https://i.postimg.cc/Y28SmL8W/video-again-031.jpg
  https://i.postimg.cc/br6NX4dT/video-again-032.jpg
  https://i.postimg.cc/Wb31mpff/video-again-033.jpg
  https://i.postimg.cc/9FnFL36X/video-again-034.jpg
  https://i.postimg.cc/MpfZ4Pw7/video-again-035.jpg
  https://i.postimg.cc/W38srxmv/video-again-036.jpg
  https://i.postimg.cc/vTmbvXX6/video-again-037.jpg
  https://i.postimg.cc/rp6yL1yv/video-again-038.jpg
  https://i.postimg.cc/7LgHP5fb/video-again-039.jpg
  https://i.postimg.cc/cH0svdnh/video-again-040.jpg
  https://i.postimg.cc/1XYP76Y7/video-again-041.jpg
  https://i.postimg.cc/bNsqDCs7/video-again-042.jpg
  https://i.postimg.cc/zX68nChV/video-again-043.jpg
  https://i.postimg.cc/qvK0QNcQ/video-again-044.jpg
  https://i.postimg.cc/k5dCH7fC/video-again-045.jpg
  https://i.postimg.cc/g0qpF1TZ/video-again-046.jpg
  https://i.postimg.cc/xCf20gwF/video-again-047.jpg
  https://i.postimg.cc/C1cVdkYM/video-again-048.jpg
  https://i.postimg.cc/zvMZFNV9/video-again-049.jpg
  https://i.postimg.cc/xjF22vtt/video-again-050.jpg
  https://i.postimg.cc/SN2pNnPq/video-again-051.jpg
  https://i.postimg.cc/28sNqzpW/video-again-052.jpg
  https://i.postimg.cc/7ZS80pDW/video-again-053.jpg
  https://i.postimg.cc/SKq0rDxN/video-again-054.jpg
  https://i.postimg.cc/431DFVYv/video-again-055.jpg
  https://i.postimg.cc/Qtx2LC72/video-again-056.jpg
  https://i.postimg.cc/tTSL9btY/video-again-057.jpg
  https://i.postimg.cc/7h5j6RmX/video-again-058.jpg
  https://i.postimg.cc/BbRk1Cz3/video-again-059.jpg
  https://i.postimg.cc/G3fZNcmf/video-again-060.jpg
  https://i.postimg.cc/Pr8BnBL5/video-again-061.jpg
  https://i.postimg.cc/6pJFWYRL/video-again-062.jpg
  https://i.postimg.cc/pLf4pzJN/video-again-063.jpg
  https://i.postimg.cc/pdP78rsm/video-again-064.jpg
  https://i.postimg.cc/d0nf9Ff4/video-again-065.jpg
  https://i.postimg.cc/sXXN68dy/video-again-066.jpg
  https://i.postimg.cc/B6Vwdg4F/video-again-067.jpg
  https://i.postimg.cc/QCKnsTdy/video-again-068.jpg
  https://i.postimg.cc/w3K4BjtT/video-again-069.jpg
  https://i.postimg.cc/PfLtNVLB/video-again-070.jpg
  https://i.postimg.cc/ryvq4Gxz/video-again-071.jpg
  https://i.postimg.cc/kXKqvVvs/video-again-072.jpg
  https://i.postimg.cc/kgC91njm/video-again-073.jpg
  https://i.postimg.cc/rw9T7vbt/video-again-074.jpg
  https://i.postimg.cc/g0kppgFt/video-again-075.jpg
  https://i.postimg.cc/Zq7S56Jb/video-again-076.jpg
  https://i.postimg.cc/tTsHZ7gh/video-again-077.jpg
  https://i.postimg.cc/wvnYhHtn/video-again-078.jpg
  https://i.postimg.cc/mkMfjqCk/video-again-079.jpg
  https://i.postimg.cc/wxsp9tZz/video-again-080.jpg
  https://i.postimg.cc/VLQcvfPC/video-again-081.jpg
  https://i.postimg.cc/tC3GVK9m/video-again-082.jpg
  https://i.postimg.cc/HkTD06xW/video-again-083.jpg
  https://i.postimg.cc/x1gr6LJv/video-again-084.jpg
  https://i.postimg.cc/k550zDKk/video-again-085.jpg
  https://i.postimg.cc/HLPqgHtj/video-again-086.jpg
  https://i.postimg.cc/sXQtf8nm/video-again-087.jpg
  https://i.postimg.cc/26sg1wMD/video-again-088.jpg
  https://i.postimg.cc/bYnKK7SN/video-again-089.jpg
  https://i.postimg.cc/nct6Z3qK/video-again-090.jpg
  https://i.postimg.cc/DydRz1c9/video-again-091.jpg
  https://i.postimg.cc/CxhXndPz/video-again-092.jpg
  https://i.postimg.cc/rwfb1c3g/video-again-093.jpg
  https://i.postimg.cc/Gp9fzV1R/video-again-094.jpg
  https://i.postimg.cc/xd74Z50z/video-again-095.jpg
  https://i.postimg.cc/1tqj1FtY/video-again-096.jpg
  https://i.postimg.cc/d3cSs0ZQ/video-again-097.jpg
  https://i.postimg.cc/3NjfdH2X/video-again-098.jpg
  https://i.postimg.cc/NGRzNRZK/video-again-099.jpg
  https://i.postimg.cc/RV9b2NzX/video-again-100.jpg
  https://i.postimg.cc/pXZ1vRWx/video-again-101.jpg
  https://i.postimg.cc/kggYXzGS/video-again-102.jpg
  https://i.postimg.cc/vZ2q1hxN/video-again-103.jpg
  https://i.postimg.cc/cJKDf3Q4/video-again-104.jpg
  https://i.postimg.cc/Bvdmpvg5/video-again-105.jpg
  https://i.postimg.cc/h4828c7x/video-again-106.jpg
  https://i.postimg.cc/ZKVjgHH5/video-again-107.jpg
  https://i.postimg.cc/XYqx051c/video-again-108.jpg
  https://i.postimg.cc/RFwq6Ph1/video-again-155.jpg
  https://i.postimg.cc/HnHnQQ8q/video-again-156.jpg
  https://i.postimg.cc/qvgRXBgv/video-again-157.jpg
  https://i.postimg.cc/XYhv2Myc/video-again-158.jpg
  https://i.postimg.cc/zfgG6dCm/video-again-159.jpg
  https://i.postimg.cc/DZ3wTq6S/video-again-160.jpg
  https://i.postimg.cc/d1RttLN4/video-again-161.jpg
  https://i.postimg.cc/7hmH0jkz/video-again-162.jpg
  https://i.postimg.cc/VsRLx0CN/video-again-163.jpg
  https://i.postimg.cc/yY8Ys6my/video-again-164.jpg
  https://i.postimg.cc/W1DNq9fD/video-again-165.jpg
  https://i.postimg.cc/Dwt2rqtx/video-again-166.jpg
  https://i.postimg.cc/0QvP395m/video-again-167.jpg
  https://i.postimg.cc/VNnzDJwm/video-again-168.jpg
  https://i.postimg.cc/QtqhZvVz/video-again-169.jpg
  https://i.postimg.cc/Y0n7hg6f/video-again-170.jpg
  https://i.postimg.cc/8ktNK82J/video-again-171.jpg
  https://i.postimg.cc/rsFcVgrw/video-again-172.jpg
  https://i.postimg.cc/J40mS68T/video-again-173.jpg
  https://i.postimg.cc/4N0ZG6NX/video-again-174.jpg
  https://i.postimg.cc/3xDhxkdm/video-again-175.jpg
  https://i.postimg.cc/QMG39jTP/video-again-176.jpg
  https://i.postimg.cc/25Qfngd5/video-again-177.jpg
  https://i.postimg.cc/qRpHwQQx/video-again-178.jpg
  https://i.postimg.cc/ZRjtM3Mt/video-again-179.jpg
  https://i.postimg.cc/XqJSSJRZ/video-again-180.jpg
  https://i.postimg.cc/yxbqVKKL/video-again-181.jpg
  https://i.postimg.cc/158hv802/video-again-182.jpg
  https://i.postimg.cc/fW2Q7cdY/video-again-183.jpg
  https://i.postimg.cc/HsFGRTBx/video-again-184.jpg
  https://i.postimg.cc/mgMxGK5S/video-again-185.jpg
  https://i.postimg.cc/cJNp1XqG/video-again-186.jpg
  https://i.postimg.cc/L4ZpH69r/20230221-2357541-000.jpg
https://i.postimg.cc/GhFny7sK/20230221-2357541-001.jpg
https://i.postimg.cc/T1nFn1h1/20230221-2357541-002.jpg
https://i.postimg.cc/25XsDgPk/20230221-2357541-003.jpg
https://i.postimg.cc/ydgwYvHF/20230221-2357541-004.jpg
https://i.postimg.cc/1zzkby77/20230221-2357541-005.jpg
https://i.postimg.cc/Dw7kdrrT/20230221-2357541-006.jpg
https://i.postimg.cc/C139Zkh9/20230221-2357541-007.jpg
https://i.postimg.cc/pLkN0mCn/20230221-2357541-008.jpg
https://i.postimg.cc/dtKzw2Sy/20230221-2357541-009.jpg
https://i.postimg.cc/6pMSrD6r/20230221-2357541-010.jpg
https://i.postimg.cc/5NqD0XZk/20230221-2357541-011.jpg
https://i.postimg.cc/jSxmJsTq/20230221-2357541-012.jpg
https://i.postimg.cc/ry4vBngT/20230221-2357541-013.jpg
https://i.postimg.cc/PqN722NB/20230221-2357541-014.jpg
https://i.postimg.cc/0QwBqjYn/20230221-2357541-015.jpg
https://i.postimg.cc/8C303M6s/20230221-2357541-016.jpg
https://i.postimg.cc/Hn1PWm3g/20230221-2357541-017.jpg
https://i.postimg.cc/8cdXjYnr/20230221-2357541-018.jpg
https://i.postimg.cc/Nf4PtWH3/20230221-2357541-019.jpg
https://i.postimg.cc/pVK6G9XX/20230221-2357541-020.jpg
https://i.postimg.cc/httZtp8f/20230221-2357541-021.jpg
https://i.postimg.cc/BQswdqX5/20230221-2357541-022.jpg
https://i.postimg.cc/nhSRjBTT/20230221-2357541-023.jpg
https://i.postimg.cc/3wyLgNch/20230221-2357541-024.jpg
https://i.postimg.cc/tgLBDbKx/20230221-2357541-025.jpg
https://i.postimg.cc/DZLBMDhY/20230221-2357541-026.jpg
https://i.postimg.cc/Vs9K93DJ/20230221-2357541-027.jpg
https://i.postimg.cc/Bb3M9gQZ/20230221-2357541-028.jpg
https://i.postimg.cc/9FWJLJnJ/20230221-2357541-029.jpg
https://i.postimg.cc/3NZ9KvdX/20230221-2357541-030.jpg
https://i.postimg.cc/RVXGywr9/20230221-2357541-031.jpg
https://i.postimg.cc/6pqzXTwZ/20230221-2357541-032.jpg
https://i.postimg.cc/V6QFnRt9/20230221-2357541-033.jpg
https://i.postimg.cc/qRsxL3cP/20230221-2357541-034.jpg
https://i.postimg.cc/5tF3XGXN/20230221-2357541-035.jpg
https://i.postimg.cc/dVf6tvtx/20230221-2357541-036.jpg
https://i.postimg.cc/gj4q9bT4/20230221-2357541-037.jpg
https://i.postimg.cc/D07dYwB8/20230221-2357541-038.jpg
https://i.postimg.cc/BZCCP2nD/20230221-2357541-039.jpg
https://i.postimg.cc/nccG4MXW/20230221-2357541-040.jpg
https://i.postimg.cc/RZW1Y8QQ/20230221-2357541-041.jpg
https://i.postimg.cc/QdvgZbfL/20230221-2357541-042.jpg
https://i.postimg.cc/zBrnVfm0/20230221-2357541-043.jpg
https://i.postimg.cc/DzsrvXNS/20230221-2357541-044.jpg
https://i.postimg.cc/76nS7ywD/20230221-2357541-045.jpg
https://i.postimg.cc/2yjh7XSW/20230221-2357541-046.jpg
https://i.postimg.cc/MHsRPbnF/20230221-2357541-047.jpg
https://i.postimg.cc/NGb1jYdk/20230221-2357541-048.jpg
https://i.postimg.cc/zXBTLMMZ/20230221-2357541-049.jpg
https://i.postimg.cc/s2FWN22s/20230221-2357541-050.jpg
https://i.postimg.cc/dVZd6Cw5/20230221-2357541-051.jpg
https://i.postimg.cc/Y9MWtygP/20230221-2357541-052.jpg
https://i.postimg.cc/mDjFkNyg/20230221-2357541-053.jpg
https://i.postimg.cc/X7zd9LSZ/20230221-2357541-054.jpg
https://i.postimg.cc/jjzf0rWN/20230221-2357541-055.jpg
https://i.postimg.cc/Y0SLWGdf/20230221-2357541-056.jpg
https://i.postimg.cc/ZKCyYNBJ/20230221-2357541-057.jpg
https://i.postimg.cc/T2kDX0Pk/20230221-2357541-058.jpg
https://i.postimg.cc/DyH4SzLL/20230221-2357541-059.jpg
https://i.postimg.cc/0Nq6CHtN/20230221-2357541-060.jpg
https://i.postimg.cc/GpJ4gJNx/20230221-2357541-061.jpg
https://i.postimg.cc/jSfwPr49/20230221-2357541-062.jpg
https://i.postimg.cc/Twdpz5vM/20230221-2357541-063.jpg
https://i.postimg.cc/vB0cb8G1/20230221-2357541-064.jpg
https://i.postimg.cc/8css58CZ/20230221-2357541-065.jpg
https://i.postimg.cc/yx5x3fgs/20230221-2357541-066.jpg
https://i.postimg.cc/8P2s10gb/20230221-2357541-067.jpg
https://i.postimg.cc/FFn76KP8/20230221-2357541-068.jpg
https://i.postimg.cc/8CD5vf5J/20230221-2357541-069.jpg
https://i.postimg.cc/DzgzPfJC/20230221-2357541-070.jpg
https://i.postimg.cc/hPzfRq6j/20230221-2357541-071.jpg
https://i.postimg.cc/VkXv5WYP/20230221-2357541-072.jpg
https://i.postimg.cc/MTppPk1z/20230221-2357541-073.jpg
https://i.postimg.cc/TwNYBkcg/20230221-2357541-074.jpg
https://i.postimg.cc/PJLrHm6c/20230221-2357541-075.jpg
https://i.postimg.cc/Kjdc8RwY/20230221-2357541-076.jpg
https://i.postimg.cc/9XSQpn0j/20230221-2357541-077.jpg
https://i.postimg.cc/YqWqyzLL/20230221-2357541-078.jpg
https://i.postimg.cc/3xQJM02S/20230221-2357541-079.jpg
https://i.postimg.cc/rwGyqyJ8/20230221-2357541-080.jpg
https://i.postimg.cc/1z9mXxCD/20230221-2357541-081.jpg
https://i.postimg.cc/252zBHMM/20230221-2357541-082.jpg
https://i.postimg.cc/vBTG7rdB/20230221-2357541-083.jpg
https://i.postimg.cc/rstc3qs2/20230221-2357541-084.jpg
https://i.postimg.cc/j51tMDsh/20230221-2357541-085.jpg
https://i.postimg.cc/14hPZbVn/20230221-2357541-086.jpg
https://i.postimg.cc/pV9FR8nR/20230221-2357541-087.jpg
https://i.postimg.cc/qB9CRR8n/20230221-2357541-088.jpg
https://i.postimg.cc/Nfm2rc4n/20230221-2357541-089.jpg
https://i.postimg.cc/g2pXVTt2/20230221-2357541-090.jpg
https://i.postimg.cc/g2KwNH1q/20230221-2357541-091.jpg
https://i.postimg.cc/q7MNYCTf/20230221-2357541-092.jpg
https://i.postimg.cc/7Ls5yYH5/20230221-2357541-093.jpg
https://i.postimg.cc/Kz1RcSjJ/20230221-2357541-094.jpg
https://i.postimg.cc/50Dj67F1/20230221-2357541-095.jpg
https://i.postimg.cc/T1m1mVrb/20230221-2357541-096.jpg
https://i.postimg.cc/sfZvtrt2/20230221-2357541-097.jpg
https://i.postimg.cc/J4NtzQ7V/20230221-2357541-098.jpg
https://i.postimg.cc/pXbpvSHJ/20230221-2357541-099.jpg
https://i.postimg.cc/Gmbt8s9B/20230221-2357541-100.jpg
https://i.postimg.cc/3wRw95XY/20230221-2357541-101.jpg
https://i.postimg.cc/4xwdzNhW/20230221-2357541-102.jpg
https://i.postimg.cc/nLPhPR27/20230221-2357541-103.jpg
https://i.postimg.cc/zBHGZC2Q/20230221-2357541-104.jpg
https://i.postimg.cc/prNX2mgL/20230221-2357541-105.jpg
https://i.postimg.cc/dQdV59yk/20230221-2357541-106.jpg
https://i.postimg.cc/6qd6T9XL/20230221-2357541-107.jpg
https://i.postimg.cc/Gm33hwSG/20230221-2357541-108.jpg
https://i.postimg.cc/KvDv2vQm/20230221-2357541-109.jpg
https://i.postimg.cc/Kv2vwgP9/20230221-2357541-110.jpg
https://i.postimg.cc/CxvhRPWt/20230221-2357541-111.jpg
https://i.postimg.cc/PqPtYbHq/20230221-2357541-112.jpg
https://i.postimg.cc/DzH7gWfP/20230221-2357541-113.jpg
https://i.postimg.cc/W3ZTf2hL/20230221-2357541-114.jpg
https://i.postimg.cc/Y0wk5JW4/20230221-2357541-115.jpg
https://i.postimg.cc/X744Q6Wm/20230221-2357541-116.jpg
https://i.postimg.cc/j2QKtZHM/20230221-2357541-117.jpg
https://i.postimg.cc/CMjwGL3b/20230221-2357541-118.jpg
https://i.postimg.cc/7Y9DRtY6/20230221-2357541-119.jpg
https://i.postimg.cc/JzhmC3GQ/20230221-2357541-120.jpg
https://i.postimg.cc/dVSFs7Cc/20230221-2357541-121.jpg
https://i.postimg.cc/PqpjPtbp/20230221-2357541-122.jpg
https://i.postimg.cc/25sfWPTH/20230221-2357541-123.jpg
https://i.postimg.cc/tTFGN2M9/20230221-2357541-124.jpg
https://i.postimg.cc/Rh95sKkK/20230221-2357541-125.jpg
https://i.postimg.cc/05dq6XSf/20230221-2357541-126.jpg
https://i.postimg.cc/L5TdrhS7/20230221-2357541-127.jpg
https://i.postimg.cc/gkzb3yqP/20230221-2357541-128.jpg
https://i.postimg.cc/hP2WsJpQ/20230221-2357541-129.jpg
https://i.postimg.cc/NjLhzgzJ/20230221-2357541-130.jpg
https://i.postimg.cc/Mp4kkCkW/20230221-2357541-131.jpg
https://i.postimg.cc/D05DxDd3/20230221-2357541-132.jpg
https://i.postimg.cc/Xqnmc35g/20230221-2357541-133.jpg
https://i.postimg.cc/ZRt1n6K2/20230221-2357541-134.jpg
https://i.postimg.cc/ydm2ZWDd/20230221-2357541-135.jpg
https://i.postimg.cc/6QGkBMwC/20230221-2357541-136.jpg
https://i.postimg.cc/MKKgn6q6/20230221-2357541-137.jpg
https://i.postimg.cc/FsW8cMHj/20230221-2357541-138.jpg
https://i.postimg.cc/YCvVxdvT/20230221-2357541-139.jpg
https://i.postimg.cc/VNMVx5BR/20230221-2357541-140.jpg
https://i.postimg.cc/cHSb0ZFN/20230221-2357541-141.jpg
https://i.postimg.cc/8zxYXLWc/20230221-2357541-142.jpg
https://i.postimg.cc/Hx9PLKN8/20230221-2357541-143.jpg
https://i.postimg.cc/7hPtJ9vs/20230221-2357541-144.jpg
https://i.postimg.cc/Vv7GqtmY/20230221-2357541-145.jpg
https://i.postimg.cc/sfKNdkSt/20230221-2357541-146.jpg
https://i.postimg.cc/SNstygfj/20230221-2357541-147.jpg
https://i.postimg.cc/PrRVN1Sy/20230221-2357541-148.jpg
https://i.postimg.cc/fRS2dkFN/20230221-2357541-149.jpg
https://i.postimg.cc/fbx8HpDq/20230221-2357541-150.jpg
https://i.postimg.cc/SK0ZfkFz/20230221-2357541-151.jpg
https://i.postimg.cc/4dsBjP3f/20230221-2357541-152.jpg
https://i.postimg.cc/C17m08Zj/20230221-2357541-153.jpg
https://i.postimg.cc/BbvNnvDR/20230221-2357541-154.jpg
https://i.postimg.cc/rsYj0LNs/20230221-2357541-155.jpg
https://i.postimg.cc/zDd0PnYN/20230221-2357541-156.jpg
https://i.postimg.cc/m2t8xtTH/20230221-2357541-157.jpg
https://i.postimg.cc/wBdVs2LX/20230221-2357541-158.jpg
https://i.postimg.cc/152MyszY/20230221-2357541-159.jpg
https://i.postimg.cc/rw4jm30y/20230221-2357541-160.jpg
https://i.postimg.cc/3wCZjGFP/20230221-2357541-161.jpg
https://i.postimg.cc/G2LxXpM9/20230221-2357541-162.jpg
https://i.postimg.cc/Gt9J15nC/20230221-2357541-163.jpg
https://i.postimg.cc/85ZB9V34/20230221-2357541-164.jpg
https://i.postimg.cc/kGZNMv7t/20230221-2357541-165.jpg
https://i.postimg.cc/Y2yzxMQq/20230221-2357541-166.jpg
https://i.postimg.cc/L6YBCwVk/20230221-2357541-167.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 358;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home-footer",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:.1,
      trigger:"#home-footer",
      start:"bottom 100%",
      // markers:true,
      // end:"bottom 120%"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home-footer",
  pin:true,
  start:"bottom 100%",
  
})

}

domfooter()


function dom2footer(){
  const canvas = document.querySelector("#home2-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images/scene00154.jpg
  images/scene00155.jpg
  images/scene00156.jpg
  images/scene00157.jpg
  images/scene00158.jpg
  images/scene00159.jpg
  images/scene00160.jpg
  images/scene00161.jpg
  images/scene00162.jpg
  images/scene00163.jpg
  images/scene00164.jpg
  images/scene00165.jpg
  images/scene00166.jpg
  images/scene00167.jpg
  images/scene00168.jpg
  images/scene00169.jpg
  images/scene00170.jpg
  images/scene00171.jpg
  images/scene00172.jpg
  images/scene00173.jpg
  images/scene00174.jpg
  images/scene00175.jpg
  images/scene00176.jpg
  images/scene00177.jpg
  images/scene00178.jpg
  images/scene00179.jpg
  images/scene00180.jpg
  images/scene00181.jpg
  images/scene00182.jpg
  images/scene00183.jpg
  images/scene00184.jpg
  images/scene00185.jpg
  images/scene00186.jpg
  images/scene00187.jpg
  images/scene00188.jpg
  images/scene00189.jpg
  images/scene00190.jpg
  images/scene00191.jpg
  images/scene00192.jpg
  images/scene00193.jpg
  images/scene00194.jpg
  images/scene00195.jpg
  images/scene00196.jpg
  images/scene00197.jpg
  images/scene00198.jpg
  images/scene00199.jpg
  images/scene00200.jpg
  images/scene00201.jpg
  images/scene00202.jpg
  images/scene00203.jpg
  images/scene00204.jpg
  images/scene00205.jpg
  images/scene00206.jpg
  images/scene00207.jpg
  images/scene00208.jpg
  images/scene00209.jpg
  images/scene00210.jpg
  images/scene00211.jpg
  images/scene00212.jpg
  images/scene00213.jpg
  images/scene00214.jpg
  images/scene00215.jpg
  images/scene00216.jpg
  images/scene00217.jpg
  images/scene00218.jpg
  images/scene00219.jpg
  images/scene00220.jpg
  images/scene00221.jpg
  images/scene00222.jpg
  images/scene00223.jpg
  images/scene00224.jpg
  images/scene00225.jpg
  images/scene00226.jpg
  images/scene00227.jpg
  images/scene00228.jpg
  images/scene00229.jpg
  images/scene00230.jpg
  images/scene00231.jpg
  images/scene00232.jpg
  images/scene00233.jpg
  images/scene00234.jpg
  images/scene00235.jpg
  images/scene00236.jpg
  images/scene00237.jpg
  images/scene00238.jpg
  images/scene00239.jpg
  images/scene00240.jpg
  images/scene00241.jpg
  images/scene00242.jpg
  images/scene00243.jpg
  images/scene00244.jpg
  images/scene00245.jpg
  images/scene00246.jpg
  images/scene00247.jpg
  images/scene00248.jpg
  images/scene00249.jpg
  images/scene00250.jpg
  images/scene00251.jpg
  images/scene00252.jpg
  images/scene00253.jpg
  images/scene00254.jpg
  https://i.postimg.cc/0jndZvdk/Pexels-Videos-1793155-101.jpg
  https://i.postimg.cc/wxQV95KC/Pexels-Videos-1793155-102.jpg
  https://i.postimg.cc/tCrNxX4D/Pexels-Videos-1793155-103.jpg
  https://i.postimg.cc/5N9myHb6/Pexels-Videos-1793155-104.jpg
  https://i.postimg.cc/CxzHCWZ0/Pexels-Videos-1793155-105.jpg
  https://i.postimg.cc/DwHQxBsX/Pexels-Videos-1793155-106.jpg
  https://i.postimg.cc/63NrXqM6/Pexels-Videos-1793155-107.jpg
  https://i.postimg.cc/0NSYFDdH/Pexels-Videos-1793155-108.jpg
  https://i.postimg.cc/PxzmrH7W/Pexels-Videos-1793155-109.jpg
  https://i.postimg.cc/90myDS3v/Pexels-Videos-1793155-110.jpg
  https://i.postimg.cc/5ysLL3bj/Pexels-Videos-1793155-111.jpg
  https://i.postimg.cc/05npT8Dx/Pexels-Videos-1793155-112.jpg
  https://i.postimg.cc/QxncM0fy/Pexels-Videos-1793155-113.jpg
  https://i.postimg.cc/Qd91K1Px/Pexels-Videos-1793155-114.jpg
  https://i.postimg.cc/bw7bxdc0/Pexels-Videos-1793155-115.jpg
  https://i.postimg.cc/d1vyfX0L/Pexels-Videos-1793155-116.jpg
  https://i.postimg.cc/pdKjqxRw/Pexels-Videos-1793155-117.jpg
  https://i.postimg.cc/Kjp3R8DM/Pexels-Videos-1793155-118.jpg
  https://i.postimg.cc/nrhQFDBx/Pexels-Videos-1793155-119.jpg
  https://i.postimg.cc/rmJr2Jdg/Pexels-Videos-1793155-120.jpg
  https://i.postimg.cc/L4x1yxF8/Pexels-Videos-1793155-121.jpg
  https://i.postimg.cc/3JWDz23C/Pexels-Videos-1793155-122.jpg
  https://i.postimg.cc/VLTbw56y/Pexels-Videos-1793155-123.jpg
  https://i.postimg.cc/NjH2jY9K/Pexels-Videos-1793155-124.jpg
  https://i.postimg.cc/0N1M63Dc/Pexels-Videos-1793155-125.jpg
  https://i.postimg.cc/KY7KtN5F/Pexels-Videos-1793155-126.jpg
  https://i.postimg.cc/NMgKDHNX/Pexels-Videos-1793155-127.jpg
  https://i.postimg.cc/xCtc4174/Pexels-Videos-1793155-128.jpg
  https://i.postimg.cc/7hhf8yrY/Pexels-Videos-1793155-129.jpg
  https://i.postimg.cc/sxL1303P/Pexels-Videos-1793155-130.jpg
  https://i.postimg.cc/DfpSQm1W/Pexels-Videos-1793155-131.jpg
  https://i.postimg.cc/15gfvPKv/Pexels-Videos-1793155-132.jpg
  https://i.postimg.cc/X7TXhhH4/Pexels-Videos-1793155-133.jpg
  https://i.postimg.cc/qvygdLSn/Pexels-Videos-1793155-134.jpg
  https://i.postimg.cc/hGnv4mRY/Pexels-Videos-1793155-135.jpg
  https://i.postimg.cc/g0KJx0Y2/Pexels-Videos-1793155-136.jpg
  https://i.postimg.cc/Jn4hZWnc/Pexels-Videos-1793155-137.jpg
  https://i.postimg.cc/3RSxZb0M/Pexels-Videos-1793155-138.jpg
  https://i.postimg.cc/fyVTqjYV/Pexels-Videos-1793155-139.jpg
  https://i.postimg.cc/HnFWqctB/Pexels-Videos-1793155-140.jpg
  https://i.postimg.cc/nVWLjgtB/Pexels-Videos-1793155-141.jpg
  https://i.postimg.cc/FsJHjp9q/Pexels-Videos-1793155-142.jpg
  https://i.postimg.cc/wj8TFNMB/Pexels-Videos-1793155-143.jpg
  https://i.postimg.cc/RZ7CY0JL/Pexels-Videos-1793155-144.jpg
  https://i.postimg.cc/ZqjbTDc9/Pexels-Videos-1793155-145.jpg
  https://i.postimg.cc/KYmchynS/Pexels-Videos-1793155-146.jpg
  https://i.postimg.cc/8551sBKZ/Pexels-Videos-1793155-147.jpg
  https://i.postimg.cc/63mBZ2Ft/Pexels-Videos-1793155-148.jpg
  https://i.postimg.cc/Hn8d9WC5/Pexels-Videos-1793155-149.jpg
  https://i.postimg.cc/BtWsYWqz/Pexels-Videos-1793155-150.jpg
  https://i.postimg.cc/gcxZTvzy/Pexels-Videos-1793155-151.jpg
  https://i.postimg.cc/7Pj28fhF/Pexels-Videos-1793155-152.jpg
  https://i.postimg.cc/7Y7TxwTf/Pexels-Videos-1793155-153.jpg
  https://i.postimg.cc/Hkg8nRQ3/Pexels-Videos-1793155-154.jpg
  https://i.postimg.cc/x13Jz55Q/Pexels-Videos-1793155-155.jpg
  https://i.postimg.cc/1zRgcF7q/Pexels-Videos-1793155-156.jpg
  https://i.postimg.cc/GpM4Mp6S/Pexels-Videos-1793155-157.jpg
  https://i.postimg.cc/TwppB662/Pexels-Videos-1793155-158.jpg
  https://i.postimg.cc/cH2rSbxR/Pexels-Videos-1793155-159.jpg
  https://i.postimg.cc/T1bhYJ1Z/Pexels-Videos-1793155-160.jpg
  https://i.postimg.cc/PfvC4Ty2/Pexels-Videos-1793155-161.jpg
  https://i.postimg.cc/sDFvHq0y/Pexels-Videos-1793155-162.jpg
  https://i.postimg.cc/Dw60ZZfy/Pexels-Videos-1793155-163.jpg
  https://i.postimg.cc/mgBhBMs5/Pexels-Videos-1793155-164.jpg
  https://i.postimg.cc/KYYzg247/Pexels-Videos-1793155-165.jpg
  https://i.postimg.cc/Kzk8JDPR/Pexels-Videos-1793155-166.jpg
  https://i.postimg.cc/s202YNZk/Pexels-Videos-1793155-167.jpg
  https://i.postimg.cc/HxqsK8z3/Pexels-Videos-1793155-168.jpg
  https://i.postimg.cc/hvVPq43n/Pexels-Videos-1793155-169.jpg
  https://i.postimg.cc/sfW2WKfL/Pexels-Videos-1793155-170.jpg
  https://i.postimg.cc/DyKwPs8w/Pexels-Videos-1793155-171.jpg
  https://i.postimg.cc/ncYcRzDY/Pexels-Videos-1793155-172.jpg
  https://i.postimg.cc/7ZHPpk1v/Pexels-Videos-1793155-173.jpg
  https://i.postimg.cc/P5SfHRKC/Pexels-Videos-1793155-174.jpg
  https://i.postimg.cc/8Cspzmnt/Pexels-Videos-1793155-175.jpg
  https://i.postimg.cc/0N38MKTx/Pexels-Videos-1793155-176.jpg
  https://i.postimg.cc/B6KJxQ3F/Pexels-Videos-1793155-177.jpg
  https://i.postimg.cc/NFvBbqGz/Pexels-Videos-1793155-178.jpg
  https://i.postimg.cc/T1jG47pY/Pexels-Videos-1793155-179.jpg
  https://i.postimg.cc/zDTJvB0Z/Pexels-Videos-1793155-180.jpg
  https://i.postimg.cc/pXxPFH69/Pexels-Videos-1793155-181.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 181;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home2-footer>canvas",
      start:"-50% 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home2-footer",
      start:"-50% 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home2-footer",
  pin:true,
  start:"400% 100%",

  
})

}

dom2footer()


function dom3footer(){
  const canvas = document.querySelector("#home3-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images/scene00154.jpg
  images/scene00155.jpg
  images/scene00156.jpg
  images/scene00157.jpg
  images/scene00158.jpg
  images/scene00159.jpg
  images/scene00160.jpg
  images/scene00161.jpg
  images/scene00162.jpg
  images/scene00163.jpg
  images/scene00164.jpg
  images/scene00165.jpg
  images/scene00166.jpg
  images/scene00167.jpg
  images/scene00168.jpg
  images/scene00169.jpg
  images/scene00170.jpg
  images/scene00171.jpg
  images/scene00172.jpg
  images/scene00173.jpg
  images/scene00174.jpg
  images/scene00175.jpg
  images/scene00176.jpg
  images/scene00177.jpg
  images/scene00178.jpg
  images/scene00179.jpg
  images/scene00180.jpg
  images/scene00181.jpg
  images/scene00182.jpg
  images/scene00183.jpg
  images/scene00184.jpg
  images/scene00185.jpg
  images/scene00186.jpg
  images/scene00187.jpg
  images/scene00188.jpg
  images/scene00189.jpg
  images/scene00190.jpg
  images/scene00191.jpg
  images/scene00192.jpg
  images/scene00193.jpg
  images/scene00194.jpg
  images/scene00195.jpg
  images/scene00196.jpg
  images/scene00197.jpg
  images/scene00198.jpg
  images/scene00199.jpg
  images/scene00200.jpg
  images/scene00201.jpg
  images/scene00202.jpg
  images/scene00203.jpg
  images/scene00204.jpg
  images/scene00205.jpg
  images/scene00206.jpg
  images/scene00207.jpg
  images/scene00208.jpg
  images/scene00209.jpg
  images/scene00210.jpg
  images/scene00211.jpg
  images/scene00212.jpg
  images/scene00213.jpg
  images/scene00214.jpg
  images/scene00215.jpg
  images/scene00216.jpg
  images/scene00217.jpg
  images/scene00218.jpg
  images/scene00219.jpg
  images/scene00220.jpg
  images/scene00221.jpg
  images/scene00222.jpg
  images/scene00223.jpg
  images/scene00224.jpg
  images/scene00225.jpg
  images/scene00226.jpg
  images/scene00227.jpg
  images/scene00228.jpg
  images/scene00229.jpg
  images/scene00230.jpg
  images/scene00231.jpg
  images/scene00232.jpg
  images/scene00233.jpg
  images/scene00234.jpg
  images/scene00235.jpg
  images/scene00236.jpg
  images/scene00237.jpg
  images/scene00238.jpg
  images/scene00239.jpg
  images/scene00240.jpg
  images/scene00241.jpg
  images/scene00242.jpg
  images/scene00243.jpg
  images/scene00244.jpg
  images/scene00245.jpg
  images/scene00246.jpg
  images/scene00247.jpg
  images/scene00248.jpg
  images/scene00249.jpg
  images/scene00250.jpg
  images/scene00251.jpg
  images/scene00252.jpg
  images/scene00253.jpg
  images/scene00254.jpg
  https://i.postimg.cc/tgkTRYTX/Dining-Table-3-D-Walkthrough-1080-P-HD-123.jpg
  https://i.postimg.cc/k4552q6W/Dining-Table-3-D-Walkthrough-1080-P-HD-124.jpg
  https://i.postimg.cc/26XSvMhM/Dining-Table-3-D-Walkthrough-1080-P-HD-125.jpg
  https://i.postimg.cc/L5Y6VDVX/Dining-Table-3-D-Walkthrough-1080-P-HD-126.jpg
  https://i.postimg.cc/nryVSmd1/Dining-Table-3-D-Walkthrough-1080-P-HD-127.jpg
  https://i.postimg.cc/xjhddr0b/Dining-Table-3-D-Walkthrough-1080-P-HD-128.jpg
  https://i.postimg.cc/MKBpMsT3/Dining-Table-3-D-Walkthrough-1080-P-HD-129.jpg
  https://i.postimg.cc/kgdXxxRJ/Dining-Table-3-D-Walkthrough-1080-P-HD-130.jpg
  https://i.postimg.cc/jSQqvLyz/Dining-Table-3-D-Walkthrough-1080-P-HD-131.jpg
  https://i.postimg.cc/Lsx9KwC5/Dining-Table-3-D-Walkthrough-1080-P-HD-132.jpg
  https://i.postimg.cc/sX1VVmqc/Dining-Table-3-D-Walkthrough-1080-P-HD-133.jpg
  https://i.postimg.cc/gJ5GrRPP/Dining-Table-3-D-Walkthrough-1080-P-HD-134.jpg
  https://i.postimg.cc/prFRjT25/Dining-Table-3-D-Walkthrough-1080-P-HD-135.jpg
  https://i.postimg.cc/7brDnk6s/Dining-Table-3-D-Walkthrough-1080-P-HD-136.jpg
  https://i.postimg.cc/pVwn6557/Dining-Table-3-D-Walkthrough-1080-P-HD-137.jpg
  https://i.postimg.cc/MK1j2ZyG/Dining-Table-3-D-Walkthrough-1080-P-HD-138.jpg
  https://i.postimg.cc/fRZSw4Kf/Dining-Table-3-D-Walkthrough-1080-P-HD-139.jpg
  https://i.postimg.cc/pLZhr0cb/Dining-Table-3-D-Walkthrough-1080-P-HD-140.jpg
  https://i.postimg.cc/SKxXMWHX/Dining-Table-3-D-Walkthrough-1080-P-HD-141.jpg
  https://i.postimg.cc/hGZXbXq2/Dining-Table-3-D-Walkthrough-1080-P-HD-142.jpg
  https://i.postimg.cc/cHV62PCY/Dining-Table-3-D-Walkthrough-1080-P-HD-143.jpg
  https://i.postimg.cc/yxcWHn3G/Dining-Table-3-D-Walkthrough-1080-P-HD-144.jpg
  https://i.postimg.cc/2jZ1hj9x/Dining-Table-3-D-Walkthrough-1080-P-HD-145.jpg
  https://i.postimg.cc/TYvp98Zv/Dining-Table-3-D-Walkthrough-1080-P-HD-146.jpg
  https://i.postimg.cc/L6khQCpY/Dining-Table-3-D-Walkthrough-1080-P-HD-147.jpg
  https://i.postimg.cc/GmctWFLM/Dining-Table-3-D-Walkthrough-1080-P-HD-148.jpg
  https://i.postimg.cc/bw3rpZdq/Dining-Table-3-D-Walkthrough-1080-P-HD-149.jpg
  https://i.postimg.cc/25y66CBh/Dining-Table-3-D-Walkthrough-1080-P-HD-150.jpg
  https://i.postimg.cc/Y9mC68RS/Dining-Table-3-D-Walkthrough-1080-P-HD-151.jpg
  https://i.postimg.cc/rsXFQWZN/Dining-Table-3-D-Walkthrough-1080-P-HD-152.jpg
  https://i.postimg.cc/x8vj7CWD/Dining-Table-3-D-Walkthrough-1080-P-HD-153.jpg
  https://i.postimg.cc/ryxpznzn/Dining-Table-3-D-Walkthrough-1080-P-HD-154.jpg
  https://i.postimg.cc/28YSWQZz/Dining-Table-3-D-Walkthrough-1080-P-HD-155.jpg
  https://i.postimg.cc/NfxfkK6R/Dining-Table-3-D-Walkthrough-1080-P-HD-156.jpg
  https://i.postimg.cc/7ZYPsq9d/Dining-Table-3-D-Walkthrough-1080-P-HD-157.jpg
  https://i.postimg.cc/5tX4JpZm/Dining-Table-3-D-Walkthrough-1080-P-HD-158.jpg
  https://i.postimg.cc/Gp6cmGRn/Dining-Table-3-D-Walkthrough-1080-P-HD-159.jpg
  https://i.postimg.cc/qRnphqBh/Dining-Table-3-D-Walkthrough-1080-P-HD-160.jpg
  https://i.postimg.cc/0jsPpvrt/Dining-Table-3-D-Walkthrough-1080-P-HD-161.jpg
  https://i.postimg.cc/gcVYGxB1/Dining-Table-3-D-Walkthrough-1080-P-HD-162.jpg
  https://i.postimg.cc/htjg8pPq/Dining-Table-3-D-Walkthrough-1080-P-HD-163.jpg
  https://i.postimg.cc/25LDMyZc/Dining-Table-3-D-Walkthrough-1080-P-HD-164.jpg
  https://i.postimg.cc/Ss0hh4Ly/Dining-Table-3-D-Walkthrough-1080-P-HD-165.jpg
  https://i.postimg.cc/cHQN1zTf/Dining-Table-3-D-Walkthrough-1080-P-HD-166.jpg
  https://i.postimg.cc/J0MCsQdv/Dining-Table-3-D-Walkthrough-1080-P-HD-167.jpg
  https://i.postimg.cc/1RrZLL8Q/Dining-Table-3-D-Walkthrough-1080-P-HD-168.jpg
  https://i.postimg.cc/8PkVDtvr/Dining-Table-3-D-Walkthrough-1080-P-HD-169.jpg
  https://i.postimg.cc/TYkvPgjN/Dining-Table-3-D-Walkthrough-1080-P-HD-170.jpg
  https://i.postimg.cc/zG6mCNcn/Dining-Table-3-D-Walkthrough-1080-P-HD-171.jpg
  https://i.postimg.cc/vBwpKzMT/Dining-Table-3-D-Walkthrough-1080-P-HD-172.jpg
  https://i.postimg.cc/wv5SYmTV/Dining-Table-3-D-Walkthrough-1080-P-HD-173.jpg
  https://i.postimg.cc/nrHNFhXt/Dining-Table-3-D-Walkthrough-1080-P-HD-174.jpg
  https://i.postimg.cc/mk8JtW91/Dining-Table-3-D-Walkthrough-1080-P-HD-175.jpg
  https://i.postimg.cc/9XpvxZkX/Dining-Table-3-D-Walkthrough-1080-P-HD-176.jpg
  https://i.postimg.cc/zXG443mC/Dining-Table-3-D-Walkthrough-1080-P-HD-177.jpg
  https://i.postimg.cc/02XhvxxL/Dining-Table-3-D-Walkthrough-1080-P-HD-178.jpg
  https://i.postimg.cc/8zF9P3zs/Dining-Table-3-D-Walkthrough-1080-P-HD-179.jpg
  https://i.postimg.cc/zBNc7GSR/Dining-Table-3-D-Walkthrough-1080-P-HD-180.jpg
  https://i.postimg.cc/XvdP9CFb/Dining-Table-3-D-Walkthrough-1080-P-HD-181.jpg
  https://i.postimg.cc/XYThZ8rL/Dining-Table-3-D-Walkthrough-1080-P-HD-182.jpg
  https://i.postimg.cc/fTFXzfsC/Dining-Table-3-D-Walkthrough-1080-P-HD-183.jpg
  https://i.postimg.cc/0ywSbK2s/Dining-Table-3-D-Walkthrough-1080-P-HD-184.jpg
  https://i.postimg.cc/mrWHMZtF/Dining-Table-3-D-Walkthrough-1080-P-HD-185.jpg
  https://i.postimg.cc/xdGbPrzp/Dining-Table-3-D-Walkthrough-1080-P-HD-186.jpg
  https://i.postimg.cc/262bP4T4/Dining-Table-3-D-Walkthrough-1080-P-HD-187.jpg
  https://i.postimg.cc/hjSQyC8D/Dining-Table-3-D-Walkthrough-1080-P-HD-188.jpg
  https://i.postimg.cc/QCC9sHnv/Dining-Table-3-D-Walkthrough-1080-P-HD-189.jpg
  https://i.postimg.cc/nrWsLpyr/Dining-Table-3-D-Walkthrough-1080-P-HD-190.jpg
  https://i.postimg.cc/CMrn7sR0/Dining-Table-3-D-Walkthrough-1080-P-HD-191.jpg
  https://i.postimg.cc/vH1gNxnV/Dining-Table-3-D-Walkthrough-1080-P-HD-192.jpg
  https://i.postimg.cc/rwxd86Qy/Dining-Table-3-D-Walkthrough-1080-P-HD-193.jpg
  https://i.postimg.cc/qM9hVBcZ/Dining-Table-3-D-Walkthrough-1080-P-HD-194.jpg
  https://i.postimg.cc/tgbsJrM3/Dining-Table-3-D-Walkthrough-1080-P-HD-195.jpg
  https://i.postimg.cc/KY5RMn6d/Dining-Table-3-D-Walkthrough-1080-P-HD-196.jpg
  https://i.postimg.cc/sXD19My1/Dining-Table-3-D-Walkthrough-1080-P-HD-197.jpg
  https://i.postimg.cc/W3Wz9sb8/Dining-Table-3-D-Walkthrough-1080-P-HD-198.jpg
  https://i.postimg.cc/8c759x7S/Dining-Table-3-D-Walkthrough-1080-P-HD-199.jpg
  https://i.postimg.cc/4yjdgwch/Dining-Table-3-D-Walkthrough-1080-P-HD-200.jpg
  https://i.postimg.cc/dQfDrQft/Dining-Table-3-D-Walkthrough-1080-P-HD-201.jpg
  https://i.postimg.cc/4Nhy5kCv/Dining-Table-3-D-Walkthrough-1080-P-HD-202.jpg
  https://i.postimg.cc/wj8v4fHC/Dining-Table-3-D-Walkthrough-1080-P-HD-203.jpg
  https://i.postimg.cc/52BthB26/Dining-Table-3-D-Walkthrough-1080-P-HD-204.jpg
  https://i.postimg.cc/1zyzs88M/Dining-Table-3-D-Walkthrough-1080-P-HD-205.jpg
  https://i.postimg.cc/nLThzn7x/Dining-Table-3-D-Walkthrough-1080-P-HD-206.jpg
  https://i.postimg.cc/d11tZgmy/Dining-Table-3-D-Walkthrough-1080-P-HD-207.jpg
  https://i.postimg.cc/76WP3XmQ/Dining-Table-3-D-Walkthrough-1080-P-HD-208.jpg
  https://i.postimg.cc/Vv0fDMhs/Dining-Table-3-D-Walkthrough-1080-P-HD-209.jpg
  https://i.postimg.cc/c6qsjCqR/Dining-Table-3-D-Walkthrough-1080-P-HD-210.jpg
  https://i.postimg.cc/FFY3265z/Dining-Table-3-D-Walkthrough-1080-P-HD-211.jpg
  https://i.postimg.cc/NGZmYxB4/Dining-Table-3-D-Walkthrough-1080-P-HD-212.jpg
  https://i.postimg.cc/gkRR060P/Dining-Table-3-D-Walkthrough-1080-P-HD-213.jpg
  https://i.postimg.cc/zGrhHXLH/Dining-Table-3-D-Walkthrough-1080-P-HD-214.jpg
  https://i.postimg.cc/1zRNMCr9/Dining-Table-3-D-Walkthrough-1080-P-HD-215.jpg
  https://i.postimg.cc/Xv2BPfs9/Dining-Table-3-D-Walkthrough-1080-P-HD-216.jpg
  https://i.postimg.cc/SsJYbnP3/Dining-Table-3-D-Walkthrough-1080-P-HD-217.jpg
  https://i.postimg.cc/gJQXzYFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-218.jpg
  https://i.postimg.cc/8cvFsqNb/Dining-Table-3-D-Walkthrough-1080-P-HD-219.jpg
  https://i.postimg.cc/dtMkgtjN/Dining-Table-3-D-Walkthrough-1080-P-HD-220.jpg
  https://i.postimg.cc/Vs007bnb/Dining-Table-3-D-Walkthrough-1080-P-HD-221.jpg
  https://i.postimg.cc/ZKrBmtfb/Dining-Table-3-D-Walkthrough-1080-P-HD-222.jpg
  https://i.postimg.cc/0yP62W3p/Dining-Table-3-D-Walkthrough-1080-P-HD-223.jpg
  https://i.postimg.cc/7Z95C18j/Dining-Table-3-D-Walkthrough-1080-P-HD-224.jpg
  https://i.postimg.cc/XvDXLVv8/Dining-Table-3-D-Walkthrough-1080-P-HD-225.jpg
  https://i.postimg.cc/qRhqZ9hd/Dining-Table-3-D-Walkthrough-1080-P-HD-226.jpg
  https://i.postimg.cc/Twz18Cg5/Dining-Table-3-D-Walkthrough-1080-P-HD-227.jpg
  https://i.postimg.cc/D01Z7LPj/Dining-Table-3-D-Walkthrough-1080-P-HD-228.jpg
  https://i.postimg.cc/XN5XK66f/Dining-Table-3-D-Walkthrough-1080-P-HD-229.jpg
  https://i.postimg.cc/dtK34NJz/Dining-Table-3-D-Walkthrough-1080-P-HD-230.jpg
  https://i.postimg.cc/MKbT40TX/Dining-Table-3-D-Walkthrough-1080-P-HD-231.jpg
  https://i.postimg.cc/8zp5VFJ4/Dining-Table-3-D-Walkthrough-1080-P-HD-232.jpg
  https://i.postimg.cc/rwfpy85k/Dining-Table-3-D-Walkthrough-1080-P-HD-233.jpg
  https://i.postimg.cc/9fzQrvBq/Dining-Table-3-D-Walkthrough-1080-P-HD-234.jpg
  https://i.postimg.cc/mDHZSCJL/Dining-Table-3-D-Walkthrough-1080-P-HD-235.jpg
  https://i.postimg.cc/MG4KRds3/Dining-Table-3-D-Walkthrough-1080-P-HD-236.jpg
  https://i.postimg.cc/QCZ8YVZp/Dining-Table-3-D-Walkthrough-1080-P-HD-237.jpg
  https://i.postimg.cc/Rh1Mk9v2/Dining-Table-3-D-Walkthrough-1080-P-HD-238.jpg
  https://i.postimg.cc/ry5F0G5g/Dining-Table-3-D-Walkthrough-1080-P-HD-239.jpg
  https://i.postimg.cc/RVRSGMsH/Dining-Table-3-D-Walkthrough-1080-P-HD-240.jpg
  https://i.postimg.cc/85MDvDfs/Dining-Table-3-D-Walkthrough-1080-P-HD-241.jpg
  https://i.postimg.cc/hGJKSVSL/Dining-Table-3-D-Walkthrough-1080-P-HD-242.jpg
  https://i.postimg.cc/bvKpddJK/Dining-Table-3-D-Walkthrough-1080-P-HD-243.jpg
  https://i.postimg.cc/brPPHM1g/Dining-Table-3-D-Walkthrough-1080-P-HD-244.jpg
  https://i.postimg.cc/QCq36bb3/Dining-Table-3-D-Walkthrough-1080-P-HD-245.jpg
  https://i.postimg.cc/tRdpCqHM/Dining-Table-3-D-Walkthrough-1080-P-HD-246.jpg
  https://i.postimg.cc/Fs9mYMrs/Dining-Table-3-D-Walkthrough-1080-P-HD-247.jpg
  https://i.postimg.cc/RVXmKgh1/Dining-Table-3-D-Walkthrough-1080-P-HD-248.jpg
  https://i.postimg.cc/YC0H3QL5/Dining-Table-3-D-Walkthrough-1080-P-HD-249.jpg
  https://i.postimg.cc/52rMkjw6/Dining-Table-3-D-Walkthrough-1080-P-HD-250.jpg
  https://i.postimg.cc/vm6dRMzX/Dining-Table-3-D-Walkthrough-1080-P-HD-251.jpg
  https://i.postimg.cc/V6qQ6R2C/Dining-Table-3-D-Walkthrough-1080-P-HD-252.jpg
  https://i.postimg.cc/XJS64h1W/Dining-Table-3-D-Walkthrough-1080-P-HD-253.jpg
  https://i.postimg.cc/cCdq83N5/Dining-Table-3-D-Walkthrough-1080-P-HD-254.jpg
  https://i.postimg.cc/1XBk0zmR/Dining-Table-3-D-Walkthrough-1080-P-HD-255.jpg
  https://i.postimg.cc/Dfc33xrV/Dining-Table-3-D-Walkthrough-1080-P-HD-256.jpg
  https://i.postimg.cc/9MtKVfqP/Dining-Table-3-D-Walkthrough-1080-P-HD-257.jpg
  https://i.postimg.cc/90mSfjG6/Dining-Table-3-D-Walkthrough-1080-P-HD-258.jpg
  https://i.postimg.cc/T3pzmGZG/Dining-Table-3-D-Walkthrough-1080-P-HD-259.jpg
  https://i.postimg.cc/28cpV392/Dining-Table-3-D-Walkthrough-1080-P-HD-260.jpg
  https://i.postimg.cc/fRp6fpNd/Dining-Table-3-D-Walkthrough-1080-P-HD-261.jpg
  https://i.postimg.cc/9f9s8bmn/Dining-Table-3-D-Walkthrough-1080-P-HD-262.jpg
  https://i.postimg.cc/RhgY6bdN/Dining-Table-3-D-Walkthrough-1080-P-HD-263.jpg
  https://i.postimg.cc/xj5h4cQn/Dining-Table-3-D-Walkthrough-1080-P-HD-264.jpg
  https://i.postimg.cc/HsLRDdW5/Dining-Table-3-D-Walkthrough-1080-P-HD-265.jpg
  https://i.postimg.cc/BQwyJktz/Dining-Table-3-D-Walkthrough-1080-P-HD-266.jpg
  https://i.postimg.cc/9QRk0b7Q/Dining-Table-3-D-Walkthrough-1080-P-HD-267.jpg
  https://i.postimg.cc/sgkNhWY9/Dining-Table-3-D-Walkthrough-1080-P-HD-268.jpg
  https://i.postimg.cc/5t8kqtpc/Dining-Table-3-D-Walkthrough-1080-P-HD-269.jpg
  https://i.postimg.cc/vBM2PdS4/Dining-Table-3-D-Walkthrough-1080-P-HD-270.jpg
  https://i.postimg.cc/k4c1zhkf/Dining-Table-3-D-Walkthrough-1080-P-HD-271.jpg
  https://i.postimg.cc/tJ4SjNby/Dining-Table-3-D-Walkthrough-1080-P-HD-272.jpg
  https://i.postimg.cc/yxpfY36R/Dining-Table-3-D-Walkthrough-1080-P-HD-273.jpg
  https://i.postimg.cc/jqM3hm6j/Dining-Table-3-D-Walkthrough-1080-P-HD-274.jpg
  https://i.postimg.cc/Gh97gKzx/Dining-Table-3-D-Walkthrough-1080-P-HD-275.jpg
  https://i.postimg.cc/YqVX5FsK/Dining-Table-3-D-Walkthrough-1080-P-HD-276.jpg
  https://i.postimg.cc/bwt6pv7G/Dining-Table-3-D-Walkthrough-1080-P-HD-277.jpg
  https://i.postimg.cc/hGR2jBn2/Dining-Table-3-D-Walkthrough-1080-P-HD-278.jpg
  https://i.postimg.cc/SKLDYvNk/Dining-Table-3-D-Walkthrough-1080-P-HD-279.jpg
  https://i.postimg.cc/tTXD3NYP/Dining-Table-3-D-Walkthrough-1080-P-HD-280.jpg
  https://i.postimg.cc/pTqCq5FS/Dining-Table-3-D-Walkthrough-1080-P-HD-281.jpg
  https://i.postimg.cc/gjjD5cy2/Dining-Table-3-D-Walkthrough-1080-P-HD-282.jpg
  https://i.postimg.cc/Dfp5GsFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-283.jpg
  https://i.postimg.cc/ZnQchkjF/Dining-Table-3-D-Walkthrough-1080-P-HD-284.jpg
  https://i.postimg.cc/rFvJnkDq/Dining-Table-3-D-Walkthrough-1080-P-HD-285.jpg
  https://i.postimg.cc/bNGg9JN6/Dining-Table-3-D-Walkthrough-1080-P-HD-286.jpg
  https://i.postimg.cc/rwx97P4x/Dining-Table-3-D-Walkthrough-1080-P-HD-287.jpg
  https://i.postimg.cc/YS7x7zNV/Dining-Table-3-D-Walkthrough-1080-P-HD-288.jpg
  https://i.postimg.cc/pdBJL5qd/Dining-Table-3-D-Walkthrough-1080-P-HD-289.jpg
  https://i.postimg.cc/LX6BY4b3/Dining-Table-3-D-Walkthrough-1080-P-HD-290.jpg
  https://i.postimg.cc/sX6PpdFd/Dining-Table-3-D-Walkthrough-1080-P-HD-291.jpg
  https://i.postimg.cc/T1KV07Gy/Dining-Table-3-D-Walkthrough-1080-P-HD-292.jpg
  https://i.postimg.cc/vTCWNrH0/Dining-Table-3-D-Walkthrough-1080-P-HD-293.jpg
  https://i.postimg.cc/QNzkC3kc/Dining-Table-3-D-Walkthrough-1080-P-HD-294.jpg
  https://i.postimg.cc/tCVdVM2w/Dining-Table-3-D-Walkthrough-1080-P-HD-295.jpg
  https://i.postimg.cc/GmwFPxf2/Dining-Table-3-D-Walkthrough-1080-P-HD-296.jpg
  https://i.postimg.cc/YC61dmcx/Dining-Table-3-D-Walkthrough-1080-P-HD-297.jpg
  https://i.postimg.cc/rpq53FM2/Dining-Table-3-D-Walkthrough-1080-P-HD-298.jpg
  https://i.postimg.cc/HL3bgDkc/Dining-Table-3-D-Walkthrough-1080-P-HD-299.jpg
  
  `;
  return data.split("\n")[index];
}

const frameCount = 277;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home3-footer>canvas",
      start:"top 50%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home3 -footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home3-footer",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home3-footer",
  pin:true,
  start:"bottom 100%",

  
})

}

dom3footer()


function dom4footer(){
  const canvas = document.querySelector("#home4-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `images/scene00154.jpg
  images/scene00155.jpg
  images/scene00156.jpg
  images/scene00157.jpg
  images/scene00158.jpg
  images/scene00159.jpg
  images/scene00160.jpg
  images/scene00161.jpg
  images/scene00162.jpg
  images/scene00163.jpg
  images/scene00164.jpg
  images/scene00165.jpg
  images/scene00166.jpg
  images/scene00167.jpg
  images/scene00168.jpg
  images/scene00169.jpg
  images/scene00170.jpg
  images/scene00171.jpg
  images/scene00172.jpg
  images/scene00173.jpg
  images/scene00174.jpg
  images/scene00175.jpg
  images/scene00176.jpg
  images/scene00177.jpg
  images/scene00178.jpg
  images/scene00179.jpg
  images/scene00180.jpg
  images/scene00181.jpg
  images/scene00182.jpg
  images/scene00183.jpg
  images/scene00184.jpg
  images/scene00185.jpg
  images/scene00186.jpg
  images/scene00187.jpg
  images/scene00188.jpg
  images/scene00189.jpg
  images/scene00190.jpg
  images/scene00191.jpg
  images/scene00192.jpg
  images/scene00193.jpg
  images/scene00194.jpg
  images/scene00195.jpg
  images/scene00196.jpg
  images/scene00197.jpg
  images/scene00198.jpg
  images/scene00199.jpg
  images/scene00200.jpg
  images/scene00201.jpg
  images/scene00202.jpg
  images/scene00203.jpg
  images/scene00204.jpg
  images/scene00205.jpg
  images/scene00206.jpg
  images/scene00207.jpg
  images/scene00208.jpg
  images/scene00209.jpg
  images/scene00210.jpg
  images/scene00211.jpg
  images/scene00212.jpg
  images/scene00213.jpg
  images/scene00214.jpg
  images/scene00215.jpg
  images/scene00216.jpg
  images/scene00217.jpg
  images/scene00218.jpg
  images/scene00219.jpg
  images/scene00220.jpg
  images/scene00221.jpg
  images/scene00222.jpg
  images/scene00223.jpg
  images/scene00224.jpg
  images/scene00225.jpg
  images/scene00226.jpg
  images/scene00227.jpg
  images/scene00228.jpg
  images/scene00229.jpg
  images/scene00230.jpg
  images/scene00231.jpg
  images/scene00232.jpg
  images/scene00233.jpg
  images/scene00234.jpg
  images/scene00235.jpg
  images/scene00236.jpg
  images/scene00237.jpg
  images/scene00238.jpg
  images/scene00239.jpg
  images/scene00240.jpg
  images/scene00241.jpg
  images/scene00242.jpg
  images/scene00243.jpg
  images/scene00244.jpg
  images/scene00245.jpg
  images/scene00246.jpg
  images/scene00247.jpg
  images/scene00248.jpg
  images/scene00249.jpg
  images/scene00250.jpg
  images/scene00251.jpg
  images/scene00252.jpg
  images/scene00253.jpg
  images/scene00254.jpg
https://i.postimg.cc/8zfWnpct/hotel3-011.jpg
https://i.postimg.cc/8C8v22rD/hotel3-012.jpg
https://i.postimg.cc/d16TTDNt/hotel3-013.jpg
https://i.postimg.cc/XJ4CJ98z/hotel3-014.jpg
https://i.postimg.cc/KYnTx0nT/hotel3-015.jpg
https://i.postimg.cc/sx2GPybP/hotel3-016.jpg
https://i.postimg.cc/90NRJKj6/hotel3-017.jpg
https://i.postimg.cc/4489f7hW/hotel3-018.jpg
https://i.postimg.cc/kXBtBJQq/hotel3-019.jpg
https://i.postimg.cc/X7mB5RLF/hotel3-020.jpg
https://i.postimg.cc/9Q9RYLgk/hotel3-021.jpg
https://i.postimg.cc/mrGcX70g/hotel3-022.jpg
https://i.postimg.cc/5tqXZ6Vq/hotel3-023.jpg
https://i.postimg.cc/DZvSFnfV/hotel3-024.jpg
https://i.postimg.cc/cC66gh8X/hotel3-025.jpg
https://i.postimg.cc/T1S1rbVG/hotel3-026.jpg
https://i.postimg.cc/PfFCGgBc/hotel3-027.jpg
https://i.postimg.cc/QdcCTHHG/hotel3-028.jpg
https://i.postimg.cc/8P2schkm/hotel3-029.jpg
https://i.postimg.cc/kX6B7jC5/hotel3-030.jpg
https://i.postimg.cc/vmMBLbV1/hotel3-031.jpg
https://i.postimg.cc/HL2L6Rw6/hotel3-032.jpg
https://i.postimg.cc/MTppN5tq/hotel3-033.jpg
https://i.postimg.cc/zB2GrhPW/hotel3-034.jpg
https://i.postimg.cc/6q755QDP/hotel3-035.jpg
https://i.postimg.cc/vTp81syZ/hotel3-036.jpg
https://i.postimg.cc/jq9S3zfY/hotel3-037.jpg
https://i.postimg.cc/WbkbBhmF/hotel3-038.jpg
https://i.postimg.cc/JzC4MMKT/hotel3-039.jpg
https://i.postimg.cc/8zdkC90T/hotel3-040.jpg
https://i.postimg.cc/QMX8Km21/hotel3-041.jpg
https://i.postimg.cc/pdq2f8v7/hotel3-042.jpg
https://i.postimg.cc/Tw1TCwYP/hotel3-043.jpg
https://i.postimg.cc/QCWhZy7G/hotel3-044.jpg
https://i.postimg.cc/grFdzHyw/hotel3-045.jpg
https://i.postimg.cc/T2yDP2qG/hotel3-046.jpg
https://i.postimg.cc/pVgn5Nqj/hotel3-047.jpg
https://i.postimg.cc/4NVHz8SS/hotel3-048.jpg
https://i.postimg.cc/mg4zVYx2/hotel3-049.jpg
https://i.postimg.cc/QdqBzFsg/hotel3-050.jpg
https://i.postimg.cc/jjdWYRdp/hotel3-051.jpg
https://i.postimg.cc/LXJnhvPv/hotel3-052.jpg
https://i.postimg.cc/j2N245Z7/hotel3-053.jpg
https://i.postimg.cc/mZFPsXBg/hotel3-054.jpg
https://i.postimg.cc/m2ft2YgN/hotel3-055.jpg
https://i.postimg.cc/WbGtDdDR/hotel3-056.jpg
https://i.postimg.cc/VkzvXzMJ/hotel3-057.jpg
https://i.postimg.cc/6pz30FLY/hotel3-058.jpg
https://i.postimg.cc/s2X20KTy/hotel3-059.jpg
https://i.postimg.cc/vmNmR9Kn/hotel3-060.jpg
https://i.postimg.cc/1tV3yXxj/hotel3-061.jpg
https://i.postimg.cc/SR0NR4kN/hotel3-062.jpg
https://i.postimg.cc/mkQZFng3/hotel3-063.jpg
https://i.postimg.cc/VsMkTJWS/hotel3-064.jpg
https://i.postimg.cc/15Q3Zyvv/hotel3-065.jpg
https://i.postimg.cc/fTfTz1FD/hotel3-066.jpg
https://i.postimg.cc/RZPSfK4Y/hotel3-067.jpg
https://i.postimg.cc/d0pJNF7m/hotel3-068.jpg
https://i.postimg.cc/mgZZt8fM/hotel3-069.jpg
https://i.postimg.cc/CKzF45Kx/hotel3-070.jpg
https://i.postimg.cc/cCTjj79y/hotel4-000.jpg
https://i.postimg.cc/ncRgGk9q/hotel4-001.jpg
https://i.postimg.cc/htNYHtrj/hotel4-002.jpg
https://i.postimg.cc/4xYML9pq/hotel4-003.jpg
https://i.postimg.cc/rpWHc2n9/hotel4-004.jpg
https://i.postimg.cc/QC64S8Cj/hotel4-005.jpg
https://i.postimg.cc/4dQF7bT7/hotel4-006.jpg
https://i.postimg.cc/1tQj37b1/hotel4-007.jpg
https://i.postimg.cc/RhCpc6MP/hotel4-008.jpg
https://i.postimg.cc/xjg49RRB/hotel4-009.jpg
https://i.postimg.cc/Gh2Stygt/hotel4-010.jpg
https://i.postimg.cc/cJQF2MC9/hotel4-011.jpg
https://i.postimg.cc/7YWt2ZjV/hotel4-012.jpg
https://i.postimg.cc/bwSCHjhj/hotel4-013.jpg
https://i.postimg.cc/vmRP0SYx/hotel4-014.jpg
https://i.postimg.cc/hjc2Bz7S/hotel4-015.jpg
https://i.postimg.cc/Pxy2rXm1/hotel4-016.jpg
https://i.postimg.cc/Gtpz4WQV/hotel4-017.jpg
https://i.postimg.cc/Wzf8g5Y3/hotel4-018.jpg
https://i.postimg.cc/kMjf05Mm/hotel4-019.jpg
https://i.postimg.cc/gkQ40B6t/hotel4-020.jpg
https://i.postimg.cc/5N6nbMjF/hotel4-021.jpg
https://i.postimg.cc/Xv08fGLw/hotel4-022.jpg
https://i.postimg.cc/BnFpPcTS/hotel4-023.jpg
https://i.postimg.cc/cJMcXxkP/hotel4-024.jpg
https://i.postimg.cc/XJjkPRTq/hotel4-025.jpg
https://i.postimg.cc/sXT4Cnrc/hotel4-026.jpg
https://i.postimg.cc/qqgXJ8Bd/hotel4-027.jpg
https://i.postimg.cc/qqYczzg6/hotel4-028.jpg
https://i.postimg.cc/Y2yzXy82/hotel4-029.jpg
https://i.postimg.cc/Fsdgwgny/hotel4-030.jpg
https://i.postimg.cc/9QyPQX2z/hotel4-031.jpg
https://i.postimg.cc/GhWJR8ZZ/hotel4-032.jpg
https://i.postimg.cc/1zPGnxRB/hotel4-033.jpg
https://i.postimg.cc/yNPF0fkH/hotel4-034.jpg
https://i.postimg.cc/3Rx21gvD/hotel4-035.jpg
https://i.postimg.cc/3RfmcdXf/hotel4-036.jpg
https://i.postimg.cc/8cFMQNwp/hotel4-037.jpg
https://i.postimg.cc/vTp9GkSW/hotel4-038.jpg
https://i.postimg.cc/y650h3Yk/hotel4-039.jpg
https://i.postimg.cc/Wbkg5phS/hotel4-040.jpg
https://i.postimg.cc/mgWMJx94/hotel4-041.jpg
https://i.postimg.cc/3xjpHLjv/hotel4-042.jpg
https://i.postimg.cc/tg2xsYMR/hotel4-043.jpg
https://i.postimg.cc/7LxzPgXQ/hotel4-044.jpg
https://i.postimg.cc/C15fkS3G/hotel4-045.jpg
https://i.postimg.cc/fLPSv1s6/hotel4-046.jpg
https://i.postimg.cc/1XNn7M54/hotel4-047.jpg
https://i.postimg.cc/z3ZLsWV7/hotel4-048.jpg
https://i.postimg.cc/fW38hNVS/hotel4-049.jpg
https://i.postimg.cc/3rPn8cGS/hotel4-050.jpg
https://images.unsplash.com/photo-1549875648-357fef68fec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80
  `;
  return data.split("\n")[index];
}

const frameCount = 222;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home4-footer>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home4-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home4-footer",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home4-footer",
  pin:true,
  start:"bottom 100%",

  
})

}

dom4footer()


// document.querySelectorAll("body")
// .forEach(function(elem){
//   elem.addEventListener("mousemove", function(dets){
//     document.querySelector("#cursor").style.top = `${dets.clientY}px`
//     document.querySelector("#cursor").style.left = `${dets.clientX}px`
//     // document.querySelector("#cursor").style.mixBlendMode = "difference"

//   })
// })

document.querySelector("body")
.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#semicircle").style.top= `${dets.clientY}px`
        document.querySelector("#semicircle").style.left= `${dets.clientX}px`
        document.querySelector("#semicircle").style.mixBlendMode= "difference"
        document.querySelector("#semicircle").style.backgroundColor= "white"
    }
    window.requestAnimationFrame(abc)
});

document.querySelectorAll("#hover-slideshow")
.forEach(function(elem){
  elem.addEventListener("mousemove", function(){
    document.querySelector("#semicircle").style.display = "none"

  })
})
document.querySelectorAll("#hover-slideshow")
.forEach(function(elem){
  elem.addEventListener("mouseout", function(){
    document.querySelector("#semicircle").style.display = "initial"

  })
})
document.querySelectorAll(".enlarge")
.forEach(function(elem){
  elem.addEventListener("mousemove", function(){
    document.querySelector("#semicircle").style.width = "3vw"
    document.querySelector("#semicircle").style.height = "3vw"
    document.querySelector("#semicircle").style.mixBlendMode= "difference"
    

  })
})
document.querySelectorAll(".enlarge")
.forEach(function(elem){
  elem.addEventListener("mouseout", function(){
    document.querySelector("#semicircle").style.width = "1vw"
    document.querySelector("#semicircle").style.height = "1vw"
    // document.querySelector("#semicircle").style.backgroundColor= "transparent"

  })
})

