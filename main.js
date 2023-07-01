const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const n = document.querySelector('.num')

function inputValid (input) {
    try {
        let a
        if (+input.value.trim() / 1) {
            a = input.value.trim().slice(0, 4)
            n.innerText = `Your number: ${a}\n`
            return a
        }
        throw new Error(n.innerText = `"${input.value}" is not a number`)
    }
    catch (e) {
        throw new Error(n.innerText = e)
    }
}

function minNum (x) {
    try {
        let min = x.split('').sort((a, b) => a - b)
        return min.join('')
    } catch (e) {
        throw new Error(n.innerText = e)
    }
}
function maxNum (x) {
    try {
        let max = x.split('').sort((a, b) => b - a)
        return max.join('')
    }
    catch (e) {
        throw new Error(n.innerText = e)
    }
}

function calc (num1, num2, step = 0) {
    let count = step
    if (+num2 - +num1 === 6174) {
        count++
        return output.innerText += `${count}. ${num2} - ${num1} = 6174`
    }
    count++
    output.innerText += `${count}. ${num2} - ${num1} = ${+num2 - +num1}\n`
    calc(minNum(String(+num2 - +num1)), maxNum(String(+num2 - +num1)), count)
}

btn.addEventListener('click', () => {
    output.innerText = ''
    calc(minNum(inputValid(input)), maxNum(inputValid(input)))
    input.value = ''
})