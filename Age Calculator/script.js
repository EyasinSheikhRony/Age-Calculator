let toDayDate = document.querySelector(".toDayDate");
let chkBtn = document.getElementById("chkBtn");
let showdob = document.querySelector(".showdob");

let newDate = new Date();
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let to_day = `Today : ${day}/${month}/${year}`;
toDayDate.innerHTML = to_day;

chkBtn.addEventListener("click", () => {
  let days = document.getElementById("days").value;
  let months = document.getElementById("months").value;
  let years = document.getElementById("years").value;

  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let months2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (days > day) {
    day = day + months2[month - 1];
    month = month - 1;
  }

  if (months > month) {
    month = month + 12;
    year = year - 1;
  }

  var d = day - days;
  var m = month - months;
  var y = year - years;

  showdob.innerHTML = `Your age is : ${y} Years ${m} Months ${d} Days.`;
});
