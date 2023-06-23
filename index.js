const selectEl = (classEl) => document.querySelector(classEl)
const form = selectEl(".form")  
const formInput = selectEl(".email-input")  
const subscribeBtn = selectEl(".subscribe-btn")
const dismissBtn = selectEl(".dismiss-btn")
const mainContainer = selectEl(".main-container")
const succesContainer = selectEl(".succes-container")


form.addEventListener("submit", event => {
  event.preventDefault()
  emailValidation(formInput.value) 
})

dismissBtn.addEventListener("click", () => {
  setTimeout(() => {
    displayContainers("flex","none")
    formInput.classList.remove("invalid-email")
    form.reset()
  }, 1300)
})

function emailValidation(userEmail) {
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  
  if(userEmail && regex.test(userEmail)) {
    setTimeout(() => {
      displayContainers("none","flex")
    }, 1300)

    selectEl(".validation-text").textContent = ``
    renderMessage(userEmail)
  } 
  else {
    selectEl(".validation-text").textContent = `Valid email required`
    formInput.classList.add("invalid-email")
  } 
  
}

function displayContainers(mainDisplay, succesDisplay) {
  mainContainer.style.display = mainDisplay
  succesContainer.style.display = succesDisplay
}

function renderMessage(userEmail) {
  selectEl(".user-address").textContent = userEmail
}



