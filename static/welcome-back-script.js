// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleWindowResize)

const spansSlow = document.getElementsByClassName('spanSlow')
const spansFast = document.getElementsByClassName('spanFast')

let width = window.innerWidth

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width / 2) - 1
  let speedSlow = 100 * normalizedPosition
  let speedFast = 200 * normalizedPosition
  for (let i = 0; i < spansSlow.length; i++) {
    spansSlow[i].style.transform = `translate(${speedSlow}px)`
  }

  for (let i = 0; i < spansFast.length; i++) {
    spansFast[i].style.transform = `translate(${speedFast}px)`
  }
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth
}

let broadstreetScript = document.createElement('script')
broadstreetScript.src = 'https://cdn.broadstreetads.com/init-2.min.js' // URL for the third-party library being loaded.
document.body.appendChild(broadstreetScript)

window.broadstreet = window.broadstreet || { run: [] }
window.broadstreet.run.push(function () {
  broadstreet.watch({ networkId: 5889 })
})
