const textarealEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById('total-counter')
const remainCountEl = document.getElementById('remaining-counter')

textarealEl.addEventListener("keyup",()=>{
    upDateCounter()
})
upDateCounter()
function upDateCounter() {
    totalCounterEl.innerHTML= textarealEl.value.length
    remainCountEl.innerHTML = textarealEl.getAttribute("maxLength")-textarealEl.value.length;
}