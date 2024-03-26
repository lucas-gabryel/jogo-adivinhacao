let screenOne = document.querySelector(".screenOne")
let screenTwo = document.querySelector(".screenTwo")

let drawn =  Math.round(Math.random() * 10)
let time = 1

function handleClick(event) {
event.preventDefault()

const inputNumber = document.querySelector("#inputNumber")

if (Number(inputNumber.value) == drawn) {
    screenOne.classList.add("delete")
    screenTwo.classList.remove("delete")

    if (time == 1) {
        document.querySelector(".screenTwo h2").innerText = `Você acertou em ${time} tentativa!`
    } else {
        document.querySelector(".screenTwo h2").innerText = `Você acertou em ${time} tentativas!`
    }
}

time++
document.querySelector("input").value = ""
}

let bntTry = document.querySelector("#bntTry")
let bntAgain = document.querySelector("#bntAgain")

bntTry.addEventListener("click", handleClick)
bntAgain.addEventListener("click", function() {
    screenOne.classList.remove("delete")
    screenTwo.classList.add("delete")
    time = 1
    drawn =  Math.round(Math.random() * 10)
})