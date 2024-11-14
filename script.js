const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  render()
})
function files (index) {
  var data = `
  stra/Strawberry Milkshake (CGI Animation)_000.jpg
  stra/Strawberry Milkshake (CGI Animation)_001.jpg
  stra/Strawberry Milkshake (CGI Animation)_002.jpg
  stra/Strawberry Milkshake (CGI Animation)_003.jpg
  stra/Strawberry Milkshake (CGI Animation)_004.jpg
  stra/Strawberry Milkshake (CGI Animation)_005.jpg
  stra/Strawberry Milkshake (CGI Animation)_006.jpg
  stra/Strawberry Milkshake (CGI Animation)_007.jpg
  stra/Strawberry Milkshake (CGI Animation)_008.jpg
  stra/Strawberry Milkshake (CGI Animation)_009.jpg
  stra/Strawberry Milkshake (CGI Animation)_010.jpg
  stra/Strawberry Milkshake (CGI Animation)_011.jpg
  stra/Strawberry Milkshake (CGI Animation)_012.jpg
  stra/Strawberry Milkshake (CGI Animation)_013.jpg
  stra/Strawberry Milkshake (CGI Animation)_014.jpg
  stra/Strawberry Milkshake (CGI Animation)_015.jpg
  stra/Strawberry Milkshake (CGI Animation)_016.jpg
  stra/Strawberry Milkshake (CGI Animation)_017.jpg
  stra/Strawberry Milkshake (CGI Animation)_018.jpg
  stra/Strawberry Milkshake (CGI Animation)_019.jpg
  stra/Strawberry Milkshake (CGI Animation)_020.jpg
  stra/Strawberry Milkshake (CGI Animation)_021.jpg
  stra/Strawberry Milkshake (CGI Animation)_022.jpg
  stra/Strawberry Milkshake (CGI Animation)_023.jpg
  stra/Strawberry Milkshake (CGI Animation)_024.jpg
  stra/Strawberry Milkshake (CGI Animation)_025.jpg
  stra/Strawberry Milkshake (CGI Animation)_026.jpg
  stra/Strawberry Milkshake (CGI Animation)_027.jpg
  stra/Strawberry Milkshake (CGI Animation)_028.jpg
  stra/Strawberry Milkshake (CGI Animation)_029.jpg
  stra/Strawberry Milkshake (CGI Animation)_030.jpg
  stra/Strawberry Milkshake (CGI Animation)_031.jpg
  stra/Strawberry Milkshake (CGI Animation)_032.jpg
  stra/Strawberry Milkshake (CGI Animation)_033.jpg
  stra/Strawberry Milkshake (CGI Animation)_034.jpg
  stra/Strawberry Milkshake (CGI Animation)_035.jpg
  stra/Strawberry Milkshake (CGI Animation)_036.jpg
  stra/Strawberry Milkshake (CGI Animation)_037.jpg
  stra/Strawberry Milkshake (CGI Animation)_038.jpg
  stra/Strawberry Milkshake (CGI Animation)_039.jpg
  stra/Strawberry Milkshake (CGI Animation)_040.jpg
  stra/Strawberry Milkshake (CGI Animation)_041.jpg
  stra/Strawberry Milkshake (CGI Animation)_042.jpg
  stra/Strawberry Milkshake (CGI Animation)_043.jpg
  stra/Strawberry Milkshake (CGI Animation)_044.jpg
  stra/Strawberry Milkshake (CGI Animation)_045.jpg
  stra/Strawberry Milkshake (CGI Animation)_046.jpg
  stra/Strawberry Milkshake (CGI Animation)_047.jpg
  stra/Strawberry Milkshake (CGI Animation)_048.jpg
  stra/Strawberry Milkshake (CGI Animation)_049.jpg
  stra/Strawberry Milkshake (CGI Animation)_050.jpg
  stra/Strawberry Milkshake (CGI Animation)_051.jpg
  stra/Strawberry Milkshake (CGI Animation)_052.jpg
  stra/Strawberry Milkshake (CGI Animation)_053.jpg
  stra/Strawberry Milkshake (CGI Animation)_054.jpg
  stra/Strawberry Milkshake (CGI Animation)_055.jpg
  stra/Strawberry Milkshake (CGI Animation)_056.jpg
  stra/Strawberry Milkshake (CGI Animation)_057.jpg
  stra/Strawberry Milkshake (CGI Animation)_058.jpg
  stra/Strawberry Milkshake (CGI Animation)_059.jpg
  stra/Strawberry Milkshake (CGI Animation)_060.jpg
  stra/Strawberry Milkshake (CGI Animation)_061.jpg
  stra/Strawberry Milkshake (CGI Animation)_062.jpg
  stra/Strawberry Milkshake (CGI Animation)_063.jpg
  stra/Strawberry Milkshake (CGI Animation)_064.jpg
  stra/Strawberry Milkshake (CGI Animation)_065.jpg
  stra/Strawberry Milkshake (CGI Animation)_066.jpg
  stra/Strawberry Milkshake (CGI Animation)_067.jpg
  stra/Strawberry Milkshake (CGI Animation)_068.jpg
  stra/Strawberry Milkshake (CGI Animation)_069.jpg
  stra/Strawberry Milkshake (CGI Animation)_070.jpg
  stra/Strawberry Milkshake (CGI Animation)_071.jpg
  stra/Strawberry Milkshake (CGI Animation)_072.jpg
  stra/Strawberry Milkshake (CGI Animation)_073.jpg
  stra/Strawberry Milkshake (CGI Animation)_074.jpg
  stra/Strawberry Milkshake (CGI Animation)_075.jpg
  stra/Strawberry Milkshake (CGI Animation)_076.jpg
  stra/Strawberry Milkshake (CGI Animation)_077.jpg
  stra/Strawberry Milkshake (CGI Animation)_078.jpg
  stra/Strawberry Milkshake (CGI Animation)_079.jpg
  stra/Strawberry Milkshake (CGI Animation)_080.jpg
  stra/Strawberry Milkshake (CGI Animation)_081.jpg
  stra/Strawberry Milkshake (CGI Animation)_082.jpg
  stra/Strawberry Milkshake (CGI Animation)_083.jpg
  stra/Strawberry Milkshake (CGI Animation)_084.jpg
  stra/Strawberry Milkshake (CGI Animation)_085.jpg
  stra/Strawberry Milkshake (CGI Animation)_086.jpg
  stra/Strawberry Milkshake (CGI Animation)_087.jpg
  stra/Strawberry Milkshake (CGI Animation)_088.jpg
  stra/Strawberry Milkshake (CGI Animation)_089.jpg
  stra/Strawberry Milkshake (CGI Animation)_090.jpg
  stra/Strawberry Milkshake (CGI Animation)_091.jpg
  stra/Strawberry Milkshake (CGI Animation)_092.jpg
  stra/Strawberry Milkshake (CGI Animation)_093.jpg
  stra/Strawberry Milkshake (CGI Animation)_094.jpg
  stra/Strawberry Milkshake (CGI Animation)_095.jpg
  stra/Strawberry Milkshake (CGI Animation)_096.jpg
  stra/Strawberry Milkshake (CGI Animation)_097.jpg
  stra/Strawberry Milkshake (CGI Animation)_098.jpg
  stra/Strawberry Milkshake (CGI Animation)_099.jpg
  stra/Strawberry Milkshake (CGI Animation)_100.jpg
  stra/Strawberry Milkshake (CGI Animation)_101.jpg
  stra/Strawberry Milkshake (CGI Animation)_102.jpg
  stra/Strawberry Milkshake (CGI Animation)_103.jpg
  stra/Strawberry Milkshake (CGI Animation)_104.jpg
  stra/Strawberry Milkshake (CGI Animation)_105.jpg
  stra/Strawberry Milkshake (CGI Animation)_106.jpg
  stra/Strawberry Milkshake (CGI Animation)_107.jpg
  stra/Strawberry Milkshake (CGI Animation)_108.jpg
  stra/Strawberry Milkshake (CGI Animation)_109.jpg
  stra/Strawberry Milkshake (CGI Animation)_110.jpg
  stra/Strawberry Milkshake (CGI Animation)_111.jpg
  stra/Strawberry Milkshake (CGI Animation)_112.jpg
  stra/Strawberry Milkshake (CGI Animation)_113.jpg
  stra/Strawberry Milkshake (CGI Animation)_114.jpg
  stra/Strawberry Milkshake (CGI Animation)_115.jpg
  stra/Strawberry Milkshake (CGI Animation)_116.jpg
  stra/Strawberry Milkshake (CGI Animation)_117.jpg
  stra/Strawberry Milkshake (CGI Animation)_118.jpg
  stra/Strawberry Milkshake (CGI Animation)_119.jpg
  stra/Strawberry Milkshake (CGI Animation)_120.jpg
  stra/Strawberry Milkshake (CGI Animation)_121.jpg
  stra/Strawberry Milkshake (CGI Animation)_122.jpg
  stra/Strawberry Milkshake (CGI Animation)_123.jpg
  stra/Strawberry Milkshake (CGI Animation)_124.jpg
  stra/Strawberry Milkshake (CGI Animation)_125.jpg
  stra/Strawberry Milkshake (CGI Animation)_126.jpg
  stra/Strawberry Milkshake (CGI Animation)_127.jpg
  stra/Strawberry Milkshake (CGI Animation)_128.jpg
  stra/Strawberry Milkshake (CGI Animation)_129.jpg
  stra/Strawberry Milkshake (CGI Animation)_130.jpg
  stra/Strawberry Milkshake (CGI Animation)_131.jpg
  stra/Strawberry Milkshake (CGI Animation)_132.jpg
  stra/Strawberry Milkshake (CGI Animation)_133.jpg
  stra/Strawberry Milkshake (CGI Animation)_134.jpg
  stra/Strawberry Milkshake (CGI Animation)_135.jpg
  stra/Strawberry Milkshake (CGI Animation)_136.jpg
  stra/Strawberry Milkshake (CGI Animation)_137.jpg
  stra/Strawberry Milkshake (CGI Animation)_138.jpg
  stra/Strawberry Milkshake (CGI Animation)_139.jpg
  stra/Strawberry Milkshake (CGI Animation)_140.jpg
  stra/Strawberry Milkshake (CGI Animation)_141.jpg
  stra/Strawberry Milkshake (CGI Animation)_142.jpg
  stra/Strawberry Milkshake (CGI Animation)_143.jpg
  stra/Strawberry Milkshake (CGI Animation)_144.jpg
  stra/Strawberry Milkshake (CGI Animation)_145.jpg
  stra/Strawberry Milkshake (CGI Animation)_146.jpg
  stra/Strawberry Milkshake (CGI Animation)_147.jpg
  stra/Strawberry Milkshake (CGI Animation)_148.jpg
  stra/Strawberry Milkshake (CGI Animation)_149.jpg
  stra/Strawberry Milkshake (CGI Animation)_150.jpg
  stra/Strawberry Milkshake (CGI Animation)_151.jpg
  stra/Strawberry Milkshake (CGI Animation)_152.jpg
  stra/Strawberry Milkshake (CGI Animation)_153.jpg
  stra/Strawberry Milkshake (CGI Animation)_154.jpg
  stra/Strawberry Milkshake (CGI Animation)_155.jpg
  stra/Strawberry Milkshake (CGI Animation)_156.jpg
  stra/Strawberry Milkshake (CGI Animation)_157.jpg
  stra/Strawberry Milkshake (CGI Animation)_158.jpg
  stra/Strawberry Milkshake (CGI Animation)_159.jpg
  stra/Strawberry Milkshake (CGI Animation)_160.jpg
  stra/Strawberry Milkshake (CGI Animation)_161.jpg
  stra/Strawberry Milkshake (CGI Animation)_162.jpg
  stra/Strawberry Milkshake (CGI Animation)_163.jpg
  stra/Strawberry Milkshake (CGI Animation)_164.jpg
  stra/Strawberry Milkshake (CGI Animation)_165.jpg
  stra/Strawberry Milkshake (CGI Animation)_166.jpg
  stra/Strawberry Milkshake (CGI Animation)_167.jpg
  stra/Strawberry Milkshake (CGI Animation)_168.jpg
  stra/Strawberry Milkshake (CGI Animation)_169.jpg
  stra/Strawberry Milkshake (CGI Animation)_170.jpg
  stra/Strawberry Milkshake (CGI Animation)_171.jpg
  stra/Strawberry Milkshake (CGI Animation)_172.jpg
  stra/Strawberry Milkshake (CGI Animation)_173.jpg
  stra/Strawberry Milkshake (CGI Animation)_174.jpg
  stra/Strawberry Milkshake (CGI Animation)_175.jpg
  stra/Strawberry Milkshake (CGI Animation)_176.jpg
  stra/Strawberry Milkshake (CGI Animation)_177.jpg
  stra/Strawberry Milkshake (CGI Animation)_178.jpg
  stra/Strawberry Milkshake (CGI Animation)_179.jpg
  `
  return data.split('\n')[index]
}
const frameCount = 180
const images = []
const imageSeq = {
  frame: 1
}
for (let i = 0; i < frameCount; i++) {
  const img = new Image()
  img.src = files(i)
  images.push(img)
}
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    scrub: 0.15,
    trigger: '.page2',
    start: 'top top',
    end: '600% top',
    scroller: '.main'
  },
  onUpdate: render
})
images[1].onload = render
function render () {
  scaleImage(images[imageSeq.frame], context)
}
function scaleImage (img, ctx) {
  var canvas = ctx.canvas
  var hRatio = canvas.width / img.width
  var vRatio = canvas.height / img.height
  var ratio = Math.max(hRatio, vRatio)
  var centerShift_x = (canvas.width - img.width * ratio) / 2
  var centerShift_y = (canvas.height - img.height * ratio) / 2
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  )
}
ScrollTrigger.create({
  trigger: '.page2',
  pin: true,
  scroller: '.main',
  start: 'top top',
  end: '600% top'
})


