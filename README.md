# GreatFrontEnd - Kanban

![Screenshot]('./public/screenshot.png')


## Description
This is a Kanban board for the GrateFrontEnd Assignment. It is a simple Kanban board that allows you to create and edit tasks. It also allows you to move tasks between columns. The columns are To Do, In Progress, Testing and Done. 

I have used React.js, Redux and Tailwind CSS for developing this intutive Kanban Dashboard application.

### Here is the flow how this application works
1. User can create a task by clicking on the Add Task button.
2. Popup will appear taking inputs from the user. 
3. The user can add input like ```Task Name, Description, SubTasks and Current Status```
3. When the user clicks on submit, new task will be created with all details entered by the user.
4. User can edit a task by clicking on any of the card.
5. The user can drag tasks from one column to another using the Drag & Drop feature made with javascript.

### Here is the Proper File and Folder Structure:

```
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── SubTask.js
│   │   ├── Task.js
│   │   ├── Column.js
│   │   ├── Header.js
│   │   └── Home.js
│   ├── redux
│   │   ├── boardsSlice.js
│   │   └── store.js
│   ├── modals
│   │   ├── TaskModal.js
│   │   └── AssEditTaskModal.js
│   ├── App.js
│   ├── index.css
│   └──index.js
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```


