//Getting the references to the DOM elements
const body = document.querySelector("body"),
   hourHand = document.querySelector(".hour"),
   minuteHand = document.querySelector(".minute"),
   secondHand = document.querySelector(".second"),
   modeSwitch = document.querySelector(".mode-switch");

   const updateTime = () => {
    // Get current time and calculate degrees for clock hands
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
   };