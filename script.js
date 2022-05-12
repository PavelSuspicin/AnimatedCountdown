const counter = document.querySelector('.counter')
const numbers = document.querySelectorAll('.numbers span')
const finalMassage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function runAnimation() {
    numbers.forEach((number, ind) => {
        const lastNumber = numbers.length - 1

        number.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && ind !== lastNumber) {
                number.classList.remove('in')
                number.classList.add('out')
            } else if (e.animationName === 'goOut' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMassage.classList.add('show')
            }
        })
    })
}

function resetDOM() {
    counter.classList.remove('hide')
    finalMassage.classList.remove('show')

    numbers.forEach((number) => {
        number.classList.value = ''
    })

    numbers[0].classList.add('in')
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})
