# app1 - To Do List using javascript, html, css, bootstrap

#The Setup
In this step, we'll re-organise our folder structure in preparation for the next few steps.

Create a js folder with index.js and taskManager.js files
Update the <script> tag in your html file to use the new location of the js/index.js file.

Create a taskManager.js file in the js folder
Add a <script> tag pointing to the js/taskManager.js file before the <script> tag pointing to the js/index.js file.

Create a TaskManager class in js/taskManager.js  it will be responsible for managing the tasks in the application.
Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.

##Adding A New Task Programmatically

##Adding Tasks With The Form

Expected Results:
Test out your code by adding some tasks using the New Task form, and checking the TaskManager instance's tasks array for the tasks.

# Display Tasks

##Using Javascript to Create the Task HTML / dislay the TaskManager's tasks array on the page.

## creating a new method on our TaskManager class called render.

## call the render
In js/index.js, in the event listener for the submit even on the New Task form, find the call to the TaskManager's addTask.
After addTask is called, call the TaskManager's render method.

Expected Results:
Go ahead and open index.html in the browser and add some tasks using the form. You should see each new task populate the task list!

#Update a Task

##Adding the "Mark As Done" button

##Adding an Event Listener to the Task List

##Adding the Task id to the DOM

##Adding getTaskById to the TaskManager class

## Update the status of the selected Task to 'DONE'

## Optional: Hiding the "Mark As Done" Button For Completed Tasks

## Optional: Change the Styling of the Task Status.

Expected Results: 
Open up index.html and add a task. Now we should we able to click the "Mark As Done" button below each task, to change the status from "TODO" to "DONE".

