const submitBtn = document.getElementById("Submit");
const rateAgain = document.getElementById("Rate-Again");
const main = document.querySelector(".main-container")
const thanQ = document.querySelector(".thankyou")
const rating = document.getElementById("rating")
const rate = document.querySelectorAll(".btn")




submitBtn.addEventListener('click', () => {
    thanQ.classList.remove("hidden")
    main.style.display = 'none'
})

rateAgain.addEventListener('click', () => {
    main.style.display = 'flex'
    thanQ.classList.toggle('hidden')
})

rate.forEach((rates) =>{
    rates.addEventListener('click', () =>{
        rating.innerHTML = rates.innerHTML
    })
})

