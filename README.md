# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/197739101-e87776f4-7706-413d-b459-93553f9d7d91.jpg)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

Desktop-view:

![desktop-design](https://user-images.githubusercontent.com/94350356/197739272-d3591195-81e2-4e40-b43a-44c145f9a344.jpg)


Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/197739291-8785b73b-e6b0-48fb-ad43-b2682ebce1d4.jpg)


### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS Form validation

### What I learned

This was a great challenge. I learned to validate forms and it was great to practice CSS grid.

```css
main {
  width: 100%;
  display: grid;
  grid-template-rows: 6rem 15rem 26rem;
  grid-template-columns: 2rem 1fr 2rem;
  background-image: url("/assets/bg-pattern-desktop.svg");
}

figure {
  grid-row: 2/3;
  grid-column: 1/-1;
}
```

```js
function validate() {
  let str = inputEl.value;
  if (str.match(mailFormat)) {
    updateMsg(true);
  } else {
    updateMsg(false);
    showEl.forEach((element) => element.classList.add("clicked"));
    inputField.classList.add("clickedField");
  }
}
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
