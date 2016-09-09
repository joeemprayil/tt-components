var wrTodoList = [
  {
    name: "Barsh Adar",
    description: "Architect everything"
  },
  {
    name: "Wandrew Yang",
    description: "i18n"
  },
  {
    name: "Vabri Vilyakova",
    description: "Preview Preview Preview"
  },
  {
    name: "Forge Gu",
    description: "Build ReST APIs"
  }
];

var shareTodoList = [
  {
    name: "Galena Kalernyk",
    description: "Share Share"
  }
];

var taskListCtrl = function () {
  this.todoList = wrTodoList;

  this.setWrList = function () {
    this.todoList = wrTodoList;
  };

  this.setShareList = function () {
    this.todoList = shareTodoList;
  };
};

angular.module('app', [])
  .controller('taskListCtrl', taskListCtrl);
