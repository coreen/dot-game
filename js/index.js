const DOT_INTERVAL = 1000
const MAX_HEIGHT = 500
const MAX_WIDTH = 300

let points = 0
let pointLabel = document.getElementById('points')
pointLabel.innerHTML = points

let gameArea = document.getElementById('game-area')
setInterval(() => {
	// add new Dot
	gameArea.appendChild(newDot())
}, DOT_INTERVAL)

let slider = document.getElementById('slider')
let speed = parseInt(slider.value)
slider.onchange = () => {
	speed = parseInt(slider.value)
}

function newDot() {
	let dot = document.createElement('div')
	dot.classList.add('dot')

	// random dot size between 10 and 100
	let dotSize = Math.floor(Math.random() * 90) + 10
	dot.style.width = dotSize + 'px'
	dot.style.height = dotSize + 'px'

	let leftVal = Math.floor(Math.random() * (MAX_WIDTH - dotSize))
	dot.style.left = leftVal + 'px'
	dot.style.top = '0px'

	let falling = setInterval(() => {
		let topVal = parseInt(dot.style.top, 10) + speed
		if (topVal > MAX_HEIGHT - dotSize) {
			dot.remove()
			clearInterval(falling)
		} else {
			dot.style.top = topVal + 'px'
		}
	}, DOT_INTERVAL)

	dot.onclick = () => {
		dot.remove()
		clearInterval(falling)

		// record points
		points += pointsEarned(dotSize)
		pointLabel.innerHTML = points

		setTimeout(() => {
			gameArea.appendChild(newDot())
		}, DOT_INTERVAL)
	}

	return dot;
}

function pointsEarned(dotSize) {
	// JS math creates floats automatically
	return Math.floor((100 - dotSize) / 10) + 1
}
