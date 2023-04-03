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
      console.log(student);
      // check if an entry with student's info is in the array don't push it
      studentsArray.push(student);
      addStudentToList()
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

function addStudentToList()
{

}