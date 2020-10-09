const add = document.querySelector("#add");
const subName = document.querySelector("#subject__name");
const subObtMarks = document.querySelector("#subject__omarks");

const subCredits = document.querySelector("#subject__credits");

const tbody = document.querySelector("#tbody");
const totalCredits = document.querySelector("#totalCredits");
const GPAHeading = document.querySelector("#GPA");

const table = document.querySelector("#table");

const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const screenShot = document.querySelector("#screenShot");

let arr = [];
function Print(div) {
  var printContents = document.getElementById(div).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

function addSubject() {
  if (
    subName.value == "" ||
    subObtMarks.value == "" ||
    subCredits.value == ""
  ) {
    alert("Enter all Details of Subject");
  } else {
    const tr = document.createElement("tr");

    const tdsubName = document.createElement("td");
    tdsubName.innerHTML = subName.value;

    const tdsubObtMarks = document.createElement("td");
    tdsubObtMarks.innerHTML = subObtMarks.value;

    var gpoints;
    if (subObtMarks.value >= 50 && subObtMarks.value <= 59) {
      gpoints = 6;
    } else if (subObtMarks.value >= 60 && subObtMarks.value <= 69) {
      gpoints = 7;
    } else if (subObtMarks.value >= 70 && subObtMarks.value <= 79) {
      gpoints = 8;
    } else if (subObtMarks.value >= 80 && subObtMarks.value <= 89) {
      gpoints = 9;
    } else if (subObtMarks.value >= 90 && subObtMarks.value <= 100) {
      gpoints = 10;
    } else {
      gpoints = 0;
    }
    const tdGPoints = document.createElement("td");
    tdGPoints.innerHTML = gpoints;

    const tdsubCredits = document.createElement("td");
    tdsubCredits.innerHTML = subCredits.value;
    tr.appendChild(tdsubName);
    tr.appendChild(tdsubObtMarks);
    tr.appendChild(tdGPoints);
    tr.appendChild(tdsubCredits);
    tbody.appendChild(tr);
    table.classList.remove("hide");
    calculate.classList.remove("hide");
    clear.classList.remove("hide");
    screenShot.classList.remove("hide");

    arr.push({
      subName: subName.value,
      subObtMarks: parseInt(subObtMarks.value),
      subCredits: parseInt(subCredits.value),
      gpoints: gpoints,
    });

    subName.value = "";
    subObtMarks.value = "";
    subCredits.value = "";

    console.log(arr);
  }
}
function calculator() {
  var sumofCredits = 0,
    sumofProductofCreditsAndGPoints = 0;
  arr.forEach((sub) => {
    sumofCredits += sub.subCredits;
    sumofProductofCreditsAndGPoints += sub.subCredits * sub.gpoints;
  });
  const GPA = sumofProductofCreditsAndGPoints / sumofCredits;
  totalCredits.classList.remove("hide");
  GPAHeading.classList.remove("hide");

  totalCredits.innerHTML = `Total Credits : ${sumofCredits}`;
  GPAHeading.innerHTML = `GPA : ${GPA}`;
}

function ClearAll() {
  arr = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  table.classList.add("hide");
  totalCredits.classList.add("hide");
  GPAHeading.classList.add("hide");
  calculate.classList.add("hide");
  clear.classList.add("hide");
  screenShot.classList.add("hide");
}
