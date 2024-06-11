const countTo = "1 Jan 2025";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];


  const daeys = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

const d = new Date,
      m = new Date;
  let month = months[d.getMonth()];
  let Days = daeys[m.getDay()];

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const countDownDays = document.querySelector(".days");
  const countDownTimes = document.querySelector(".times");
  const countDownnMonth = document.querySelector(".month")
  const countDownOjo = document.querySelector(".Day")

  countDownDays.innerHTML = `${setFormat(days)} Days`;
  countDownnMonth.innerHTML = `${setFormat(month)}`;
  countDownOjo.innerHTML = `${setFormat(Days)}`
  countDownTimes.innerHTML = `${setFormat(hours)} : ${setFormat(
    minutes



  )} : ${setFormat(seconds)}`;

  if (totalSeconds < 0) {
    clearInterval(c);
    countDownDays.textContent = "Happy New Year.";
  }
}, 1000);

const setFormat = (t) => {
  return t < 10 ? `0${t}` : t;
};