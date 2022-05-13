const counter = document.querySelector('.counter')
const numbers = document.querySelectorAll('.numbers span')
const finalMessage = document.querySelector('.final')
const replayBtn = document.querySelector('#replay')

runAnimation()

function runAnimation() {
    numbers.forEach((number, ind) => {
        const amount = numbers.length - 1

        number.addEventListener('animationend', (event) => {
            if (event.animationName === 'goIn' && ind !== amount) {
                number.classList.remove('in')
                number.classList.add('out')
            } else if (event.animationName === 'goOut' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('in')
            } else {
                finalMessage.classList.add('show')
                counter.classList.add('hide')
            }
        })
    })
}

function reset() {
    finalMessage.classList.remove('show')
    counter.classList.remove('hide')

    numbers.forEach((number) => {
        number.classList.value = ''
    })
    numbers[0].classList.add('in')
}

replayBtn.addEventListener('click', () => {
    reset()
    runAnimation()
})
