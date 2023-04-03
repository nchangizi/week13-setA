let studentsArray = [];
//1. find element
const bodyRef = document.body;
//2. function to repsond to event
function clickHandler(event) {
  if (event.target.tagName === "BUTTON") {
    // how do I find which button was clicked?
    if (event.target.textContent === "Submit") {
      //submit was pressed
      const firstNameInput = document.querySelector("#firstname");
      const lastNameInput = document.querySelector("#lastname");
      const progNameInput = document.querySelector("#progname");
      let student = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        progName: progNameInput.value,
      };
      // check if an entry with student's info is in the array don't push it
      let studentExists = false;
      for (let item of studentsArray) {
        if (
          item.firstName === student.firstName &&
          item.lastName === student.lastName &&
          item.progName === student.progName
        ) {
          alert("The student already exists");
          studentExists = true;
          break;
        }
      }
      if (studentExists === false) {
        studentsArray.push(student);
      }

      addStudentToList(student);
      firstNameInput.value = "";
      lastNameInput.value = "";
      progNameInput.value = "";
    } else if (event.target.id === "bgBtn") {
      //background button was clicked
    }
  }
}
//3.addeventlistneer
bodyRef.addEventListener("click", clickHandler);

function addStudentToList(newStudent) {
  console.log(newStudent);
  //create an li
  const newLi = document.createElement("li");
  //select the two uls using id
  const citList = document.querySelector("#CIT");
  const cstList = document.querySelector("#CST");
  //update the textContent of the li using student's firstName and lastName
  newLi.textContent = `${newStudent.firstName} ${newStudent.lastName}`;
  //using student's progName decide which ul to append the li to
  if (newStudent.progName === "CIT") {
    //program is CIT
    citList.appendChild(newLi);
  } else if (newStudent.progName === "CST") {
    //progName is CST
    cstList.appendChild(newLi);
  }
}
