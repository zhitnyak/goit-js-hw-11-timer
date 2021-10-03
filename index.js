const currentDays = document.querySelector('[data-value="days"]');
const currentHours = document.querySelector('[data-value="hours"]');
const currentMins = document.querySelector('[data-value="mins"]');
const currentSecs = document.querySelector('[data-value="secs"]');
const clockFace = document.querySelector(".timer");

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const DeltaTime = currentTime - this.targetDate;
      const { days, hours, mins, secs } = this.getTimeComponents(DeltaTime);
      this.updateClockFace({ days, hours, mins, secs });
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }

  updateClockFace({ days, hours, mins, secs }) {
    currentDays.textContent = `${days}`;
    currentHours.textContent = `${hours}`;
    currentMins.textContent = `${mins}`;
    currentSecs.textContent = `${secs}`;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
