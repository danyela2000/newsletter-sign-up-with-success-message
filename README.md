# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![Desktop version](/screenshots/desktop-ss.JPG)
![Mobile version](/screenshots/mobile-ss.JPG)


### Links

- Solution URL: [https://github.com/danyela2000/newsletter-sign-up-with-success-message](https://github.com/danyela2000/newsletter-sign-up-with-success-message)
- Live Site URL: []()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Responsive design
- Vanilla JavaScript

### What I learned
- how to validate an email address introduced by the user in an input field using Regular Expressions in JavaScript

```js
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
```

### Useful resources

- [https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/](https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/) - This helped me to validate an email address input with JavaScript Regular Expressions.

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/danyela2000](https://www.frontendmentor.io/profile/danyela2000)
