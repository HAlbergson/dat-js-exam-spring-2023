"use strict";

window.addEventListener("load", initApp);

let students = [];

async function initApp() {
  console.log("hallo world");
  students = await getStudents();
  console.log(students);
  sortBySemester();
  showStudents();
}

async function getStudents() {
  const response = await fetch("students.json");
  const data = response.json();
  return data;
}

function showStudents() {
  document.querySelector("#students-list").innerHTML = "";
  for (const student of students) {
    const html = /*html*/ `
        <li>${student.name} ${student.mail} ${student.semester}</li>`;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortBySemester() {
  students.sort((student1, student2) => student1.semester - student2.semester);
}
