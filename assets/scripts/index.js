const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi1")

spanHi.style.color = "blue"
spanHi.style.backgroundColor = "orange"