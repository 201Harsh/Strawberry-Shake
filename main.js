var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.page3',
    start: 'top top',
    end: '100% top',
    scrub: 3,
    pin: true,
    scroller: '.main'
  }
})

tl.to(
  '.top',
  {
    top: '-50%',
    ease: 'power2.inOut',
    opacity: 0
  },
  'a'
)
tl.to(
  '.bottom',
  {
    bottom: '-50%',
    ease: 'power2.inOut',
    opacity: 0
  },
  'a'
)

tl.to(
  '.h-top',
  {
    top: '70%'
  },
  'a'
)

tl.to(
  '.h-bottom',
  {
    top: '70%'
  },
  'a'
)

Shery.imageEffect('.img', {
  style: 2,
  config: {
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -3 },
    mousemove: { value: 0 },
    modeA: { value: 1 },
    modeN: { value: 1 },
    speed: { value: 3.51, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 0.5, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 13196744 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 4.81, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.18, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: 8, range: [-100, 100] },
    zindex: { value: '1', range: [-9999999, 9999999] },
    aspect: { value: 0.8688517639077341 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.09, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] }
  }
})

Shery.imageEffect('.con1', {
  style: 5,
  gooey: true,
  config: {
    a: { value: 0.23, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: '1', range: [-9999999, 9999999] },
    aspect: { value: 1.9308005427408412 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 7.95, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.04, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1.06, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 5.19, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 16 } },
    discard_threshold: { value: 0.53, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.37, range: [0, 2] },
    noise_scale: { value: 18.32, range: [0, 100] }
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  }
})

if (window.innerWidth < 838) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
  })
}

if (window.innerWidth < 498) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  })
}

gsap.from('.hero h1', {
  scrollTrigger: {
    trigger: '.page4',
    start: 'top top',
    end: '100% top',
    pin: true,
    scroller: '.main',
    scrub: 4
  },
  opacity: 0,
  scale: 2.5,
  stagger: 0.1,
  duration: 0.4,
  y: 300,
  x: 400,
  ease: 'back.out(1.8)'
})
