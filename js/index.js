// initialize a new TaskManager with currentId set to 0
const TaskMgr = new TaskManager();
// load tasks to page
TaskMgr.load();
// render tasks to page
TaskMgr.render();
//* Date of Entry as Start Date *
const date= document.querySelector('#lastsaved');
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
date.value= new Date().toLocaleDateString('en-AU', options)

//Task Due date input
const taskDueDate = document.querySelector('#taskDuedate');
taskDueDate.min = new Date().toISOString().split("T")[0];

function myFunction() {
let x = document.createElement("input");
x.setAttribute("type", "date");
x.setAttribute("value", taskDueDate);
document.body.appendChild(x);
}

// inputs
const taskname = document.querySelector('#taskname');
const taskDescr = document.querySelector('#taskDescr');
const taskAssignedTo = document.querySelector('#taskAssignedTo');
const emailAssignee = document.querySelector('#emailAssignee')
const taskStatus = document.querySelector('#status')
const taskCategory = document.querySelector('#category')

 // create a checkForm function to validate fields in the form
    let checkForm = function(e) {
      let taskform = e.target;
       if (taskform.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }; 
  //Taskname should be empty and longer than 8 characters
  if (taskname.value.trim().length >= 8) {
    taskname.classList.add("is-valid");
    taskname.classList.remove("is-invalid");

  } else {
    taskname.classList.add("is-invalid");
    taskname.classList.remove("is-valid");
  };

  // description should not be empty and longer than 15 characters
    if (taskDescr.value.trim().length >= 15) {
      taskDescr.classList.add("is-valid");
      taskDescr.classList.remove("is-invalid");
     
    } else {
      taskDescr.classList.add("is-invalid");
      taskDescr.classList.remove("is-valid");
    };


    // taskDueDate: calendar preset to choose from/after today's date, if nothing is choosen, show error messgae  
 
  let today = new Date().setUTCHours(0,0,0,0);
  let pickedDate = new Date (taskDueDate.value).setUTCHours(0,0,0,0);

    // let year = today.getFullYear();
  // while (year <= pickedDate[2]) {
    if (pickedDate >= today) {
    taskDueDate.classList.add("is-valid");
    taskDueDate.classList.remove("is-invalid");
      }
      else
      {      
    taskDueDate.classList.add("is-invalid");
    taskDueDate.classList.remove("is-valid");
      }                
// }

   // assigned to should not be empty and longer than 8 characters
  if (taskAssignedTo.value.length >= 8) {
    taskAssignedTo.classList.add("is-valid");
    taskAssignedTo.classList.remove("is-invalid");
    
  } else {
    taskAssignedTo.classList.add("is-invalid");
    taskAssignedTo.classList.remove("is-valid");
  };


//  email address is optional, but if not empty, needs to be valid
const emailAssignee = document.querySelector('#emailAssignee')
const emailAddress = emailAssignee.value;
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

if (emailAddress.match(pattern)) {
    emailAssignee.classList.add("is-valid");
    emailAssignee.classList.remove("is-invalid");
   }
   else if(emailAddress.trim() =="") {
    emailAssignee.classList.remove("is-valid");
    emailAssignee.classList.remove("is-invalid");
   }
   else
   {
   emailAssignee.classList.remove("is-valid");
   emailAssignee.classList.add("is-invalid");
    }       

  }
document.querySelector("#newTaskForm").addEventListener("keyup", checkForm); 

console.warn(`added new task, Id: ${TaskMgr.currentId}`);

const form1= document.querySelector('#newTaskForm');
form1.addEventListener('submit', (e)=>{
  // prevent default action firing
  e.preventDefault();
  const taskName = taskname.value;
  const description = taskDescr.value;
  const assignedTo = taskAssignedTo.value;
  const dueDate = taskDueDate.value;
  const emailAddress = emailAssignee.value;
  const status= taskStatus.value;
  const category = taskCategory.value
  
     // add entered task form data to taskmanager
   TaskMgr.addTask(taskName, description, assignedTo, dueDate);
   console.log(TaskMgr);
   // save the task to localStorage
  TaskMgr.save();
  // Render the tasks
  TaskMgr.render();
 
 
 // The Code below clears the form and localstorage 


  taskname.value = '';
  taskDueDate.value = '';
  taskDescr.value = '';
  taskAssignedTo.value = '';
  emailAssignee.value = '';
  taskStatus.value = '';
  taskCategory.value = '';
});

// // Select the Tasks List
const tasksList = document.querySelector('#tasksList');
  
// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener("click", (e) => {
  // Check if a "Mark As Done" button was clicked
  if (e.target.classList.contains("done-button")) {
    // Get the parent Task
    const parentTask = e.target.parentElement.parentElement;
    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);
    // Get the task from the TaskManager using the taskId
    const task = TaskMgr.getTaskById(taskId);
   // Update the task status to 'DONE'
    task.status = "DONE";
    console.log(task.status);

     // save the task to localStorage
  TaskMgr.save();
  // render tasks
  TaskMgr.render();
  }


// check if "Delete" button was clicked
if (e.target.classList.contains("delete-button")) {
  // get parent task
  const parentTask = e.target.parentElement.parentElement;
  // get taskId of parent task
  const taskId = Number(parentTask.dataset.taskId);
  // delete the task
  TaskMgr.deleteTask(taskId);
  // save the task to localStorage
  TaskMgr.save();
  // render tasks
  TaskMgr.render();
}
});

