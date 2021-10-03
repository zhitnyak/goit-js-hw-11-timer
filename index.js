const currentDays = document.querySelector('[data-value="days"]');
const currentHours = document.querySelector('[data-value="hours"]');
const currentMins = document.querySelector('[data-value="mins"]');
const currentSecs = document.querySelector('[data-value="secs"]');
const clockFace = document.querySelector(".timer");

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      // const time = currentTime - startTime;
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      updateClockFace(time);
    }, 1000);
    console.log(startTime);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateClockFace({ days, hours, mins, secs }) {
  currentDays.textContent = `${days}`;
  currentHours.textContent = `${hours}`;
  currentMins.textContent = `${mins}`;
  currentSecs.textContent = `${secs}`;
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
// // Класс
// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.timerId = null;
//     this.selector = selector;
//     console.log(selector);
//     this.targetDate = targetDate;

//     this.start();
//   }

//   getRefs() {
//     return {
//       days: document.querySelector(`${this.selector} [data-value="days"]`),
//       hours: document.querySelector(`${this.selector} [data-value="hours"]`),
//       mins: document.querySelector(`${this.selector} [data-value="mins"]`),
//       secs: document.querySelector(`${this.selector} [data-value="secs"]`),
//     };
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }

//   start() {
//     this.timerId = setInterval(() => {
//       const time = this.targetDate - Date.now();
//       const { days, hours, mins, secs } = this.getRefs();

//       days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

//       hours.textContent = this.pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );

//       mins.textContent = this.pad(
//         Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
//       );

//       secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     }, 1000);
//   }
// }

// Экземпляр
const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
