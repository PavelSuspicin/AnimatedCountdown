const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMassage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMassage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation(a)
})

function runAnimation() {
    nums.forEach((num, ind) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && ind !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMassage.classList.add('show')
            }
        })
    })
}
